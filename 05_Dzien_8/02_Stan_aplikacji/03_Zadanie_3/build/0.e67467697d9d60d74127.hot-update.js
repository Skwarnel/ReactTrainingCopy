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
    };
    return _this;
  }
  _createClass(RandomNumbers, [{
    key: "render",
    value: function render() {
      var listToRender = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, this.state.tab.map(function (element, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          key: index
        }, element);
      }));
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
/******/ 	__webpack_require__.h = () => ("c113ed12c91c2389209b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lNjc0Njc2OTdkOWQ2MGQ3NDEyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQzZEO0FBRXBHLFNBQVNHLFNBQVNBLENBQUEsRUFBRztFQUNqQjtFQUNBLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNoRDtBQUFDLElBRUtDLGFBQWEsMEJBQUFDLFVBQUE7RUFBQUMsU0FBQSxDQUFBRixhQUFBLEVBQUFDLFVBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosYUFBQTtFQUFBLFNBQUFBLGNBQUE7SUFBQSxJQUFBSyxLQUFBO0lBQUFDLGVBQUEsT0FBQU4sYUFBQTtJQUFBLFNBQUFPLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQUFQLEtBQUEsR0FBQUYsTUFBQSxDQUFBVSxJQUFBLENBQUFDLEtBQUEsQ0FBQVgsTUFBQSxTQUFBWSxNQUFBLENBQUFMLElBQUE7SUFBQUwsS0FBQSxDQUNmVyxLQUFLLEdBQUc7TUFDSkMsR0FBRyxFQUFFO0lBQ1QsQ0FBQztJQUFBWixLQUFBLENBRURhLGFBQWEsR0FBRyxZQUFNO01BQ2xCLElBQU1DLE1BQU0sR0FBR3ZCLFNBQVMsQ0FBQyxDQUFDO01BQzFCLElBQU1xQixHQUFHLEdBQUFHLGtCQUFBLENBQU9mLEtBQUEsQ0FBS1csS0FBSyxDQUFDQyxHQUFHLENBQUM7TUFDL0JBLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRixNQUFNLENBQUM7TUFDaEJkLEtBQUEsQ0FBS2lCLFFBQVEsQ0FBQztRQUNWTCxHQUFHLEVBQUhBO01BQ0osQ0FBQyxDQUFDO0lBRU4sQ0FBQztJQUFBLE9BQUFaLEtBQUE7RUFBQTtFQUFBa0IsWUFBQSxDQUFBdkIsYUFBQTtJQUFBd0IsR0FBQTtJQUFBQyxLQUFBLEVBR0QsU0FBQUMsT0FBQSxFQUFTO01BQ0wsSUFBTUMsWUFBWSxnQkFDZGxDLDBEQUFBLGFBRVEsSUFBSSxDQUFDdUIsS0FBSyxDQUFDQyxHQUFHLENBQUNZLEdBQUcsQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLEtBQUssRUFBSztRQUNuQyxvQkFBT3RDLDBEQUFBO1VBQUkrQixHQUFHLEVBQUVPO1FBQU0sR0FBRUQsT0FBWSxDQUFDO01BQ3pDLENBQUMsQ0FFTCxDQUNQO01BQ0Qsb0JBRUlyQywwREFBQSxjQUNLLElBQUksQ0FBQ2tDLFlBQVksZUFDbEJsQywwREFBQTtRQUFRdUMsT0FBTyxFQUFFLElBQUksQ0FBQ2Q7TUFBYyxHQUFDLHFCQUFzQixDQUMxRCxDQUFDO0lBRWQ7RUFBQztFQUFBLE9BQUFsQixhQUFBO0FBQUEsRUFqQ3VCTiw0Q0FBUztBQW9DckMsaUVBQWVNLGFBQWE7Ozs7Ozs7O1VDNUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA1X0R6aWVuXzgvMDJfU3Rhbl9hcGxpa2FjamkvMDNfWmFkYW5pZV8zL2pzL1JhbmRvbU51bWJlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHBlb3BsZSBmcm9tIFwiLi4vLi4vLi4vLi4vMDJfRHppZW5fMi0zLzAyX1phZ25pZXpkemFuaWVfaV9rbHVjemUvMDFfWmFkYW5pZV8xL2pzL2RhdGEvcGVvcGxlXCI7XG5cbmZ1bmN0aW9uIGdlbk51bWJlcigpIHtcbiAgICAvLyByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSArIDEpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAgKyAxMDApO1xufVxuXG5jbGFzcyBSYW5kb21OdW1iZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdGFiOiBbXSxcbiAgICB9XG5cbiAgICByYW5kb21IYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBudW1iZXIgPSBnZW5OdW1iZXIoKTtcbiAgICAgICAgY29uc3QgdGFiID0gWy4uLnRoaXMuc3RhdGUudGFiXVxuICAgICAgICB0YWIucHVzaChudW1iZXIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRhYixcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbGlzdFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50YWIubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT57ZWxlbWVudH08L2xpPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3RoaXMubGlzdFRvUmVuZGVyfVxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5yYW5kb21IYW5kbGVyfT5XeWxvc3VqIGxpY3pixJk8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYW5kb21OdW1iZXJzO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzExM2VkMTJjOTFjMjM4OTIwOWJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJwZW9wbGUiLCJnZW5OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJSYW5kb21OdW1iZXJzIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInRhYiIsInJhbmRvbUhhbmRsZXIiLCJudW1iZXIiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwdXNoIiwic2V0U3RhdGUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImxpc3RUb1JlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==