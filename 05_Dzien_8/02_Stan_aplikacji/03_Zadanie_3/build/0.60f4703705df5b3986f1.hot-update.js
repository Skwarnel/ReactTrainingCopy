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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
      var tab = _toConsumableArray(_this.state.tab);
      tab.push(number);
      // console.log(number);
      _this.setState({
        tab: tab
      });
      console.log(_this.state);
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
/******/ 	__webpack_require__.h = () => ("e6ddacf18d3294663c5b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42MGY0NzAzNzA1ZGY1YjM5ODZmMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFdkMsU0FBU0UsU0FBU0EsQ0FBQSxFQUFHO0VBQ2pCO0VBQ0EsT0FBT0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2hEO0FBQUMsSUFFS0MsYUFBYSwwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLGFBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixhQUFBO0VBQUEsU0FBQUEsY0FBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixhQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBQ2ZXLEtBQUssR0FBRztNQUNKQyxHQUFHLEVBQUU7SUFDVCxDQUFDO0lBQUFaLEtBQUEsQ0FFRGEsYUFBYSxHQUFHLFlBQU07TUFDbEIsSUFBTUMsTUFBTSxHQUFHdkIsU0FBUyxDQUFDLENBQUM7TUFDMUIsSUFBTXFCLEdBQUcsR0FBQUcsa0JBQUEsQ0FBT2YsS0FBQSxDQUFLVyxLQUFLLENBQUNDLEdBQUcsQ0FBQztNQUMvQkEsR0FBRyxDQUFDSSxJQUFJLENBQUNGLE1BQU0sQ0FBQztNQUNoQjtNQUNBZCxLQUFBLENBQUtpQixRQUFRLENBQUM7UUFDWEwsR0FBRyxFQUFIQTtNQUNILENBQUMsQ0FBQztNQUNGTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ25CLEtBQUEsQ0FBS1csS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFBQSxPQUFBWCxLQUFBO0VBQUE7RUFBQW9CLFlBQUEsQ0FBQXpCLGFBQUE7SUFBQTBCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE9BQUEsRUFBUztNQUVMLG9CQUVJbEMsMERBQUEsMkJBU0lBLDBEQUFBO1FBQVFvQyxPQUFPLEVBQUUsSUFBSSxDQUFDWjtNQUFjLEdBQUMscUJBQXNCLENBQzFELENBQUM7SUFJZDtFQUFDO0VBQUEsT0FBQWxCLGFBQUE7QUFBQSxFQWxDdUJMLDRDQUFTO0FBcUNyQyxpRUFBZUssYUFBYTs7Ozs7Ozs7VUM1QzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMl9TdGFuX2FwbGlrYWNqaS8wM19aYWRhbmllXzMvanMvUmFuZG9tTnVtYmVycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIGdlbk51bWJlcigpIHtcbiAgICAvLyByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSArIDEpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAgKyAxMDApO1xufVxuXG5jbGFzcyBSYW5kb21OdW1iZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdGFiOiBbXSxcbiAgICB9XG5cbiAgICByYW5kb21IYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBudW1iZXIgPSBnZW5OdW1iZXIoKTtcbiAgICAgICAgY29uc3QgdGFiID0gWy4uLnRoaXMuc3RhdGUudGFiXVxuICAgICAgICB0YWIucHVzaChudW1iZXIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhudW1iZXIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgdGFiLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgey8qPHVsPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICB0YWIubWFwKCAoZWxlbSkgPT4geyovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8bGk+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICB7ZWxlbX0qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPC9saT4qL31cbiAgICAgICAgICAgICAgICB7Lyp9KSovfVxuXG4gICAgICAgICAgICAgICAgey8qPC91bD4qL31cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucmFuZG9tSGFuZGxlcn0+V3lsb3N1aiBsaWN6YsSZPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmRvbU51bWJlcnM7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlNmRkYWNmMThkMzI5NDY2M2M1YlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImdlbk51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIlJhbmRvbU51bWJlcnMiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwidGFiIiwicmFuZG9tSGFuZGxlciIsIm51bWJlciIsIl90b0NvbnN1bWFibGVBcnJheSIsInB1c2giLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==