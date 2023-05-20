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


function ShowUserFunc(_ref) {
  var name = _ref.name,
    surname = _ref.surname;
  var handleClick = function handleClick() {
    console.log(name, surname);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick
  }, "Dane u\u017Cytkownika");
}
var ShowUserClass = /*#__PURE__*/function (_React$Component) {
  _inherits(ShowUserClass, _React$Component);
  var _super = _createSuper(ShowUserClass);
  function ShowUserClass() {
    var _this;
    _classCallCheck(this, ShowUserClass);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.handleClick = function () {
      var _this$props = _this.props,
        name = _this$props.name,
        surname = _this$props.surname;
      console.log(name, surname);
    };
    return _this;
  }
  _createClass(ShowUserClass, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.handleClick
      }, "Dane u\u017Cytkownika");
    }
  }]);
  return ShowUserClass;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShowUserFunc, {
    name: "John",
    surname: "Smith"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShowUserClass, {
    name: "John",
    surname: "Smith"
  }));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c0c2243e24044923a85")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wYzQ0YmVhNTQ0N2EyNWRkMjhhNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ29CO0FBRTlDLFNBQVNFLFlBQVlBLENBQUFDLElBQUEsRUFBb0I7RUFBQSxJQUFqQkMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7SUFBRUMsT0FBTyxHQUFBRixJQUFBLENBQVBFLE9BQU87RUFFakMsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztJQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksRUFBRUMsT0FBTyxDQUFDO0VBQzlCLENBQUM7RUFFRCxvQkFBT0wsMERBQUE7SUFBUVUsT0FBTyxFQUFFSjtFQUFZLEdBQUMsdUJBQXdCLENBQUM7QUFFbEU7QUFBQyxJQUVLSyxhQUFhLDBCQUFBQyxnQkFBQTtFQUFBQyxTQUFBLENBQUFGLGFBQUEsRUFBQUMsZ0JBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosYUFBQTtFQUFBLFNBQUFBLGNBQUE7SUFBQSxJQUFBSyxLQUFBO0lBQUFDLGVBQUEsT0FBQU4sYUFBQTtJQUFBLFNBQUFPLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQUFQLEtBQUEsR0FBQUYsTUFBQSxDQUFBVSxJQUFBLENBQUFDLEtBQUEsQ0FBQVgsTUFBQSxTQUFBWSxNQUFBLENBQUFMLElBQUE7SUFBQUwsS0FBQSxDQUVmVixXQUFXLEdBQUcsWUFBTTtNQUNoQixJQUFBcUIsV0FBQSxHQUEwQlgsS0FBQSxDQUFLWSxLQUFLO1FBQTVCeEIsSUFBSSxHQUFBdUIsV0FBQSxDQUFKdkIsSUFBSTtRQUFFQyxPQUFPLEdBQUFzQixXQUFBLENBQVB0QixPQUFPO01BQ3JCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxFQUFFQyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUFBLE9BQUFXLEtBQUE7RUFBQTtFQUFBYSxZQUFBLENBQUFsQixhQUFBO0lBQUFtQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxPQUFBLEVBQVM7TUFDTCxvQkFBT2hDLDBEQUFBO1FBQVFVLE9BQU8sRUFBRSxJQUFJLENBQUNKO01BQVksR0FBQyx1QkFBd0IsQ0FBQztJQUN2RTtFQUFDO0VBQUEsT0FBQUssYUFBQTtBQUFBLEVBVHVCWCx3REFBZTtBQWEzQyxTQUFTa0MsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQ0lsQywwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0UsWUFBWTtJQUFDRSxJQUFJLEVBQUMsTUFBTTtJQUFDQyxPQUFPLEVBQUM7RUFBTyxDQUFFLENBQUMsZUFDNUNMLDBEQUFBLENBQUNXLGFBQWE7SUFBQ1AsSUFBSSxFQUFDLE1BQU07SUFBQ0MsT0FBTyxFQUFDO0VBQU8sQ0FBRSxDQUM5QyxDQUFDO0FBRVg7QUFFQSxJQUFNK0IsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHdEMsNERBQVUsQ0FBQ21DLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDUCxNQUFNLGVBQUNoQywwREFBQSxDQUFDa0MsR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7VUNyQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMV9Qb2RzdGF3eV96ZGFyemVuLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gU2hvd1VzZXJGdW5jKHsgbmFtZSwgc3VybmFtZSB9KSB7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSwgc3VybmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkRhbmUgdcW8eXRrb3duaWthPC9idXR0b24+O1xuXG59XG5cbmNsYXNzIFNob3dVc2VyQ2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgc3VybmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSwgc3VybmFtZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5EYW5lIHXFvHl0a293bmlrYTwvYnV0dG9uPjtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8U2hvd1VzZXJGdW5jIG5hbWU9XCJKb2huXCIgc3VybmFtZT1cIlNtaXRoXCIgLz5cbiAgICAgICAgICAgIDxTaG93VXNlckNsYXNzIG5hbWU9XCJKb2huXCIgc3VybmFtZT1cIlNtaXRoXCIgLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1YzBjMjI0M2UyNDA0NDkyM2E4NVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJTaG93VXNlckZ1bmMiLCJfcmVmIiwibmFtZSIsInN1cm5hbWUiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsIlNob3dVc2VyQ2xhc3MiLCJfUmVhY3QkQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsIl90aGlzJHByb3BzIiwicHJvcHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIkNvbXBvbmVudCIsIkFwcCIsIkZyYWdtZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiXSwic291cmNlUm9vdCI6IiJ9