const path = require('path');
const webpack = require('webpack');
const bourbon = require('node-bourbon').includePaths;
const neat = require('node-neat').includePaths;

module.exports = {
  sassLoader: {
    includePaths: [bourbon, neat]
  },
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:7777/__webpack_hmr',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
        {
          test: /\.js$/,
          loaders: ['babel?presets[]=es2015&presets[]=stage-0&plugins[]=transform-decorators-legacy'],
          include: [path.join(__dirname, 'src'), path.join(__dirname, 'lib')]
        },
        {
            test: /\.sass$/,
            include: [path.join(__dirname, 'src'), path.join(__dirname, 'lib')],
            loaders: ['style', 'css', 'sass']
        },
        {
            test: /\.scss$/,
            include: [path.join(__dirname, 'src'), path.join(__dirname, 'lib')],
            loaders: 'style-loader!css-loader!sass-loader'
        },
        {
            test: /\.jpe?g$|\.gif$|\.png|\.png$|\.eot|\.ico|\.svg|\.svg$|\.woff2|\.woff|\.woff|\.ttf|\.ttf/,
            loader: 'file-loader?name=[path][name].[ext]'
        }
    ]
  }
};
