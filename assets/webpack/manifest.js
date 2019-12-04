// ------------------
// @Table of Contents
// ------------------

/**
 * + @Loading Dependencies
 * + @Environment Holders
 * + @Utils
 * + @App Paths
 * + @Output Files Names
 * + @Entries Files Names
 * + @Exporting Module
 */

// ---------------------
// @Loading Dependencies
// ---------------------

const path = require("path");

// --------------------
// @Environment Holders
// --------------------

const NODE_ENV = process.env.NODE_ENV || "development",
  IS_DEVELOPMENT = NODE_ENV === "development",
  IS_PRODUCTION = NODE_ENV === "production";

// ------
// @Utils
// ------

const dir = src => path.join(__dirname, src);

// ----------
// @App Paths
// ----------

const paths = {
  src: dir("../src"),
  build: dir("../../priv/static/"),
  public_path: "/",
  js_source_dir: "js"
};

// -------------------
// @Output Files Names
// -------------------

const outputFiles = {
  bundle: "js/[name].js",
  css: "css/[name].css"
};

// --------------------
// @Entries Files Names
// --------------------

const entries = {
  admin: "admin.js",
  "admin/markdown_editor": "admin/markdown_editor.js"
};

// -----------------
// @Exporting Module
// -----------------

module.exports = {
  paths,
  outputFiles,
  entries,
  NODE_ENV,
  IS_DEVELOPMENT,
  IS_PRODUCTION
};
