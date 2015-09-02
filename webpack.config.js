// jshint ignore:start
var path = require('path');

module.exports = {
    entry: './src/scripts/index.jsx',
    output: {
        path: './dist/',
        filename: './scripts/index.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }
}
