// var path = require('path');
//
// var contextPath = path.resolve(__dirname, 'src');
// var buildPath = path.resolve(__dirname, 'public', 'build');
//
// module.exports = {
//     context: contextPath,
//     entry: {
//         javascript: './index.js',
//         html: './index.html'
//     },
//     output: {
//         path: buildPath,
//         filename: 'bundle.js',
//     },
//     module: {
//         loaders: [
//             {
//             test: /\.js$/,
//             exclude: /(node_modules)/,
//             loaders: ['babel-loader'],
//             }, {
//             test: /\.html$/,
//             loader: 'file?name=[name].[ext]',
//         },  {
//                 test: /\.scss$/,
//                 loaders: ['style', 'css', 'sass']
//             }],
//     }
// };

var path = require('path');
var webpack = require('webpack');

var javascriptEntryPath = path.resolve(__dirname, 'src', 'index.js');
var htmlEntryPath = path.resolve(__dirname, 'src', 'index.html');
var buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        javascriptEntryPath,
        htmlEntryPath
    ],
    output: {
        path: buildPath,
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel-loader'],
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]',
        }, {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}