const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const config = {
  output: {
    path: path.join(__dirname, '/dist/')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: __dirname,
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        extractCSS: true
      }
    }, {
      test: /\.svg$/,
      loader: 'svg-inline-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  externals: {
    axios: 'axios',
    vuex: 'vuex'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      mangle: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: 'icons8-components.css'
    })
  ]
}

module.exports = [
  merge(config, {
    entry: path.join(__dirname, '/icons8-components.js'),
    output: {
      filename: 'icons8-components.js',
      libraryTarget: 'umd',
      library: 'icons8-components',
      umdNamedDefine: true
    }
  })
]
