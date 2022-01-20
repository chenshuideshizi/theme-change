const { VueLoaderPlugin } = require('vue-loader')

module.exprts = {
    entry: {
        app: 'src/main.js'
    },
    output: {
        
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.jp(e)?g|\.png|\.gif/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extension: ['.js', '.vue', '.json']
    }
}