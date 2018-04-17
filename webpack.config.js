const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const plugins = [
  new webpack.optimize.ModuleConcatenationPlugin(),
];

module.exports = (env) => {
  if (env === 'production') {
    plugins.push(new UglifyJsPlugin());
    plugins.push(new MinifyPlugin());
  }

  return {
    entry: [
      './src/InvisibleRecaptcha.js'
    ],
    output: {
      filename: 'recaptcha.js',
      path: path.resolve(__dirname, './dist/lib'),
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, '../'),
        ],
      }],
    },
    plugins,
  };
};
