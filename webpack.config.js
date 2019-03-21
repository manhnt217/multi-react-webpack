/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const webpack = require("webpack");
const path = require("path");
const FileListPlugin = require("./src/FileListPlugin");
const WebpackCleanPlugin = require("webpack-clean-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const commonRules = [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    include: [path.resolve(__dirname, "src")],
    loader: "babel-loader",

    options: {
      plugins: ["syntax-dynamic-import", /* "dynamic-import-node" */],
      presets: ["@babel/preset-env", "@babel/preset-react"]
    }
  },
  {
    test: /\.json$/,
    use: [
      {
        loader: "json-loader"
      }
    ]
  },
  {
    test: /\.css$/,

    use: [
      {
        loader: "style-loader",

        options: {
          sourceMap: true
        }
      },
      {
        loader: "css-loader"
      }
    ]
  }
];

module.exports = [
  {
    module: {
      rules: commonRules
    },

    target: "node",
    // node: {
    //   console: false,
    //   global: false,
    //   process: false,
    //   Buffer: false,
    //   __filename: false,
    //   __dirname: false
    // },

    entry: {
      main: "./src/index.js"
    },

    output: {
      // filename: '[name].[chunkhash].js'
    },

    mode: "development",

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            priority: -10,
            test: /[\\/]node_modules[\\/]/
          }
        },

        chunks: "async",
        minChunks: 1,
        minSize: 30000,
        name: true
      }
    },
    plugins: [
      new WebpackCleanPlugin({
        on: "emit",
        path: ["./dist"]
      }),

      new FileListPlugin()
    ]
  },
  {
    module: {
      rules: commonRules
    },

    entry: {
      // main: "./src/index.js",
      user1: "./src/user1/index.js",
    },

    output: {
      // filename: '[name].[chunkhash].js'
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/user1/index.html",
        filename: "./index1.html"
      }),
    ],

    mode: "development"
  },
  {
    module: {
      rules: commonRules
    },

    entry: {
      // main: "./src/index.js",
      user2: "./src/user2/index.js",
    },

    output: {
      // filename: '[name].[chunkhash].js'
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/user2/index.html",
        filename: "./index2.html"
      }),
    ],

    mode: "development"
  }
];
