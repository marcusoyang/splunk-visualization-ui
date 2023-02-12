const path = require('path');
const webpackMerge = require('webpack-merge');
const baseComponentConfig = require('@splunk/webpack-configs/component.config').default;

module.exports = webpackMerge(baseComponentConfig, {
    entry: {
        TotalMarketCap: path.join(__dirname, 'src/TotalMarketCap.jsx'),
    },
    output: {
        path: path.join(__dirname),
    },
});
