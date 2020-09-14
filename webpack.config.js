const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  context: path.resolve(__dirname, 'src'),
  entry: [ './main.js', './main.scss'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
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
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader ,
            options: {
              reloadAll: true
            }
          },
          
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
         name: '[name].[ext]',
         outputPath: 'img'
        }
      }
   ]
  },
  plugins:[
    new MinifyPlugin({}, {
      comments: false
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}
