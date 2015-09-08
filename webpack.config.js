// jshint ignore:start
var path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: './dist/',
        filename: './scripts/index.js'
    },
    resolve: {
        root: [__dirname + '/src']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.scss/,
                loader: 'style!css!sass'
            },
        ]
    }
}
