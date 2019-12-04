/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"admin/markdown_editor": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./admin/markdown_editor.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../scss/admin/components/markdown_editor.scss":
/*!*****************************************************!*\
  !*** ../scss/admin/components/markdown_editor.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./admin/components/markdown_editor.js":
/*!*********************************************!*\
  !*** ./admin/components/markdown_editor.js ***!
  \*********************************************/
/*! exports provided: mirrorMark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrorMark", function() { return mirrorMark; });
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror */ "../../node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codemirror_mode_gfm_gfm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codemirror/mode/gfm/gfm */ "../../node_modules/codemirror/mode/gfm/gfm.js");
/* harmony import */ var codemirror_mode_gfm_gfm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_gfm_gfm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ "../../node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/mode/python/python */ "../../node_modules/codemirror/mode/python/python.js");
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/mode/htmlmixed/htmlmixed */ "../../node_modules/codemirror/mode/htmlmixed/htmlmixed.js");
/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_mode_erlang_erlang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/mode/erlang/erlang */ "../../node_modules/codemirror/mode/erlang/erlang.js");
/* harmony import */ var codemirror_mode_erlang_erlang__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_erlang_erlang__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_mode_elixir__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror-mode-elixir */ "../../node_modules/codemirror-mode-elixir/dist/codemirror-mode-elixir.m.js");







/**
 * Merge
 *
 *
 * @param  {Object}		object The object to merge into
 * @param  {Object/Array}  source The object or array of objects to merge
 * @return {Object}		 The original object
 */

function merge(object, source) {
  if (Array.isArray(source)) {
    for (var i = sources.length - 1; i >= 0; i--) {
      merge(object, source[i]);
    }
  } else {
    for (var attrname in source) {
      object[attrname] = source[attrname];
    }
  }

  return object;
}
/**
 * Our delegate prototype used by our factory
 * @type {Object}
 */


var mirrorMarkProto = {
  /**
   * Render the component
   */
  render: function render() {
    this.registerKeyMaps(this.keyMaps);
    this.cm = codemirror__WEBPACK_IMPORTED_MODULE_0___default.a.fromTextArea(this.element, this.options);

    if (this.options.showToolbar) {
      this.setToolbar(this.tools);
    }
  },

  /**
   * Setup the toolbar
   */
  setToolbar: function setToolbar(tools) {
    var toolbar = document.createElement("ul");
    toolbar.className = this.options.theme + "-" + "toolbar";
    var tools = this.generateToolList(tools);
    tools.forEach(function (tool) {
      toolbar.appendChild(tool);
    });
    var cmWrapper = this.cm.getWrapperElement();
    cmWrapper.insertBefore(toolbar, cmWrapper.firstChild);
  },

  /**
   * Register Keymaps by extending the extraKeys object
   * @param {Object} keyMaps
   */
  registerKeyMaps: function registerKeyMaps(keyMaps) {
    for (var name in keyMaps) {
      if (typeof this.actions[keyMaps[name]] !== "function") throw "MirrorMark - '" + keyMaps[name] + "' is not a registered action";
      var realName = name.replace("Cmd-", codemirror__WEBPACK_IMPORTED_MODULE_0___default.a.keyMap["default"] == codemirror__WEBPACK_IMPORTED_MODULE_0___default.a.keyMap.macDefault ? "Cmd-" : "Ctrl-");
      this.options.extraKeys[realName] = this.actions[keyMaps[name]].bind(this);
    }
  },

  /**
   * Register actions by extending the default actions
   * @param  {Object} actions [description]
   */
  registerActions: function registerActions(actions) {
    return merge(this.actions, actions);
  },

  /**
   * Register tools by extending and overwriting the default tools
   * @param  {Array} tools
   * @param  {Bool} replace - replace the default tools with the ones provided. Defaults to false.
   */
  registerTools: function registerTools(tools, replace) {
    for (var action in tools) {
      if (this.actions[tools[action].action] && typeof this.actions[tools[action].action] !== "function") throw "MirrorMark - '" + tools[action].action + "' is not a registered action";
    }

    if (replace) {
      this.tools = tools;
      return;
    }

    this.tools = this.tools.concat(tools);
  },

  /**
   * A recursive function to generate and return an unordered list of tools
   * @param  {Object}
   */
  generateToolList: function generateToolList(tools) {
    return tools.map(function (tool) {
      var item = document.createElement("li"),
          anchor = document.createElement("a");
      item.className = tool.name;

      if (tool.className) {
        anchor.className = tool.className;
      }

      if (tool.showName) {
        var text = document.createTextNode(tool.name);
        anchor.appendChild(text);
      }

      if (tool.action) {
        anchor.onclick = function (e) {
          this.cm.focus();
          this.actions[tool.action].call(this);
        }.bind(this);
      }

      item.appendChild(anchor);

      if (tool.nested) {
        item.className += " has-nested";
        var ul = document.createElement("ul");
        ul.className = this.options.theme + "-toolbar-list";
        var nested = generateToolList.call(this, tool.nested);
        nested.forEach(function (nestedItem) {
          ul.appendChild(nestedItem);
        });
        item.appendChild(ul);
      }

      return item;
    }.bind(this));
  },

  /**
   * Default Tools in Toolbar
   */
  tools: [{
    name: "bold",
    action: "bold"
  }, {
    name: "italicize",
    action: "italicize"
  }, {
    name: "blockquote",
    action: "blockquote"
  }, {
    name: "strikethrough",
    action: "strikethrough"
  }, {
    name: "link",
    action: "link"
  }, {
    name: "image",
    action: "image"
  }, {
    name: "unorderedList",
    action: "unorderedList"
  }, {
    name: "orderedList",
    action: "orderedList"
  }, {
    name: "fullScreen",
    action: "fullScreen"
  }, {
    name: "preview",
    action: "preview"
  }],

  /**
   * Default Keymaps
   * @type {Object}
   */
  keyMaps: {
    "Cmd-B": "bold",
    "Cmd-I": "italicize",
    "Cmd-'": "blockquote",
    "Cmd-Alt-L": "orderedList",
    "Cmd-L": "unorderedList",
    "Cmd-Alt-I": "image",
    "Cmd-H": "hr",
    "Cmd-K": "link",
    F11: "fullScreen",
    Esc: "exitFullScreen"
  },

  /**
   * Default Actions
   * @type {Object}
   */
  actions: {
    bold: function bold() {
      this.toggleAround("**", "**");
    },
    italicize: function italicize() {
      this.toggleAround("*", "*");
    },
    strikethrough: function strikethrough() {
      this.toggleAround("~~", "~~");
    },
    code: function code() {
      this.toggleAround("```\r\n", "\r\n```");
    },
    blockquote: function blockquote() {
      this.toggleBefore("> ");
    },
    orderedList: function orderedList() {
      this.toggleBefore("1. ");
    },
    unorderedList: function unorderedList() {
      this.toggleBefore("* ");
    },
    image: function image() {
      this.toggleAround("![", "](http://)");
    },
    link: function link() {
      this.toggleAround("[", "](http://)");
    },
    hr: function hr() {
      this.insert("---");
    },
    fullScreen: function fullScreen() {
      var fullScreen = !this.cm.getOption("fullScreen"); // You must turn off scrollPastEnd on after going full screen
      // and before exiting it

      if (!fullScreen) this.cm.setOption("scrollPastEnd", fullScreen);
      this.cm.setOption("fullScreen", fullScreen);
      if (fullScreen) this.cm.setOption("scrollPastEnd", fullScreen);
    },
    exitFullScreen: function exitFullScreen() {
      if (this.cm.getOption("fullScreen")) {
        this.cm.setOption("scrollPastEnd", fullScreen);
        this.cm.setOption("fullScreen", false);
      }
    },
    preview: function preview() {
      this.cm.setOption("preview", !this.cm.getOption("preview"));
    }
  },

  /**
   * Insert a string at cursor position
   * @param  {String} insertion
   */
  insert: function insert(insertion) {
    var doc = this.cm.getDoc();
    var cursor = doc.getCursor();
    doc.replaceRange(insertion, {
      line: cursor.line,
      ch: cursor.ch
    });
  },

  /**
   * Toggle a string at the start and end of a selection
   * @param  {String} start Start string to wrap
   * @param  {String} end  End string to wrap
   */
  toggleAround: function toggleAround(start, end) {
    var doc = this.cm.getDoc();
    var cursor = doc.getCursor();

    if (doc.somethingSelected()) {
      var selection = doc.getSelection();

      if (selection.startsWith(start) && selection.endsWith(end)) {
        doc.replaceSelection(selection.substring(start.length, selection.length - end.length), "around");
      } else {
        doc.replaceSelection(start + selection + end, "around");
      }
    } else {
      // If no selection then insert start and end args and set cursor position between the two.
      doc.replaceRange(start + end, {
        line: cursor.line,
        ch: cursor.ch
      });
      doc.setCursor({
        line: cursor.line,
        ch: cursor.ch + start.length
      });
    }
  },

  /**
   * Toggle a string before a selection
   * @param {String} insertion	String to insert
   */
  toggleBefore: function toggleBefore(insertion) {
    var doc = this.cm.getDoc();
    var cursor = doc.getCursor();

    if (doc.somethingSelected()) {
      var selections = doc.listSelections();
      var remove = null;
      this.cm.operation(function () {
        selections.forEach(function (selection) {
          var pos = [selection.head.line, selection.anchor.line].sort(); // Remove if the first text starts with it

          if (remove == null) {
            remove = doc.getLine(pos[0]).startsWith(insertion);
          }

          for (var i = pos[0]; i <= pos[1]; i++) {
            if (remove) {
              // Don't remove if we don't start with it
              if (doc.getLine(i).startsWith(insertion)) {
                doc.replaceRange("", {
                  line: i,
                  ch: 0
                }, {
                  line: i,
                  ch: insertion.length
                });
              }
            } else {
              doc.replaceRange(insertion, {
                line: i,
                ch: 0
              });
            }
          }
        });
      });
    } else {
      var line = cursor.line;

      if (doc.getLine(line).startsWith(insertion)) {
        doc.replaceRange("", {
          line: line,
          ch: 0
        }, {
          line: line,
          ch: insertion.length
        });
      } else {
        doc.replaceRange(insertion, {
          line: line,
          ch: 0
        });
      }
    }
  }
};
/**
 * Our Factory
 * @param  {Object} element
 * @param  {Object} options
 * @return {Object}
 */

function mirrorMark(element, options) {
  // Defaults
  var defaults = {
    mode: "gfm",
    theme: "default mirrormark",
    tabSize: "2",
    indentWithTabs: true,
    lineWrapping: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    addModeClass: true,
    showToolbar: true,
    extraKeys: {
      Enter: "newlineAndIndentContinueMarkdownList"
    }
  }; // Extend our defaults with the options provided

  merge(defaults, options);
  return merge(Object.create(mirrorMarkProto), {
    element: element,
    options: defaults
  });
}



/***/ }),

/***/ "./admin/components/upload_box.svelte":
/*!********************************************!*\
  !*** ./admin/components/upload_box.svelte ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "../../node_modules/svelte/internal/index.mjs");
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ "../../node_modules/whatwg-fetch/fetch.js");
/* src/js/admin/components/upload_box.svelte generated by Svelte v3.8.1 */



function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.file = list[i];
	return child_ctx;
}

// (53:8) {#each files as file }
function create_each_block(ctx) {
	var tr, td0, img, img_src_value, t0, td1, input, input_value_value, t1;

	return {
		c() {
			tr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("tr");
			td0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("td");
			img = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			td1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("td");
			input = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "src", img_src_value = ctx.file.url);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "alt", "");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "class", "h-6");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td0, "class", "p-1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "type", "text");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "class", "form-control");
			input.value = input_value_value = ctx.file.url;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "onclick", "this.setSelectionRange(0, this.value.length)");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td1, "class", "p-1");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, tr, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, td0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(td0, img);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, td1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(td1, input);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, t1);
		},

		p(changed, ctx) {
			if ((changed.files) && img_src_value !== (img_src_value = ctx.file.url)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "src", img_src_value);
			}

			if ((changed.files) && input_value_value !== (input_value_value = ctx.file.url)) {
				input.value = input_value_value;
			}
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(tr);
			}
		}
	};
}

function create_fragment(ctx) {
	var div3, div1, div0, form, input, t0, label, t2, a, t3, div2, table, tbody, div3_class_value, dispose;

	var each_value = ctx.files;

	var each_blocks = [];

	for (var i_2 = 0; i_2 < each_value.length; i_2 += 1) {
		each_blocks[i_2] = create_each_block(get_each_context(ctx, each_value, i_2));
	}

	return {
		c() {
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			form = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("form");
			input = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			label = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			label.innerHTML = `<i class="fe fe-upload mr-1"></i> Upload file`;
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			a.innerHTML = `<i class="fe fe-chevron-up"></i>`;
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			table = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("table");
			tbody = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("tbody");

			for (var i_2 = 0; i_2 < each_blocks.length; i_2 += 1) {
				each_blocks[i_2].c();
			}
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "type", "file");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "class", "d-none");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "name", "file");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "id", "file-select");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label, "for", "file-select");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label, "class", "btn btn-primary btn-sm m-0");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(form, "method", "post");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(form, "action", "/uploads");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(form, "class", "mr-5");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", "#");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "class", "card-options-collapse ml-auto");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "card-options m-0 w-100");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "card-header p-4");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(table, "class", "table card-table table-vcenter");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "card-body p-2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div2, "max-height", "150px");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div2, "overflow-y", "auto");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", div3_class_value = "card " + (ctx.collapsed ? 'card-collapsed' : ''));

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "change", ctx.uploadFile),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(a, "click", ctx.click_handler)
			];
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, form);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, input);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, label);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, table);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(table, tbody);

			for (var i_2 = 0; i_2 < each_blocks.length; i_2 += 1) {
				each_blocks[i_2].m(tbody, null);
			}
		},

		p(changed, ctx) {
			if (changed.files) {
				each_value = ctx.files;

				for (var i_2 = 0; i_2 < each_value.length; i_2 += 1) {
					const child_ctx = get_each_context(ctx, each_value, i_2);

					if (each_blocks[i_2]) {
						each_blocks[i_2].p(changed, child_ctx);
					} else {
						each_blocks[i_2] = create_each_block(child_ctx);
						each_blocks[i_2].c();
						each_blocks[i_2].m(tbody, null);
					}
				}

				for (; i_2 < each_blocks.length; i_2 += 1) {
					each_blocks[i_2].d(1);
				}
				each_blocks.length = each_value.length;
			}

			if ((changed.collapsed) && div3_class_value !== (div3_class_value = "card " + (ctx.collapsed ? 'card-collapsed' : ''))) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", div3_class_value);
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div3);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

let count = 0;

function instance($$self, $$props, $$invalidate) {
	
 let files = [];
 let collapsed = true;

 function uploadFile(event) {
   var input = event.target;

   if(input.files.length > 0){
     var csrf = document
       .querySelector("meta[name=csrf]")
       .getAttribute("content");

     const fd = new FormData();
     fd.append("file", input.files[0]);
     fd.append("_csrf_token", csrf);

     fetch('/admin/upload', {
       method: 'POST',
       body: fd
     }).then(function(response) {
       return response.json()
     }).then(function(json) {
       if(json.status == "OK"){
         $$invalidate('files', files = [json.data, ...files]);
         $$invalidate('collapsed', collapsed = false);
       }else{
         console.log(json.message)
       }
     }).catch(function(ex) {
       console.log('parsing failed', ex)
     });
   }
 }

	function click_handler(e) {
		const $$result = collapsed = !collapsed;
		$$invalidate('collapsed', collapsed);
		return $$result;
	}

	return {
		files,
		collapsed,
		uploadFile,
		click_handler
	};
}

class Upload_box extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Upload_box);


/***/ }),

/***/ "./admin/markdown_editor.js":
/*!**********************************!*\
  !*** ./admin/markdown_editor.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_admin_components_markdown_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/admin/components/markdown_editor.scss */ "../scss/admin/components/markdown_editor.scss");
/* harmony import */ var _scss_admin_components_markdown_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_admin_components_markdown_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_markdown_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/markdown_editor.js */ "./admin/components/markdown_editor.js");
/* harmony import */ var _components_upload_box_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/upload_box.svelte */ "./admin/components/upload_box.svelte");




function initEditor() {
  var editor = Object(_components_markdown_editor_js__WEBPACK_IMPORTED_MODULE_1__["mirrorMark"])(document.getElementById("editor"), {
    showToolbar: false,
    autofocus: true,
    tabSize: 4,
    extraKeys: {
      Enter: "newlineAndIndentContinueMarkdownList"
    }
  });
  editor.render();
}

function initUploadBox() {
  var node = document.createElement("div");
  node.id = "upload-box";
  document.body.appendChild(node);
  var uploadBox = new _components_upload_box_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
    target: document.getElementById("upload-box"),
    props: {}
  });
}

initEditor();
initUploadBox();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3Njc3MvYWRtaW4vY29tcG9uZW50cy9tYXJrZG93bl9lZGl0b3Iuc2Nzcz82N2E5Iiwid2VicGFjazovLy8uL2FkbWluL2NvbXBvbmVudHMvbWFya2Rvd25fZWRpdG9yLmpzIiwid2VicGFjazovLy8uL2FkbWluL2NvbXBvbmVudHMvdXBsb2FkX2JveC5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vbWFya2Rvd25fZWRpdG9yLmpzIl0sIm5hbWVzIjpbIm1lcmdlIiwib2JqZWN0Iiwic291cmNlIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsInNvdXJjZXMiLCJsZW5ndGgiLCJhdHRybmFtZSIsIm1pcnJvck1hcmtQcm90byIsInJlbmRlciIsInJlZ2lzdGVyS2V5TWFwcyIsImtleU1hcHMiLCJjbSIsIkNvZGVNaXJyb3IiLCJmcm9tVGV4dEFyZWEiLCJlbGVtZW50Iiwib3B0aW9ucyIsInNob3dUb29sYmFyIiwic2V0VG9vbGJhciIsInRvb2xzIiwidG9vbGJhciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRoZW1lIiwiZ2VuZXJhdGVUb29sTGlzdCIsImZvckVhY2giLCJ0b29sIiwiYXBwZW5kQ2hpbGQiLCJjbVdyYXBwZXIiLCJnZXRXcmFwcGVyRWxlbWVudCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJuYW1lIiwiYWN0aW9ucyIsInJlYWxOYW1lIiwicmVwbGFjZSIsImtleU1hcCIsIm1hY0RlZmF1bHQiLCJleHRyYUtleXMiLCJiaW5kIiwicmVnaXN0ZXJBY3Rpb25zIiwicmVnaXN0ZXJUb29scyIsImFjdGlvbiIsImNvbmNhdCIsIm1hcCIsIml0ZW0iLCJhbmNob3IiLCJzaG93TmFtZSIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsIm9uY2xpY2siLCJlIiwiZm9jdXMiLCJjYWxsIiwibmVzdGVkIiwidWwiLCJuZXN0ZWRJdGVtIiwiRjExIiwiRXNjIiwiYm9sZCIsInRvZ2dsZUFyb3VuZCIsIml0YWxpY2l6ZSIsInN0cmlrZXRocm91Z2giLCJjb2RlIiwiYmxvY2txdW90ZSIsInRvZ2dsZUJlZm9yZSIsIm9yZGVyZWRMaXN0IiwidW5vcmRlcmVkTGlzdCIsImltYWdlIiwibGluayIsImhyIiwiaW5zZXJ0IiwiZnVsbFNjcmVlbiIsImdldE9wdGlvbiIsInNldE9wdGlvbiIsImV4aXRGdWxsU2NyZWVuIiwicHJldmlldyIsImluc2VydGlvbiIsImRvYyIsImdldERvYyIsImN1cnNvciIsImdldEN1cnNvciIsInJlcGxhY2VSYW5nZSIsImxpbmUiLCJjaCIsInN0YXJ0IiwiZW5kIiwic29tZXRoaW5nU2VsZWN0ZWQiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJyZXBsYWNlU2VsZWN0aW9uIiwic3Vic3RyaW5nIiwic2V0Q3Vyc29yIiwic2VsZWN0aW9ucyIsImxpc3RTZWxlY3Rpb25zIiwicmVtb3ZlIiwib3BlcmF0aW9uIiwicG9zIiwiaGVhZCIsInNvcnQiLCJnZXRMaW5lIiwibWlycm9yTWFyayIsImRlZmF1bHRzIiwibW9kZSIsInRhYlNpemUiLCJpbmRlbnRXaXRoVGFicyIsImxpbmVXcmFwcGluZyIsImF1dG9DbG9zZUJyYWNrZXRzIiwiYXV0b0Nsb3NlVGFncyIsImFkZE1vZGVDbGFzcyIsIkVudGVyIiwiT2JqZWN0IiwiY3JlYXRlIiwiaW5pdEVkaXRvciIsImVkaXRvciIsImdldEVsZW1lbnRCeUlkIiwiYXV0b2ZvY3VzIiwiaW5pdFVwbG9hZEJveCIsIm5vZGUiLCJpZCIsImJvZHkiLCJ1cGxvYWRCb3giLCJVcGxvYWRCb3giLCJ0YXJnZXQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBUUEsU0FBU0EsS0FBVCxDQUFlQyxNQUFmLEVBQXVCQyxNQUF2QixFQUErQjtBQUM3QixNQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsTUFBZCxDQUFKLEVBQTJCO0FBQ3pCLFNBQUssSUFBSUcsQ0FBQyxHQUFHQyxPQUFPLENBQUNDLE1BQVIsR0FBaUIsQ0FBOUIsRUFBaUNGLENBQUMsSUFBSSxDQUF0QyxFQUF5Q0EsQ0FBQyxFQUExQyxFQUE4QztBQUM1Q0wsV0FBSyxDQUFDQyxNQUFELEVBQVNDLE1BQU0sQ0FBQ0csQ0FBRCxDQUFmLENBQUw7QUFDRDtBQUNGLEdBSkQsTUFJTztBQUNMLFNBQUssSUFBSUcsUUFBVCxJQUFxQk4sTUFBckIsRUFBNkI7QUFDM0JELFlBQU0sQ0FBQ08sUUFBRCxDQUFOLEdBQW1CTixNQUFNLENBQUNNLFFBQUQsQ0FBekI7QUFDRDtBQUNGOztBQUVELFNBQU9QLE1BQVA7QUFDRDtBQUVEOzs7Ozs7QUFJQSxJQUFJUSxlQUFlLEdBQUc7QUFDcEI7OztBQUdBQyxRQUFNLEVBQUUsU0FBU0EsTUFBVCxHQUFrQjtBQUN4QixTQUFLQyxlQUFMLENBQXFCLEtBQUtDLE9BQTFCO0FBQ0EsU0FBS0MsRUFBTCxHQUFVQyxpREFBVSxDQUFDQyxZQUFYLENBQXdCLEtBQUtDLE9BQTdCLEVBQXNDLEtBQUtDLE9BQTNDLENBQVY7O0FBRUEsUUFBSSxLQUFLQSxPQUFMLENBQWFDLFdBQWpCLEVBQThCO0FBQzVCLFdBQUtDLFVBQUwsQ0FBZ0IsS0FBS0MsS0FBckI7QUFDRDtBQUNGLEdBWG1COztBQWFwQjs7O0FBR0FELFlBQVUsRUFBRSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUNyQyxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FGLFdBQU8sQ0FBQ0csU0FBUixHQUFvQixLQUFLUCxPQUFMLENBQWFRLEtBQWIsR0FBcUIsR0FBckIsR0FBMkIsU0FBL0M7QUFFQSxRQUFJTCxLQUFLLEdBQUcsS0FBS00sZ0JBQUwsQ0FBc0JOLEtBQXRCLENBQVo7QUFFQUEsU0FBSyxDQUFDTyxPQUFOLENBQWMsVUFBU0MsSUFBVCxFQUFlO0FBQzNCUCxhQUFPLENBQUNRLFdBQVIsQ0FBb0JELElBQXBCO0FBQ0QsS0FGRDtBQUlBLFFBQUlFLFNBQVMsR0FBRyxLQUFLakIsRUFBTCxDQUFRa0IsaUJBQVIsRUFBaEI7QUFDQUQsYUFBUyxDQUFDRSxZQUFWLENBQXVCWCxPQUF2QixFQUFnQ1MsU0FBUyxDQUFDRyxVQUExQztBQUNELEdBNUJtQjs7QUE4QnBCOzs7O0FBSUF0QixpQkFBZSxFQUFFLFNBQVNBLGVBQVQsQ0FBeUJDLE9BQXpCLEVBQWtDO0FBQ2pELFNBQUssSUFBSXNCLElBQVQsSUFBaUJ0QixPQUFqQixFQUEwQjtBQUN4QixVQUFJLE9BQU8sS0FBS3VCLE9BQUwsQ0FBYXZCLE9BQU8sQ0FBQ3NCLElBQUQsQ0FBcEIsQ0FBUCxLQUF1QyxVQUEzQyxFQUNFLE1BQU0sbUJBQW1CdEIsT0FBTyxDQUFDc0IsSUFBRCxDQUExQixHQUFtQyw4QkFBekM7QUFFRixVQUFJRSxRQUFRLEdBQUdGLElBQUksQ0FBQ0csT0FBTCxDQUNiLE1BRGEsRUFFYnZCLGlEQUFVLENBQUN3QixNQUFYLENBQWtCLFNBQWxCLEtBQWdDeEIsaURBQVUsQ0FBQ3dCLE1BQVgsQ0FBa0JDLFVBQWxELEdBQ0ksTUFESixHQUVJLE9BSlMsQ0FBZjtBQU1BLFdBQUt0QixPQUFMLENBQWF1QixTQUFiLENBQXVCSixRQUF2QixJQUFtQyxLQUFLRCxPQUFMLENBQWF2QixPQUFPLENBQUNzQixJQUFELENBQXBCLEVBQTRCTyxJQUE1QixDQUFpQyxJQUFqQyxDQUFuQztBQUNEO0FBQ0YsR0EvQ21COztBQWlEcEI7Ozs7QUFJQUMsaUJBQWUsRUFBRSxTQUFTQSxlQUFULENBQXlCUCxPQUF6QixFQUFrQztBQUNqRCxXQUFPbkMsS0FBSyxDQUFDLEtBQUttQyxPQUFOLEVBQWVBLE9BQWYsQ0FBWjtBQUNELEdBdkRtQjs7QUF5RHBCOzs7OztBQUtBUSxlQUFhLEVBQUUsU0FBU0EsYUFBVCxDQUF1QnZCLEtBQXZCLEVBQThCaUIsT0FBOUIsRUFBdUM7QUFDcEQsU0FBSyxJQUFJTyxNQUFULElBQW1CeEIsS0FBbkIsRUFBMEI7QUFDeEIsVUFDRSxLQUFLZSxPQUFMLENBQWFmLEtBQUssQ0FBQ3dCLE1BQUQsQ0FBTCxDQUFjQSxNQUEzQixLQUNBLE9BQU8sS0FBS1QsT0FBTCxDQUFhZixLQUFLLENBQUN3QixNQUFELENBQUwsQ0FBY0EsTUFBM0IsQ0FBUCxLQUE4QyxVQUZoRCxFQUlFLE1BQU0sbUJBQ0p4QixLQUFLLENBQUN3QixNQUFELENBQUwsQ0FBY0EsTUFEVixHQUVKLDhCQUZGO0FBR0g7O0FBRUQsUUFBSVAsT0FBSixFQUFhO0FBQ1gsV0FBS2pCLEtBQUwsR0FBYUEsS0FBYjtBQUNBO0FBQ0Q7O0FBRUQsU0FBS0EsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV3lCLE1BQVgsQ0FBa0J6QixLQUFsQixDQUFiO0FBQ0QsR0EvRW1COztBQWlGcEI7Ozs7QUFJQU0sa0JBQWdCLEVBQUUsU0FBU0EsZ0JBQVQsQ0FBMEJOLEtBQTFCLEVBQWlDO0FBQ2pELFdBQU9BLEtBQUssQ0FBQzBCLEdBQU4sQ0FDTCxVQUFTbEIsSUFBVCxFQUFlO0FBQ2IsVUFBSW1CLElBQUksR0FBR3pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQUEsVUFDRXlCLE1BQU0sR0FBRzFCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQURYO0FBR0F3QixVQUFJLENBQUN2QixTQUFMLEdBQWlCSSxJQUFJLENBQUNNLElBQXRCOztBQUVBLFVBQUlOLElBQUksQ0FBQ0osU0FBVCxFQUFvQjtBQUNsQndCLGNBQU0sQ0FBQ3hCLFNBQVAsR0FBbUJJLElBQUksQ0FBQ0osU0FBeEI7QUFDRDs7QUFFRCxVQUFJSSxJQUFJLENBQUNxQixRQUFULEVBQW1CO0FBQ2pCLFlBQUlDLElBQUksR0FBRzVCLFFBQVEsQ0FBQzZCLGNBQVQsQ0FBd0J2QixJQUFJLENBQUNNLElBQTdCLENBQVg7QUFDQWMsY0FBTSxDQUFDbkIsV0FBUCxDQUFtQnFCLElBQW5CO0FBQ0Q7O0FBRUQsVUFBSXRCLElBQUksQ0FBQ2dCLE1BQVQsRUFBaUI7QUFDZkksY0FBTSxDQUFDSSxPQUFQLEdBQWlCLFVBQVNDLENBQVQsRUFBWTtBQUMzQixlQUFLeEMsRUFBTCxDQUFReUMsS0FBUjtBQUNBLGVBQUtuQixPQUFMLENBQWFQLElBQUksQ0FBQ2dCLE1BQWxCLEVBQTBCVyxJQUExQixDQUErQixJQUEvQjtBQUNELFNBSGdCLENBR2ZkLElBSGUsQ0FHVixJQUhVLENBQWpCO0FBSUQ7O0FBRURNLFVBQUksQ0FBQ2xCLFdBQUwsQ0FBaUJtQixNQUFqQjs7QUFFQSxVQUFJcEIsSUFBSSxDQUFDNEIsTUFBVCxFQUFpQjtBQUNmVCxZQUFJLENBQUN2QixTQUFMLElBQWtCLGFBQWxCO0FBQ0EsWUFBSWlDLEVBQUUsR0FBR25DLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFUO0FBQ0FrQyxVQUFFLENBQUNqQyxTQUFILEdBQWUsS0FBS1AsT0FBTCxDQUFhUSxLQUFiLEdBQXFCLGVBQXBDO0FBQ0EsWUFBSStCLE1BQU0sR0FBRzlCLGdCQUFnQixDQUFDNkIsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEIzQixJQUFJLENBQUM0QixNQUFqQyxDQUFiO0FBQ0FBLGNBQU0sQ0FBQzdCLE9BQVAsQ0FBZSxVQUFTK0IsVUFBVCxFQUFxQjtBQUNsQ0QsWUFBRSxDQUFDNUIsV0FBSCxDQUFlNkIsVUFBZjtBQUNELFNBRkQ7QUFJQVgsWUFBSSxDQUFDbEIsV0FBTCxDQUFpQjRCLEVBQWpCO0FBQ0Q7O0FBRUQsYUFBT1YsSUFBUDtBQUNELEtBckNELENBcUNFTixJQXJDRixDQXFDTyxJQXJDUCxDQURLLENBQVA7QUF3Q0QsR0E5SG1COztBQWdJcEI7OztBQUdBckIsT0FBSyxFQUFFLENBQ0w7QUFBRWMsUUFBSSxFQUFFLE1BQVI7QUFBZ0JVLFVBQU0sRUFBRTtBQUF4QixHQURLLEVBRUw7QUFBRVYsUUFBSSxFQUFFLFdBQVI7QUFBcUJVLFVBQU0sRUFBRTtBQUE3QixHQUZLLEVBR0w7QUFBRVYsUUFBSSxFQUFFLFlBQVI7QUFBc0JVLFVBQU0sRUFBRTtBQUE5QixHQUhLLEVBSUw7QUFBRVYsUUFBSSxFQUFFLGVBQVI7QUFBeUJVLFVBQU0sRUFBRTtBQUFqQyxHQUpLLEVBS0w7QUFBRVYsUUFBSSxFQUFFLE1BQVI7QUFBZ0JVLFVBQU0sRUFBRTtBQUF4QixHQUxLLEVBTUw7QUFBRVYsUUFBSSxFQUFFLE9BQVI7QUFBaUJVLFVBQU0sRUFBRTtBQUF6QixHQU5LLEVBT0w7QUFBRVYsUUFBSSxFQUFFLGVBQVI7QUFBeUJVLFVBQU0sRUFBRTtBQUFqQyxHQVBLLEVBUUw7QUFBRVYsUUFBSSxFQUFFLGFBQVI7QUFBdUJVLFVBQU0sRUFBRTtBQUEvQixHQVJLLEVBU0w7QUFBRVYsUUFBSSxFQUFFLFlBQVI7QUFBc0JVLFVBQU0sRUFBRTtBQUE5QixHQVRLLEVBVUw7QUFBRVYsUUFBSSxFQUFFLFNBQVI7QUFBbUJVLFVBQU0sRUFBRTtBQUEzQixHQVZLLENBbklhOztBQWdKcEI7Ozs7QUFJQWhDLFNBQU8sRUFBRTtBQUNQLGFBQVMsTUFERjtBQUVQLGFBQVMsV0FGRjtBQUdQLGFBQVMsWUFIRjtBQUlQLGlCQUFhLGFBSk47QUFLUCxhQUFTLGVBTEY7QUFNUCxpQkFBYSxPQU5OO0FBT1AsYUFBUyxJQVBGO0FBUVAsYUFBUyxNQVJGO0FBU1ArQyxPQUFHLEVBQUUsWUFURTtBQVVQQyxPQUFHLEVBQUU7QUFWRSxHQXBKVzs7QUFpS3BCOzs7O0FBSUF6QixTQUFPLEVBQUU7QUFDUDBCLFFBQUksRUFBRSxnQkFBVztBQUNmLFdBQUtDLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsSUFBeEI7QUFDRCxLQUhNO0FBSVBDLGFBQVMsRUFBRSxxQkFBVztBQUNwQixXQUFLRCxZQUFMLENBQWtCLEdBQWxCLEVBQXVCLEdBQXZCO0FBQ0QsS0FOTTtBQU9QRSxpQkFBYSxFQUFFLHlCQUFXO0FBQ3hCLFdBQUtGLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsSUFBeEI7QUFDRCxLQVRNO0FBVVBHLFFBQUksRUFBRSxnQkFBVztBQUNmLFdBQUtILFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkIsU0FBN0I7QUFDRCxLQVpNO0FBYVBJLGNBQVUsRUFBRSxzQkFBVztBQUNyQixXQUFLQyxZQUFMLENBQWtCLElBQWxCO0FBQ0QsS0FmTTtBQWdCUEMsZUFBVyxFQUFFLHVCQUFXO0FBQ3RCLFdBQUtELFlBQUwsQ0FBa0IsS0FBbEI7QUFDRCxLQWxCTTtBQW1CUEUsaUJBQWEsRUFBRSx5QkFBVztBQUN4QixXQUFLRixZQUFMLENBQWtCLElBQWxCO0FBQ0QsS0FyQk07QUFzQlBHLFNBQUssRUFBRSxpQkFBVztBQUNoQixXQUFLUixZQUFMLENBQWtCLElBQWxCLEVBQXdCLFlBQXhCO0FBQ0QsS0F4Qk07QUF5QlBTLFFBQUksRUFBRSxnQkFBVztBQUNmLFdBQUtULFlBQUwsQ0FBa0IsR0FBbEIsRUFBdUIsWUFBdkI7QUFDRCxLQTNCTTtBQTRCUFUsTUFBRSxFQUFFLGNBQVc7QUFDYixXQUFLQyxNQUFMLENBQVksS0FBWjtBQUNELEtBOUJNO0FBK0JQQyxjQUFVLEVBQUUsc0JBQVc7QUFDckIsVUFBSUEsVUFBVSxHQUFHLENBQUMsS0FBSzdELEVBQUwsQ0FBUThELFNBQVIsQ0FBa0IsWUFBbEIsQ0FBbEIsQ0FEcUIsQ0FHckI7QUFDQTs7QUFDQSxVQUFJLENBQUNELFVBQUwsRUFBaUIsS0FBSzdELEVBQUwsQ0FBUStELFNBQVIsQ0FBa0IsZUFBbEIsRUFBbUNGLFVBQW5DO0FBQ2pCLFdBQUs3RCxFQUFMLENBQVErRCxTQUFSLENBQWtCLFlBQWxCLEVBQWdDRixVQUFoQztBQUNBLFVBQUlBLFVBQUosRUFBZ0IsS0FBSzdELEVBQUwsQ0FBUStELFNBQVIsQ0FBa0IsZUFBbEIsRUFBbUNGLFVBQW5DO0FBQ2pCLEtBdkNNO0FBd0NQRyxrQkFBYyxFQUFFLDBCQUFXO0FBQ3pCLFVBQUksS0FBS2hFLEVBQUwsQ0FBUThELFNBQVIsQ0FBa0IsWUFBbEIsQ0FBSixFQUFxQztBQUNuQyxhQUFLOUQsRUFBTCxDQUFRK0QsU0FBUixDQUFrQixlQUFsQixFQUFtQ0YsVUFBbkM7QUFDQSxhQUFLN0QsRUFBTCxDQUFRK0QsU0FBUixDQUFrQixZQUFsQixFQUFnQyxLQUFoQztBQUNEO0FBQ0YsS0E3Q007QUE4Q1BFLFdBQU8sRUFBRSxtQkFBVztBQUNsQixXQUFLakUsRUFBTCxDQUFRK0QsU0FBUixDQUFrQixTQUFsQixFQUE2QixDQUFDLEtBQUsvRCxFQUFMLENBQVE4RCxTQUFSLENBQWtCLFNBQWxCLENBQTlCO0FBQ0Q7QUFoRE0sR0FyS1c7O0FBd05wQjs7OztBQUlBRixRQUFNLEVBQUUsU0FBU0EsTUFBVCxDQUFnQk0sU0FBaEIsRUFBMkI7QUFDakMsUUFBSUMsR0FBRyxHQUFHLEtBQUtuRSxFQUFMLENBQVFvRSxNQUFSLEVBQVY7QUFDQSxRQUFJQyxNQUFNLEdBQUdGLEdBQUcsQ0FBQ0csU0FBSixFQUFiO0FBRUFILE9BQUcsQ0FBQ0ksWUFBSixDQUFpQkwsU0FBakIsRUFBNEI7QUFBRU0sVUFBSSxFQUFFSCxNQUFNLENBQUNHLElBQWY7QUFBcUJDLFFBQUUsRUFBRUosTUFBTSxDQUFDSTtBQUFoQyxLQUE1QjtBQUNELEdBak9tQjs7QUFtT3BCOzs7OztBQUtBeEIsY0FBWSxFQUFFLFNBQVNBLFlBQVQsQ0FBc0J5QixLQUF0QixFQUE2QkMsR0FBN0IsRUFBa0M7QUFDOUMsUUFBSVIsR0FBRyxHQUFHLEtBQUtuRSxFQUFMLENBQVFvRSxNQUFSLEVBQVY7QUFDQSxRQUFJQyxNQUFNLEdBQUdGLEdBQUcsQ0FBQ0csU0FBSixFQUFiOztBQUVBLFFBQUlILEdBQUcsQ0FBQ1MsaUJBQUosRUFBSixFQUE2QjtBQUMzQixVQUFJQyxTQUFTLEdBQUdWLEdBQUcsQ0FBQ1csWUFBSixFQUFoQjs7QUFDQSxVQUFJRCxTQUFTLENBQUNFLFVBQVYsQ0FBcUJMLEtBQXJCLEtBQStCRyxTQUFTLENBQUNHLFFBQVYsQ0FBbUJMLEdBQW5CLENBQW5DLEVBQTREO0FBQzFEUixXQUFHLENBQUNjLGdCQUFKLENBQ0VKLFNBQVMsQ0FBQ0ssU0FBVixDQUFvQlIsS0FBSyxDQUFDaEYsTUFBMUIsRUFBa0NtRixTQUFTLENBQUNuRixNQUFWLEdBQW1CaUYsR0FBRyxDQUFDakYsTUFBekQsQ0FERixFQUVFLFFBRkY7QUFJRCxPQUxELE1BS087QUFDTHlFLFdBQUcsQ0FBQ2MsZ0JBQUosQ0FBcUJQLEtBQUssR0FBR0csU0FBUixHQUFvQkYsR0FBekMsRUFBOEMsUUFBOUM7QUFDRDtBQUNGLEtBVkQsTUFVTztBQUNMO0FBQ0FSLFNBQUcsQ0FBQ0ksWUFBSixDQUFpQkcsS0FBSyxHQUFHQyxHQUF6QixFQUE4QjtBQUFFSCxZQUFJLEVBQUVILE1BQU0sQ0FBQ0csSUFBZjtBQUFxQkMsVUFBRSxFQUFFSixNQUFNLENBQUNJO0FBQWhDLE9BQTlCO0FBQ0FOLFNBQUcsQ0FBQ2dCLFNBQUosQ0FBYztBQUFFWCxZQUFJLEVBQUVILE1BQU0sQ0FBQ0csSUFBZjtBQUFxQkMsVUFBRSxFQUFFSixNQUFNLENBQUNJLEVBQVAsR0FBWUMsS0FBSyxDQUFDaEY7QUFBM0MsT0FBZDtBQUNEO0FBQ0YsR0EzUG1COztBQTZQcEI7Ozs7QUFJQTRELGNBQVksRUFBRSxTQUFTQSxZQUFULENBQXNCWSxTQUF0QixFQUFpQztBQUM3QyxRQUFJQyxHQUFHLEdBQUcsS0FBS25FLEVBQUwsQ0FBUW9FLE1BQVIsRUFBVjtBQUNBLFFBQUlDLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxTQUFKLEVBQWI7O0FBRUEsUUFBSUgsR0FBRyxDQUFDUyxpQkFBSixFQUFKLEVBQTZCO0FBQzNCLFVBQUlRLFVBQVUsR0FBR2pCLEdBQUcsQ0FBQ2tCLGNBQUosRUFBakI7QUFDQSxVQUFJQyxNQUFNLEdBQUcsSUFBYjtBQUNBLFdBQUt0RixFQUFMLENBQVF1RixTQUFSLENBQWtCLFlBQVc7QUFDM0JILGtCQUFVLENBQUN0RSxPQUFYLENBQW1CLFVBQVMrRCxTQUFULEVBQW9CO0FBQ3JDLGNBQUlXLEdBQUcsR0FBRyxDQUFDWCxTQUFTLENBQUNZLElBQVYsQ0FBZWpCLElBQWhCLEVBQXNCSyxTQUFTLENBQUMxQyxNQUFWLENBQWlCcUMsSUFBdkMsRUFBNkNrQixJQUE3QyxFQUFWLENBRHFDLENBR3JDOztBQUNBLGNBQUlKLE1BQU0sSUFBSSxJQUFkLEVBQW9CO0FBQ2xCQSxrQkFBTSxHQUFHbkIsR0FBRyxDQUFDd0IsT0FBSixDQUFZSCxHQUFHLENBQUMsQ0FBRCxDQUFmLEVBQW9CVCxVQUFwQixDQUErQmIsU0FBL0IsQ0FBVDtBQUNEOztBQUVELGVBQUssSUFBSTFFLENBQUMsR0FBR2dHLEdBQUcsQ0FBQyxDQUFELENBQWhCLEVBQXFCaEcsQ0FBQyxJQUFJZ0csR0FBRyxDQUFDLENBQUQsQ0FBN0IsRUFBa0NoRyxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLGdCQUFJOEYsTUFBSixFQUFZO0FBQ1Y7QUFDQSxrQkFBSW5CLEdBQUcsQ0FBQ3dCLE9BQUosQ0FBWW5HLENBQVosRUFBZXVGLFVBQWYsQ0FBMEJiLFNBQTFCLENBQUosRUFBMEM7QUFDeENDLG1CQUFHLENBQUNJLFlBQUosQ0FDRSxFQURGLEVBRUU7QUFBRUMsc0JBQUksRUFBRWhGLENBQVI7QUFBV2lGLG9CQUFFLEVBQUU7QUFBZixpQkFGRixFQUdFO0FBQUVELHNCQUFJLEVBQUVoRixDQUFSO0FBQVdpRixvQkFBRSxFQUFFUCxTQUFTLENBQUN4RTtBQUF6QixpQkFIRjtBQUtEO0FBQ0YsYUFURCxNQVNPO0FBQ0x5RSxpQkFBRyxDQUFDSSxZQUFKLENBQWlCTCxTQUFqQixFQUE0QjtBQUFFTSxvQkFBSSxFQUFFaEYsQ0FBUjtBQUFXaUYsa0JBQUUsRUFBRTtBQUFmLGVBQTVCO0FBQ0Q7QUFDRjtBQUNGLFNBdEJEO0FBdUJELE9BeEJEO0FBeUJELEtBNUJELE1BNEJPO0FBQ0wsVUFBSUQsSUFBSSxHQUFHSCxNQUFNLENBQUNHLElBQWxCOztBQUNBLFVBQUlMLEdBQUcsQ0FBQ3dCLE9BQUosQ0FBWW5CLElBQVosRUFBa0JPLFVBQWxCLENBQTZCYixTQUE3QixDQUFKLEVBQTZDO0FBQzNDQyxXQUFHLENBQUNJLFlBQUosQ0FDRSxFQURGLEVBRUU7QUFBRUMsY0FBSSxFQUFFQSxJQUFSO0FBQWNDLFlBQUUsRUFBRTtBQUFsQixTQUZGLEVBR0U7QUFBRUQsY0FBSSxFQUFFQSxJQUFSO0FBQWNDLFlBQUUsRUFBRVAsU0FBUyxDQUFDeEU7QUFBNUIsU0FIRjtBQUtELE9BTkQsTUFNTztBQUNMeUUsV0FBRyxDQUFDSSxZQUFKLENBQWlCTCxTQUFqQixFQUE0QjtBQUFFTSxjQUFJLEVBQUVBLElBQVI7QUFBY0MsWUFBRSxFQUFFO0FBQWxCLFNBQTVCO0FBQ0Q7QUFDRjtBQUNGO0FBN1NtQixDQUF0QjtBQWdUQTs7Ozs7OztBQU1BLFNBQVNtQixVQUFULENBQW9CekYsT0FBcEIsRUFBNkJDLE9BQTdCLEVBQXNDO0FBQ3BDO0FBQ0EsTUFBSXlGLFFBQVEsR0FBRztBQUNiQyxRQUFJLEVBQUUsS0FETztBQUVibEYsU0FBSyxFQUFFLG9CQUZNO0FBR2JtRixXQUFPLEVBQUUsR0FISTtBQUliQyxrQkFBYyxFQUFFLElBSkg7QUFLYkMsZ0JBQVksRUFBRSxJQUxEO0FBTWJDLHFCQUFpQixFQUFFLElBTk47QUFPYkMsaUJBQWEsRUFBRSxJQVBGO0FBUWJDLGdCQUFZLEVBQUUsSUFSRDtBQVNiL0YsZUFBVyxFQUFFLElBVEE7QUFVYnNCLGFBQVMsRUFBRTtBQUNUMEUsV0FBSyxFQUFFO0FBREU7QUFWRSxHQUFmLENBRm9DLENBaUJwQzs7QUFDQWxILE9BQUssQ0FBQzBHLFFBQUQsRUFBV3pGLE9BQVgsQ0FBTDtBQUVBLFNBQU9qQixLQUFLLENBQUNtSCxNQUFNLENBQUNDLE1BQVAsQ0FBYzNHLGVBQWQsQ0FBRCxFQUFpQztBQUMzQ08sV0FBTyxFQUFFQSxPQURrQztBQUUzQ0MsV0FBTyxFQUFFeUY7QUFGa0MsR0FBakMsQ0FBWjtBQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQzFUa0MsSUFBSSxDQUFDLEdBQUc7Ozs7Ozt5Q0FFZSxJQUFJLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztpRUFGL0IsSUFBSSxDQUFDLEdBQUc7Ozs7eUVBRWUsSUFBSSxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBSm5ELEtBQUs7Ozs7b0NBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lIQWZRLFNBQVMsR0FBRyxnQkFBZ0IsR0FBRyxFQUFFOzs7d0ZBS2lDLFVBQVU7K0VBSTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQU14RDs7Ozs7OztxQkFBSyxLQUFLOzt1Q0FBVjs7Ozs7Ozs7Ozs7OzZCQUFBOzs7Z0JBQUE7OztzRkFmUSxTQUFTLEdBQUcsZ0JBQWdCLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFuQ2xELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQzs7O0NBQUE7Q0FDZCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7Q0FDZixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7O0NBRXJCLFNBQVMsVUFBVSxDQUFDLEtBQUssRUFBRTtHQUN6QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDOztHQUV6QixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUN4QixJQUFJLElBQUksR0FBRyxRQUFRO1FBQ2hCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztRQUNoQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7O0tBRTNCLE1BQU0sRUFBRSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7S0FDMUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xDLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDOztLQUUvQixLQUFLLENBQUMsZUFBZSxFQUFFO09BQ3JCLE1BQU0sRUFBRSxNQUFNO09BQ2QsSUFBSSxFQUFFLEVBQUU7TUFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsUUFBUSxFQUFFO09BQ3pCLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRTtNQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFO09BQ3JCLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7K0JBQ3JCLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLEVBQUMsQ0FBQzttQ0FDOUIsU0FBUyxHQUFHLE1BQUssQ0FBQztRQUNuQixJQUFJO1NBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzFCO01BQ0YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRTtPQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQztNQUNsQyxDQUFDLENBQUM7SUFDSjtFQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTVyxVQUFULEdBQXNCO0FBQ3BCLE1BQU1DLE1BQU0sR0FBR2IsaUZBQVUsQ0FBQ25GLFFBQVEsQ0FBQ2lHLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBRCxFQUFvQztBQUMzRHJHLGVBQVcsRUFBRSxLQUQ4QztBQUUzRHNHLGFBQVMsRUFBRSxJQUZnRDtBQUczRFosV0FBTyxFQUFFLENBSGtEO0FBSTNEcEUsYUFBUyxFQUFFO0FBQ1QwRSxXQUFLLEVBQUU7QUFERTtBQUpnRCxHQUFwQyxDQUF6QjtBQVFBSSxRQUFNLENBQUM1RyxNQUFQO0FBQ0Q7O0FBRUQsU0FBUytHLGFBQVQsR0FBeUI7QUFDdkIsTUFBSUMsSUFBSSxHQUFHcEcsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQW1HLE1BQUksQ0FBQ0MsRUFBTCxHQUFVLFlBQVY7QUFDQXJHLFVBQVEsQ0FBQ3NHLElBQVQsQ0FBYy9GLFdBQWQsQ0FBMEI2RixJQUExQjtBQUNBLE1BQU1HLFNBQVMsR0FBRyxJQUFJQyxxRUFBSixDQUFjO0FBQzlCQyxVQUFNLEVBQUV6RyxRQUFRLENBQUNpRyxjQUFULENBQXdCLFlBQXhCLENBRHNCO0FBRTlCUyxTQUFLLEVBQUU7QUFGdUIsR0FBZCxDQUFsQjtBQUlEOztBQUVEWCxVQUFVO0FBQ1ZJLGFBQWEsRyIsImZpbGUiOiJqcy9hZG1pbi9tYXJrZG93bl9lZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYWRtaW4vbWFya2Rvd25fZWRpdG9yXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYWRtaW4vbWFya2Rvd25fZWRpdG9yLmpzXCIsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IENvZGVNaXJyb3IgZnJvbSBcImNvZGVtaXJyb3JcIjtcbmltcG9ydCBcImNvZGVtaXJyb3IvbW9kZS9nZm0vZ2ZtXCI7XG5pbXBvcnQgXCJjb2RlbWlycm9yL21vZGUvamF2YXNjcmlwdC9qYXZhc2NyaXB0XCI7XG5pbXBvcnQgXCJjb2RlbWlycm9yL21vZGUvcHl0aG9uL3B5dGhvblwiO1xuaW1wb3J0IFwiY29kZW1pcnJvci9tb2RlL2h0bWxtaXhlZC9odG1sbWl4ZWRcIjtcbmltcG9ydCBcImNvZGVtaXJyb3IvbW9kZS9lcmxhbmcvZXJsYW5nXCI7XG5pbXBvcnQgXCJjb2RlbWlycm9yLW1vZGUtZWxpeGlyXCI7XG5cbi8qKlxuICogTWVyZ2VcbiAqXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fVx0XHRvYmplY3QgVGhlIG9iamVjdCB0byBtZXJnZSBpbnRvXG4gKiBAcGFyYW0gIHtPYmplY3QvQXJyYXl9ICBzb3VyY2UgVGhlIG9iamVjdCBvciBhcnJheSBvZiBvYmplY3RzIHRvIG1lcmdlXG4gKiBAcmV0dXJuIHtPYmplY3R9XHRcdCBUaGUgb3JpZ2luYWwgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIG1lcmdlKG9iamVjdCwgc291cmNlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICBmb3IgKHZhciBpID0gc291cmNlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbWVyZ2Uob2JqZWN0LCBzb3VyY2VbaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBhdHRybmFtZSBpbiBzb3VyY2UpIHtcbiAgICAgIG9iamVjdFthdHRybmFtZV0gPSBzb3VyY2VbYXR0cm5hbWVdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogT3VyIGRlbGVnYXRlIHByb3RvdHlwZSB1c2VkIGJ5IG91ciBmYWN0b3J5XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgbWlycm9yTWFya1Byb3RvID0ge1xuICAvKipcbiAgICogUmVuZGVyIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHRoaXMucmVnaXN0ZXJLZXlNYXBzKHRoaXMua2V5TWFwcyk7XG4gICAgdGhpcy5jbSA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1Rvb2xiYXIpIHtcbiAgICAgIHRoaXMuc2V0VG9vbGJhcih0aGlzLnRvb2xzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSB0b29sYmFyXG4gICAqL1xuICBzZXRUb29sYmFyOiBmdW5jdGlvbiBzZXRUb29sYmFyKHRvb2xzKSB7XG4gICAgdmFyIHRvb2xiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdG9vbGJhci5jbGFzc05hbWUgPSB0aGlzLm9wdGlvbnMudGhlbWUgKyBcIi1cIiArIFwidG9vbGJhclwiO1xuXG4gICAgdmFyIHRvb2xzID0gdGhpcy5nZW5lcmF0ZVRvb2xMaXN0KHRvb2xzKTtcblxuICAgIHRvb2xzLmZvckVhY2goZnVuY3Rpb24odG9vbCkge1xuICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZCh0b29sKTtcbiAgICB9KTtcblxuICAgIHZhciBjbVdyYXBwZXIgPSB0aGlzLmNtLmdldFdyYXBwZXJFbGVtZW50KCk7XG4gICAgY21XcmFwcGVyLmluc2VydEJlZm9yZSh0b29sYmFyLCBjbVdyYXBwZXIuZmlyc3RDaGlsZCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIEtleW1hcHMgYnkgZXh0ZW5kaW5nIHRoZSBleHRyYUtleXMgb2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBrZXlNYXBzXG4gICAqL1xuICByZWdpc3RlcktleU1hcHM6IGZ1bmN0aW9uIHJlZ2lzdGVyS2V5TWFwcyhrZXlNYXBzKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBrZXlNYXBzKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuYWN0aW9uc1trZXlNYXBzW25hbWVdXSAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICB0aHJvdyBcIk1pcnJvck1hcmsgLSAnXCIgKyBrZXlNYXBzW25hbWVdICsgXCInIGlzIG5vdCBhIHJlZ2lzdGVyZWQgYWN0aW9uXCI7XG5cbiAgICAgIHZhciByZWFsTmFtZSA9IG5hbWUucmVwbGFjZShcbiAgICAgICAgXCJDbWQtXCIsXG4gICAgICAgIENvZGVNaXJyb3Iua2V5TWFwW1wiZGVmYXVsdFwiXSA9PSBDb2RlTWlycm9yLmtleU1hcC5tYWNEZWZhdWx0XG4gICAgICAgICAgPyBcIkNtZC1cIlxuICAgICAgICAgIDogXCJDdHJsLVwiXG4gICAgICApO1xuICAgICAgdGhpcy5vcHRpb25zLmV4dHJhS2V5c1tyZWFsTmFtZV0gPSB0aGlzLmFjdGlvbnNba2V5TWFwc1tuYW1lXV0uYmluZCh0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGFjdGlvbnMgYnkgZXh0ZW5kaW5nIHRoZSBkZWZhdWx0IGFjdGlvbnNcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhY3Rpb25zIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHJlZ2lzdGVyQWN0aW9uczogZnVuY3Rpb24gcmVnaXN0ZXJBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICByZXR1cm4gbWVyZ2UodGhpcy5hY3Rpb25zLCBhY3Rpb25zKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVnaXN0ZXIgdG9vbHMgYnkgZXh0ZW5kaW5nIGFuZCBvdmVyd3JpdGluZyB0aGUgZGVmYXVsdCB0b29sc1xuICAgKiBAcGFyYW0gIHtBcnJheX0gdG9vbHNcbiAgICogQHBhcmFtICB7Qm9vbH0gcmVwbGFjZSAtIHJlcGxhY2UgdGhlIGRlZmF1bHQgdG9vbHMgd2l0aCB0aGUgb25lcyBwcm92aWRlZC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICByZWdpc3RlclRvb2xzOiBmdW5jdGlvbiByZWdpc3RlclRvb2xzKHRvb2xzLCByZXBsYWNlKSB7XG4gICAgZm9yICh2YXIgYWN0aW9uIGluIHRvb2xzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuYWN0aW9uc1t0b29sc1thY3Rpb25dLmFjdGlvbl0gJiZcbiAgICAgICAgdHlwZW9mIHRoaXMuYWN0aW9uc1t0b29sc1thY3Rpb25dLmFjdGlvbl0gIT09IFwiZnVuY3Rpb25cIlxuICAgICAgKVxuICAgICAgICB0aHJvdyBcIk1pcnJvck1hcmsgLSAnXCIgK1xuICAgICAgICAgIHRvb2xzW2FjdGlvbl0uYWN0aW9uICtcbiAgICAgICAgICBcIicgaXMgbm90IGEgcmVnaXN0ZXJlZCBhY3Rpb25cIjtcbiAgICB9XG5cbiAgICBpZiAocmVwbGFjZSkge1xuICAgICAgdGhpcy50b29scyA9IHRvb2xzO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9vbHMgPSB0aGlzLnRvb2xzLmNvbmNhdCh0b29scyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgcmVjdXJzaXZlIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGFuZCByZXR1cm4gYW4gdW5vcmRlcmVkIGxpc3Qgb2YgdG9vbHNcbiAgICogQHBhcmFtICB7T2JqZWN0fVxuICAgKi9cbiAgZ2VuZXJhdGVUb29sTGlzdDogZnVuY3Rpb24gZ2VuZXJhdGVUb29sTGlzdCh0b29scykge1xuICAgIHJldHVybiB0b29scy5tYXAoXG4gICAgICBmdW5jdGlvbih0b29sKSB7XG4gICAgICAgIHZhciBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpLFxuICAgICAgICAgIGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gdG9vbC5uYW1lO1xuXG4gICAgICAgIGlmICh0b29sLmNsYXNzTmFtZSkge1xuICAgICAgICAgIGFuY2hvci5jbGFzc05hbWUgPSB0b29sLmNsYXNzTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b29sLnNob3dOYW1lKSB7XG4gICAgICAgICAgdmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0b29sLm5hbWUpO1xuICAgICAgICAgIGFuY2hvci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b29sLmFjdGlvbikge1xuICAgICAgICAgIGFuY2hvci5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdGhpcy5jbS5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zW3Rvb2wuYWN0aW9uXS5jYWxsKHRoaXMpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoYW5jaG9yKTtcblxuICAgICAgICBpZiAodG9vbC5uZXN0ZWQpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTmFtZSArPSBcIiBoYXMtbmVzdGVkXCI7XG4gICAgICAgICAgdmFyIHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAgIHVsLmNsYXNzTmFtZSA9IHRoaXMub3B0aW9ucy50aGVtZSArIFwiLXRvb2xiYXItbGlzdFwiO1xuICAgICAgICAgIHZhciBuZXN0ZWQgPSBnZW5lcmF0ZVRvb2xMaXN0LmNhbGwodGhpcywgdG9vbC5uZXN0ZWQpO1xuICAgICAgICAgIG5lc3RlZC5mb3JFYWNoKGZ1bmN0aW9uKG5lc3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKG5lc3RlZEl0ZW0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgVG9vbHMgaW4gVG9vbGJhclxuICAgKi9cbiAgdG9vbHM6IFtcbiAgICB7IG5hbWU6IFwiYm9sZFwiLCBhY3Rpb246IFwiYm9sZFwiIH0sXG4gICAgeyBuYW1lOiBcIml0YWxpY2l6ZVwiLCBhY3Rpb246IFwiaXRhbGljaXplXCIgfSxcbiAgICB7IG5hbWU6IFwiYmxvY2txdW90ZVwiLCBhY3Rpb246IFwiYmxvY2txdW90ZVwiIH0sXG4gICAgeyBuYW1lOiBcInN0cmlrZXRocm91Z2hcIiwgYWN0aW9uOiBcInN0cmlrZXRocm91Z2hcIiB9LFxuICAgIHsgbmFtZTogXCJsaW5rXCIsIGFjdGlvbjogXCJsaW5rXCIgfSxcbiAgICB7IG5hbWU6IFwiaW1hZ2VcIiwgYWN0aW9uOiBcImltYWdlXCIgfSxcbiAgICB7IG5hbWU6IFwidW5vcmRlcmVkTGlzdFwiLCBhY3Rpb246IFwidW5vcmRlcmVkTGlzdFwiIH0sXG4gICAgeyBuYW1lOiBcIm9yZGVyZWRMaXN0XCIsIGFjdGlvbjogXCJvcmRlcmVkTGlzdFwiIH0sXG4gICAgeyBuYW1lOiBcImZ1bGxTY3JlZW5cIiwgYWN0aW9uOiBcImZ1bGxTY3JlZW5cIiB9LFxuICAgIHsgbmFtZTogXCJwcmV2aWV3XCIsIGFjdGlvbjogXCJwcmV2aWV3XCIgfVxuICBdLFxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IEtleW1hcHNcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGtleU1hcHM6IHtcbiAgICBcIkNtZC1CXCI6IFwiYm9sZFwiLFxuICAgIFwiQ21kLUlcIjogXCJpdGFsaWNpemVcIixcbiAgICBcIkNtZC0nXCI6IFwiYmxvY2txdW90ZVwiLFxuICAgIFwiQ21kLUFsdC1MXCI6IFwib3JkZXJlZExpc3RcIixcbiAgICBcIkNtZC1MXCI6IFwidW5vcmRlcmVkTGlzdFwiLFxuICAgIFwiQ21kLUFsdC1JXCI6IFwiaW1hZ2VcIixcbiAgICBcIkNtZC1IXCI6IFwiaHJcIixcbiAgICBcIkNtZC1LXCI6IFwibGlua1wiLFxuICAgIEYxMTogXCJmdWxsU2NyZWVuXCIsXG4gICAgRXNjOiBcImV4aXRGdWxsU2NyZWVuXCJcbiAgfSxcblxuICAvKipcbiAgICogRGVmYXVsdCBBY3Rpb25zXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBhY3Rpb25zOiB7XG4gICAgYm9sZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRvZ2dsZUFyb3VuZChcIioqXCIsIFwiKipcIik7XG4gICAgfSxcbiAgICBpdGFsaWNpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50b2dnbGVBcm91bmQoXCIqXCIsIFwiKlwiKTtcbiAgICB9LFxuICAgIHN0cmlrZXRocm91Z2g6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50b2dnbGVBcm91bmQoXCJ+flwiLCBcIn5+XCIpO1xuICAgIH0sXG4gICAgY29kZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRvZ2dsZUFyb3VuZChcImBgYFxcclxcblwiLCBcIlxcclxcbmBgYFwiKTtcbiAgICB9LFxuICAgIGJsb2NrcXVvdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50b2dnbGVCZWZvcmUoXCI+IFwiKTtcbiAgICB9LFxuICAgIG9yZGVyZWRMaXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudG9nZ2xlQmVmb3JlKFwiMS4gXCIpO1xuICAgIH0sXG4gICAgdW5vcmRlcmVkTGlzdDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJlZm9yZShcIiogXCIpO1xuICAgIH0sXG4gICAgaW1hZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50b2dnbGVBcm91bmQoXCIhW1wiLCBcIl0oaHR0cDovLylcIik7XG4gICAgfSxcbiAgICBsaW5rOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudG9nZ2xlQXJvdW5kKFwiW1wiLCBcIl0oaHR0cDovLylcIik7XG4gICAgfSxcbiAgICBocjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmluc2VydChcIi0tLVwiKTtcbiAgICB9LFxuICAgIGZ1bGxTY3JlZW46IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGZ1bGxTY3JlZW4gPSAhdGhpcy5jbS5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpO1xuXG4gICAgICAvLyBZb3UgbXVzdCB0dXJuIG9mZiBzY3JvbGxQYXN0RW5kIG9uIGFmdGVyIGdvaW5nIGZ1bGwgc2NyZWVuXG4gICAgICAvLyBhbmQgYmVmb3JlIGV4aXRpbmcgaXRcbiAgICAgIGlmICghZnVsbFNjcmVlbikgdGhpcy5jbS5zZXRPcHRpb24oXCJzY3JvbGxQYXN0RW5kXCIsIGZ1bGxTY3JlZW4pO1xuICAgICAgdGhpcy5jbS5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsIGZ1bGxTY3JlZW4pO1xuICAgICAgaWYgKGZ1bGxTY3JlZW4pIHRoaXMuY20uc2V0T3B0aW9uKFwic2Nyb2xsUGFzdEVuZFwiLCBmdWxsU2NyZWVuKTtcbiAgICB9LFxuICAgIGV4aXRGdWxsU2NyZWVuOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmNtLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpIHtcbiAgICAgICAgdGhpcy5jbS5zZXRPcHRpb24oXCJzY3JvbGxQYXN0RW5kXCIsIGZ1bGxTY3JlZW4pO1xuICAgICAgICB0aGlzLmNtLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJldmlldzogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmNtLnNldE9wdGlvbihcInByZXZpZXdcIiwgIXRoaXMuY20uZ2V0T3B0aW9uKFwicHJldmlld1wiKSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBJbnNlcnQgYSBzdHJpbmcgYXQgY3Vyc29yIHBvc2l0aW9uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaW5zZXJ0aW9uXG4gICAqL1xuICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydChpbnNlcnRpb24pIHtcbiAgICB2YXIgZG9jID0gdGhpcy5jbS5nZXREb2MoKTtcbiAgICB2YXIgY3Vyc29yID0gZG9jLmdldEN1cnNvcigpO1xuXG4gICAgZG9jLnJlcGxhY2VSYW5nZShpbnNlcnRpb24sIHsgbGluZTogY3Vyc29yLmxpbmUsIGNoOiBjdXJzb3IuY2ggfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBhIHN0cmluZyBhdCB0aGUgc3RhcnQgYW5kIGVuZCBvZiBhIHNlbGVjdGlvblxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0YXJ0IFN0YXJ0IHN0cmluZyB0byB3cmFwXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZW5kICBFbmQgc3RyaW5nIHRvIHdyYXBcbiAgICovXG4gIHRvZ2dsZUFyb3VuZDogZnVuY3Rpb24gdG9nZ2xlQXJvdW5kKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgZG9jID0gdGhpcy5jbS5nZXREb2MoKTtcbiAgICB2YXIgY3Vyc29yID0gZG9jLmdldEN1cnNvcigpO1xuXG4gICAgaWYgKGRvYy5zb21ldGhpbmdTZWxlY3RlZCgpKSB7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gZG9jLmdldFNlbGVjdGlvbigpO1xuICAgICAgaWYgKHNlbGVjdGlvbi5zdGFydHNXaXRoKHN0YXJ0KSAmJiBzZWxlY3Rpb24uZW5kc1dpdGgoZW5kKSkge1xuICAgICAgICBkb2MucmVwbGFjZVNlbGVjdGlvbihcbiAgICAgICAgICBzZWxlY3Rpb24uc3Vic3RyaW5nKHN0YXJ0Lmxlbmd0aCwgc2VsZWN0aW9uLmxlbmd0aCAtIGVuZC5sZW5ndGgpLFxuICAgICAgICAgIFwiYXJvdW5kXCJcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvYy5yZXBsYWNlU2VsZWN0aW9uKHN0YXJ0ICsgc2VsZWN0aW9uICsgZW5kLCBcImFyb3VuZFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgbm8gc2VsZWN0aW9uIHRoZW4gaW5zZXJ0IHN0YXJ0IGFuZCBlbmQgYXJncyBhbmQgc2V0IGN1cnNvciBwb3NpdGlvbiBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICBkb2MucmVwbGFjZVJhbmdlKHN0YXJ0ICsgZW5kLCB7IGxpbmU6IGN1cnNvci5saW5lLCBjaDogY3Vyc29yLmNoIH0pO1xuICAgICAgZG9jLnNldEN1cnNvcih7IGxpbmU6IGN1cnNvci5saW5lLCBjaDogY3Vyc29yLmNoICsgc3RhcnQubGVuZ3RoIH0pO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVG9nZ2xlIGEgc3RyaW5nIGJlZm9yZSBhIHNlbGVjdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gaW5zZXJ0aW9uXHRTdHJpbmcgdG8gaW5zZXJ0XG4gICAqL1xuICB0b2dnbGVCZWZvcmU6IGZ1bmN0aW9uIHRvZ2dsZUJlZm9yZShpbnNlcnRpb24pIHtcbiAgICB2YXIgZG9jID0gdGhpcy5jbS5nZXREb2MoKTtcbiAgICB2YXIgY3Vyc29yID0gZG9jLmdldEN1cnNvcigpO1xuXG4gICAgaWYgKGRvYy5zb21ldGhpbmdTZWxlY3RlZCgpKSB7XG4gICAgICB2YXIgc2VsZWN0aW9ucyA9IGRvYy5saXN0U2VsZWN0aW9ucygpO1xuICAgICAgdmFyIHJlbW92ZSA9IG51bGw7XG4gICAgICB0aGlzLmNtLm9wZXJhdGlvbihmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdGlvbikge1xuICAgICAgICAgIHZhciBwb3MgPSBbc2VsZWN0aW9uLmhlYWQubGluZSwgc2VsZWN0aW9uLmFuY2hvci5saW5lXS5zb3J0KCk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgaWYgdGhlIGZpcnN0IHRleHQgc3RhcnRzIHdpdGggaXRcbiAgICAgICAgICBpZiAocmVtb3ZlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJlbW92ZSA9IGRvYy5nZXRMaW5lKHBvc1swXSkuc3RhcnRzV2l0aChpbnNlcnRpb24pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIGkgPSBwb3NbMF07IGkgPD0gcG9zWzFdOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgICAgICAgLy8gRG9uJ3QgcmVtb3ZlIGlmIHdlIGRvbid0IHN0YXJ0IHdpdGggaXRcbiAgICAgICAgICAgICAgaWYgKGRvYy5nZXRMaW5lKGkpLnN0YXJ0c1dpdGgoaW5zZXJ0aW9uKSkge1xuICAgICAgICAgICAgICAgIGRvYy5yZXBsYWNlUmFuZ2UoXG4gICAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgICAgeyBsaW5lOiBpLCBjaDogMCB9LFxuICAgICAgICAgICAgICAgICAgeyBsaW5lOiBpLCBjaDogaW5zZXJ0aW9uLmxlbmd0aCB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZG9jLnJlcGxhY2VSYW5nZShpbnNlcnRpb24sIHsgbGluZTogaSwgY2g6IDAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGluZSA9IGN1cnNvci5saW5lO1xuICAgICAgaWYgKGRvYy5nZXRMaW5lKGxpbmUpLnN0YXJ0c1dpdGgoaW5zZXJ0aW9uKSkge1xuICAgICAgICBkb2MucmVwbGFjZVJhbmdlKFxuICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgeyBsaW5lOiBsaW5lLCBjaDogMCB9LFxuICAgICAgICAgIHsgbGluZTogbGluZSwgY2g6IGluc2VydGlvbi5sZW5ndGggfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jLnJlcGxhY2VSYW5nZShpbnNlcnRpb24sIHsgbGluZTogbGluZSwgY2g6IDAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIE91ciBGYWN0b3J5XG4gKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBtaXJyb3JNYXJrKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgLy8gRGVmYXVsdHNcbiAgdmFyIGRlZmF1bHRzID0ge1xuICAgIG1vZGU6IFwiZ2ZtXCIsXG4gICAgdGhlbWU6IFwiZGVmYXVsdCBtaXJyb3JtYXJrXCIsXG4gICAgdGFiU2l6ZTogXCIyXCIsXG4gICAgaW5kZW50V2l0aFRhYnM6IHRydWUsXG4gICAgbGluZVdyYXBwaW5nOiB0cnVlLFxuICAgIGF1dG9DbG9zZUJyYWNrZXRzOiB0cnVlLFxuICAgIGF1dG9DbG9zZVRhZ3M6IHRydWUsXG4gICAgYWRkTW9kZUNsYXNzOiB0cnVlLFxuICAgIHNob3dUb29sYmFyOiB0cnVlLFxuICAgIGV4dHJhS2V5czoge1xuICAgICAgRW50ZXI6IFwibmV3bGluZUFuZEluZGVudENvbnRpbnVlTWFya2Rvd25MaXN0XCJcbiAgICB9XG4gIH07XG5cbiAgLy8gRXh0ZW5kIG91ciBkZWZhdWx0cyB3aXRoIHRoZSBvcHRpb25zIHByb3ZpZGVkXG4gIG1lcmdlKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICByZXR1cm4gbWVyZ2UoT2JqZWN0LmNyZWF0ZShtaXJyb3JNYXJrUHJvdG8pLCB7XG4gICAgZWxlbWVudDogZWxlbWVudCxcbiAgICBvcHRpb25zOiBkZWZhdWx0c1xuICB9KTtcbn1cblxuZXhwb3J0IHsgbWlycm9yTWFyayB9O1xuIiwiPHNjcmlwdD5cbiBpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcbiBsZXQgY291bnQgPSAwO1xuIGxldCBmaWxlcyA9IFtdO1xuIGxldCBjb2xsYXBzZWQgPSB0cnVlO1xuXG4gZnVuY3Rpb24gdXBsb2FkRmlsZShldmVudCkge1xuICAgdmFyIGlucHV0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICBpZihpbnB1dC5maWxlcy5sZW5ndGggPiAwKXtcbiAgICAgdmFyIGNzcmYgPSBkb2N1bWVudFxuICAgICAgIC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPWNzcmZdXCIpXG4gICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIik7XG5cbiAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgZmQuYXBwZW5kKFwiZmlsZVwiLCBpbnB1dC5maWxlc1swXSk7XG4gICAgIGZkLmFwcGVuZChcIl9jc3JmX3Rva2VuXCIsIGNzcmYpO1xuXG4gICAgIGZldGNoKCcvYWRtaW4vdXBsb2FkJywge1xuICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgIGJvZHk6IGZkXG4gICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgIH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgICAgIGlmKGpzb24uc3RhdHVzID09IFwiT0tcIil7XG4gICAgICAgICBmaWxlcyA9IFtqc29uLmRhdGEsIC4uLmZpbGVzXTtcbiAgICAgICAgIGNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgIH1lbHNle1xuICAgICAgICAgY29uc29sZS5sb2coanNvbi5tZXNzYWdlKVxuICAgICAgIH1cbiAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcbiAgICAgICBjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcbiAgICAgfSk7XG4gICB9XG4gfVxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJjYXJkIHtjb2xsYXBzZWQgPyAnY2FyZC1jb2xsYXBzZWQnIDogJyd9XCI+XG4gIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBwLTRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1vcHRpb25zIG0tMCB3LTEwMFwiPlxuXG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCIvdXBsb2Fkc1wiIGNsYXNzPVwibXItNVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiZC1ub25lXCIgbmFtZT1cImZpbGVcIiBpZD1cImZpbGUtc2VsZWN0XCIgb246Y2hhbmdlPXt1cGxvYWRGaWxlfT5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlsZS1zZWxlY3RcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc20gbS0wXCI+IDxpIGNsYXNzPVwiZmUgZmUtdXBsb2FkIG1yLTFcIj48L2k+IFVwbG9hZCBmaWxlPC9sYWJlbD5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiY2FyZC1vcHRpb25zLWNvbGxhcHNlIG1sLWF1dG9cIiBvbjpjbGljaz17ZSA9PiBjb2xsYXBzZWQgPSAhY29sbGFwc2VkfT48aSBjbGFzcz1cImZlIGZlLWNoZXZyb24tdXBcIj48L2k+PC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTJcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDE1MHB4OyBvdmVyZmxvdy15OiBhdXRvO1wiPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGNhcmQtdGFibGUgdGFibGUtdmNlbnRlclwiPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7I2VhY2ggZmlsZXMgYXMgZmlsZSB9XG4gICAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPVwicC0xXCI+PGltZyBzcmM9XCJ7ZmlsZS51cmx9XCIgYWx0PVwiXCIgY2xhc3M9XCJoLTZcIj48L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJwLTFcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwie2ZpbGUudXJsfVwiIG9uQ2xpY2s9XCJ0aGlzLnNldFNlbGVjdGlvblJhbmdlKDAsIHRoaXMudmFsdWUubGVuZ3RoKVwiPiBcbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICB7L2VhY2h9XG4gICAgICA8L3Rib2R5PjwvdGFibGU+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCJpbXBvcnQgXCIuLi8uLi9zY3NzL2FkbWluL2NvbXBvbmVudHMvbWFya2Rvd25fZWRpdG9yLnNjc3NcIjtcbmltcG9ydCB7IG1pcnJvck1hcmsgfSBmcm9tIFwiLi9jb21wb25lbnRzL21hcmtkb3duX2VkaXRvci5qc1wiO1xuaW1wb3J0IFVwbG9hZEJveCBmcm9tIFwiLi9jb21wb25lbnRzL3VwbG9hZF9ib3guc3ZlbHRlXCI7XG5cbmZ1bmN0aW9uIGluaXRFZGl0b3IoKSB7XG4gIGNvbnN0IGVkaXRvciA9IG1pcnJvck1hcmsoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0b3JcIiksIHtcbiAgICBzaG93VG9vbGJhcjogZmFsc2UsXG4gICAgYXV0b2ZvY3VzOiB0cnVlLFxuICAgIHRhYlNpemU6IDQsXG4gICAgZXh0cmFLZXlzOiB7XG4gICAgICBFbnRlcjogXCJuZXdsaW5lQW5kSW5kZW50Q29udGludWVNYXJrZG93bkxpc3RcIlxuICAgIH1cbiAgfSk7XG4gIGVkaXRvci5yZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gaW5pdFVwbG9hZEJveCgpIHtcbiAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBub2RlLmlkID0gXCJ1cGxvYWQtYm94XCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIGNvbnN0IHVwbG9hZEJveCA9IG5ldyBVcGxvYWRCb3goe1xuICAgIHRhcmdldDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWQtYm94XCIpLFxuICAgIHByb3BzOiB7fVxuICB9KTtcbn1cblxuaW5pdEVkaXRvcigpO1xuaW5pdFVwbG9hZEJveCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==