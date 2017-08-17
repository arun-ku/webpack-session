const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = {
    // entry: './src/index.js',
  entry: {
      index: './src/index.js',
      vendor: [
          'react',
          'react-dom'
      ]
  },
    output: {
        path: path.resolve(__dirname, './src/dist'),
        filename: '[name].js',
        publicPath: '/',
        chunkFilename: "dist[id].js",
        // filename: '[name].[hash].js'
    },
    module: {
      rules: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
          },
          {
              test: /\.css$/,
              // use: [ 'style-loader', 'css-loader' ],
              use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
              }),
          },

          {
              test: /\.scss$/,
              use: [{
                  loader: "style-loader" // creates style nodes from JS strings
              }, {
                  loader: "css-loader", // translates CSS into CommonJS
                  /*options: {
                   modules: true,
                   localIdentName: '[path][name]__[local]--[hash:base64:5]',
                   camelCase: true,
                   minimize: true,
                   }*/
              }, {
                  loader: "sass-loader" // compiles Sass to CSS
              } ]
          },
      ]
    },
    devServer: {
      port: 9000,
      historyApiFallback: true,
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        // new OfflinePlugin({
        //     safeToUseOptionalCaches: true,
        //
        //     caches: {
        //         main: [
        //             '*.js',
        //             '*.css',
        //             '*.html'
        //         ],
        //         additional: [
        //             '*.woff',
        //             '*.woff2'
        //         ],
        //         optional: [
        //             ':rest:'
        //         ]
        //     },
        //
        //     ServiceWorker: {
        //         events: true
        //     },
        //     AppCache: {
        //         events: true
        //     }
        // })
    ]
};