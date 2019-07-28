const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ 
          {
            // Extracts the css, supports hot module reloading via hmr
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          // loads css normally
          { loader: 'css-loader', options: { importLoaders: 1 } },
          // loads css via postcss
          'postcss-loader'
        ],
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     {
      //     loader: 'file-loader',
      //       options: { outputPath: 'images' }
      //     },
      //   ],
      // },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // cleans out the dist/ directory
    new CleanWebpackPlugin(),

    // generates a new HTML file @ dist/index.html
    new HtmlWebpackPlugin({
      'meta': { 
        'viewport': 'width=width-device, initial-scale=1'
      },
      title: "Konnor's portfolio",
      template: './src/index.html'
    }),
    // Extracts the css
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),
  ],
  
  // Used for webpack-dev-server
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    watchContentBase: true
  }
}
