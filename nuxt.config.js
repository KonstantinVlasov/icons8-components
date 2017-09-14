'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  srcDir: 'docs-src/',
  head: {
    title: 'Icons 8 Components',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'noodp' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' },
      { name: 'google-site-verification', content: 'some-code' },
      { name: 'description', hid: 'description', content: 'Pretty Icons 8 components for internal projects' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons8-favicon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons8-favicon.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons8-favicon.png' },
      { rel: 'icon', type: 'image/png', sizes: '194x194', href: '/icons8-favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sanchez' }
    ]
  },
  plugins: [
    '~plugins/highlight',
    '~plugins/components'
  ],
  performance: {
    gzip: true
  },
  cache: true,
  generate: {
    dir: 'docs'
  },
  build: {
    vendor: [
      'babel-polyfill'
    ],
    extend (config) {
      config.plugins = config.plugins || []
      config.plugins.push(new ExtractTextPlugin('styles.css'))

      config.module.rules.push({
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      })
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        exclude: /node_modules/
      })
      config.module.rules.push({
        test: /(.*node_modules)(.*svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'imgs/[name].[hash:7].[ext]'
        }
      })
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/
    }
  },
  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
    scrollBehavior: function () {
      return { x: 0, y: 0 }
    }
  },
  css: [
    {src: 'src/assets/css/public.scss', lang: 'scss'},
    {src: '@assets/css/public.scss', lang: 'scss'}
  ],
  loading: {
    color: '#238836',
    height: '5px'
  }
}
