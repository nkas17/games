/**
 * Webpack settings
 *
 * @see - https://webpack.js.org/guides/hmr-react/#webpack-config
 */
const { resolve, join } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	resolve: {
		modules: [
			join(__dirname, 'src'),
			'node_modules',
		],
		extensions: ['.js', '.jsx', '.json', '.css'],
	},
	entry: [
        // the entry point of our app
		'index.jsx',
	],
	output: {
        // the output bundle
		filename: 'bundle.js',

		path: resolve(__dirname, 'dist'),
	},

	context: resolve(__dirname, 'src'),

	devtool: 'inline-source-map',

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					'babel-loader',
				],
				include: /src/,
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
			{
				test: /\.(jpe?g|png|gif|ico)$/i,
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
        // Moves the index.html file over and asset folder to the dist folder
		new CopyWebpackPlugin([
			// {output}/dist/file.txt
            { from: 'index.html' },

			// Copy directory contents to {output}/to/directory/
            { from: 'assets', to: 'assets' },
		]),
	],
};
