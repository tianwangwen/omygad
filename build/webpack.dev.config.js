const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    bundle: [
      './client'
      // 'webpack-hot-middleware/client' // hot module reload
    ],

    // for third-party lib
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
    filename: '[name].js',
    chunkFilename: 'chunk.[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0', 'react-hmre'],
          plugins: ['transform-runtime', 'add-module-exports']
        }
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css?module&localIdentName=[name]__[local]__[hash:base64:8]', 'sass?module']
      }, {
        test: /\.html$/,
        loader: 'html?minimize=false'
      }, {
        test: /\.(jpg|png|gif|webp)$/,
        loader: 'url?limit=8000'
      }]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),

    // for common code
    new webpack.optimize.CommonsChunkPlugin({
      // manifest will record all the hash code for vendor
      // so that the hash code for vendor will not be changed
      names: ['vendor', 'manifest'],
      filename: '[name].js'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
    new HtmlWebpackPlugin({
      filename: '../views/dev/index.html',
      template: './views/template/index.html'
    }),
    new ProgressBarPlugin({ summary: true })
  ]
};
