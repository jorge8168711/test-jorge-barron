const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const config = {
    entry: './src/index.js',
    output: {
      path: path.resolve('build'),
      filename: '[name].[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          resolve: { extensions: ['.js', '.jsx'] },
          loader: 'babel-loader'
        },
        {
          test: /\.(scss|sass|css)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { hmr: env && env.development, module: true }
            },
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.ico$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                publicPath: '/img',
                outputPath: 'img'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ filename: 'index.html', template: 'src/index.html' }),
      new MiniCssExtractPlugin()
    ],
    devServer: {
      contentBase: path.join(__dirname, './build'),
      compress: true,
      port: 3000,
      hot: true
    },
    mode: 'production',
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  };

  if (env && env.development) {
    config.devtool = 'source-map';
    config.mode = 'development';
  }

  return config;
};
