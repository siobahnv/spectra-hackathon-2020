var webpack = require('webpack');
var path = require('path');
// var BUILD_DIR = path.resolve(__dirname, 'src/frontend/public');
// var BUILD_DIR = path.resolve(__dirname, 'public');
var BUILD_DIR = path.resolve(__dirname, 'build');
// var APP_DIR = path.resolve(__dirname, 'src/frontend/app');
var APP_DIR = path.resolve(__dirname, 'src');
var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
module.exports = config;
