const { merge } = require('webpack-merge')
const baseConf = require('./base.conf')

module.exprts = merge(baseConf, {
    devServer: {
        hot: true,
        open: false,
        port: 9099
    }
})