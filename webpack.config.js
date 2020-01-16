const path = require('path');

module.exports = {
  mode: 'development',
  // entry: './index.js',
  // output: {
  //   filename: 'main.js',
  //   publicPath: path.resolve(__dirname, 'dist/')
  // },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          publicPath: 'dist',
        },
      },
    ],
  },
};