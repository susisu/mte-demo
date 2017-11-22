/* eslint-disable strict */

"use strict";

const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const DEVELOPMENT = process.env.NODE_ENV === "development";

module.exports = {
  context: __dirname,
  devtool: DEVELOPMENT ? "inline-source-map" : "",
  entry  : {
    main: "./src//main.js"
  },
  output: {
    path    : path.resolve(__dirname, "build"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use : {
          loader : "babel-loader",
          options: {
            presets: [
              ["env", {
                targets: {
                  browsers: "last 2 versions"
                },
                useBuiltIns: true
              }]
            ]
          }
        }
      }
    ]
  },
  plugins: DEVELOPMENT ? [] : [new UglifyJsPlugin()]
};
