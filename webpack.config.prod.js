const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bourbon = require('node-bourbon').includePaths;
const neat = require('node-neat').includePaths;

module.exports = {
  sassLoader: {
    includePaths: [bourbon, neat]
  },
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[chunkhash].js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new HtmlWebpackPlugin({
      title: 'Learn React',
      inject: 'body',
      template: 'src/index.html'
    })
  ],
  module: {
    loaders: [
        {
          test: /\.js$/,
          loaders: ['babel?presets[]=stage-0'],
          include: [path.join(__dirname, 'src'), path.join(__dirname, 'lib')],
          query: {
            /*
            presets: ['es2015'],
            All of the plugins of babel-preset-es2015,
            excluding babel-plugin-transform-es2015-modules-commonjs
            */
            plugins: [
                'transform-es2015-template-literals',
                'transform-es2015-literals',
                'transform-es2015-function-name',
                'transform-es2015-arrow-functions',
                'transform-es2015-block-scoped-functions',
                'transform-es2015-classes',
                'transform-es2015-object-super',
                'transform-es2015-shorthand-properties',
                'transform-es2015-computed-properties',
                'transform-es2015-for-of',
                'transform-es2015-sticky-regex',
                'transform-es2015-unicode-regex',
                'check-es2015-constants',
                'transform-es2015-spread',
                'transform-es2015-parameters',
                'transform-es2015-destructuring',
                'transform-es2015-block-scoping',
                'transform-es2015-typeof-symbol',
                'transform-decorators-legacy',
                ['transform-regenerator', { async: false, asyncGenerators: false }],
            ],
          }
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },
        {
            test: /\.sass$/,
            include: [path.join(__dirname, 'src'), path.join(__dirname, 'lib')],
            loaders: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        },
        {
            test: /\.scss$/,
            include: [path.join(__dirname, 'src'), path.join(__dirname, 'lib')],
            loaders: ExtractTextPlugin.extract('style-loader!css-loader!sass-loader')
        },
        {
          test: /\.jpe?g$|\.gif$|\.png|\.png$|\.eot|\.ico|\.svg|\.svg$|\.woff2|\.woff|\.woff|\.ttf|\.ttf/,
          loader: 'file-loader?name=images/[name].[ext]'
        }
    ]
  }
};
