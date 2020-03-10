const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		valid: './src/js/validate.js',
		modal: './src/js/modal.js',
		styles: './src/styles/style.scss'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					use: [{
						loader: "css-loader"
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
					]
				})
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]'
						}
					},
				],
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html'
		}),
		new ExtractTextPlugin('style.css'),
		new CopyWebpackPlugin([
            {from:'src/images',to:'images'}
        ]),
	]
}