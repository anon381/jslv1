const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  webpack: (config) => {
    config.plugins.push(new MiniCssExtractPlugin());
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
