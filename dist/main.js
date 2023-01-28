"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktop_restaurant"] = self["webpackChunktop_restaurant"] || []).push([["main"],{

/***/ "./src/displayHome.js":
/*!****************************!*\
  !*** ./src/displayHome.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayHome = (function () {\n  function renderHome() {\n    console.log('from home');\n  }\n\n  return { renderHome };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);\n\n\n//# sourceURL=webpack://top-restaurant/./src/displayHome.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayHome */ \"./src/displayHome.js\");\n\n\nconst controller = (function () {\n  function addEvents() {}\n\n  return {\n    addEvents,\n  };\n})();\n\n_displayHome__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderHome();\n\n\n//# sourceURL=webpack://top-restaurant/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);