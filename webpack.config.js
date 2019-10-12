const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Used for webpack-dev-server
  devServer: {
    open: true,
    compress: true,
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
  },
};
