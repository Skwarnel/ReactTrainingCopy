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


// class MagicBox extends Component {
//     state = {
//         color: '#000',
//     }
//
//     generateColor = () => {
//         this.setState({
//             color: '#' + Math.floor(Math.random()*16777215).toString(16),
//         })
//     }
//
//     render() {
//         return <div onMouseEnter={this.generateColor} style={{ width: '200px', height: '200px', background: this.state.color }}></div>
//     }
// }
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
/******/ 	__webpack_require__.h = () => ("26b18759cbc208b77369")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kNGY2YmU2MzY2MzdiZjg0Mzc2MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLElBRU1FLFFBQVEsMEJBQUFDLFVBQUE7RUFBQUMsU0FBQSxDQUFBRixRQUFBLEVBQUFDLFVBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosUUFBQTtFQUFBLFNBQUFBLFNBQUE7SUFBQSxJQUFBSyxLQUFBO0lBQUFDLGVBQUEsT0FBQU4sUUFBQTtJQUFBLFNBQUFPLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQUFQLEtBQUEsR0FBQUYsTUFBQSxDQUFBVSxJQUFBLENBQUFDLEtBQUEsQ0FBQVgsTUFBQSxTQUFBWSxNQUFBLENBQUFMLElBQUE7SUFBQUwsS0FBQSxDQUNWVyxLQUFLLEdBQUc7TUFDSkMsS0FBSyxFQUFFO0lBQ1gsQ0FBQztJQUFBWixLQUFBLENBRURhLFFBQVEsR0FBRyxZQUFNO01BQ2IsSUFBTUEsUUFBUSxHQUFHLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztNQUN4RWpCLEtBQUEsQ0FBS2tCLFFBQVEsQ0FBQztRQUNWTixLQUFLLEVBQUVDO01BQ1gsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUFBYixLQUFBLENBR0RtQixNQUFNLEdBQUc7TUFBQ0MsS0FBSyxFQUFFLE9BQU87TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRUMsZUFBZSxFQUFFdEIsS0FBQSxDQUFLVyxLQUFLLENBQUNDO0lBQUssQ0FBQztJQUFBWixLQUFBLENBRTdFdUIsV0FBVyxHQUFHLFlBQU07TUFDaEIsSUFBTVYsUUFBUSxHQUFHLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztNQUN4RWpCLEtBQUEsQ0FBS2tCLFFBQVEsQ0FBQztRQUNWTixLQUFLLEVBQUVDO01BQ1gsQ0FBQyxDQUFDO01BQ0ZXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDLENBQUM7SUFBQSxPQUFBekIsS0FBQTtFQUFBO0VBQUEwQixZQUFBLENBQUEvQixRQUFBO0lBQUFnQyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxPQUFBLEVBQVM7TUFFTCxvQkFBT3BDLDBEQUFBO1FBQUtzQyxLQUFLLEVBQUUsSUFBSSxDQUFDWjtNQUFPLGdCQUMzQjFCLDBEQUFBO1FBQUl1QyxZQUFZLEVBQUUsSUFBSSxDQUFDVCxXQUFZO1FBQUNRLEtBQUssRUFBRSxJQUFJLENBQUNaO01BQU8sR0FBQyx1QkFBb0IsQ0FDM0UsQ0FBQztJQUNWO0VBQUM7RUFBQSxPQUFBeEIsUUFBQTtBQUFBLEVBNUJrQkQsNENBQVMsR0FnQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZUMsUUFBUTs7Ozs7Ozs7VUN4RHZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMl9TdGFuX2FwbGlrYWNqaS8wNF9aYWRhbmllXzQvanMvTWFnaWNCb3guanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBjbGFzcyBNYWdpY0JveCBleHRlbmRzIENvbXBvbmVudCB7XG4vLyAgICAgc3RhdGUgPSB7XG4vLyAgICAgICAgIGNvbG9yOiAnIzAwMCcsXG4vLyAgICAgfVxuLy9cbi8vICAgICBnZW5lcmF0ZUNvbG9yID0gKCkgPT4ge1xuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcbi8vICAgICAgICAgICAgIGNvbG9yOiAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTY3NzcyMTUpLnRvU3RyaW5nKDE2KSxcbi8vICAgICAgICAgfSlcbi8vICAgICB9XG4vL1xuLy8gICAgIHJlbmRlcigpIHtcbi8vICAgICAgICAgcmV0dXJuIDxkaXYgb25Nb3VzZUVudGVyPXt0aGlzLmdlbmVyYXRlQ29sb3J9IHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBoZWlnaHQ6ICcyMDBweCcsIGJhY2tncm91bmQ6IHRoaXMuc3RhdGUuY29sb3IgfX0+PC9kaXY+XG4vLyAgICAgfVxuLy8gfVxuXG5jbGFzcyBNYWdpY0JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgfVxuXG4gICAgbmV3Q29sb3IgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NvbG9yID0gJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogbmV3Q29sb3IsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgc3R5bGVzID0ge3dpZHRoOiBcIjIwMHB4XCIsIGhlaWdodDogXCIyMDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuY29sb3J9O1xuXG4gICAgY29sb3JDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NvbG9yID0gJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogbmV3Q29sb3IsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlptaWVuaWFtIGtvbG9yeVwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3RoaXMuc3R5bGVzfT5cbiAgICAgICAgICAgIDxoMSBvbk1vdXNlRW50ZXI9e3RoaXMuY29sb3JDaGFuZ2V9IHN0eWxlPXt0aGlzLnN0eWxlc30+SmVzdGVtIGkgZHppYcWCYW08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5cblxuLy8gY29uc3QgTWFnaWNCb3ggPSAoKSA9PiAge1xuLy8gICAgIHJldHVybiA8ZGl2PlxuLy8gICAgICAgICA8aDE+amVzdGVtPC9oMT5cbi8vICAgICA8L2Rpdj5cbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IE1hZ2ljQm94OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI2YjE4NzU5Y2JjMjA4Yjc3MzY5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWFnaWNCb3giLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwiY29sb3IiLCJuZXdDb2xvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0U3RhdGUiLCJzdHlsZXMiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwib25Nb3VzZUVudGVyIl0sInNvdXJjZVJvb3QiOiIifQ==