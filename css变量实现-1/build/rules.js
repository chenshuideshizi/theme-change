const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require('./utils')
module.exports = [
    {
      test: /\.vue$/,
      use: [
        {
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: true
            },
            cacheDirectory: resolve('./node_modules/.cache/vue-loader')
          }
        }
      ]
    },
    { // js 文件
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        {
          loader: "thread-loader",
          options: {
            workers: 2
          }
        }
      ]
    },
    { // 加载图片
      test: /\.(png|svg|jpg|jpeg|gif)(\?.*)?$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/images/[name].[hash][ext][query]'
      }
    },
    { // 加载 css
      test: /\.css$/,
      oneOf: [
        {
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
          ]
        }
      ]
    },
    { // 加载 css
      test: /\.s[ac]ss$/,
      oneOf: [
        {
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },

    { // 加载字体
      test: /\.(woff|woff2|eot|ttf|otf)(\?.*)?$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name].[hash][ext][query]'
      }
    }
  ]