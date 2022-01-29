const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FontminPlugin  = require("fontmin-webpack");
const path = require("path");
const fs = require("fs");
const mode = process.env.NODE_ENV || "development";

const pages =
  fs
    .readdirSync(path.resolve(__dirname, 'src'))
    .filter(fileName => fileName.endsWith('.html'))

module.exports = {
    mode: mode,
    entry: {
        stringNumber: "./src/pages/stringNumberPage.js",
    },
    output: {
        // path: path.resolve(__dirname, "./dist"),
        filename: "[name].[contenthash].bundle.js",
        clean: true,
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
            inject: true,
            hash: true,
            template: "./src/html/index.html",
            filename: "index.html",
            inject: "body"
        }),
        new MiniCssExtractPlugin({
            filename: "./[name].css",
        }),
        new FontminPlugin({
            autodetect: true, // automatically pull unicode characters from CSS
            glyphs: ["\uf0c8" /* extra glyphs to include */],
        }),
    ],
    devServer: {
        // static: {
        //   directory: path.join(__dirname, "public"),
        // },
        liveReload: true,
        open: true,
        compress: true,
        port: 3000,
      },
  };