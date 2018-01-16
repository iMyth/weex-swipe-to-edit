const pathTo = require('path')
const webpack = require('webpack')
// Manually import UglifyJSPlugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
let fileType = ''
/**
 * Plugins for webpack configuration.
 */
const plugins = [
  /*
   * Plugin: UglifyJsPlugin
   * Description: UglifyJS plugin for webpack
   * See: https://github.com/webpack-contrib/uglifyjs-webpack-plugin
   */
  // new webpack.optimize.UglifyJsPlugin({
  //   minimize: true,
  //   compress: {
  //     warnings: false,
  //     drop_console: false
  //   },
  //   sourceMap: false
  // }),
  new UglifyJSPlugin({
    uglifyOptions: {
      minimize: true,
      ecma: 6,
      compress: {
        warnings: false,
        drop_console: false
      },
      sourceMap: false
    }
  }),
  /*
   * Plugin: BannerPlugin
   * Description: Adds a banner to the top of each generated chunk.
   * See: https://webpack.js.org/plugins/banner-plugin/
   */
  new webpack.BannerPlugin({
    banner: '// { "framework": ' + (fileType === '.vue' ? '"Vue"' : '"Weex"') + '} \n',
    raw: true,
    exclude: 'Vue'
  })
]
function resolve (dir) {
  return pathTo.join(__dirname, '..', dir)
}
// Config for compile jsbundle for web.
const webConfig = {
  context: pathTo.join(__dirname, ''),
  // entry: entry,
  entry: {
    'index': pathTo.resolve('src', 'entry.js')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  output: {
    path: pathTo.join(__dirname, 'dist'),
    filename: '[name].web.js'
  },
  /**
   * Developer tool to enhance debugging
   *
   * See: http://webpack.github.io/docs/configuration.html#devtool
   * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
   */
  devtool: false, // 'source-map',
  /*
   * Options affecting the resolving of modules.
   *
   * See: http://webpack.github.io/docs/configuration.html#module
   */
  module: {
    // webpack 2.0
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader'
      }],
      exclude: /node_modules(?!(\/|\\).*(weex).*)/
    }, {
      test: /\.vue(\?[^?]+)?$/,
      use: [{
        loader: 'vue-loader',
        options: {
          optimizeSSR: false,
          postcss: [
            // to convert weex exclusive styles.
            require('postcss-plugin-weex')(),
            require('autoprefixer')({
              browsers: ['> 0.1%', 'ios >= 8', 'not ie < 12']
            }),
            require('postcss-plugin-px2rem')({
              // base on 750px standard.
              rootValue: 75,
              // to leave 1px alone.
              minPixelValue: 1.01
            })
          ],
          compilerModules: [
            {
              postTransformNode: el => {
                // to convert vnode for weex components.
                require('weex-vue-precompiler')()(el)
              }
            }
          ]
        }
      }]
    }, {
      test: /\.(png|jpe?g|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 1024000,
        name: pathTo.posix.join('assets', 'img/[name].[ext]')
      }
    }]
  },
  /*
   * Add additional plugins to the compiler.
   *
   * See: http://webpack.github.io/docs/configuration.html#plugins
   */
  plugins: plugins
}
// Config for compile jsbundle for native.
const weexConfig = {
  // entry: weexEntry,
  entry: {
    'index': pathTo.resolve('src', 'entry.js')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  output: {
    path: pathTo.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  /*
   * Options affecting the resolving of modules.
   *
   * See: http://webpack.github.io/docs/configuration.html#module
   */
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader'
      }],
      exclude: /node_modules(?!(\/|\\).*(weex).*)/
    }, {
      test: /\.vue(\?[^?]+)?$/,
      use: [{
        loader: 'weex-loader'
      }]
    }, {
      test: /\.we(\?[^?]+)?$/,
      use: [{
        loader: 'weex-loader'
      }]
    }, {
      test: /\.(png|jpe?g|svg)(\?.*)?$/,
      loader: 'url-loader'
    }]
  },
  /*
   * These options configure whether to polyfill or mock certain Node.js globals and modules.
   * This allows code originally written for the Node.js environment to run in other environments like the browser.
   *
   * See: https://webpack.js.org/configuration/node/#node
   */
  node: {
    setImmediate: false
    // See "Other node core libraries" for additional options.
  },
  /*
   * Add additional plugins to the compiler.
   *
   * See: http://webpack.github.io/docs/configuration.html#plugins
   */
  plugins: plugins
}
// If The fileType is '.we', only need to use weexConfig for building.
if (fileType === '.we') {
  module.exports = weexConfig
} else {
  module.exports = [webConfig, weexConfig]
}
