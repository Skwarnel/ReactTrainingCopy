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
      console.log(number);
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
/******/ 	__webpack_require__.h = () => ("310022e8e38fae3168f2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lNmRkYWNmMThkMzI5NDY2M2M1Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFdkMsU0FBU0UsU0FBU0EsQ0FBQSxFQUFHO0VBQ2pCO0VBQ0EsT0FBT0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2hEO0FBQUMsSUFFS0MsYUFBYSwwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLGFBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixhQUFBO0VBQUEsU0FBQUEsY0FBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixhQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBQ2ZXLEtBQUssR0FBRztNQUNKQyxHQUFHLEVBQUU7SUFDVCxDQUFDO0lBQUFaLEtBQUEsQ0FFRGEsYUFBYSxHQUFHLFlBQU07TUFDbEIsSUFBTUMsTUFBTSxHQUFHdkIsU0FBUyxDQUFDLENBQUM7TUFDMUIsSUFBTXFCLEdBQUcsR0FBQUcsa0JBQUEsQ0FBT2YsS0FBQSxDQUFLVyxLQUFLLENBQUNDLEdBQUcsQ0FBQztNQUMvQkEsR0FBRyxDQUFDSSxJQUFJLENBQUNGLE1BQU0sQ0FBQztNQUNoQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU0sQ0FBQztNQUNuQmQsS0FBQSxDQUFLbUIsUUFBUSxDQUFDO1FBQ1hQLEdBQUcsRUFBSEE7TUFDSCxDQUFDLENBQUM7TUFDRkssT0FBTyxDQUFDQyxHQUFHLENBQUNsQixLQUFBLENBQUtXLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQUEsT0FBQVgsS0FBQTtFQUFBO0VBQUFvQixZQUFBLENBQUF6QixhQUFBO0lBQUEwQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxPQUFBLEVBQVM7TUFFTCxvQkFFSWxDLDBEQUFBLDJCQVNJQSwwREFBQTtRQUFRb0MsT0FBTyxFQUFFLElBQUksQ0FBQ1o7TUFBYyxHQUFDLHFCQUFzQixDQUMxRCxDQUFDO0lBSWQ7RUFBQztFQUFBLE9BQUFsQixhQUFBO0FBQUEsRUFsQ3VCTCw0Q0FBUztBQXFDckMsaUVBQWVLLGFBQWE7Ozs7Ozs7O1VDNUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA1X0R6aWVuXzgvMDJfU3Rhbl9hcGxpa2FjamkvMDNfWmFkYW5pZV8zL2pzL1JhbmRvbU51bWJlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBnZW5OdW1iZXIoKSB7XG4gICAgLy8gcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkgKyAxKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwICsgMTAwKTtcbn1cblxuY2xhc3MgUmFuZG9tTnVtYmVycyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHRhYjogW10sXG4gICAgfVxuXG4gICAgcmFuZG9tSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gZ2VuTnVtYmVyKCk7XG4gICAgICAgIGNvbnN0IHRhYiA9IFsuLi50aGlzLnN0YXRlLnRhYl1cbiAgICAgICAgdGFiLnB1c2gobnVtYmVyKTtcbiAgICAgICAgY29uc29sZS5sb2cobnVtYmVyKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgIHRhYixcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHsvKjx1bD4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgdGFiLm1hcCggKGVsZW0pID0+IHsqL31cbiAgICAgICAgICAgICAgICB7LyogICAgPGxpPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAge2VsZW19Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDwvbGk+Ki99XG4gICAgICAgICAgICAgICAgey8qfSkqL31cblxuICAgICAgICAgICAgICAgIHsvKjwvdWw+Ki99XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnJhbmRvbUhhbmRsZXJ9Pld5bG9zdWogbGljemLEmTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYW5kb21OdW1iZXJzO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzEwMDIyZThlMzhmYWUzMTY4ZjJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJnZW5OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJSYW5kb21OdW1iZXJzIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInRhYiIsInJhbmRvbUhhbmRsZXIiLCJudW1iZXIiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=