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



// class MagicBox extends Component {
//     state = {
//         color: '#000',
//     }
//
//     newColor = () => {
//         const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//         this.setState({
//             color: newColor,
//         });
//     }
//
//
//     styles = {width:"200px", height: "200px", backgroundColor: this.state.color};
//
//     colorChange = () => {
//         const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//         this.setState({
//             color: newColor,
//         });
//         console.log("Zmieniam kolory");
//     }
//     render() {
//
//         return <div style={this.styles}>
//             <h1 onMouseEnter={this.colorChange} style={this.styles}>Jestem i działam</h1>
//         </div>
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
    _this.generateColor = function () {
      _this.setState({
        color: '#' + Math.floor(Math.random() * 16777215).toString(16)
      });
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
      });
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
/******/ 	__webpack_require__.h = () => ("85bd44db2ca29a24d9e5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43Zjk4NTNhMTQ2MzdkNTlhZmVhNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0s7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxJQUVNRyxRQUFRLDBCQUFBQyxVQUFBO0VBQUFDLFNBQUEsQ0FBQUYsUUFBQSxFQUFBQyxVQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLFFBQUE7RUFBQSxTQUFBQSxTQUFBO0lBQUEsSUFBQUssS0FBQTtJQUFBQyxlQUFBLE9BQUFOLFFBQUE7SUFBQSxTQUFBTyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFBQyxJQUFBLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxHQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO01BQUFGLElBQUEsQ0FBQUUsSUFBQSxJQUFBSixTQUFBLENBQUFJLElBQUE7SUFBQTtJQUFBUCxLQUFBLEdBQUFGLE1BQUEsQ0FBQVUsSUFBQSxDQUFBQyxLQUFBLENBQUFYLE1BQUEsU0FBQVksTUFBQSxDQUFBTCxJQUFBO0lBQUFMLEtBQUEsQ0FDVlcsS0FBSyxHQUFHO01BQ0pDLEtBQUssRUFBRTtJQUNYLENBQUM7SUFBQVosS0FBQSxDQUVEYSxhQUFhLEdBQUcsWUFBTTtNQUNsQmIsS0FBQSxDQUFLYyxRQUFRLENBQUM7UUFDVkYsS0FBSyxFQUFFLEdBQUcsR0FBR0csSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEVBQUU7TUFDL0QsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUFBLE9BQUFsQixLQUFBO0VBQUE7RUFBQW1CLFlBQUEsQ0FBQXhCLFFBQUE7SUFBQXlCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE9BQUEsRUFBUztNQUNMLG9CQUFPOUIsMERBQUE7UUFBS2dDLFlBQVksRUFBRSxJQUFJLENBQUNYLGFBQWM7UUFBQ1ksS0FBSyxFQUFFO1VBQUVDLEtBQUssRUFBRSxPQUFPO1VBQUVDLE1BQU0sRUFBRSxPQUFPO1VBQUVDLFVBQVUsRUFBRSxJQUFJLENBQUNqQixLQUFLLENBQUNDO1FBQU07TUFBRSxDQUFNLENBQUM7SUFDbEk7RUFBQztFQUFBLE9BQUFqQixRQUFBO0FBQUEsRUFia0JGLDRDQUFTLEdBZ0JoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsaUVBQWVFLFFBQVE7Ozs7Ozs7O1VDdkR2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA1X0R6aWVuXzgvMDJfU3Rhbl9hcGxpa2FjamkvMDRfWmFkYW5pZV80L2pzL01hZ2ljQm94LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuLy8gY2xhc3MgTWFnaWNCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuLy8gICAgIHN0YXRlID0ge1xuLy8gICAgICAgICBjb2xvcjogJyMwMDAnLFxuLy8gICAgIH1cbi8vXG4vLyAgICAgbmV3Q29sb3IgPSAoKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG5ld0NvbG9yID0gJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjE2Nzc3MjE1KS50b1N0cmluZygxNik7XG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgICAgICAgY29sb3I6IG5ld0NvbG9yLFxuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG4vL1xuLy9cbi8vICAgICBzdHlsZXMgPSB7d2lkdGg6XCIyMDBweFwiLCBoZWlnaHQ6IFwiMjAwcHhcIiwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmNvbG9yfTtcbi8vXG4vLyAgICAgY29sb3JDaGFuZ2UgPSAoKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG5ld0NvbG9yID0gJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjE2Nzc3MjE1KS50b1N0cmluZygxNik7XG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgICAgICAgY29sb3I6IG5ld0NvbG9yLFxuLy8gICAgICAgICB9KTtcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJabWllbmlhbSBrb2xvcnlcIik7XG4vLyAgICAgfVxuLy8gICAgIHJlbmRlcigpIHtcbi8vXG4vLyAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt0aGlzLnN0eWxlc30+XG4vLyAgICAgICAgICAgICA8aDEgb25Nb3VzZUVudGVyPXt0aGlzLmNvbG9yQ2hhbmdlfSBzdHlsZT17dGhpcy5zdHlsZXN9Pkplc3RlbSBpIGR6aWHFgmFtPC9oMT5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgfVxuLy8gfVxuXG5jbGFzcyBNYWdpY0JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDb2xvciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xvcjogJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjE2Nzc3MjE1KS50b1N0cmluZygxNiksXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBvbk1vdXNlRW50ZXI9e3RoaXMuZ2VuZXJhdGVDb2xvcn0gc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGhlaWdodDogJzIwMHB4JywgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5jb2xvciB9fT48L2Rpdj5cbiAgICB9XG59XG5cbi8vIGNvbnN0IE1hZ2ljQm94ID0gKCkgPT4gIHtcbi8vICAgICByZXR1cm4gPGRpdj5cbi8vICAgICAgICAgPGgxPmplc3RlbTwvaDE+XG4vLyAgICAgPC9kaXY+XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBNYWdpY0JveDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4NWJkNDRkYjJjYTI5YTI0ZDllNVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJNYWdpY0JveCIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJjb2xvciIsImdlbmVyYXRlQ29sb3IiLCJzZXRTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Iiwib25Nb3VzZUVudGVyIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9