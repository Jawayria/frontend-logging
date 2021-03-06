'use strict';

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    nodeEnv: false,
  },
  node: {
    process: false,
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'frontend-logging',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          { loader: 'babel-loader' },
          { loader: 'source-map-loader' },
        ],
      },
    ],
  },
};
