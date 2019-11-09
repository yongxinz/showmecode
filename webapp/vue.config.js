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
      ErrorCodeManager: ['@bfe/error-definition', 'ErrorCodeManager'],
      ErrorCodes: ['@bfe/error-definition', 'ErrorCodeManager', 'errorCodes'],
      ErrorAssert: ['@bfe/error-definition', 'ErrorAssert'],
      BusinessError: ['@bfe/error-definition', 'BusinessError'],
      DataProtocolError: ['@bfe/error-definition', 'DataProtocolError'],
      NetworkError: ['@bfe/error-definition', 'NetworkError']
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
      // .use(path.resolve(__dirname, 'loader.js'))
      // .loader(path.resolve(__dirname, 'loader.js'));
  }
};

module.exports = config;
