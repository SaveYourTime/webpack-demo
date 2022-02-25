const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devMode = process.env.NODE_ENV !== 'production';

module.exports = (env) => ({
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'source', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: (pathData) => {
      return pathData.chunk.name === 'index' ? 'build.js' : '[name].chunk.js';
    },
    chunkFilename: '[name].chunk.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'source', 'index.html'),
    }),
    ...(devMode ? [] : [new MiniCssExtractPlugin()]),
    ...(env.analyze ? [new BundleAnalyzerPlugin()] : []),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
});
