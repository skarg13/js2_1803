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

/***/ "./src/public/js/API.js":
/*!******************************!*\
  !*** ./src/public/js/API.js ***!
  \******************************/
/*! exports provided: API_URL, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\nconst API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'\r\n\r\n/**\r\n * @param url\r\n * @returns JSON\r\n */\r\nfunction getData(url) {\r\n    return fetch(API_URL + url).then( response => response.json() )\r\n}\r\n\r\n//function makeGETRequest(url) {\r\n//    return new Promise(function(resolve, reject) {\r\n//\r\n//        var xhr = new XMLHttpRequest();\r\n//        xhr.open('GET', url, true);\r\n//\r\n//        xhr.onload = function() {\r\n//            if (xhr.status == 200) {\r\n//                resolve(xhr.response);\r\n//            } else {\r\n//                reject(Error(xhr.statusText));\r\n//            }\r\n//        };\r\n//\r\n//        xhr.onerror = function() {\r\n//            reject(Error(\"makeGETRequest() Error\"));\r\n//        };\r\n//\r\n//        xhr.send();\r\n//    });\r\n//}\r\n//\r\n//export function getCatalog() {\r\n//    return makeGETRequest(`/catalogData.json`).then( json => JSON.parse(json) )\r\n//}\r\n//\r\n//export function getCart() {\r\n//    return makeGETRequest(`/getBasket.json`).then( json => JSON.parse(json) )\r\n//}\r\n//\r\n//export function addCart() {\r\n//    return makeGETRequest(`/addToBasket.json`).then( json => JSON.parse(json) )\r\n//}\r\n//\r\n//export function clearCart() {\r\n//    return makeGETRequest(`/deleteFromBasket.json`).then( json => JSON.parse(json) )\r\n//}\r\n//\r\n//getCart().then( res => console.log(res))\r\n//addCart().then( res => console.log(res))\r\n//clearCart().then( res => console.log(res))\r\n\n\n//# sourceURL=webpack:///./src/public/js/API.js?");

/***/ }),

/***/ "./src/public/js/CONSTANTS.js":
/*!************************************!*\
  !*** ./src/public/js/CONSTANTS.js ***!
  \************************************/
/*! exports provided: CATALOG_BLOCK, CART_BLOCK, CART_ITEMS_BLOCK, IMG_PLACEHOLDER, IMG_PLACEHOLDER_CART, URL_GET_CATALOG, URL_GET_CART, URL_ADD_CART, URL_DEL_CART */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATALOG_BLOCK\", function() { return CATALOG_BLOCK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CART_BLOCK\", function() { return CART_BLOCK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CART_ITEMS_BLOCK\", function() { return CART_ITEMS_BLOCK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMG_PLACEHOLDER\", function() { return IMG_PLACEHOLDER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMG_PLACEHOLDER_CART\", function() { return IMG_PLACEHOLDER_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"URL_GET_CATALOG\", function() { return URL_GET_CATALOG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"URL_GET_CART\", function() { return URL_GET_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"URL_ADD_CART\", function() { return URL_ADD_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"URL_DEL_CART\", function() { return URL_DEL_CART; });\n\r\nconst CATALOG_BLOCK      = '#catalog'\r\nconst CART_BLOCK         = '#cart-block'\r\nconst CART_ITEMS_BLOCK   = '#cart-items'\r\n\r\nconst IMG_PLACEHOLDER        = 'https://placehold.it/300x200'\r\nconst IMG_PLACEHOLDER_CART   = 'https://placehold.it/100x80'\r\n\r\nconst URL_GET_CATALOG    = '/catalogData.json'\r\nconst URL_GET_CART       = '/getBasket.json'\r\nconst URL_ADD_CART       = '/addToBasket.json'\r\nconst URL_DEL_CART       = '/deleteFromBasket.json'\n\n//# sourceURL=webpack:///./src/public/js/CONSTANTS.js?");

/***/ }),

/***/ "./src/public/js/base.js":
/*!*******************************!*\
  !*** ./src/public/js/base.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ \"./src/public/js/API.js\");\n/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CONSTANTS */ \"./src/public/js/CONSTANTS.js\");\n\r\n\r\n\r\nclass List {\r\n    constructor(url, container) {\r\n        this.url = url\r\n        this.container = container\r\n        this.items = []\r\n        this._init()\r\n    }\r\n\r\n    _init() {\r\n        return false\r\n    }\r\n\r\n    getData(url) {\r\n        return fetch(_API__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"] + url).then( response => response.json() )\r\n    }\r\n\r\n    render() {\r\n        let block = document.querySelector(this.container)\r\n        let html = \"\"\r\n        this.items.forEach( item => {\r\n            html += new lists[this.constructor.name](item).render()\r\n        })\r\n        block.innerHTML = html\r\n    }\r\n\r\n}\r\nclass ListItem {\r\n\r\n    constructor(item) {\r\n        this.item = item\r\n        this.img = _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__[\"IMG_PLACEHOLDER\"]\r\n    }\r\n\r\n    render() {\r\n        return `\r\n            <div class=\"col-sm-4 col-lg-3 col-lg-2 mb-4\">\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top\" src=\"${this.img}\" alt=\"${this.item.product_name}\">\r\n                    <div class=\"card-body\">\r\n                        <h1 class=\"card-title\">${this.item.product_name}</h1>\r\n                        <p class=\"card-text\">${this.item.price}</p>\r\n                        <button \r\n                            class=\"btn btn-primary\" \r\n                            name=\"buy-btn\"\r\n                            data-name=\"${this.item.product_name}\"\r\n                            data-price=\"${this.item.price}\"\r\n                            data-id=\"${this.item.id_product}\"\r\n                        >Купить</button>\r\n                    </div>\r\n                </div>\r\n            </div>`;\r\n    }\r\n\r\n}\r\n\r\nclass Catalog extends List {\r\n\r\n    constructor(url, container) {\r\n        super(url = _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__[\"URL_GET_CATALOG\"], container = _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__[\"CATALOG_BLOCK\"])\r\n        this.cart = null\r\n    }\r\n\r\n    _init() {\r\n        this.getData(this.url)\r\n            .then( catalog => this.items = catalog)\r\n            .then( () => this.render() )\r\n            .finally( () => this._handleEvents() )\r\n    }\r\n\r\n    _handleEvents () {\r\n        document.querySelector (this.container).addEventListener ('click', (evt) => {\r\n            if (evt.target.name === 'btn-buy') {\r\n                this.cart.addProduct (evt.target)\r\n            }\r\n        })\r\n    }\r\n\r\n}\r\n\r\nclass Cart extends List {\r\n\r\n    constructor(url, container) {\r\n        super(url = _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__[\"URL_GET_CART\"], container = _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__[\"CART_BLOCK\"])\r\n    }\r\n\r\n    _init() {\r\n        this.getData(this.url)\r\n            .then( cart => this.items = cart.contents)\r\n            .then( () => this.render() )\r\n            .finally( () => this._handleEvents() )\r\n    }\r\n\r\n    _handleEvents () {\r\n        document.querySelector(this.container).addEventListener ('click', (evt) => {\r\n            if (evt.target.name === 'btn-del') {\r\n                this.deleteProduct (evt.target)\r\n            }\r\n            if (evt.target.name === 'cart-cleaner') {\r\n                this.clearProducts ()\r\n            }\r\n        })\r\n    }\r\n\r\n}\r\n\r\nclass CatalogItem extends ListItem {}\r\nclass CartItem extends ListItem {\r\n\r\n    constructor(item) {\r\n        super(item)\r\n        this.img = _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__[\"IMG_PLACEHOLDER_CART\"]\r\n    }\r\n\r\n    render() {\r\n        return `\r\n            <div class=\"cart-item\" data-id=\"${this.item.id_product}\">\r\n                <div class=\"cart-img\">\r\n                    <img src=\"${this.img}\" alt=\"${this.item.product_name}\">\r\n                </div>\r\n                <div class=\"product-desc\">\r\n                    <p class=\"product-title\">${this.item.product_name}</p>\r\n                    <p class=\"product-quantity\">Количество: ${this.item.quantity}</p>\r\n                    <p class=\"product-single-price\">Цена: ${this.item.price}</p>\r\n                </div>\r\n                <div class=\"right-block\">\r\n                    <button name=\"btn-del\" class=\"btn btn-danger\" data-id=\"${this.item.id_product}\">&times;</button>\r\n                </div>\r\n            </div>`\r\n    }\r\n}\r\nlet lists = {\r\n    Catalog: CatalogItem,\r\n    Cart: CartItem\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n    let catalog     = new Catalog()\r\n    let cart        = new Cart()\r\n    catalog.cart    = cart\r\n});\n\n//# sourceURL=webpack:///./src/public/js/base.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return app; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/public/js/base.js\");\n\r\n\r\nfunction app() {\r\n    console.log('Jobs done!')\r\n    Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

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