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
/* harmony import */ var _02_Dzien_2_3_02_Zagniezdzanie_i_klucze_01_Zadanie_1_js_data_people__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
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
      _this.setState({
        tab: tab
      });
      console.log(_this.state);
    };
    _this.listToRender = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, _this.state.tab.map(function (element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: element.id
      }, element);
    }));
    return _this;
  }
  _createClass(RandomNumbers, [{
    key: "render",
    value:
    // listToRender = () => (
    //     <ul>
    //         {
    //             this.state.tab.map((element, index) => {
    //                 return <li key={index}>{element}</li>
    //             })
    //         }
    //     </ul>
    // );
    function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, this.listToRender, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/******/ 	__webpack_require__.h = () => ("63670b47f9b150bcd097")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yYzJlODEyYjk5Y2RiNDZjZTYzZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQzZEO0FBRXBHLFNBQVNHLFNBQVNBLENBQUEsRUFBRztFQUNqQjtFQUNBLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNoRDtBQUFDLElBRUtDLGFBQWEsMEJBQUFDLFVBQUE7RUFBQUMsU0FBQSxDQUFBRixhQUFBLEVBQUFDLFVBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosYUFBQTtFQUFBLFNBQUFBLGNBQUE7SUFBQSxJQUFBSyxLQUFBO0lBQUFDLGVBQUEsT0FBQU4sYUFBQTtJQUFBLFNBQUFPLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQUFQLEtBQUEsR0FBQUYsTUFBQSxDQUFBVSxJQUFBLENBQUFDLEtBQUEsQ0FBQVgsTUFBQSxTQUFBWSxNQUFBLENBQUFMLElBQUE7SUFBQUwsS0FBQSxDQUNmVyxLQUFLLEdBQUc7TUFDSkMsR0FBRyxFQUFFO0lBQ1QsQ0FBQztJQUFBWixLQUFBLENBRURhLGFBQWEsR0FBRyxZQUFNO01BQ2xCLElBQU1DLE1BQU0sR0FBR3ZCLFNBQVMsQ0FBQyxDQUFDO01BQzFCLElBQU1xQixHQUFHLEdBQUFHLGtCQUFBLENBQU9mLEtBQUEsQ0FBS1csS0FBSyxDQUFDQyxHQUFHLENBQUM7TUFDL0JBLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRixNQUFNLENBQUM7TUFDaEJkLEtBQUEsQ0FBS2lCLFFBQVEsQ0FBQztRQUNWTCxHQUFHLEVBQUhBO01BQ0osQ0FBQyxDQUFDO01BQ0ZNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbkIsS0FBQSxDQUFLVyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUFBWCxLQUFBLENBRURvQixZQUFZLGdCQUNSaEMsMERBQUEsYUFFUVksS0FBQSxDQUFLVyxLQUFLLENBQUNDLEdBQUcsQ0FBQ1UsR0FBRyxDQUFDLFVBQUFDLE9BQU8sRUFBSTtNQUMxQixvQkFBT25DLDBEQUFBO1FBQUlvQyxHQUFHLEVBQUVELE9BQU8sQ0FBQ0U7TUFBRyxHQUFFRixPQUFZLENBQUM7SUFDOUMsQ0FBQyxDQUVMLENBQUM7SUFBQSxPQUFBdkIsS0FBQTtFQUFBO0VBQUEwQixZQUFBLENBQUEvQixhQUFBO0lBQUE2QixHQUFBO0lBQUFHLEtBQUE7SUFHVDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFHQSxTQUFBQyxPQUFBLEVBQVM7TUFFTCxvQkFFSXhDLDBEQUFBLGNBQ0ssSUFBSSxDQUFDZ0MsWUFBWSxlQUNsQmhDLDBEQUFBO1FBQVF5QyxPQUFPLEVBQUUsSUFBSSxDQUFDaEI7TUFBYyxHQUFDLHFCQUFzQixDQUMxRCxDQUFDO0lBRWQ7RUFBQztFQUFBLE9BQUFsQixhQUFBO0FBQUEsRUE3Q3VCTiw0Q0FBUztBQWdEckMsaUVBQWVNLGFBQWE7Ozs7Ozs7O1VDeEQ1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA1X0R6aWVuXzgvMDJfU3Rhbl9hcGxpa2FjamkvMDNfWmFkYW5pZV8zL2pzL1JhbmRvbU51bWJlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHBlb3BsZSBmcm9tIFwiLi4vLi4vLi4vLi4vMDJfRHppZW5fMi0zLzAyX1phZ25pZXpkemFuaWVfaV9rbHVjemUvMDFfWmFkYW5pZV8xL2pzL2RhdGEvcGVvcGxlXCI7XG5cbmZ1bmN0aW9uIGdlbk51bWJlcigpIHtcbiAgICAvLyByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSArIDEpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAgKyAxMDApO1xufVxuXG5jbGFzcyBSYW5kb21OdW1iZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdGFiOiBbXSxcbiAgICB9XG5cbiAgICByYW5kb21IYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBudW1iZXIgPSBnZW5OdW1iZXIoKTtcbiAgICAgICAgY29uc3QgdGFiID0gWy4uLnRoaXMuc3RhdGUudGFiXVxuICAgICAgICB0YWIucHVzaChudW1iZXIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRhYixcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIGxpc3RUb1JlbmRlciA9IChcbiAgICAgICAgPHVsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGFiLm1hcChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2VsZW1lbnQuaWR9PntlbGVtZW50fTwvbGk+XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICApO1xuXG4gICAgLy8gbGlzdFRvUmVuZGVyID0gKCkgPT4gKFxuICAgIC8vICAgICA8dWw+XG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGF0ZS50YWIubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9PntlbGVtZW50fTwvbGk+XG4gICAgLy8gICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgPC91bD5cbiAgICAvLyApO1xuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5saXN0VG9SZW5kZXJ9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnJhbmRvbUhhbmRsZXJ9Pld5bG9zdWogbGljemLEmTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmRvbU51bWJlcnM7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MzY3MGI0N2Y5YjE1MGJjZDA5N1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInBlb3BsZSIsImdlbk51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIlJhbmRvbU51bWJlcnMiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwidGFiIiwicmFuZG9tSGFuZGxlciIsIm51bWJlciIsIl90b0NvbnN1bWFibGVBcnJheSIsInB1c2giLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJsaXN0VG9SZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiZWxlbWVudCIsImtleSIsImlkIiwiX2NyZWF0ZUNsYXNzIiwidmFsdWUiLCJyZW5kZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==