



let webpack = require('webpack');
let path = require('path')
module.exports = {
	entry: './src/js/root.js',
	output: {
		path: __dirname,
		filename: 'dist/boundle.js',
		chunkFilename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /(node_modules)/
			},
			{
				test: /\.css$/,
				// use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]__[local]--[hash:base64:5]']
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		// contentBase: __dirname + '/dist/',
		// inline: false,
		// hot: true
		open: true
	}
}