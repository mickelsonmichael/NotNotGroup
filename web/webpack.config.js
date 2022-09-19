const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const DotenvPlugin = require("dotenv-webpack");

module.exports = (env, argv) => ({
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devServer: {
    open: true,
    devMiddleware: {
        writeToDisk: true
    }
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 500,
    ignored: /node_modules/,
  },
  performance: {
    hints: argv.mode === "development" ? false : "warning",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|\.test.jsx?$)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|mp4)$/,
        loader: "file-loader",
        options: {
          outputPath: "images",
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/Components"),
      "@common": path.resolve(__dirname, "src/Common"),
      "@data": path.resolve(__dirname, "src/Data"),
      "@context": path.relative(__dirname, "src/Context"),
      "@page": path.relative(__dirname, "src/Pages"),
    },
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "build"),
        },
      ],
    }),
    new DotenvPlugin({
      systemvars: true,
      defaults: true,
    }),
  ],
});
