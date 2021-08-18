const path = require('path');

module.exports = () => {
  return {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      libraryTarget: "umd",
      globalObject: "this"
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
      ],
    },
    resolve: {
      extensions: ['.js']
    },
    devtool: 'inline-source-map'
  }
};
