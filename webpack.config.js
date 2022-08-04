const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'images/[name][ext][query]',
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/images', to: 'images' }
            ]
        }),
        new HtmlWebpackPlugin({
            title: 'Index Title',
            hash: true,
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Result Title',
            hash: true,
            filename: 'result.html',
            template: './src/result.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Form Title',
            hash: true,
            filename: 'form.html',
            template: './src/form.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Confirm Title',
            hash: true,
            filename: 'confirm.html',
            template: './src/confirm.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Complete Title',
            hash: true,
            filename: 'complete.html',
            template: './src/complete.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    },
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    }
}