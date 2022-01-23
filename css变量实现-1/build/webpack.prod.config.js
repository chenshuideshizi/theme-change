const { merge } = require('webpack-merge')
const { resolve } = require('./utils')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig,{
  mode: 'development',
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    path: resolve('./dist'),
    publicPath: '/',
    chunkFilename: 'static/js/[name].[contenthash:8].js',
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true
  },
  plugins: [
  ]
})


