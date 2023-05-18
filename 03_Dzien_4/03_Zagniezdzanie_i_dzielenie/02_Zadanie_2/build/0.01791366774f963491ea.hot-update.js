"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _this = undefined;
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



// class Header extends Component {
//   render() {
//     const { logo, searchPlaceholder } = this.props;
//
//     return (
//       <header>
//         <a href="#">{logo}</a>
//         <form>
//           <input placeholder={searchPlaceholder} name="s" />
//           <button>Search</button>
//         </form>
//       </header>
//     );
//   }
// }

// const Header = (props) => {
//         const { logo, searchPlaceholder } = this.props;
//         return (
//             <header>
//                 <a href="#">{logo}</a>
//                 <form>
//                     <input placeholder={searchPlaceholder} name="s" />
//                     <button>Search</button>
//                 </form>
//             </header>
//         );
// }

var Header = function Header(props) {
  var _this$props = _this.props,
    logo = _this$props.logo,
    searchPlaceholder = _this$props.searchPlaceholder;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Dzia\u0142am i pokazuj\u0119 ", logo, " oraz ", searchPlaceholder);
};
var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);
  var _super = _createSuper(App);
  function App() {
    _classCallCheck(this, App);
    return _super.apply(this, arguments);
  }
  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, {
        logo: "Your company!",
        searchPlaceholder: "Type some words..."
      });
    }
  }]);
  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9ef4f3a72394c1eecfb5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMTc5MTM2Njc3NGY5NjM0OTFlYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNLOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFJQyxLQUFLLEVBQUs7RUFDdEIsSUFBQUMsV0FBQSxHQUFvQ0MsS0FBSSxDQUFDRixLQUFLO0lBQXRDRyxJQUFJLEdBQUFGLFdBQUEsQ0FBSkUsSUFBSTtJQUFFQyxpQkFBaUIsR0FBQUgsV0FBQSxDQUFqQkcsaUJBQWlCO0VBQy9CLG9CQUFPUiwwREFBQSxhQUFJLCtCQUFtQixFQUFDTyxJQUFJLEVBQUMsUUFBTSxFQUFDQyxpQkFBc0IsQ0FBQztBQUN0RSxDQUFDO0FBQUEsSUFFS0UsR0FBRywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLEdBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixHQUFBO0VBQUEsU0FBQUEsSUFBQTtJQUFBSyxlQUFBLE9BQUFMLEdBQUE7SUFBQSxPQUFBRyxNQUFBLENBQUFHLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLFlBQUEsQ0FBQVIsR0FBQTtJQUFBUyxHQUFBO0lBQUFDLEtBQUEsRUFDUCxTQUFBQyxPQUFBLEVBQVM7TUFDUCxvQkFBT3JCLDBEQUFBLENBQUNHLE1BQU07UUFBQ0ksSUFBSSxFQUFDLGVBQWU7UUFBQ0MsaUJBQWlCLEVBQUM7TUFBb0IsQ0FBRSxDQUFDO0lBQy9FO0VBQUM7RUFBQSxPQUFBRSxHQUFBO0FBQUEsRUFIZVQsNENBQVM7QUFNM0IsSUFBTXFCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3ZCLDREQUFVLENBQUNvQixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0osTUFBTSxlQUFDckIsMERBQUEsQ0FBQ1UsR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7VUM5Q3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDNfRHppZW5fNC8wM19aYWduaWV6ZHphbmllX2lfZHppZWxlbmllLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuLy8gY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIGNvbnN0IHsgbG9nbywgc2VhcmNoUGxhY2Vob2xkZXIgfSA9IHRoaXMucHJvcHM7XG4vL1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8aGVhZGVyPlxuLy8gICAgICAgICA8YSBocmVmPVwiI1wiPntsb2dvfTwvYT5cbi8vICAgICAgICAgPGZvcm0+XG4vLyAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPXtzZWFyY2hQbGFjZWhvbGRlcn0gbmFtZT1cInNcIiAvPlxuLy8gICAgICAgICAgIDxidXR0b24+U2VhcmNoPC9idXR0b24+XG4vLyAgICAgICAgIDwvZm9ybT5cbi8vICAgICAgIDwvaGVhZGVyPlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IHsgbG9nbywgc2VhcmNoUGxhY2Vob2xkZXIgfSA9IHRoaXMucHJvcHM7XG4vLyAgICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgICAgICA8aGVhZGVyPlxuLy8gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e2xvZ299PC9hPlxuLy8gICAgICAgICAgICAgICAgIDxmb3JtPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9e3NlYXJjaFBsYWNlaG9sZGVyfSBuYW1lPVwic1wiIC8+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+U2VhcmNoPC9idXR0b24+XG4vLyAgICAgICAgICAgICAgICAgPC9mb3JtPlxuLy8gICAgICAgICAgICAgPC9oZWFkZXI+XG4vLyAgICAgICAgICk7XG4vLyB9XG5cblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBsb2dvLCBzZWFyY2hQbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPGgxPkR6aWHFgmFtIGkgcG9rYXp1asSZIHtsb2dvfSBvcmF6IHtzZWFyY2hQbGFjZWhvbGRlcn08L2gxPjtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8SGVhZGVyIGxvZ289XCJZb3VyIGNvbXBhbnkhXCIgc2VhcmNoUGxhY2Vob2xkZXI9XCJUeXBlIHNvbWUgd29yZHMuLi5cIiAvPjtcbiAgfVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjllZjRmM2E3MjM5NGMxZWVjZmI1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlUm9vdCIsIkhlYWRlciIsInByb3BzIiwiX3RoaXMkcHJvcHMiLCJfdGhpcyIsImxvZ28iLCJzZWFyY2hQbGFjZWhvbGRlciIsImNyZWF0ZUVsZW1lbnQiLCJBcHAiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290Il0sInNvdXJjZVJvb3QiOiIifQ==