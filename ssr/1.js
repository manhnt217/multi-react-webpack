exports.ids = [1];
exports.modules = {

/***/ "./src/user2/main.js":
/*!***************************!*\
  !*** ./src/user2/main.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AwesomeComp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _manhnt217_magic_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @manhnt217/magic-number */ \"./src/user2/node_modules/@manhnt217/magic-number/index.js\");\n/* harmony import */ var _manhnt217_magic_number__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_manhnt217_magic_number__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar AwesomeComp =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(AwesomeComp, _Component);\n\n  function AwesomeComp(props) {\n    var _this;\n\n    _classCallCheck(this, AwesomeComp);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(AwesomeComp).call(this, props));\n    _this.message = 'A magic number: ' + Object(_manhnt217_magic_number__WEBPACK_IMPORTED_MODULE_1__[\"getMagicNumber\"])();\n    return _this;\n  }\n\n  _createClass(AwesomeComp, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, this.message);\n    }\n  }]);\n\n  return AwesomeComp;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack://GenLib/./src/user2/main.js?");

/***/ }),

/***/ "./src/user2/node_modules/@manhnt217/magic-number/index.js":
/*!*****************************************************************!*\
  !*** ./src/user2/node_modules/@manhnt217/magic-number/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.getMagicNumber = function() {\n\treturn 42 / 2;\n}\n\n\n//# sourceURL=webpack://GenLib/./src/user2/node_modules/@manhnt217/magic-number/index.js?");

/***/ })

};;