const path = require('path');

module.exports = {
  entry: './dist/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve('./build'),
    filename: 'api.js',
  },
  target: 'node',
  node: {
    __dirname: false,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
