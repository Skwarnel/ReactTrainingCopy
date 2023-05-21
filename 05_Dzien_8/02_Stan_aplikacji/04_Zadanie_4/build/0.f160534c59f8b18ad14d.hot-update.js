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
      var newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      _this.setState({
        color: newColor
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
        onMouseEnter: this.colorChange,
        style: this.styles
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
/******/ 	__webpack_require__.h = () => ("7f9853a14637d59afea7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMTYwNTM0YzU5ZjhiMThhZDE0ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0s7QUFBQSxJQUV0Q0csUUFBUSwwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFFBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixRQUFBO0VBQUEsU0FBQUEsU0FBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixRQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBQ1ZXLEtBQUssR0FBRztNQUNKQyxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQUFaLEtBQUEsQ0FFRGEsUUFBUSxHQUFHLFlBQU07TUFDYixJQUFNQSxRQUFRLEdBQUcsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO01BQ3RFakIsS0FBQSxDQUFLa0IsUUFBUSxDQUFDO1FBQ1ZOLEtBQUssRUFBRUM7TUFDWCxDQUFDLENBQUM7SUFDTixDQUFDO0lBQUFiLEtBQUEsQ0FHRG1CLE1BQU0sR0FBRztNQUFDQyxLQUFLLEVBQUMsT0FBTztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFQyxlQUFlLEVBQUV0QixLQUFBLENBQUtXLEtBQUssQ0FBQ0M7SUFBSyxDQUFDO0lBQUFaLEtBQUEsQ0FFNUV1QixXQUFXLEdBQUcsWUFBTTtNQUNoQixJQUFNVixRQUFRLEdBQUcsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO01BQ3RFakIsS0FBQSxDQUFLa0IsUUFBUSxDQUFDO1FBQ1ZOLEtBQUssRUFBRUM7TUFDWCxDQUFDLENBQUM7TUFDRlcsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUFBLE9BQUF6QixLQUFBO0VBQUE7RUFBQTBCLFlBQUEsQ0FBQS9CLFFBQUE7SUFBQWdDLEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUFDLE9BQUEsRUFBUztNQUVMLG9CQUFPckMsMERBQUE7UUFBS3VDLEtBQUssRUFBRSxJQUFJLENBQUNaO01BQU8sZ0JBQzNCM0IsMERBQUE7UUFBSXdDLFlBQVksRUFBRSxJQUFJLENBQUNULFdBQVk7UUFBQ1EsS0FBSyxFQUFFLElBQUksQ0FBQ1o7TUFBTyxHQUFDLHVCQUFvQixDQUMzRSxDQUFDO0lBQ1Y7RUFBQztFQUFBLE9BQUF4QixRQUFBO0FBQUEsRUEzQmtCRiw0Q0FBUyxHQThCaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGlFQUFlRSxRQUFROzs7Ozs7OztVQ3ZDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAyX1N0YW5fYXBsaWthY2ppLzA0X1phZGFuaWVfNC9qcy9NYWdpY0JveC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNsYXNzIE1hZ2ljQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICB9XG5cbiAgICBuZXdDb2xvciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q29sb3IgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogbmV3Q29sb3IsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgc3R5bGVzID0ge3dpZHRoOlwiMjAwcHhcIiwgaGVpZ2h0OiBcIjIwMHB4XCIsIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5jb2xvcn07XG5cbiAgICBjb2xvckNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q29sb3IgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogbmV3Q29sb3IsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlptaWVuaWFtIGtvbG9yeVwiKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt0aGlzLnN0eWxlc30+XG4gICAgICAgICAgICA8aDEgb25Nb3VzZUVudGVyPXt0aGlzLmNvbG9yQ2hhbmdlfSBzdHlsZT17dGhpcy5zdHlsZXN9Pkplc3RlbSBpIGR6aWHFgmFtPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG4vLyBjb25zdCBNYWdpY0JveCA9ICgpID0+ICB7XG4vLyAgICAgcmV0dXJuIDxkaXY+XG4vLyAgICAgICAgIDxoMT5qZXN0ZW08L2gxPlxuLy8gICAgIDwvZGl2PlxuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgTWFnaWNCb3g7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2Y5ODUzYTE0NjM3ZDU5YWZlYTdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiTWFnaWNCb3giLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwiY29sb3IiLCJuZXdDb2xvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0U3RhdGUiLCJzdHlsZXMiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwib25Nb3VzZUVudGVyIl0sInNvdXJjZVJvb3QiOiIifQ==