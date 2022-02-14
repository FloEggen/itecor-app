const path = require('path')
const webpack = require('webpack')

module.exports = {
  resolve: {
    fallback: {
      "fs": false,
      "path": false
    },
  },
  entry: './frontend-js/main-users.js',
  output: {
    filename: 'users-bundled.js',
    path: path.resolve(__dirname, 'public')
  },
  /* entry: './frontend-js/main.js',
   output: {
     filename: 'main-bundled.js',
     path: path.resolve(__dirname, 'public')
   },
   */
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}