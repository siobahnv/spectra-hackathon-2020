const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    allowedHosts: [
      'glitch.com',
      'glitch.me',
      'siobahnv-spectra-hackathon-2020.glitch.me'
    ]
  },
});