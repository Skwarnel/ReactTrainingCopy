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


var Header = /*#__PURE__*/function (_Component) {
  _inherits(Header, _Component);
  var _super = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super.apply(this, arguments);
  }
  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        logo = _this$props.logo,
        searchPlaceholder = _this$props.searchPlaceholder,
        name = _this$props.name;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: "#"
      }, logo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        placeholder: searchPlaceholder,
        name: "s"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        name: "s"
      }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Search")));
    }
  }]);
  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var App = /*#__PURE__*/function (_Component2) {
  _inherits(App, _Component2);
  var _super2 = _createSuper(App);
  function App() {
    _classCallCheck(this, App);
    return _super2.apply(this, arguments);
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
/******/ 	__webpack_require__.h = () => ("71ac2454e798677e9fc9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZTNkODJlMmU0YmRjNGIxZjUwZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0s7QUFBQSxJQUV4Q0csTUFBTSwwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLE1BQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixNQUFBO0VBQUEsU0FBQUEsT0FBQTtJQUFBSyxlQUFBLE9BQUFMLE1BQUE7SUFBQSxPQUFBRyxNQUFBLENBQUFHLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLFlBQUEsQ0FBQVIsTUFBQTtJQUFBUyxHQUFBO0lBQUFDLEtBQUEsRUFDVixTQUFBQyxPQUFBLEVBQVM7TUFDUCxJQUFBQyxXQUFBLEdBQTBDLElBQUksQ0FBQ0MsS0FBSztRQUE1Q0MsSUFBSSxHQUFBRixXQUFBLENBQUpFLElBQUk7UUFBRUMsaUJBQWlCLEdBQUFILFdBQUEsQ0FBakJHLGlCQUFpQjtRQUFFQyxJQUFJLEdBQUFKLFdBQUEsQ0FBSkksSUFBSTtNQUVyQyxvQkFDRW5CLDBEQUFBLDhCQUNFQSwwREFBQTtRQUFHcUIsSUFBSSxFQUFDO01BQUcsR0FBRUosSUFBUSxDQUFDLGVBQ3RCakIsMERBQUEsNEJBQ0VBLDBEQUFBO1FBQU9zQixXQUFXLEVBQUVKLGlCQUFrQjtRQUFDQyxJQUFJLEVBQUM7TUFBRyxDQUFFLENBQUMsZUFDbERuQiwwREFBQTtRQUFHbUIsSUFBSSxFQUFDO01BQUcsR0FBRUEsSUFBUSxDQUFDLGVBQ3RCbkIsMERBQUEsaUJBQVEsUUFBYyxDQUNsQixDQUNBLENBQUM7SUFFYjtFQUFDO0VBQUEsT0FBQUcsTUFBQTtBQUFBLEVBZGtCRiw0Q0FBUztBQUFBLElBaUJ4QnNCLEdBQUcsMEJBQUFDLFdBQUE7RUFBQW5CLFNBQUEsQ0FBQWtCLEdBQUEsRUFBQUMsV0FBQTtFQUFBLElBQUFDLE9BQUEsR0FBQWxCLFlBQUEsQ0FBQWdCLEdBQUE7RUFBQSxTQUFBQSxJQUFBO0lBQUFmLGVBQUEsT0FBQWUsR0FBQTtJQUFBLE9BQUFFLE9BQUEsQ0FBQWhCLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLFlBQUEsQ0FBQVksR0FBQTtJQUFBWCxHQUFBO0lBQUFDLEtBQUEsRUFDUCxTQUFBQyxPQUFBLEVBQVM7TUFDUCxvQkFBT2QsMERBQUEsQ0FBQ0csTUFBTTtRQUFDYyxJQUFJLEVBQUMsZUFBZTtRQUFDQyxpQkFBaUIsRUFBQztNQUFvQixDQUFFLENBQUM7SUFDL0U7RUFBQztFQUFBLE9BQUFLLEdBQUE7QUFBQSxFQUhldEIsNENBQVM7QUFNM0IsSUFBTXlCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBRzNCLDREQUFVLENBQUN3QixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ2YsTUFBTSxlQUFDZCwwREFBQSxDQUFDdUIsR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7VUM1QnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDNfRHppZW5fNC8wM19aYWduaWV6ZHphbmllX2lfZHppZWxlbmllLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9nbywgc2VhcmNoUGxhY2Vob2xkZXIsIG5hbWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIj57bG9nb308L2E+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj17c2VhcmNoUGxhY2Vob2xkZXJ9IG5hbWU9XCJzXCIgLz5cbiAgICAgICAgICA8cCBuYW1lPVwic1wiPntuYW1lfTwvcD5cbiAgICAgICAgICA8YnV0dG9uPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2hlYWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPEhlYWRlciBsb2dvPVwiWW91ciBjb21wYW55IVwiIHNlYXJjaFBsYWNlaG9sZGVyPVwiVHlwZSBzb21lIHdvcmRzLi4uXCIgLz47XG4gIH1cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3MWFjMjQ1NGU3OTg2NzdlOWZjOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJIZWFkZXIiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzJHByb3BzIiwicHJvcHMiLCJsb2dvIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJuYW1lIiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJwbGFjZWhvbGRlciIsIkFwcCIsIl9Db21wb25lbnQyIiwiX3N1cGVyMiIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290Il0sInNvdXJjZVJvb3QiOiIifQ==