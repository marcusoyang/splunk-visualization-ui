const path = require('path');
const webpackMerge = require('webpack-merge');
const baseComponentConfig = require('@splunk/webpack-configs/component.config').default;

module.exports = webpackMerge(baseComponentConfig, {
    entry: {
        MarketCapNode: path.join(__dirname, 'src/MarketCapNode.jsx'),
    },
    output: {
        path: path.join(__dirname),
    },
});
