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
        style: this.redDivStyle
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
/******/ 	__webpack_require__.h = () => ("77aa009e723b7657d119")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mOWQ4ZjcxMDY3ZWVhNGRhMWQwYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0s7QUFBQSxJQUV0Q0csUUFBUSwwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFFBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixRQUFBO0VBQUEsU0FBQUEsU0FBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixRQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBQ1ZXLEtBQUssR0FBRztNQUNKQyxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQUFaLEtBQUEsQ0FFRGEsV0FBVyxHQUFHO01BQUNDLE1BQU0sRUFBRSxPQUFPO01BQUVDLGVBQWUsRUFBRTtJQUFLLENBQUM7SUFBQWYsS0FBQSxDQUN2RGdCLGFBQWEsR0FBRztNQUFDRixNQUFNLEVBQUUsT0FBTztNQUFFQyxlQUFlLEVBQUU7SUFBTyxDQUFDO0lBQUFmLEtBQUEsQ0FDM0RpQixZQUFZLEdBQUc7TUFBQ0gsTUFBTSxFQUFFLE9BQU87TUFBRUMsZUFBZSxFQUFFO0lBQU0sQ0FBQztJQUFBLE9BQUFmLEtBQUE7RUFBQTtFQUFBa0IsWUFBQSxDQUFBdkIsUUFBQTtJQUFBd0IsR0FBQTtJQUFBQyxLQUFBO0lBQ3pEO0lBQ0E7SUFDQTtJQUNBLFNBQUFDLE9BQUEsRUFBUztNQUVMLG9CQUFPN0IsMERBQUE7UUFBSytCLEtBQUssRUFBRSxJQUFJLENBQUNWO01BQVksZ0JBQ2hDckIsMERBQUEsYUFBSSx1QkFBb0IsQ0FDdkIsQ0FBQztJQUNWO0VBQUM7RUFBQSxPQUFBRyxRQUFBO0FBQUEsRUFoQmtCRiw0Q0FBUyxHQW1CaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGlFQUFlRSxRQUFROzs7Ozs7Ozs7Ozs7QUM1Qkc7QUFDb0I7QUFDWjtBQUVsQyxJQUFNNkIsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHakMsNERBQVUsQ0FBQzhCLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT3BDLDBEQUFBLENBQUNHLGlEQUFRLE1BQUUsQ0FBQztBQUN2QjtBQUVBZ0MsSUFBSSxDQUFDTixNQUFNLGVBQUM3QiwwREFBQSxDQUFDb0MsR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7VUNYcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAyX1N0YW5fYXBsaWthY2ppLzA0X1phZGFuaWVfNC9qcy9NYWdpY0JveC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAyX1N0YW5fYXBsaWthY2ppLzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jbGFzcyBNYWdpY0JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgfVxuXG4gICAgcmVkRGl2U3R5bGUgPSB7aGVpZ2h0OiBcIjEwMHB4XCIsIGJhY2tncm91bmRDb2xvcjogJ3JlZCd9O1xuICAgIGdyZWVuRGl2U3R5bGUgPSB7aGVpZ2h0OiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbid9O1xuICAgIGJsdWVEaXZTdHlsZSA9IHtoZWlnaHQ6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnfTtcbiAgICAvLyByZWREaXYgPSA8ZGl2IHN0eWxlPXtyZWREaXZTdHlsZX0gLz47XG4gICAgLy8gZ3JlZW5EaXYgPSA8ZGl2IHN0eWxlPXtncmVlbkRpdlN0eWxlfSAvPjtcbiAgICAvLyBibHVlRGl2ID0gPGRpdiBzdHlsZT17Ymx1ZURpdlN0eWxlfSAvPjtcbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3RoaXMucmVkRGl2U3R5bGV9PlxuICAgICAgICAgICAgPGgxPkplc3RlbSBpIGR6aWHFgmFtPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG4vLyBjb25zdCBNYWdpY0JveCA9ICgpID0+ICB7XG4vLyAgICAgcmV0dXJuIDxkaXY+XG4vLyAgICAgICAgIDxoMT5qZXN0ZW08L2gxPlxuLy8gICAgIDwvZGl2PlxuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgTWFnaWNCb3g7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgTWFnaWNCb3ggZnJvbSBcIi4vTWFnaWNCb3hcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxNYWdpY0JveCAvPlxufVxuXG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc3YWEwMDllNzIzYjc2NTdkMTE5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlUm9vdCIsIk1hZ2ljQm94IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsImNvbG9yIiwicmVkRGl2U3R5bGUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJncmVlbkRpdlN0eWxlIiwiYmx1ZURpdlN0eWxlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCJdLCJzb3VyY2VSb290IjoiIn0=