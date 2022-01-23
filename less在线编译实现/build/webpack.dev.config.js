const { merge } = require('webpack-merge')
const { resolve } = require('./utils')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
      port: 9091,
      open: false,
      compress: true,
      static: {
        publicPath: resolve('./dist'),
        directory: resolve('./dist')
      },
      hot: true,
      proxy: {
        '/api': {
          target: '',
          changeOrigin: true,
          secure: false
        }
      }
  },
  plugins: [

  ],
  devtool: 'source-map'
})
