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
    _this.generateColor = function () {
      var newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      _this.setState({
        color: newColor
      });
    };
    _this.styles = {
      width: '200px',
      height: '200px',
      background: _this.state.color
    };
    return _this;
  }
  _createClass(MagicBox, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        onMouseEnter: this.generateColor,
        style: {
          width: '200px',
          height: '200px',
          background: this.state.color
        }
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1ee40a0ca07bfd9e5a7f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZTEwYzAyYmYxOWQ4NjU3MzI5My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFBQSxJQUVqQ0UsUUFBUSwwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFFBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixRQUFBO0VBQUEsU0FBQUEsU0FBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixRQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBQ1ZXLEtBQUssR0FBRztNQUNKQyxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQUFaLEtBQUEsQ0FFRGEsYUFBYSxHQUFHLFlBQU07TUFDbEIsSUFBTUMsUUFBUSxHQUFHLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztNQUN4RWxCLEtBQUEsQ0FBS21CLFFBQVEsQ0FBQztRQUNWUCxLQUFLLEVBQUVFO01BQ1gsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUFBZCxLQUFBLENBQ0RvQixNQUFNLEdBQUc7TUFBRUMsS0FBSyxFQUFFLE9BQU87TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRUMsVUFBVSxFQUFFdkIsS0FBQSxDQUFLVyxLQUFLLENBQUNDO0lBQUssQ0FBQztJQUFBLE9BQUFaLEtBQUE7RUFBQTtFQUFBd0IsWUFBQSxDQUFBN0IsUUFBQTtJQUFBOEIsR0FBQTtJQUFBQyxLQUFBLEVBQ3pFLFNBQUFDLE9BQUEsRUFBUztNQUNMLG9CQUNJbEMsMERBQUE7UUFBTW9DLFlBQVksRUFBRSxJQUFJLENBQUNoQixhQUFjO1FBQUNpQixLQUFLLEVBQUU7VUFBRVQsS0FBSyxFQUFFLE9BQU87VUFBRUMsTUFBTSxFQUFFLE9BQU87VUFBRUMsVUFBVSxFQUFFLElBQUksQ0FBQ1osS0FBSyxDQUFDQztRQUFLO01BQUUsZ0JBQ3BIbkIsMERBQUEsYUFBSSx1QkFBb0IsQ0FDbkIsQ0FBQztJQUVWO0VBQUM7RUFBQSxPQUFBRSxRQUFBO0FBQUEsRUFsQmtCRCw0Q0FBUyxHQXVCaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGlFQUFlQyxRQUFROzs7Ozs7OztVQy9CdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAyX1N0YW5fYXBsaWthY2ppLzA0X1phZGFuaWVfNC9qcy9NYWdpY0JveC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIE1hZ2ljQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUNvbG9yID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdDb2xvciA9ICcjJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sb3I6IG5ld0NvbG9yLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3R5bGVzID0geyB3aWR0aDogJzIwMHB4JywgaGVpZ2h0OiAnMjAwcHgnLCBiYWNrZ3JvdW5kOiB0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2ICBvbk1vdXNlRW50ZXI9e3RoaXMuZ2VuZXJhdGVDb2xvcn0gc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGhlaWdodDogJzIwMHB4JywgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5jb2xvcn19PlxuICAgICAgICA8aDE+SmVzdGVtIGkgZHppYcWCYW08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8vIGNvbnN0IE1hZ2ljQm94ID0gKCkgPT4gIHtcbi8vICAgICByZXR1cm4gPGRpdj5cbi8vICAgICAgICAgPGgxPmplc3RlbTwvaDE+XG4vLyAgICAgPC9kaXY+XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBNYWdpY0JveDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxZWU0MGEwY2EwN2JmZDllNWE3ZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1hZ2ljQm94IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsImNvbG9yIiwiZ2VuZXJhdGVDb2xvciIsIm5ld0NvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRTdGF0ZSIsInN0eWxlcyIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIm9uTW91c2VFbnRlciIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==