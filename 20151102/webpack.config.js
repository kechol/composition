var autoprefixer = require('autoprefixer');
var precss = require('precss');
var postcssImport = require('postcss-import');

module.exports = {
  entry: "./app/app.js",
  output: { path: "./build/", filename: "bundle.js" },
  module: {
    loaders: [
      { test: /\.jade$/, loader: "jade-html-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" }
    ]
  },
  postcss: (webpack) => {
    var pi = postcssImport({ addDependencyTo: webpack });
    return [pi, autoprefixer, precss];
  }
};

