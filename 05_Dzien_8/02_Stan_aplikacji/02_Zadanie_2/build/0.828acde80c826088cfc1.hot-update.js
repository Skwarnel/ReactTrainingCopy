"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 27:
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
// CurrentDate.js


var CurrentDate = /*#__PURE__*/function (_Component) {
  _inherits(CurrentDate, _Component);
  var _super = _createSuper(CurrentDate);
  function CurrentDate() {
    var _this;
    _classCallCheck(this, CurrentDate);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      myTime: new Date().toString()
    };
    _this.timeUpdate = function () {
      _this.setState({
        myTime: new Date().toString
      });
    };
    return _this;
  }
  _createClass(CurrentDate, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("date", null, this.state.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.updateDate
      }, "Zaktualizuj dat\u0119"));
    }
  }]);
  return CurrentDate;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component); // class CurrentDate extends Component {
//
//     state = {
//         time: new Date().toString(),
//     }
//
//     updateDate = () => {
//         this.setState({
//             time: new Date().toString(),
//         })
//     }
//
//     render() {
//         return (
//             <>
//                 <date>{ this.state.time }</date>
//                 <button onClick={this.updateDate}>Zaktualizuj datę</button>
//             </>
//         )
//     }
// }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentDate);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _CurrentDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
// app.js




function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CurrentDate__WEBPACK_IMPORTED_MODULE_2__["default"], null);
}
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("86c034464ea4c6d3de78")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44MjhhY2RlODBjODI2MDg4Y2ZjMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFeUM7QUFBQSxJQUVuQ0UsV0FBVywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFdBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixXQUFBO0VBQUEsU0FBQUEsWUFBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixXQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBRWJXLEtBQUssR0FBRTtNQUNIQyxNQUFNLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFBQWQsS0FBQSxDQUNEZSxVQUFVLEdBQUcsWUFBTTtNQUNmZixLQUFBLENBQUtnQixRQUFRLENBQUM7UUFDVkosTUFBTSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDLENBQUNDO01BQ3ZCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFBQSxPQUFBZCxLQUFBO0VBQUE7RUFBQWlCLFlBQUEsQ0FBQXRCLFdBQUE7SUFBQXVCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE9BQUEsRUFBUztNQUNMLG9CQUNJM0IsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLGVBQVEsSUFBSSxDQUFDa0IsS0FBSyxDQUFDWSxJQUFZLENBQUMsZUFDaEM5QiwwREFBQTtRQUFRK0IsT0FBTyxFQUFFLElBQUksQ0FBQ0M7TUFBVyxHQUFDLHVCQUF3QixDQUM1RCxDQUFDO0lBRVg7RUFBQztFQUFBLE9BQUE5QixXQUFBO0FBQUEsRUFsQnFCRCw0Q0FBUyxHQXVCbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsaUVBQWVDLFdBQVc7Ozs7Ozs7Ozs7OztBQ2pEMUI7O0FBRXVDO0FBQ047QUFFTztBQUV4QyxTQUFTZ0MsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU9sQywwREFBQSxDQUFDRSxvREFBVyxNQUFFLENBQUM7QUFDMUI7QUFFQStCLDZDQUFlLGVBQUNqQywwREFBQSxDQUFDa0MsR0FBRyxNQUFDLENBQUMsRUFBRUMsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDWHZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMl9TdGFuX2FwbGlrYWNqaS8wMl9aYWRhbmllXzIvanMvQ3VycmVudERhdGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMl9TdGFuX2FwbGlrYWNqaS8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VycmVudERhdGUuanNcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQ3VycmVudERhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPXtcbiAgICAgICAgbXlUaW1lOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgfVxuICAgIHRpbWVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbXlUaW1lOiBuZXcgRGF0ZSgpLnRvU3RyaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkYXRlPnsgdGhpcy5zdGF0ZS50aW1lIH08L2RhdGU+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnVwZGF0ZURhdGV9Plpha3R1YWxpenVqIGRhdMSZPC9idXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5cbi8vIGNsYXNzIEN1cnJlbnREYXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vXG4vLyAgICAgc3RhdGUgPSB7XG4vLyAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcbi8vICAgICB9XG4vL1xuLy8gICAgIHVwZGF0ZURhdGUgPSAoKSA9PiB7XG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxuLy8gICAgICAgICB9KVxuLy8gICAgIH1cbi8vXG4vLyAgICAgcmVuZGVyKCkge1xuLy8gICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgPD5cbi8vICAgICAgICAgICAgICAgICA8ZGF0ZT57IHRoaXMuc3RhdGUudGltZSB9PC9kYXRlPlxuLy8gICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy51cGRhdGVEYXRlfT5aYWt0dWFsaXp1aiBkYXTEmTwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgPC8+XG4vLyAgICAgICAgIClcbi8vICAgICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnREYXRlOyIsIi8vIGFwcC5qc1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0IEN1cnJlbnREYXRlIGZyb20gJy4vQ3VycmVudERhdGUnO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxDdXJyZW50RGF0ZSAvPjtcbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg2YzAzNDQ2NGVhNGM2ZDNkZTc4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ3VycmVudERhdGUiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwibXlUaW1lIiwiRGF0ZSIsInRvU3RyaW5nIiwidGltZVVwZGF0ZSIsInNldFN0YXRlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ0aW1lIiwib25DbGljayIsInVwZGF0ZURhdGUiLCJSZWFjdERPTSIsIkFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9