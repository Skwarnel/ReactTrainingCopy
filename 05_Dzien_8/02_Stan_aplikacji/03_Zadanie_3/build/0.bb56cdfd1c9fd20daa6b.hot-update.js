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

function genNumber() {
  // return Math.round(Math.random() * 9 + 1);
  return Math.floor(Math.random() * 900 + 100);
}
var RandomNumbers = /*#__PURE__*/function (_Component) {
  _inherits(RandomNumbers, _Component);
  var _super = _createSuper(RandomNumbers);
  function RandomNumbers() {
    var _this;
    _classCallCheck(this, RandomNumbers);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      tab: []
    };
    _this.randomHandler = function () {
      var number = genNumber();
      tab.push(number);
    };
    return _this;
  }
  _createClass(RandomNumbers, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.randomHandler
      }, "Wylosuj liczb\u0119"));
    }
  }]);
  return RandomNumbers;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RandomNumbers);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("18c729abbd9686c568ef")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iYjU2Y2RmZDFjOWZkMjBkYWE2Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFdkMsU0FBU0UsU0FBU0EsQ0FBQSxFQUFHO0VBQ2pCO0VBQ0EsT0FBT0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2hEO0FBQUMsSUFFS0MsYUFBYSwwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLGFBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixhQUFBO0VBQUEsU0FBQUEsY0FBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixhQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBQ2ZXLEtBQUssR0FBRztNQUNKQyxHQUFHLEVBQUU7SUFDVCxDQUFDO0lBQUFaLEtBQUEsQ0FFRGEsYUFBYSxHQUFHLFlBQU07TUFDbEIsSUFBTUMsTUFBTSxHQUFHdkIsU0FBUyxDQUFDLENBQUM7TUFDMUJxQixHQUFHLENBQUNHLElBQUksQ0FBQ0QsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFBQSxPQUFBZCxLQUFBO0VBQUE7RUFBQWdCLFlBQUEsQ0FBQXJCLGFBQUE7SUFBQXNCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE9BQUEsRUFBUztNQUVMLG9CQUVJOUIsMERBQUEsMkJBU0lBLDBEQUFBO1FBQVFnQyxPQUFPLEVBQUUsSUFBSSxDQUFDUjtNQUFjLEdBQUMscUJBQXNCLENBQzFELENBQUM7SUFJZDtFQUFDO0VBQUEsT0FBQWxCLGFBQUE7QUFBQSxFQTVCdUJMLDRDQUFTO0FBK0JyQyxpRUFBZUssYUFBYTs7Ozs7Ozs7VUN0QzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMl9TdGFuX2FwbGlrYWNqaS8wM19aYWRhbmllXzMvanMvUmFuZG9tTnVtYmVycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIGdlbk51bWJlcigpIHtcbiAgICAvLyByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSArIDEpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAgKyAxMDApO1xufVxuXG5jbGFzcyBSYW5kb21OdW1iZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdGFiOiBbXSxcbiAgICB9XG5cbiAgICByYW5kb21IYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBudW1iZXIgPSBnZW5OdW1iZXIoKTtcbiAgICAgICAgdGFiLnB1c2gobnVtYmVyKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7Lyo8dWw+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIHRhYi5tYXAoIChlbGVtKSA9PiB7Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDxsaT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIHtlbGVtfSovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8L2xpPiovfVxuICAgICAgICAgICAgICAgIHsvKn0pKi99XG5cbiAgICAgICAgICAgICAgICB7Lyo8L3VsPiovfVxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5yYW5kb21IYW5kbGVyfT5XeWxvc3VqIGxpY3pixJk8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFuZG9tTnVtYmVycztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE4YzcyOWFiYmQ5Njg2YzU2OGVmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2VuTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiUmFuZG9tTnVtYmVycyIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJ0YWIiLCJyYW5kb21IYW5kbGVyIiwibnVtYmVyIiwicHVzaCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9