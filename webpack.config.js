var path = require('path');

module.exports = {
    mode: "development",
    entry: {
        index: './src/webapp/index.js',
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    devtool: "source-map",
    resolve: {
        alias: {
            'showdown': path.resolve(__dirname, 'node_modules/showdown/dist/showdown.min.js'),
        }
    }
}