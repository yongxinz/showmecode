const packageJSON = require('./package.json');
const webpack = require('webpack');
const mode = process.env.NODE_ENV;
const path = require('path');

const webpackConfig = {
  output: {
    filename: '[name].[hash:8].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(packageJSON.version),
      __DEV__: mode === 'development'
    }),
    new webpack.ProvidePlugin({
      ErrorCodeManager: ['@/error-definition', 'ErrorCodeManager'],
      ErrorCodes: ['@/error-definition', 'ErrorCodeManager', 'errorCodes'],
      ErrorAssert: ['@/error-definition', 'ErrorAssert'],
      BusinessError: ['@/error-definition', 'BusinessError'],
      DataProtocolError: ['@/error-definition', 'DataProtocolError'],
      NetworkError: ['@/error-definition', 'NetworkError']
    })
  ],
  devServer: {
    https: false,
    port: 8080,
    host: '127.0.0.1',
    proxy: {
      '/': {
        changeOrigin: true,
        target: 'http://127.0.0.1:8810'
      }
    }
  }
};

const config = {
  publicPath: '/',
  productionSourceMap: false,
  configureWebpack: webpackConfig,
  chainWebpack: config => {
    config.module
      .rule('vue');
  }
};

module.exports = config;
