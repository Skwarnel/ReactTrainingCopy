"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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


var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Counter, null);
};
var Counter = /*#__PURE__*/function (_Component) {
  _inherits(Counter, _Component);
  var _super = _createSuper(Counter);
  function Counter() {
    var _this;
    _classCallCheck(this, Counter);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this["const"] = void 0;
    _this.styles = {
      width: '500px',
      height: '100px',
      borderStyle: 'solid',
      backgroundColor: 'red'
    };
    _this["const"] = void 0;
    _this.mouseClick = function () {
      console.log("Clicked! Did you hear that?");
      console.log(styles);
      // styles.backgroundColor = 'green';
    };
    _this["const"] = void 0;
    _this.mouseEnter = function () {
      console.log("Have you seen that? Mouse entered the room");
    };
    _this["const"] = void 0;
    _this.mouseLeave = function () {
      console.log("Mouse hit the road");
    };
    return _this;
  }
  _createClass(Counter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        style: styles,
        onClick: mouseClick,
        onMouseEnter: mouseEnter,
        onMouseLeave: mouseLeave
      }, "That's me"));
    }
  }]);
  return Counter;
}(Component);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a19cdd0c79786ca7c4ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kNmQwMGQ1MWI3NTc5M2E5YTE2OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tCO0FBRTVDLElBQU1FLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR0osNERBQVUsQ0FBQ0MsU0FBUyxDQUFDO0FBRWxDLElBQU1JLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDZCxvQkFBT04sMERBQUEsQ0FBQ1EsT0FBTyxNQUFDLENBQUM7QUFDckIsQ0FBQztBQUFBLElBRUtBLE9BQU8sMEJBQUFDLFVBQUE7RUFBQUMsU0FBQSxDQUFBRixPQUFBLEVBQUFDLFVBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosT0FBQTtFQUFBLFNBQUFBLFFBQUE7SUFBQSxJQUFBSyxLQUFBO0lBQUFDLGVBQUEsT0FBQU4sT0FBQTtJQUFBLFNBQUFPLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQUFQLEtBQUEsR0FBQUYsTUFBQSxDQUFBVSxJQUFBLENBQUFDLEtBQUEsQ0FBQVgsTUFBQSxTQUFBWSxNQUFBLENBQUFMLElBQUE7SUFBQUwsS0FBQTtJQUFBQSxLQUFBLENBRVRXLE1BQU0sR0FBRztNQUNMQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxNQUFNLEVBQUUsT0FBTztNQUNmQyxXQUFXLEVBQUUsT0FBTztNQUNwQkMsZUFBZSxFQUFFO0lBQ3JCLENBQUM7SUFBQWYsS0FBQTtJQUFBQSxLQUFBLENBRURnQixVQUFVLEdBQUcsWUFBTTtNQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQztNQUMxQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNQLE1BQU0sQ0FBQztNQUNuQjtJQUNKLENBQUM7SUFBQVgsS0FBQTtJQUFBQSxLQUFBLENBR0RtQixVQUFVLEdBQUcsWUFBTTtNQUNmRixPQUFPLENBQUNDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQztJQUM3RCxDQUFDO0lBQUFsQixLQUFBO0lBQUFBLEtBQUEsQ0FHRG9CLFVBQVUsR0FBRyxZQUFNO01BQ2ZILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0lBQ3JDLENBQUM7SUFBQSxPQUFBbEIsS0FBQTtFQUFBO0VBQUFxQixZQUFBLENBQUExQixPQUFBO0lBQUEyQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxPQUFBLEVBQVM7TUFDTCxvQkFDSXJDLDBEQUFBLDJCQUNJQSwwREFBQTtRQUFHc0MsS0FBSyxFQUFFZCxNQUFPO1FBQUNlLE9BQU8sRUFBRVYsVUFBVztRQUFDVyxZQUFZLEVBQUVSLFVBQVc7UUFBQ1MsWUFBWSxFQUFFUjtNQUFXLEdBQUMsV0FFeEYsQ0FDRixDQUFDO0lBRWQ7RUFBQztFQUFBLE9BQUF6QixPQUFBO0FBQUEsRUFqQ2lCa0MsU0FBUztBQXFDL0JyQyxJQUFJLENBQUNnQyxNQUFNLGVBQUNyQywwREFBQSxDQUFDTSxHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQy9DbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAyX1N0YW5fYXBsaWthY2ppLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiA8Q291bnRlci8+XG59XG5cbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0XG4gICAgc3R5bGVzID0ge1xuICAgICAgICB3aWR0aDogJzUwMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJ1xuICAgIH1cbiAgICBjb25zdFxuICAgIG1vdXNlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZCEgRGlkIHlvdSBoZWFyIHRoYXQ/XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhzdHlsZXMpO1xuICAgICAgICAvLyBzdHlsZXMuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICB9XG5cbiAgICBjb25zdFxuICAgIG1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGF2ZSB5b3Ugc2VlbiB0aGF0PyBNb3VzZSBlbnRlcmVkIHRoZSByb29tXCIpO1xuICAgIH1cblxuICAgIGNvbnN0XG4gICAgbW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNb3VzZSBoaXQgdGhlIHJvYWRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzfSBvbkNsaWNrPXttb3VzZUNsaWNrfSBvbk1vdXNlRW50ZXI9e21vdXNlRW50ZXJ9IG9uTW91c2VMZWF2ZT17bW91c2VMZWF2ZX0+XG4gICAgICAgICAgICAgICAgICAgIFRoYXQncyBtZVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG59XG5cbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTE5Y2RkMGM3OTc4NmNhN2M0ZmZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiQ291bnRlciIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3R5bGVzIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm1vdXNlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwibW91c2VFbnRlciIsIm1vdXNlTGVhdmUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsInN0eWxlIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=