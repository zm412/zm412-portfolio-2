const path = require('path');
const webpack = require('webpack')
const MinifyPlugin = require('babel-minify-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('babel-polyfill');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  context: path.resolve(__dirname, 'src'),
  entry: ['bootstrap/dist/css/bootstrap.min.css', 'babel-polyfill', './main.js', './main.scss'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@mod': path.resolve(__dirname, 'node_modules'),
      '@': path.resolve(__dirname, 'src'),
      '@img': path.resolve(__dirname, 'src/img'),
      '@js': path.resolve(__dirname, 'src/js'),
      '@scss': path.resolve(__dirname, 'src/scss'),
    }
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader:{
          loader:'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
        {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader', },
          { loader: MiniCssExtractPlugin.loader ,
            options: {
              reloadAll: true
            } },

          { loader: 'css-loader',
            options: { sourceMap: true }, },

          { loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                autoprefixer, ], }, },

          { loader: 'sass-loader',
            options: { sourceMap: true }, },
        ]
      },
      {
        test: /\.(png|jpe?g|svg|ttf|eot|woff|woff2)$/,
        use: [
          { loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img' }, },
          'img-loader', ], },
   ]
  },
  plugins:[
//    new MinifyPlugin({}, {
//      comments: false
//    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new CopyWebpackPlugin([
      { from: 'src/img', to: 'img' },
    ]),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
      new webpack.HotModuleReplacementPlugin(),

  ]

}
