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
/******/ 		"admin": 0
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
/******/ 	deferredModules.push(["./admin.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../deps/phoenix_html/priv/static/phoenix_html.js":
/*!***************************************************************************!*\
  !*** /Users/flex/Lab/chubi/deps/phoenix_html/priv/static/phoenix_html.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var PolyfillEvent = eventConstructor();

  function eventConstructor() {
    if (typeof window.CustomEvent === "function") return window.CustomEvent; // IE<=9 Support

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    return CustomEvent;
  }

  function buildHiddenInput(name, value) {
    var input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    return input;
  }

  function handleClick(element) {
    var to = element.getAttribute("data-to"),
        method = buildHiddenInput("_method", element.getAttribute("data-method")),
        csrf = buildHiddenInput("_csrf_token", element.getAttribute("data-csrf")),
        form = document.createElement("form"),
        target = element.getAttribute("target");
    form.method = element.getAttribute("data-method") === "get" ? "get" : "post";
    form.action = to;
    form.style.display = "hidden";
    if (target) form.target = target;
    form.appendChild(csrf);
    form.appendChild(method);
    document.body.appendChild(form);
    form.submit();
  }

  window.addEventListener("click", function (e) {
    var element = e.target;

    while (element && element.getAttribute) {
      var phoenixLinkEvent = new PolyfillEvent('phoenix.link.click', {
        "bubbles": true,
        "cancelable": true
      });

      if (!element.dispatchEvent(phoenixLinkEvent)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      }

      if (element.getAttribute("data-method")) {
        handleClick(element);
        e.preventDefault();
        return false;
      } else {
        element = element.parentNode;
      }
    }
  }, false);
  window.addEventListener('phoenix.link.click', function (e) {
    var message = e.target.getAttribute("data-confirm");

    if (message && !window.confirm(message)) {
      e.preventDefault();
    }
  }, false);
})();

/***/ }),

/***/ "../scss/admin/index.scss":
/*!********************************!*\
  !*** ../scss/admin/index.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _scss_admin_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/admin/index.scss */ "../scss/admin/index.scss");
/* harmony import */ var _scss_admin_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_admin_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/index.js */ "./admin/index.js");
/* harmony import */ var selectize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! selectize */ "../../node_modules/selectize/dist/js/selectize.js");
/* harmony import */ var selectize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(selectize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var litepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! litepicker */ "../../node_modules/litepicker/dist/js/main.js");
/* harmony import */ var litepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(litepicker__WEBPACK_IMPORTED_MODULE_3__);




$(document).ready(function () {
  $('[data-toggle="selectize"]').selectize({
    delimiter: ",",
    persist: false,
    create: function create(input) {
      return {
        value: input,
        text: input
      };
    }
  }); // if ($("[data-toggle=daterange-picker]").length > 0) {
  //   $("[data-toggle=daterange-picker]").each(function() {
  //     var picker = new Lightpick({
  //       field: this,
  //       singleDate: false
  //     });
  //   });
  // }

  if ($("[data-toggle=datepicker]").length > 0) {
    $("[data-toggle=datepicker]").each(function () {
      var picker = new litepicker__WEBPACK_IMPORTED_MODULE_3___default.a({
        element: this,
        startDate: new Date(),
        singleMode: true
      });
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./admin/core.js":
/*!***********************!*\
  !*** ./admin/core.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  /** Constant div card */
  var DIV_CARD = "div.card";
  /** Initialize tooltips */

  $('[data-toggle="tooltip"]').tooltip();
  /** Initialize popovers */

  $('[data-toggle="popover"]').popover({
    html: true
  });
  /** Function for remove card */

  $('[data-toggle="card-remove"]').on("click", function (e) {
    var $card = $(this).closest(DIV_CARD);
    $card.remove();
    e.preventDefault();
    return false;
  });
  /** Function for collapse card */

  $('[data-toggle="card-collapse"]').on("click", function (e) {
    var $card = $(this).closest(DIV_CARD);
    $card.toggleClass("card-collapsed");
    e.preventDefault();
    return false;
  });
  /** Function for fullscreen card */

  $('[data-toggle="card-fullscreen"]').on("click", function (e) {
    var $card = $(this).closest(DIV_CARD);
    $card.toggleClass("card-fullscreen").removeClass("card-collapsed");
    e.preventDefault();
    return false;
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./admin/index.js":
/*!************************!*\
  !*** ./admin/index.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "../../node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "./admin/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var phoenix_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! phoenix_html */ "../../../deps/phoenix_html/priv/static/phoenix_html.js");
/* harmony import */ var phoenix_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(phoenix_html__WEBPACK_IMPORTED_MODULE_3__);




window.$ = jquery__WEBPACK_IMPORTED_MODULE_0__;

/***/ }),

/***/ "window":
/*!*************************!*\
  !*** external "window" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9mbGV4L0xhYi9jaHViaS9kZXBzL3Bob2VuaXhfaHRtbC9wcml2L3N0YXRpYy9waG9lbml4X2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4uL3Njc3MvYWRtaW4vaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9jb3JlLmpzIiwid2VicGFjazovLy8uL2FkbWluL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvd1wiIl0sIm5hbWVzIjpbIlBvbHlmaWxsRXZlbnQiLCJldmVudENvbnN0cnVjdG9yIiwid2luZG93IiwiQ3VzdG9tRXZlbnQiLCJldmVudCIsInBhcmFtcyIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGV0YWlsIiwidW5kZWZpbmVkIiwiZXZ0IiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsInByb3RvdHlwZSIsIkV2ZW50IiwiYnVpbGRIaWRkZW5JbnB1dCIsIm5hbWUiLCJ2YWx1ZSIsImlucHV0IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJoYW5kbGVDbGljayIsImVsZW1lbnQiLCJ0byIsImdldEF0dHJpYnV0ZSIsIm1ldGhvZCIsImNzcmYiLCJmb3JtIiwidGFyZ2V0IiwiYWN0aW9uIiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJib2R5Iiwic3VibWl0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwaG9lbml4TGlua0V2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwicGFyZW50Tm9kZSIsIm1lc3NhZ2UiLCJjb25maXJtIiwiJCIsInJlYWR5Iiwic2VsZWN0aXplIiwiZGVsaW1pdGVyIiwicGVyc2lzdCIsImNyZWF0ZSIsInRleHQiLCJsZW5ndGgiLCJlYWNoIiwicGlja2VyIiwiTGl0ZXBpY2tlciIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJzaW5nbGVNb2RlIiwiRElWX0NBUkQiLCJ0b29sdGlwIiwicG9wb3ZlciIsImh0bWwiLCJvbiIsIiRjYXJkIiwiY2xvc2VzdCIsInJlbW92ZSIsInRvZ2dsZUNsYXNzIiwicmVtb3ZlQ2xhc3MiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDdkphOztBQUViLENBQUMsWUFBVztBQUNWLE1BQUlBLGFBQWEsR0FBR0MsZ0JBQWdCLEVBQXBDOztBQUVBLFdBQVNBLGdCQUFULEdBQTRCO0FBQzFCLFFBQUksT0FBT0MsTUFBTSxDQUFDQyxXQUFkLEtBQThCLFVBQWxDLEVBQThDLE9BQU9ELE1BQU0sQ0FBQ0MsV0FBZCxDQURwQixDQUUxQjs7QUFDQSxhQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsTUFBNUIsRUFBb0M7QUFDbENBLFlBQU0sR0FBR0EsTUFBTSxJQUFJO0FBQUNDLGVBQU8sRUFBRSxLQUFWO0FBQWlCQyxrQkFBVSxFQUFFLEtBQTdCO0FBQW9DQyxjQUFNLEVBQUVDO0FBQTVDLE9BQW5CO0FBQ0EsVUFBSUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLFdBQVQsQ0FBcUIsYUFBckIsQ0FBVjtBQUNBRixTQUFHLENBQUNHLGVBQUosQ0FBb0JULEtBQXBCLEVBQTJCQyxNQUFNLENBQUNDLE9BQWxDLEVBQTJDRCxNQUFNLENBQUNFLFVBQWxELEVBQThERixNQUFNLENBQUNHLE1BQXJFO0FBQ0EsYUFBT0UsR0FBUDtBQUNEOztBQUNEUCxlQUFXLENBQUNXLFNBQVosR0FBd0JaLE1BQU0sQ0FBQ2EsS0FBUCxDQUFhRCxTQUFyQztBQUNBLFdBQU9YLFdBQVA7QUFDRDs7QUFFRCxXQUFTYSxnQkFBVCxDQUEwQkMsSUFBMUIsRUFBZ0NDLEtBQWhDLEVBQXVDO0FBQ3JDLFFBQUlDLEtBQUssR0FBR1IsUUFBUSxDQUFDUyxhQUFULENBQXVCLE9BQXZCLENBQVo7QUFDQUQsU0FBSyxDQUFDRSxJQUFOLEdBQWEsUUFBYjtBQUNBRixTQUFLLENBQUNGLElBQU4sR0FBYUEsSUFBYjtBQUNBRSxTQUFLLENBQUNELEtBQU4sR0FBY0EsS0FBZDtBQUNBLFdBQU9DLEtBQVA7QUFDRDs7QUFFRCxXQUFTRyxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QixRQUFJQyxFQUFFLEdBQUdELE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixTQUFyQixDQUFUO0FBQUEsUUFDSUMsTUFBTSxHQUFHVixnQkFBZ0IsQ0FBQyxTQUFELEVBQVlPLE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixhQUFyQixDQUFaLENBRDdCO0FBQUEsUUFFSUUsSUFBSSxHQUFHWCxnQkFBZ0IsQ0FBQyxhQUFELEVBQWdCTyxPQUFPLENBQUNFLFlBQVIsQ0FBcUIsV0FBckIsQ0FBaEIsQ0FGM0I7QUFBQSxRQUdJRyxJQUFJLEdBQUdqQixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FIWDtBQUFBLFFBSUlTLE1BQU0sR0FBR04sT0FBTyxDQUFDRSxZQUFSLENBQXFCLFFBQXJCLENBSmI7QUFNQUcsUUFBSSxDQUFDRixNQUFMLEdBQWVILE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixhQUFyQixNQUF3QyxLQUF6QyxHQUFrRCxLQUFsRCxHQUEwRCxNQUF4RTtBQUNBRyxRQUFJLENBQUNFLE1BQUwsR0FBY04sRUFBZDtBQUNBSSxRQUFJLENBQUNHLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixRQUFyQjtBQUVBLFFBQUlILE1BQUosRUFBWUQsSUFBSSxDQUFDQyxNQUFMLEdBQWNBLE1BQWQ7QUFFWkQsUUFBSSxDQUFDSyxXQUFMLENBQWlCTixJQUFqQjtBQUNBQyxRQUFJLENBQUNLLFdBQUwsQ0FBaUJQLE1BQWpCO0FBQ0FmLFlBQVEsQ0FBQ3VCLElBQVQsQ0FBY0QsV0FBZCxDQUEwQkwsSUFBMUI7QUFDQUEsUUFBSSxDQUFDTyxNQUFMO0FBQ0Q7O0FBRURqQyxRQUFNLENBQUNrQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFTQyxDQUFULEVBQVk7QUFDM0MsUUFBSWQsT0FBTyxHQUFHYyxDQUFDLENBQUNSLE1BQWhCOztBQUVBLFdBQU9OLE9BQU8sSUFBSUEsT0FBTyxDQUFDRSxZQUExQixFQUF3QztBQUN0QyxVQUFJYSxnQkFBZ0IsR0FBRyxJQUFJdEMsYUFBSixDQUFrQixvQkFBbEIsRUFBd0M7QUFDN0QsbUJBQVcsSUFEa0Q7QUFDNUMsc0JBQWM7QUFEOEIsT0FBeEMsQ0FBdkI7O0FBSUEsVUFBSSxDQUFDdUIsT0FBTyxDQUFDZ0IsYUFBUixDQUFzQkQsZ0JBQXRCLENBQUwsRUFBOEM7QUFDNUNELFNBQUMsQ0FBQ0csY0FBRjtBQUNBSCxTQUFDLENBQUNJLHdCQUFGO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBSWxCLE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixhQUFyQixDQUFKLEVBQXlDO0FBQ3ZDSCxtQkFBVyxDQUFDQyxPQUFELENBQVg7QUFDQWMsU0FBQyxDQUFDRyxjQUFGO0FBQ0EsZUFBTyxLQUFQO0FBQ0QsT0FKRCxNQUlPO0FBQ0xqQixlQUFPLEdBQUdBLE9BQU8sQ0FBQ21CLFVBQWxCO0FBQ0Q7QUFDRjtBQUNGLEdBdEJELEVBc0JHLEtBdEJIO0FBd0JBeEMsUUFBTSxDQUFDa0MsZ0JBQVAsQ0FBd0Isb0JBQXhCLEVBQThDLFVBQVVDLENBQVYsRUFBYTtBQUN6RCxRQUFJTSxPQUFPLEdBQUdOLENBQUMsQ0FBQ1IsTUFBRixDQUFTSixZQUFULENBQXNCLGNBQXRCLENBQWQ7O0FBQ0EsUUFBR2tCLE9BQU8sSUFBSSxDQUFDekMsTUFBTSxDQUFDMEMsT0FBUCxDQUFlRCxPQUFmLENBQWYsRUFBd0M7QUFDdENOLE9BQUMsQ0FBQ0csY0FBRjtBQUNEO0FBQ0YsR0FMRCxFQUtHLEtBTEg7QUFNRCxDQXpFRCxJOzs7Ozs7Ozs7OztBQ0ZBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUssQ0FBQyxDQUFDbEMsUUFBRCxDQUFELENBQVltQyxLQUFaLENBQWtCLFlBQVc7QUFDM0JELEdBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCRSxTQUEvQixDQUF5QztBQUN2Q0MsYUFBUyxFQUFFLEdBRDRCO0FBRXZDQyxXQUFPLEVBQUUsS0FGOEI7QUFHdkNDLFVBQU0sRUFBRSxnQkFBUy9CLEtBQVQsRUFBZ0I7QUFDdEIsYUFBTztBQUNMRCxhQUFLLEVBQUVDLEtBREY7QUFFTGdDLFlBQUksRUFBRWhDO0FBRkQsT0FBUDtBQUlEO0FBUnNDLEdBQXpDLEVBRDJCLENBWTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSTBCLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCTyxNQUE5QixHQUF1QyxDQUEzQyxFQUE4QztBQUM1Q1AsS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJRLElBQTlCLENBQW1DLFlBQVc7QUFDNUMsVUFBSUMsTUFBTSxHQUFHLElBQUlDLGlEQUFKLENBQWU7QUFDMUJoQyxlQUFPLEVBQUUsSUFEaUI7QUFFMUJpQyxpQkFBUyxFQUFFLElBQUlDLElBQUosRUFGZTtBQUcxQkMsa0JBQVUsRUFBRTtBQUhjLE9BQWYsQ0FBYjtBQUtELEtBTkQ7QUFPRDtBQUNGLENBOUJELEU7Ozs7Ozs7Ozs7OztBQ0xBYiwwQ0FBQyxDQUFDbEMsUUFBRCxDQUFELENBQVltQyxLQUFaLENBQWtCLFlBQVc7QUFDM0I7QUFDQSxNQUFNYSxRQUFRLEdBQUcsVUFBakI7QUFFQTs7QUFDQWQsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJlLE9BQTdCO0FBRUE7O0FBQ0FmLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCZ0IsT0FBN0IsQ0FBcUM7QUFDbkNDLFFBQUksRUFBRTtBQUQ2QixHQUFyQztBQUlBOztBQUNBakIsR0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNrQixFQUFqQyxDQUFvQyxPQUFwQyxFQUE2QyxVQUFTMUIsQ0FBVCxFQUFZO0FBQ3ZELFFBQUkyQixLQUFLLEdBQUduQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvQixPQUFSLENBQWdCTixRQUFoQixDQUFaO0FBRUFLLFNBQUssQ0FBQ0UsTUFBTjtBQUVBN0IsS0FBQyxDQUFDRyxjQUFGO0FBQ0EsV0FBTyxLQUFQO0FBQ0QsR0FQRDtBQVNBOztBQUNBSyxHQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ2tCLEVBQW5DLENBQXNDLE9BQXRDLEVBQStDLFVBQVMxQixDQUFULEVBQVk7QUFDekQsUUFBSTJCLEtBQUssR0FBR25CLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9CLE9BQVIsQ0FBZ0JOLFFBQWhCLENBQVo7QUFFQUssU0FBSyxDQUFDRyxXQUFOLENBQWtCLGdCQUFsQjtBQUVBOUIsS0FBQyxDQUFDRyxjQUFGO0FBQ0EsV0FBTyxLQUFQO0FBQ0QsR0FQRDtBQVNBOztBQUNBSyxHQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ2tCLEVBQXJDLENBQXdDLE9BQXhDLEVBQWlELFVBQVMxQixDQUFULEVBQVk7QUFDM0QsUUFBSTJCLEtBQUssR0FBR25CLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9CLE9BQVIsQ0FBZ0JOLFFBQWhCLENBQVo7QUFFQUssU0FBSyxDQUFDRyxXQUFOLENBQWtCLGlCQUFsQixFQUFxQ0MsV0FBckMsQ0FBaUQsZ0JBQWpEO0FBRUEvQixLQUFDLENBQUNHLGNBQUY7QUFDQSxXQUFPLEtBQVA7QUFDRCxHQVBEO0FBUUQsQ0F6Q0QsRTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0F0QyxNQUFNLENBQUMyQyxDQUFQLEdBQVdBLG1DQUFYLEM7Ozs7Ozs7Ozs7O0FDSkEsd0IiLCJmaWxlIjoianMvYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYWRtaW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hZG1pbi5qc1wiLFwiY29tbW9uc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBQb2x5ZmlsbEV2ZW50ID0gZXZlbnRDb25zdHJ1Y3RvcigpO1xuXG4gIGZ1bmN0aW9uIGV2ZW50Q29uc3RydWN0b3IoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHdpbmRvdy5DdXN0b21FdmVudDtcbiAgICAvLyBJRTw9OSBTdXBwb3J0XG4gICAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcykge1xuICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHtidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkfTtcbiAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG4gICAgICByZXR1cm4gZXZ0O1xuICAgIH1cbiAgICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xuICAgIHJldHVybiBDdXN0b21FdmVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkSGlkZGVuSW5wdXQobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgaW5wdXQubmFtZSA9IG5hbWU7XG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlbGVtZW50KSB7XG4gICAgdmFyIHRvID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvXCIpLFxuICAgICAgICBtZXRob2QgPSBidWlsZEhpZGRlbklucHV0KFwiX21ldGhvZFwiLCBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbWV0aG9kXCIpKSxcbiAgICAgICAgY3NyZiA9IGJ1aWxkSGlkZGVuSW5wdXQoXCJfY3NyZl90b2tlblwiLCBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY3NyZlwiKSksXG4gICAgICAgIGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKSxcbiAgICAgICAgdGFyZ2V0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIik7XG5cbiAgICBmb3JtLm1ldGhvZCA9IChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbWV0aG9kXCIpID09PSBcImdldFwiKSA/IFwiZ2V0XCIgOiBcInBvc3RcIjtcbiAgICBmb3JtLmFjdGlvbiA9IHRvO1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiaGlkZGVuXCI7XG5cbiAgICBpZiAodGFyZ2V0KSBmb3JtLnRhcmdldCA9IHRhcmdldDtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3NyZik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChtZXRob2QpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybS5zdWJtaXQoKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIHZhciBlbGVtZW50ID0gZS50YXJnZXQ7XG5cbiAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSkge1xuICAgICAgdmFyIHBob2VuaXhMaW5rRXZlbnQgPSBuZXcgUG9seWZpbGxFdmVudCgncGhvZW5peC5saW5rLmNsaWNrJywge1xuICAgICAgICBcImJ1YmJsZXNcIjogdHJ1ZSwgXCJjYW5jZWxhYmxlXCI6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWVsZW1lbnQuZGlzcGF0Y2hFdmVudChwaG9lbml4TGlua0V2ZW50KSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tZXRob2RcIikpIHtcbiAgICAgICAgaGFuZGxlQ2xpY2soZWxlbWVudCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIGZhbHNlKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGhvZW5peC5saW5rLmNsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgbWVzc2FnZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29uZmlybVwiKTtcbiAgICBpZihtZXNzYWdlICYmICF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSwgZmFsc2UpO1xufSkoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4uL3Njc3MvYWRtaW4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9hZG1pbi9pbmRleC5qc1wiO1xuaW1wb3J0IFwic2VsZWN0aXplXCI7XG5pbXBvcnQgTGl0ZXBpY2tlciBmcm9tIFwibGl0ZXBpY2tlclwiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgJCgnW2RhdGEtdG9nZ2xlPVwic2VsZWN0aXplXCJdJykuc2VsZWN0aXplKHtcbiAgICBkZWxpbWl0ZXI6IFwiLFwiLFxuICAgIHBlcnNpc3Q6IGZhbHNlLFxuICAgIGNyZWF0ZTogZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBpbnB1dCxcbiAgICAgICAgdGV4dDogaW5wdXRcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICAvLyBpZiAoJChcIltkYXRhLXRvZ2dsZT1kYXRlcmFuZ2UtcGlja2VyXVwiKS5sZW5ndGggPiAwKSB7XG4gIC8vICAgJChcIltkYXRhLXRvZ2dsZT1kYXRlcmFuZ2UtcGlja2VyXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAvLyAgICAgdmFyIHBpY2tlciA9IG5ldyBMaWdodHBpY2soe1xuICAvLyAgICAgICBmaWVsZDogdGhpcyxcbiAgLy8gICAgICAgc2luZ2xlRGF0ZTogZmFsc2VcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgaWYgKCQoXCJbZGF0YS10b2dnbGU9ZGF0ZXBpY2tlcl1cIikubGVuZ3RoID4gMCkge1xuICAgICQoXCJbZGF0YS10b2dnbGU9ZGF0ZXBpY2tlcl1cIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwaWNrZXIgPSBuZXcgTGl0ZXBpY2tlcih7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMsXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgc2luZ2xlTW9kZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIC8qKiBDb25zdGFudCBkaXYgY2FyZCAqL1xuICBjb25zdCBESVZfQ0FSRCA9IFwiZGl2LmNhcmRcIjtcblxuICAvKiogSW5pdGlhbGl6ZSB0b29sdGlwcyAqL1xuICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuXG4gIC8qKiBJbml0aWFsaXplIHBvcG92ZXJzICovXG4gICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKHtcbiAgICBodG1sOiB0cnVlXG4gIH0pO1xuXG4gIC8qKiBGdW5jdGlvbiBmb3IgcmVtb3ZlIGNhcmQgKi9cbiAgJCgnW2RhdGEtdG9nZ2xlPVwiY2FyZC1yZW1vdmVcIl0nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgJGNhcmQgPSAkKHRoaXMpLmNsb3Nlc3QoRElWX0NBUkQpO1xuXG4gICAgJGNhcmQucmVtb3ZlKCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcblxuICAvKiogRnVuY3Rpb24gZm9yIGNvbGxhcHNlIGNhcmQgKi9cbiAgJCgnW2RhdGEtdG9nZ2xlPVwiY2FyZC1jb2xsYXBzZVwiXScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIGxldCAkY2FyZCA9ICQodGhpcykuY2xvc2VzdChESVZfQ0FSRCk7XG5cbiAgICAkY2FyZC50b2dnbGVDbGFzcyhcImNhcmQtY29sbGFwc2VkXCIpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgLyoqIEZ1bmN0aW9uIGZvciBmdWxsc2NyZWVuIGNhcmQgKi9cbiAgJCgnW2RhdGEtdG9nZ2xlPVwiY2FyZC1mdWxsc2NyZWVuXCJdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgbGV0ICRjYXJkID0gJCh0aGlzKS5jbG9zZXN0KERJVl9DQVJEKTtcblxuICAgICRjYXJkLnRvZ2dsZUNsYXNzKFwiY2FyZC1mdWxsc2NyZWVuXCIpLnJlbW92ZUNsYXNzKFwiY2FyZC1jb2xsYXBzZWRcIik7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn0pO1xuIiwiaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgXCJib290c3RyYXBcIjtcbmltcG9ydCBcIi4vY29yZVwiO1xuaW1wb3J0IFwicGhvZW5peF9odG1sXCI7XG53aW5kb3cuJCA9ICQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdzsiXSwic291cmNlUm9vdCI6IiJ9