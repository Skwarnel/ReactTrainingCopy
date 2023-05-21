"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var MagicBox = /*#__PURE__*/function (_Component) {
  _inherits(MagicBox, _Component);
  var _super = _createSuper(MagicBox);
  function MagicBox() {
    var _this;
    _classCallCheck(this, MagicBox);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      color: '#000'
    };
    _this.newColor = function () {
      var newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      _this.setState({
        color: newColor
      });
    };
    _this.styles = {
      width: "200px",
      height: "200px",
      backgroundColor: _this.state.color
    };
    _this.colorChange = function () {
      var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      _this.setState({
        color: color
      });
      console.log("Zmieniam kolory");
    };
    return _this;
  }
  _createClass(MagicBox, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: this.styles
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
        onMouseEnter: this.colorChange
      }, "Jestem i dzia\u0142am"));
    }
  }]);
  return MagicBox;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component); // const MagicBox = () =>  {
//     return <div>
//         <h1>jestem</h1>
//     </div>
// };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicBox);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _MagicBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MagicBox__WEBPACK_IMPORTED_MODULE_2__["default"], null);
}
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("49a341c5e7a1061d97c7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ml9TdGFuX2FwbGlrYWNqaS8wNF9aYWRhbmllXzQvanMvTWFnaWNCb3guanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMl9TdGFuX2FwbGlrYWNqaS8wNF9aYWRhbmllXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY2xhc3MgTWFnaWNCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgIH1cblxuICAgIG5ld0NvbG9yID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdDb2xvciA9ICcjJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbG9yOiBuZXdDb2xvcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBzdHlsZXMgPSB7d2lkdGg6XCIyMDBweFwiLCBoZWlnaHQ6IFwiMjAwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmNvbG9yfTtcblxuICAgIGNvbG9yQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb2xvciA9ICcjJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWm1pZW5pYW0ga29sb3J5XCIpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3RoaXMuc3R5bGVzfT5cbiAgICAgICAgICAgIDxoMSBvbk1vdXNlRW50ZXI9e3RoaXMuY29sb3JDaGFuZ2V9Pkplc3RlbSBpIGR6aWHFgmFtPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG4vLyBjb25zdCBNYWdpY0JveCA9ICgpID0+ICB7XG4vLyAgICAgcmV0dXJuIDxkaXY+XG4vLyAgICAgICAgIDxoMT5qZXN0ZW08L2gxPlxuLy8gICAgIDwvZGl2PlxuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgTWFnaWNCb3g7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgTWFnaWNCb3ggZnJvbSBcIi4vTWFnaWNCb3hcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxNYWdpY0JveCAvPlxufVxuXG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ5YTM0MWM1ZTdhMTA2MWQ5N2M3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlUm9vdCIsIk1hZ2ljQm94IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsImNvbG9yIiwibmV3Q29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNldFN0YXRlIiwic3R5bGVzIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvckNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIm9uTW91c2VFbnRlciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIl0sInNvdXJjZVJvb3QiOiIifQ==