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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n/* harmony import */ var _public_style_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/style/bootstrap.min.css */ \"./src/public/style/bootstrap.min.css\");\n/* harmony import */ var _public_style_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nObject(_public_js_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/BurgerConstructor.js":
/*!********************************************!*\
  !*** ./src/public/js/BurgerConstructor.js ***!
  \********************************************/
/*! exports provided: Burger, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Burger\", function() { return Burger; });\n/* harmony import */ var _CONSTANT_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CONSTANT.js */ \"./src/public/js/CONSTANT.js\");\n\r\n\r\nclass Burger {\r\n\r\n    constructor() {\r\n        this.price = 0\r\n        this.call = 0\r\n\r\n        this.size = {}\r\n        this.filling = {}\r\n        this.addons = []\r\n    }\r\n\r\n    updateTotalPrice() {\r\n        this.price = 0\r\n        this.price += (this.size && this.size.price) ? this.size.price : 0\r\n        this.price += (this.filling && this.filling.price) ? this.filling.price : 0\r\n\r\n        this.addons.map( addon => {\r\n            this.price += (addon && addon.price) ? addon.price : 0\r\n        })\r\n    }\r\n    updateTotalCall() {\r\n        this.call = 0\r\n        this.call += (this.size && this.size.call) ? this.size.call : 0\r\n        this.call += (this.filling && this.filling.call) ? this.filling.call : 0\r\n\r\n        this.addons.map( addon => {\r\n            this.call += (addon && addon.call) ? addon.call : 0\r\n        })\r\n    }\r\n\r\n    setSize (size) {\r\n        this.size = size\r\n        this.updateTotalPrice()\r\n        this.updateTotalCall()\r\n    }\r\n\r\n    setFilling (filling) {\r\n        this.filling = filling\r\n        this.updateTotalPrice()\r\n        this.updateTotalCall()\r\n    }\r\n\r\n    setAddons (addons) {\r\n        this.addons = addons\r\n        this.updateTotalPrice()\r\n        this.updateTotalCall()\r\n    }\r\n\r\n    getPrice () {\r\n        return this.price\r\n    }\r\n    getCall () {\r\n        return this.call\r\n    }\r\n\r\n}\r\nclass BurgerConstructor {\r\n\r\n    constructor() {\r\n        this.price = 0\r\n        this.call = 0\r\n\r\n        this.size = []\r\n        this.filling = []\r\n        this.addons = []\r\n\r\n        this.burger = new Burger()\r\n\r\n        this.sizeBlock = document.querySelector ('#size')\r\n        this.fillingBlock = document.querySelector ('#filling')\r\n        this.addonsBlock = document.querySelector ('#addons')\r\n        this.totalBlock = document.querySelector ('#total')\r\n        this.callBlock = document.querySelector ('#call')\r\n\r\n        this._init()\r\n    }\r\n\r\n    _init () {\r\n        this._handleData ()\r\n        this.render()\r\n        this._handleEvents ()\r\n    }\r\n\r\n    _handleData () {\r\n        this.size = _CONSTANT_js__WEBPACK_IMPORTED_MODULE_0__[\"size\"]\r\n        this.filling = _CONSTANT_js__WEBPACK_IMPORTED_MODULE_0__[\"filling\"]\r\n        this.addons = _CONSTANT_js__WEBPACK_IMPORTED_MODULE_0__[\"addons\"]\r\n    }\r\n\r\n    _handleEvents () {\r\n        this.sizeBlock.addEventListener ('click', (evt) => {\r\n            if (evt.target.name === 'size') {\r\n                var objSize = this.size.find(item => item.name == evt.target.value);\r\n                this.burger.setSize(objSize)\r\n                this.renderTotal()\r\n            }\r\n        })\r\n        this.fillingBlock.addEventListener ('click', (evt) => {\r\n            if (evt.target.name === 'filling') {\r\n                var objFilling = this.filling.find(item => item.name == evt.target.value);\r\n                this.burger.setFilling(objFilling)\r\n                this.renderTotal()\r\n            }\r\n        })\r\n        this.addonsBlock.addEventListener ('click', (evt) => {\r\n            var objAddons = []\r\n            this.addonsBlock.querySelectorAll('input:checked').forEach( add => {\r\n                var objFilling = this.addons.find(item => item.name == add.name);\r\n                objAddons.push(objFilling)\r\n            })\r\n            this.burger.setAddons(objAddons)\r\n            this.renderTotal()\r\n        })\r\n    }\r\n    renderInput (title, name, value, price, call, required = false) {\r\n        var type = required ? \"radio\" : \"checkbox\"\r\n        return `<div class=\"input-wrap\">\r\n            <input id=\"${name + \"_\" + value}\" type=\"${type}\" name=\"${name}\" value=\"${value}\">\r\n            <label for=\"${name + \"_\" + value}\">${title}<span> +${price} руб. +${call} калл</span></label>\r\n        </div>`\r\n    }\r\n\r\n    RenderSizes () {\r\n        var html = ''\r\n        this.size.forEach( item => {\r\n            html += this.renderInput(item.title, \"size\", item.name, item.price, item.call, true)\r\n        })\r\n        return html\r\n    }\r\n\r\n    RenderFilling () {\r\n        var html = ''\r\n        this.filling.forEach( item => {\r\n            html += this.renderInput(item.title, \"filling\",  item.name, item.price, item.call, true)\r\n        })\r\n        return html\r\n    }\r\n\r\n    RenderAddons () {\r\n        var html = ''\r\n        this.addons.forEach( item => {\r\n            html += this.renderInput(item.title, item.name, item.name, item.price, item.call)\r\n        })\r\n        return html\r\n    }\r\n\r\n    render() {\r\n        this.sizeBlock.innerHTML = this.RenderSizes()\r\n        this.fillingBlock.innerHTML = this.RenderFilling()\r\n        this.addonsBlock.innerHTML = this.RenderAddons()\r\n    }\r\n    renderTotal() {\r\n        this.totalBlock.innerHTML = this.burger.getPrice() + \" руб\"\r\n        this.callBlock.innerHTML = this.burger.getCall() + \" калл\"\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (BurgerConstructor);\n\n//# sourceURL=webpack:///./src/public/js/BurgerConstructor.js?");

/***/ }),

/***/ "./src/public/js/CONSTANT.js":
/*!***********************************!*\
  !*** ./src/public/js/CONSTANT.js ***!
  \***********************************/
/*! exports provided: size, addons, filling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"size\", function() { return size; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addons\", function() { return addons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filling\", function() { return filling; });\n/**\r\n * Некая сеть фастфуда предлагает несколько видов гамбургеров\r\n * Маленький (50 рублей, 20 калорий).\r\n * Большой (100 рублей, 40 калорий).\r\n */\r\nconst size = [\r\n    {\r\n        title: \"Маленький\",\r\n        name: \"small\",\r\n        price: 50,\r\n        call: 20\r\n    },\r\n    {\r\n        title: \"Большой\",\r\n        name: \"big\",\r\n        price: 100,\r\n        call: 40\r\n    }\r\n]\r\n\r\n/**\r\n * Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и\r\n * полить майонезом (+20 рублей, +5 калорий).\r\n */\r\nconst addons = [\r\n    {\r\n        title: \"Приправа\",\r\n        name: \"condiment\",\r\n        price: 15,\r\n        call: 0\r\n    },\r\n    {\r\n        title: \"Майонез\",\r\n        name: \"mayo\",\r\n        price: 20,\r\n        call: 5\r\n    }\r\n]\r\n\r\n/**\r\n * С сыром (+10 рублей, +20 калорий).\r\n * С салатом (+20 рублей, +5 калорий).\r\n * С картофелем (+15 рублей, +10 калорий)\r\n */\r\nconst filling = [\r\n    {\r\n        title: \"Сыр\",\r\n        name: \"cheese\",\r\n        price: 10,\r\n        call: 20\r\n    },\r\n    {\r\n        title: \"Салат\",\r\n        name: \"salad\",\r\n        price: 20,\r\n        call: 5\r\n    },\r\n    {\r\n        title: \"Картофель\",\r\n        name: \"potatoes\",\r\n        price: 15,\r\n        call: 10\r\n    }\r\n]\r\n\n\n//# sourceURL=webpack:///./src/public/js/CONSTANT.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return app; });\n/* harmony import */ var _BurgerConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BurgerConstructor */ \"./src/public/js/BurgerConstructor.js\");\n\r\n\r\nfunction app() {\r\n console.log('Start Burger!')\r\n new _BurgerConstructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n}\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ }),

/***/ "./src/public/style/bootstrap.min.css":
/*!********************************************!*\
  !*** ./src/public/style/bootstrap.min.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/style/bootstrap.min.css?");

/***/ }),

/***/ "./src/public/style/style.css":
/*!************************************!*\
  !*** ./src/public/style/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/style/style.css?");

/***/ })

/******/ });