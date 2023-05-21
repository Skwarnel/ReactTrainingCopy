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
      var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      return color;
    };
    _this.styles = {
      width: "200px",
      height: "200px",
      backgroundColor: _this.state.color
    };
    _this.colorChange = function () {
      _this.setState({
        color: newColor()
      });
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3c58cbbc57ae71f76532")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNGJjYjFjYjliNzE0NTNmYzExMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0s7QUFBQSxJQUV0Q0csUUFBUSwwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFFBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixRQUFBO0VBQUEsU0FBQUEsU0FBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixRQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBQ1ZXLEtBQUssR0FBRztNQUNKQyxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQUFaLEtBQUEsQ0FFRGEsUUFBUSxHQUFHLFlBQU07TUFDYixJQUFNRCxLQUFLLEdBQUcsR0FBRyxHQUFHRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO01BQ25FLE9BQU9MLEtBQUs7SUFDaEIsQ0FBQztJQUFBWixLQUFBLENBR0RrQixNQUFNLEdBQUc7TUFBQ0MsS0FBSyxFQUFDLE9BQU87TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRUMsZUFBZSxFQUFFckIsS0FBQSxDQUFLVyxLQUFLLENBQUNDO0lBQUssQ0FBQztJQUFBWixLQUFBLENBRTVFc0IsV0FBVyxHQUFHLFlBQU07TUFDaEJ0QixLQUFBLENBQUt1QixRQUFRLENBQUM7UUFDVlgsS0FBSyxFQUFFQyxRQUFRLENBQUM7TUFDcEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUFBLE9BQUFiLEtBQUE7RUFBQTtFQUFBd0IsWUFBQSxDQUFBN0IsUUFBQTtJQUFBOEIsR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQUMsT0FBQSxFQUFTO01BRUwsb0JBQU9uQywwREFBQTtRQUFLcUMsS0FBSyxFQUFFLElBQUksQ0FBQ1g7TUFBTyxnQkFDM0IxQiwwREFBQTtRQUFJc0MsWUFBWSxFQUFFLElBQUksQ0FBQ1I7TUFBWSxHQUFDLHVCQUFvQixDQUN2RCxDQUFDO0lBQ1Y7RUFBQztFQUFBLE9BQUEzQixRQUFBO0FBQUEsRUF2QmtCRiw0Q0FBUyxHQTBCaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGlFQUFlRSxRQUFROzs7Ozs7OztVQ25DdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAyX1N0YW5fYXBsaWthY2ppLzA0X1phZGFuaWVfNC9qcy9NYWdpY0JveC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNsYXNzIE1hZ2ljQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICB9XG5cbiAgICBuZXdDb2xvciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29sb3IgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cblxuXG4gICAgc3R5bGVzID0ge3dpZHRoOlwiMjAwcHhcIiwgaGVpZ2h0OiBcIjIwMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5jb2xvcn07XG5cbiAgICBjb2xvckNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogbmV3Q29sb3IoKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17dGhpcy5zdHlsZXN9PlxuICAgICAgICAgICAgPGgxIG9uTW91c2VFbnRlcj17dGhpcy5jb2xvckNoYW5nZX0+SmVzdGVtIGkgZHppYcWCYW08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5cbi8vIGNvbnN0IE1hZ2ljQm94ID0gKCkgPT4gIHtcbi8vICAgICByZXR1cm4gPGRpdj5cbi8vICAgICAgICAgPGgxPmplc3RlbTwvaDE+XG4vLyAgICAgPC9kaXY+XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBNYWdpY0JveDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzYzU4Y2JiYzU3YWU3MWY3NjUzMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJNYWdpY0JveCIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJjb2xvciIsIm5ld0NvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdHlsZXMiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yQ2hhbmdlIiwic2V0U3RhdGUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIm9uTW91c2VFbnRlciJdLCJzb3VyY2VSb290IjoiIn0=