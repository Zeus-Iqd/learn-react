



let webpack = require('webpack');
let path = require('path')
module.exports = {
	entry: './src/js/index.js',
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
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[path][name]__[local]--[hash:base64:5]'
						}
					}
				]
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