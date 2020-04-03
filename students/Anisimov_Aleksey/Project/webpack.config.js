//require('dotenv').config()
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const isDevelopment = process.env.NODE_ENV === 'development'
//const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    output: {
        filename: 'js/main.js'
      },
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                  isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: isDevelopment
                    }
                  }
                ]
            },
            // {
            //     test: /\.css$/,
            //     use: [{
            //         loader: MiniCssExtractPlugin.loader,
            //         options: {
            //             publicPath: '../',
            //             hmr: process.env.NODE_ENV === 'development',
            //         },
            //     }, 'css-loader']
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isDevelopment ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: isDevelopment ? 'css/[id].css' : 'css/[id].[hash].css'
        }),
        // new MiniCssExtractPlugin({
        //     filename: 'css/[name].css',
        //     chunkFilename: '[id].css',
        //     ignoreOrder: false,
        // }),
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        }),
        // new CopyWebpackPlugin([
        //     {
        //         from: './src/public/img',
        //         to: './img'
        //     },
        //     {
        //         from: './src/public/goods.json',
        //         to: './goods.json',
        //         toType: 'file'
        //     },
        // ]),
    ]
}