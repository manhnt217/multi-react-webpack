/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const webpack = require("webpack");
const path = require("path");
// const FileListPlugin = require("./src/FileListPlugin");
const WebpackCleanPlugin = require("webpack-clean-plugin");

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

module.exports =
  {
    module: {
      rules: commonRules
    },

    watch: true,

    target: "node",
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },

    entry: {
      main: "./src/gen.js",
    },

    output: {
      path: path.resolve(__dirname, 'ssr/'),
      // filename: '[name].[chunkhash].js'
      libraryTarget: 'var',
      library: 'GenLib',
      publicPath: '/'
    },

    mode: "development",

    // optimization: {
    //   splitChunks: {

    //     chunks: "all",
    //   }
    // },
    plugins: [
      // new WebpackCleanPlugin({
      //   on: "emit",
      //   path: ["./ssr"]
      // }),
    ]
  };
