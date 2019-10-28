// ------------------
// @Table of Contents
// ------------------

/**
 * + @Loading Dependencies
 * + @Entry Point Setup
 * + @Path Resolving
 * + @Exporting Module
 */

// ---------------------
// @Loading Dependencies
// ---------------------

const path = require("path"),
  manifest = require("./manifest"),
  rules = require("./rules"),
  plugins = require("./plugins"),
  TerserPlugin = require("terser-webpack-plugin");

// ------------------
// @Entry Point Setup
// ------------------

var entries = {};
for (var key in manifest.entries) {
  entries[key] = path.join(
    manifest.paths.src,
    manifest.paths.js_source_dir,
    manifest.entries[key]
  );
}

// ---------------
// @Path Resolving
// ---------------

const resolve = {
  extensions: [
    ".webpack-loader.js",
    ".web-loader.js",
    ".loader.js",
    ".mjs",
    ".js"
  ],
  modules: [
    path.join(__dirname, "../node_modules"),
    path.join(manifest.paths.src, "")
  ],
  alias: {
    vue: 'vue/dist/vue.js'
  }
};

// ---------------
// @Optimization and split chunk
// -------------
var optimization = {
  namedChunks: true,
  nodeEnv: "production",
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]((?!(quill|moment)).*)[\\/]/,

        name: "commons",
        // chunks: "all",
        chunks: "initial"
        // minChunks: 2,
        // priority: 1
      },
      default: false
    }
  }
};

if (manifest.IS_PRODUCTION) {
  optimization.minimizer = [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: undefined,
        warnings: false,
        parse: {},
        compress: {},
        mangle: true, // Note `mangle.properties` is `false` by default.
        module: false,
        output: {
          comments: false
        },
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        safari10: false
      }
    })
  ];
} else {
  optimization.minimize = false;
}

// -----------------
// @Dev server setting
// -----------------

var devServer = {
  contentBase: path.join(__dirname, "../build"),
  compress: true,
  port: 8000
};

// -----------------
// @Exporting Module
// -----------------

module.exports = {
  devtool: manifest.IS_PRODUCTION ? false : "inline-source-map",
  context: path.join(manifest.paths.src, manifest.paths.js_source_dir),
  entry: entries,
  output: {
    path: manifest.paths.build,
    publicPath: manifest.paths.public_path,
    filename: manifest.outputFiles.bundle
  },
  module: {
    rules
  },
  resolve,
  externals: {
    window: "window"
  },
  plugins,
  optimization,
  devServer
};
