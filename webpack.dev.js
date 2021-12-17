const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",

	devtool: "inline-source-map",

	devServer: {
		contentBase: path.join(__dirname, "public/"),
		port: process.env.PORT | 8080,
		hot: true,
		overlay: true,
		historyApiFallback: true,
		// host: '192.168.1.4',
		// disableHostCheck: true,
	},

	output: {
		path: undefined,
		filename: "[name].js",
	},
});
