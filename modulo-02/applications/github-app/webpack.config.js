'use strict'

const path = require('path')
const validate = require('webpack-validator')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = validate({
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src', 'index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
    // new DashBoardPlugin(),
    new HtmlPlugin({
      title: 'Github App',
      template: path.join(__dirname, 'src', 'html', 'template-dev.html')
    })
  ],
  module: {
    // preLoaders: [{
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     include: /src/,
    //     loader: 'standard'
    // }],
    loader: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loaders: ['style', 'css?modules']
    }
    ]
  },
  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src', 'components')
    }
  }
})
