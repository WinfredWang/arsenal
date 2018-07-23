var path = require('path');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    devtool:"source-map",
    resolve: {
        alias: {
            'showdown': path.resolve(__dirname, 'node_modules/showdown/dist/showdown.min.js'),
        }
    }
}