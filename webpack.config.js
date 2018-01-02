require('webpack')
require('weex-loader')

var path = require('path')

module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'Index.vue?entry=true')
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.vue(\?[^?]+)?$/,
        loaders: ['weex-loader']
      }
    ]
  }
}
