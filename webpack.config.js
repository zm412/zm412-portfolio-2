
const path = require('path');
const webpack = require('webpack')
const MinifyPlugin = require('babel-minify-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//require('babel-polyfill');
require('@babel/polyfill');
require("babel-core/register");
const autoprefixer = require('autoprefixer');



module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: [
      '@babel/polyfill',
      '@/main.js', 
      '@/main.scss',
      'bootstrap/dist/css/bootstrap.min.css',
    ],
    bundle: ['jquery', 'popper.js', 'bootstrap'],
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },

  resolve: {
    alias: {
      '@mod': path.resolve(__dirname, 'node_modules'),
      '@': path.resolve(__dirname, 'src'),
      '@img': path.resolve(__dirname, 'src/img'),
      '@js': path.resolve(__dirname, 'src/js'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@scss': path.resolve(__dirname, 'src/scss'),
    }
  },

  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
          },
        }],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader', },
          { loader: MiniCssExtractPlugin.loader ,
            options: { reloadAll: true } },

          { loader: 'css-loader',
            options: { sourceMap: true }, },
          { loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [ autoprefixer, ],
            }, },
          { loader: 'sass-loader',
            options: { sourceMap: true }, },
        ],
      },
      { test: /\.(png|jpe?g|svg|ttf|eot|woff|woff2)$/,
        use: [
          { loader: 'file-loader',
            options: {
              name: '[name].[ext]', },
          },
          'img-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        devServer: true,
      },
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
//    new CopyWebpackPlugin(
//      { from: 'src/img', to: 'img' }
//    ),
//    new webpack.SourceMapDevToolPlugin({
//      filename: '[name].js.map',
//      exclude: ['bundle.js'],
//    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    //new webpack.HotModuleReplacementPlugin(),
//    new HtmlWebpackPlugin({
//      filename: './index.html',
//      template: './views/layouts/layout.hbs',
// }),
  ],
}
