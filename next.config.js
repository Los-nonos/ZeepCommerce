const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/../../.env' });
const webpack = require('webpack');

const webpackCfg = {
  commonCfg: require('./webpack.config'),
};

function appendWebpackCfg(configObj, webpackConfig) {
  let index;
  if (configObj.rules) {
    for (index = 0; index < configObj.rules.length; index++) {
      webpackConfig.module.rules.push(configObj.rules[index]);
    }
  }
  if (configObj.plugins) {
    for (index = 0; index < configObj.plugins.length; index++) {
      webpackConfig.plugins.push(configObj.plugins[index]);
    }
  }
  webpackConfig.node = {
    fs: 'empty',
  };
}

module.exports = {
  distDir: 'build',
  pageExtensions: ['ts', 'tsx'],
  webpack(config) {
    appendWebpackCfg(webpackCfg.commonCfg, config);
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
};