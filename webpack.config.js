const { resolve, join } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const sourcePath = './src';
const publicPath = './public';

// const copyImagesConfig = [
//   {
//     from: `${sourcePath}/components/**/*.jpg`,
//   },
// ].map((file) => {
//   return {
//     ...file,
//     to: `${publicPath}/`,
//     force: true,
//   };
// });

module.exports = {
  devtool: 'source-map',
  entry: `${sourcePath}/index.tsx`,
  output: {
    path: join(__dirname, '/dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: copyImagesConfig,
    // }),
    new HtmlWebPackPlugin({
      hash: true,
      filename: 'index.html',
      template: `${sourcePath}/index.html`,
    }),
    new ExtractTextPlugin({ filename: 'css/style.css' }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': resolve(__dirname, `${sourcePath}/components/`),
      '@pages': resolve(__dirname, `${sourcePath}/pages/`),
      '@styles': resolve(__dirname, `${sourcePath}/styles/`),
      '@services': resolve(__dirname, `${sourcePath}/services/`),
      '@store': resolve(__dirname, `${sourcePath}/store/`),
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
      }),
    ],
  },
};
