const path = require("path");
const entryFile = "main.js";

module.exports = {
    entry: ['./src/js/main.js','./src/scss/style.scss'],
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "./build"
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, "/"),
        publicPath: "/build/",
        compress: true,
        port: 3003,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/[name].blocks.css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
        ]
    }
};
