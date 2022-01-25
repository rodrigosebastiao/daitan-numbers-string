const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FontminPlugin  = require("fontmin-webpack");
const path = require("path");
const mode = process.env.NODE_ENV || "development";

module.exports = {
    mode: mode,
    entry: ["./src/js/index.js", "./src/scss/index.scss"],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-proposal-object-rest-spread"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: "./src/html/index.html",
            filename: "index.html",
            inject: "body"
        }),
        new MiniCssExtractPlugin({
            filename: "./dist/[name].css",
        }),
        new FontminPlugin({
            autodetect: true, // automatically pull unicode characters from CSS
            glyphs: ['\uf0c8' /* extra glyphs to include */],
        }),
    ],
    devServer: {
        // static: {
        //   directory: path.join(__dirname, "public"),
        // },
        open: true,
        compress: true,
        port: 3000,
      },
  };