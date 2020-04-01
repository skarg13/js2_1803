let miniCssExtractPlugin = require('mini-css-extract-plugin');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: miniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                        hmr: process.env.NODE_ENV === 'development',
                    },
                }, 'css-loader']
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new htmlWebpackPlugin({
            template: './src/public/index.html'
        }),
    ]
}