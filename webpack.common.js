const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
	entry: "./src/pages/index.tsx",

	resolve: {
		alias: {
			"@styles": path.join(__dirname, "./src/styles"),
		},
		extensions: [".ts", ".tsx", ".js"],
		fallback: {
			fs: false,
		},
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(ts|tsx)$/,
				use: [
					"babel-loader",
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true,
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "images/[hash]-[name].[ext]",
						},
					},
				],
			},
			{
				test: /\.(s[ac]ss|css)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(ttf|woff|eot)$/,
				use: {
					loader: "file-loader",
				},
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public/index.html"),
			filename: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[hash:16].css",
		}),
		new ForkTsCheckerWebpackPlugin(),
	],
};
