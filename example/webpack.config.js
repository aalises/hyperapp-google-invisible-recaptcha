const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const plugins = [
  new ExtractTextPlugin({
    filename: './bundle.css',
    allChunks: true,
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
];

module.exports = (env) => {
  if (env === 'production') {
    plugins.push(new UglifyJsPlugin());
    plugins.push(new MinifyPlugin());
  }

  return {
    entry: [
      './example/index.js',
      './example/styles/app.css',
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist/example'),
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, '../'),
        ],
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      }],
    },
    plugins,
    devServer: {
      publicPath: '/',
      contentBase: './dist/example',
      open: true,
    },
  };
};
