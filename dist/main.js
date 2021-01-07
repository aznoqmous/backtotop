/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/back-to-top.js":
/*!****************************!*\
  !*** ./src/back-to-top.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BackToTop; });\nclass BackToTop {\r\n  constructor(trigger, options={}){\r\n    this.trigger = trigger\r\n    this.options = Object.assign({\r\n      container: window,\r\n      speed: 1000, // ms to top\r\n      threshold: null // trigger element visibility will toggle at this container.scrollY position, up to 100vh if null\r\n    }, options)\r\n\r\n    this.container = this.options.container\r\n    if(!this.options.threshold) this.options.threshold = window.innerHeight\r\n\r\n    this.bind()\r\n  }\r\n\r\n  bind(){\r\n    this.trigger.addEventListener('click', ()=>{ this.toTop() })\r\n    this.container.addEventListener('scroll', ()=>{\r\n      if(this.getContainerScroll() > this.options.threshold) this.trigger.classList.add('active')\r\n      else this.trigger.classList.remove('active')\r\n    })\r\n  }\r\n\r\n  toTop(){\r\n    let startT = Date.now()\r\n    let startY = this.getContainerScroll()\r\n    let speed = startY / this.options.speed\r\n\r\n    let loop = ()=>{\r\n      let deltaT = (Date.now() - startT) / this.options.speed\r\n      this.container.scrollTo(0, startY - deltaT * startY)\r\n\r\n      if(this.getContainerScroll() > 0) requestAnimationFrame(loop)\r\n    }\r\n\r\n    loop()\r\n  }\r\n\r\n  getContainerScroll(){\r\n    return this.container.scrollY ? this.container.scrollY : this.container.scrollTop\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/back-to-top.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _back_to_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./back-to-top */ \"./src/back-to-top.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n    new _back_to_top__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('backToTop'))\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });