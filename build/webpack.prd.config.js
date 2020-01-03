const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');

// when we compile node code, the code under node_modules is not necessary
function getExternals() {
  return fs.readdirSync(path.resolve(__dirname, '../node_modules'))
    .filter(filename => !filename.includes('.bin'))
    .reduce((externals, filename) => {
      externals[filename] = `commonjs ${filename}`;
      return externals;
    }, {});
}

// for the static client part, all these could be uploaded into CDN
const clientConfig = {
  context: path.resolve(__dirname, '..'),
  entry: {
    bundle: './client',
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux-saga',
      'reselect',
      'superagent'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: 'chunk.[name].[chunkhash:8].js',
    publicPath: '/'   // TODO repleace it with your cdn address, like: 'http://cdn.com/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0']
        // plugins: ['transform-runtime', 'add-module-exports']
      }
    }, {
      test: /\.css$/,
      // ExtractTextPlugin will extract css code from bundle into a sepreate file
      loader: ExtractTextPlugin.extract('style', 'css?modules&camelCase&importLoaders=1&localIdentName=[hash:base64:8]!postcss!sass')
    }, {
      test: /\.scss$/,
      // ExtractTextPlugin will extract css code from bundle into a sepreate file
      loader: ExtractTextPlugin.extract('style', 'css?modules&camelCase&importLoaders=1&localIdentName=[hash:base64:8]!postcss!sass')
    }, {
      test: /\.(jpg|png|gif|webp)$/,
      loader: 'url?limit=8000'
    }, {
      test: /\.html$/,
      loader: 'html?minimize=false'
    }]
  },
  // autoprefixer will add browsers' prefix before css class automatically
  postcss: [],
  resolve: { extensions: ['', '.js', '.json', '.scss'] },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor', 'manifest'],
    //   filename: '[name].[chunkhash:8].js'
    // }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
    new HtmlWebpackPlugin({
      filename: '../../views/prd/index.html',
      template: './views/template/index.html',
      chunksSortMode: 'none'
    }),
    new ExtractTextPlugin('[name].[contenthash:8].css', { allChunks: true })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          minChunks: 2
        }
      }
    }
  }
};

// for node code part
const serverConfig = {
  context: path.resolve(__dirname, '..'),
  entry: {
    server: './server/server.prd'
  },
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: '[name].js',
    chunkFilename: 'chunk.[name].js'
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    // since react code need to be rendered from server side,
    // we still need to add the loaders for the react part
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['add-module-exports']
      }
    }, {
      test: /\.scss$/,
      loaders: [
        'css/locals?modules&camelCase&importLoaders=1&localIdentName=[hash:base64:8]',
        'sass'
      ]
    }, {
      test: /\.(jpg|png|gif|webp)$/,
      loader: 'url?limit=8000'
    }]
  },
  externals: getExternals(), // exclude the /node_modules
  resolve: { extensions: ['', '.js', '.json', '.scss'] },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) })
  ]
};

module.exports = [clientConfig, serverConfig];
