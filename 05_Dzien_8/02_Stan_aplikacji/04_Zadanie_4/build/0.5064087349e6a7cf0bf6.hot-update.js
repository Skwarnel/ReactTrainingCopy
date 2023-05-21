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
    _this.redDivStyle = {
      height: "100px",
      backgroundColor: 'red'
    };
    _this.greenDivStyle = {
      height: '100px',
      backgroundColor: 'green'
    };
    _this.blueDivStyle = {
      height: '100px',
      backgroundColor: 'blue'
    };
    return _this;
  }
  _createClass(MagicBox, [{
    key: "render",
    value:
    // redDiv = <div style={redDivStyle} />;
    // greenDiv = <div style={greenDivStyle} />;
    // blueDiv = <div style={blueDivStyle} />;
    function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        height: "100px",
        backgroundColor: "red"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Jestem i dzia\u0142am"));
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
/******/ 	__webpack_require__.h = () => ("a256b7dbdaaa7357a090")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MDY0MDg3MzQ5ZTZhN2NmMGJmNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0s7QUFBQSxJQUV0Q0csUUFBUSwwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFFBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixRQUFBO0VBQUEsU0FBQUEsU0FBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixRQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBQ1ZXLEtBQUssR0FBRztNQUNKQyxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQUFaLEtBQUEsQ0FFRGEsV0FBVyxHQUFHO01BQUNDLE1BQU0sRUFBRSxPQUFPO01BQUVDLGVBQWUsRUFBRTtJQUFLLENBQUM7SUFBQWYsS0FBQSxDQUN2RGdCLGFBQWEsR0FBRztNQUFDRixNQUFNLEVBQUUsT0FBTztNQUFFQyxlQUFlLEVBQUU7SUFBTyxDQUFDO0lBQUFmLEtBQUEsQ0FDM0RpQixZQUFZLEdBQUc7TUFBQ0gsTUFBTSxFQUFFLE9BQU87TUFBRUMsZUFBZSxFQUFFO0lBQU0sQ0FBQztJQUFBLE9BQUFmLEtBQUE7RUFBQTtFQUFBa0IsWUFBQSxDQUFBdkIsUUFBQTtJQUFBd0IsR0FBQTtJQUFBQyxLQUFBO0lBQ3pEO0lBQ0E7SUFDQTtJQUNBLFNBQUFDLE9BQUEsRUFBUztNQUVMLG9CQUFPN0IsMERBQUE7UUFBS3NCLE1BQU0sRUFBQyxPQUFPO1FBQUNDLGVBQWUsRUFBQztNQUFLLGdCQUM1Q3ZCLDBEQUFBLGFBQUksdUJBQW9CLENBQ3ZCLENBQUM7SUFDVjtFQUFDO0VBQUEsT0FBQUcsUUFBQTtBQUFBLEVBaEJrQkYsNENBQVMsR0FtQmhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZUUsUUFBUTs7Ozs7Ozs7Ozs7O0FDNUJHO0FBQ29CO0FBQ1o7QUFFbEMsSUFBTTRCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR2hDLDREQUFVLENBQUM2QixTQUFTLENBQUM7QUFFbEMsU0FBU0ksR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU9uQywwREFBQSxDQUFDRyxpREFBUSxNQUFFLENBQUM7QUFDdkI7QUFFQStCLElBQUksQ0FBQ0wsTUFBTSxlQUFDN0IsMERBQUEsQ0FBQ21DLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7O1VDWHBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMl9TdGFuX2FwbGlrYWNqaS8wNF9aYWRhbmllXzQvanMvTWFnaWNCb3guanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMl9TdGFuX2FwbGlrYWNqaS8wNF9aYWRhbmllXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY2xhc3MgTWFnaWNCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgIH1cblxuICAgIHJlZERpdlN0eWxlID0ge2hlaWdodDogXCIxMDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfTtcbiAgICBncmVlbkRpdlN0eWxlID0ge2hlaWdodDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nfTtcbiAgICBibHVlRGl2U3R5bGUgPSB7aGVpZ2h0OiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJ307XG4gICAgLy8gcmVkRGl2ID0gPGRpdiBzdHlsZT17cmVkRGl2U3R5bGV9IC8+O1xuICAgIC8vIGdyZWVuRGl2ID0gPGRpdiBzdHlsZT17Z3JlZW5EaXZTdHlsZX0gLz47XG4gICAgLy8gYmx1ZURpdiA9IDxkaXYgc3R5bGU9e2JsdWVEaXZTdHlsZX0gLz47XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiA8ZGl2IGhlaWdodD1cIjEwMHB4XCIgYmFja2dyb3VuZENvbG9yPVwicmVkXCI+XG4gICAgICAgICAgICA8aDE+SmVzdGVtIGkgZHppYcWCYW08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5cbi8vIGNvbnN0IE1hZ2ljQm94ID0gKCkgPT4gIHtcbi8vICAgICByZXR1cm4gPGRpdj5cbi8vICAgICAgICAgPGgxPmplc3RlbTwvaDE+XG4vLyAgICAgPC9kaXY+XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBNYWdpY0JveDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBNYWdpY0JveCBmcm9tIFwiLi9NYWdpY0JveFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPE1hZ2ljQm94IC8+XG59XG5cbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTI1NmI3ZGJkYWFhNzM1N2EwOTBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiTWFnaWNCb3giLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwiY29sb3IiLCJyZWREaXZTdHlsZSIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImdyZWVuRGl2U3R5bGUiLCJibHVlRGl2U3R5bGUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCJdLCJzb3VyY2VSb290IjoiIn0=