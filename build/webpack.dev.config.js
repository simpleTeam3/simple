/**
	* 运行
**/

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
var FriendlyErrorsPlugin = require('Friendly-errors-webpack-plugin');


module.exports = merge(webpackBaseConfig, {
	//入口
	entry: {
		main: './examples/main',
		vendors: ['vue', 'vue-router']
	},
	//输出
	output: {
		path: path.join(__dirname, '../examples/dist'),
		publicPath: '',
		filename: '[name].js',
		chunkFilename: '[name].chunk.js'
	},
	// resolve: {
	// 	alias: {
	// 		simple: '../../src/index',
	// 		vue: 'vue/dist/vue.esm.js'
	// 	}
	// },
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({ name: 'simple', filename: 'simple.min.js'}),
		new HtmlWebpackPlugin({
			inject: true,
			filename: path.join(__dirname, '../examples/dist/index.html'),
			template: path.join(__dirname, '../examples/index.html')
		}),
		new FriendlyErrorsPlugin()
	]
})