const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')

const config = {
  output: {
    path: path.join(__dirname, '/dist/')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  externals: {
    moment: 'moment'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      mangle: true,
      compress: {
        warnings: false
      }
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
];