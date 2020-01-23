const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	resolve: {
		mainFields: ["webpack", "browser", "main"],
		alias: {
			Styles: path.resolve(__dirname, "src/styles/"),
			Components: path.resolve(__dirname, "src/components/"),
			Screens: path.resolve(__dirname, "src/screens"),
			Hooks: path.resolve(__dirname, "src/hooks"),
			HOC: path.resolve(__dirname, "src/hoc"),
			Graphql: path.resolve(__dirname, "src/graphql"),
			Config: path.resolve(__dirname, "src/config")
		}
	}
};

module.exports = (env, argv) => {
	if (argv.mode === "development") {
		config.plugins = [
			new HtmlWebPackPlugin({
				template: "./src/index.html",
				filename: "./index.html"
			})
		];

		config.devtool = "eval-source-map";
	}

	return config;
};
