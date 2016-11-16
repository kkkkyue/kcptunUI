var path=require('path');
var webpack=require('webpack');
var CopyWebpackPlugin=require('copy-webpack-plugin');
var APP_PATH=path.resolve(__dirname,'app');
var SRC_PATH=path.resolve(__dirname,'src');
var BOWER_PATH=path.resolve(__dirname,'bower_components');
module.exports={
    cache: true,
    target: 'electron',
    devtool: 'source-map',
    entry: {
        ui: './src/ui/ui'
    },
    output: {
        path: APP_PATH,
        filename: '[name].js',
        chunkFilename: '[ chunkhash].js',
        sourceMapFilename: '[name].map'
    },
    module: {
        loaders: [
            {
                test: /\.js|\.jsx?$/,
                loader: 'babel-loader',
                include: [
                    SRC_PATH
                ],
                query: {
                    presets: [
                        'es2015',
                        'react'
                    ],
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(), //new webpack.optimize.UglifyJsPlugin({comments: false}),         
        new webpack.EnvironmentPlugin(["NODE_ENV"]),         
        new CopyWebpackPlugin([
            {from:path.resolve(BOWER_PATH,'jquery/dist/jquery.min.js'),to:'js/jquery.min.js'},
            {from:path.resolve(BOWER_PATH,'amazeui/dist/js/amazeui.js'),to:'js/amazeui.min.js'},
            {from:path.resolve(BOWER_PATH,'amazeui/dist/css/amazeui.min.css'),to:'css/amazeui.min.css'},
            {from:path.resolve(BOWER_PATH,'amazeui/dist/fonts/'),to:'fonts/'},          
            { from: path.resolve(SRC_PATH, 'main.js'), to: 'main.js' },
            { from: path.resolve(SRC_PATH, 'js/kcp.js'), to: 'js/kcp.js' },
            { from: path.resolve(SRC_PATH, 'ui/index.html'), to: 'index.html' }         
            ])
    ] 
};
        