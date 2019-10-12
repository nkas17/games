const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const LodashPlugin = require('lodash-webpack-plugin');

// const extractCSS = new ExtractTextPlugin('styles.css');

module.exports = {
	mode: 'production',
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
	},
	entry: ['./index.jsx'],
	context: resolve(__dirname, 'src'),
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				include: /src/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'], //
				// use: extractCSS.extract(['css-loader']), // , 'postcss-loader']),
			},
			{
				test: /\.(jpe?g|png|gif|ico|webp)$/i,
				loader: 'file-loader?name=[name].[ext]',
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff',
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
			},
		],
	},
	plugins: [
		new CopyWebpackPlugin([{ from: 'index.html' }, { from: 'assets' }]),
		// extractCSS,
		// new BundleAnalyzerPlugin(),
		// new LodashPlugin({
		// 	shorthands: true,
		// }),
	],
};
