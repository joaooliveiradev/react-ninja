'use strict';

const path = require('path');
const validate = require('webpack-validator');
const webpack = require('webpack');

module.exports = validate ({
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index.js'),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'standard'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'babel'
            }
        ]
    }
})

