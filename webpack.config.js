const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPageNames = [
    'index',
    'result',
    'form',
    'form2',
    'confirm',
    'complete',
    'prize'
]

let webpackPlugins = [
    new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
    new CopyPlugin({
        patterns: [
            { from: 'src/images', to: 'images' }
        ]
    })
]

htmlPageNames.forEach(function (name, index) {
    webpackPlugins.push(
        new HtmlWebpackPlugin({
            template: `src/${name}.html`,
            filename: `${name}.html`,
            hash: true,
        })
    )
})

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'images/[name][ext][query]',
        clean: true,
    },
    plugins: webpackPlugins,
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
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'docs'),
        },
        port: 3000,
    }
}