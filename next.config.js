const path = require("path");
const glob = require("glob");

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    if (config.resolve.alias) {
      delete config.resolve.alias.react;
      delete config.resolve.alias["react-dom"];
    }

    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: ["styles", "node_modules"]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      },
      {
        test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            publicPath: "./",
            outputPath: "static/",
            name: "[name].[ext]"
          }
        }
      }
    );

    return config;
  }
};
