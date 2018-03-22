const webpack = require("webpack");
var path = require('path');
module.exports = {
  target: 'electron-renderer',
  entry: {
    app: "./src/index",
    vendor: ['jquery']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "less-loader" // compiles Less to CSS
      }]
    },{
      test: /\.art$/,
      use: [
        {
          loader: "art-template-loader"
        }
      ],
    },{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: 'jquery'
    }
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    publicPath: process.env.NODE_ENV === 'production' ? './dist/' : '/dist/',
    filename: "[name].js"
  }
};