/**
 *基础配置
*/

var path = require('path');
function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: 'vue-style-loader!css-loader',
						less: 'vue-style-loader!css-loader!less-loader'
					},
					postLoaders: {
						html: 'babel-loader'
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader', exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					'autoprefixer-loader'
				]
			},
			{ test: /\.(gif|jpg|png|woff|svg|eot|ttf)\?.*$/, loader: 'url-loader?limit=8192'},
			{ test: /\.(html|tpl)$/, loader: 'html-loader'}
		]
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'vue': 'vue/dist/vue.esm.js',
			'@': resolve('src')
		}
	}
}