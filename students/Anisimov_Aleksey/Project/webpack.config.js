//require('dotenv').config()
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
//const isDevelopment = process.env.NODE_ENV === 'development'
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
              test: /\.vue$/,
              exclude: /node_modules/,
              loader: 'vue-loader'
            }
        ]
    },
    resolve: {
          extensions: ['.js', '.vue']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
      open: true,
      hot: true,
      port: 3000
  }
}