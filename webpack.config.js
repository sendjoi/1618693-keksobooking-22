const path = require('path');

module.exports = {
  entry: './source/js/main.js',
  devtool: 'source-map',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'source/js'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
  }
};
