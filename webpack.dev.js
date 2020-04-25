const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path') 
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
entry: './src/client/index.js',
output: {
  libraryTarget: 'var',
  library: 'Client'
},
devServer: {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 8000,
  writeToDisk: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
},
module: {
  rules: [
    {
      test: '/\.js$/',
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
      ],
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  ]
},
plugins: [
  new HtmlWebpackPlugin({
    template: "./src/client/views/index.html",
    filename: "./index.html",
  }),
  new CleanWebpackPlugin({
    // Simulate the removal of files
    dry: true,
    // Write Logs to Console
    verbose: false,
    // Automatically remove all unused webpack assets on rebuild
    cleanStaleWebpackAssets: true,
    protectWebpackAssets: false
})
]
}
