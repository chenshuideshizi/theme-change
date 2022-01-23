const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { resolve } = require('./utils')
const webpack = require('webpack');
const rules = require('./rules')

module.exports = {
  cache: {
    type: "filesystem", // 使用文件系统缓存
  },
  context: resolve('./'), // 基础目录，绝对路径，用于从配置中解析入口点(entry point)和 加载器(loader)。
  entry: {
    app: './src/main.js'
  },
  resolve: {
    symlinks: false,
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve('./src')
    },
    modules: [
      resolve('./node_modules'),
      'node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex)$/,
    rules: rules
  },
  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].css',
        ignoreOrder: true
      }
    ),
    new webpack.DefinePlugin({
      BASE_URL: ''
    }),
    new NodePolyfillPlugin(),  // Polyfill Node.js core modules in Webpack. This module is only needed for webpack 5+.
    new VueLoaderPlugin(),
    new CaseSensitivePathsPlugin(), // 强制所有所需模块的整个路径与磁盘上的实际路径完全匹配
    new HtmlWebpackPlugin({ // 在生产环境会启用压缩
      template: resolve('./public/index.html'),
      inject: 'body'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve('./public'),
          to: resolve('./dist'),
          toType: 'dir',
          globOptions: {
            ignore: [
              '.DS_Store',
              '**/index.html'
            ]
          }
        }
      ]
    })
  ],
  optimization: {

  }
}
