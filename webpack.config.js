var path = require('path')
var webpack = require('webpack')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var bannerPlugin = new webpack.BannerPlugin({
  banner: '// { "framework": "Vue" }\n',
  raw: true
})

function getBaseConfig () {
  return {
    entry: {
      'index': path.resolve('src', 'entry.js')
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        'util': path.resolve(__dirname, './src/api/util'),
        'strings': path.resolve(__dirname, './src/i18n'),
        'config': path.resolve(__dirname, './src/config.js'),
        'service': path.resolve(__dirname, './src/api/service.js'),
        'components': path.resolve(__dirname, './src/components')
      }
    },
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }, {
          test: /\.vue(\?[^?]+)?$/
        }
      ]
    },
    plugins: [
      // new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
      bannerPlugin
    ]
  }
}

var webConfig = getBaseConfig()
webConfig.output.filename = '[name].web.js'
webConfig.module.rules[1].loader = 'vue-loader'
/**
 * important! should use postTransformNode to add $processStyle for
 * inline style normalization.
 */
webConfig.module.rules[1].options = {
  compilerModules: [
    {
      postTransformNode: el => {
        el.staticStyle = `$processStyle(${el.staticStyle})`
        el.styleBinding = `$processStyle(${el.styleBinding})`
      }
    }
  ]
}

var nativeConfig = getBaseConfig()
nativeConfig.output.filename = '[name].weex.js'
nativeConfig.module.rules[1].loader = 'weex-loader'

module.exports = [webConfig, nativeConfig]
