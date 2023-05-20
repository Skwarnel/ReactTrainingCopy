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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Aktualna godzina to: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, this.state.myTime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.timeUpdate
      }, "Aktualizuj czas"));
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("188f03586677de3e9b74")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zZGI0MDlmYjZiNWNmNzVjYmIwYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFeUM7QUFBQSxJQUVuQ0UsV0FBVywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFdBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixXQUFBO0VBQUEsU0FBQUEsWUFBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixXQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBRWJXLEtBQUssR0FBRTtNQUNIQyxNQUFNLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFBQWQsS0FBQSxDQUNEZSxVQUFVLEdBQUcsWUFBTTtNQUNmZixLQUFBLENBQUtnQixRQUFRLENBQUM7UUFDVkosTUFBTSxFQUFFLElBQUlDLElBQUksQ0FBQyxDQUFDLENBQUNDO01BQ3ZCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFBQSxPQUFBZCxLQUFBO0VBQUE7RUFBQWlCLFlBQUEsQ0FBQXRCLFdBQUE7SUFBQXVCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE9BQUEsRUFBUztNQUNMLG9CQUNJM0IsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLGFBQUksdUJBQXlCLENBQUMsZUFDOUJBLDBEQUFBLFlBQUksSUFBSSxDQUFDa0IsS0FBSyxDQUFDQyxNQUFVLENBQUMsZUFDMUJuQiwwREFBQTtRQUFROEIsT0FBTyxFQUFFLElBQUksQ0FBQ1I7TUFBVyxHQUFDLGlCQUF1QixDQUMzRCxDQUFDO0lBRVg7RUFBQztFQUFBLE9BQUFwQixXQUFBO0FBQUEsRUFuQnFCRCw0Q0FBUyxHQXdCbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsaUVBQWVDLFdBQVc7Ozs7Ozs7O1VDbEQxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA1X0R6aWVuXzgvMDJfU3Rhbl9hcGxpa2FjamkvMDJfWmFkYW5pZV8yL2pzL0N1cnJlbnREYXRlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VycmVudERhdGUuanNcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQ3VycmVudERhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPXtcbiAgICAgICAgbXlUaW1lOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKClcbiAgICB9XG4gICAgdGltZVVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBteVRpbWU6IG5ldyBEYXRlKCkudG9TdHJpbmdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDI+QWt0dWFsbmEgZ29kemluYSB0bzogPC9oMj5cbiAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5teVRpbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy50aW1lVXBkYXRlfT5Ba3R1YWxpenVqIGN6YXM8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxuXG59XG5cblxuLy8gY2xhc3MgQ3VycmVudERhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xuLy9cbi8vICAgICBzdGF0ZSA9IHtcbi8vICAgICAgICAgdGltZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxuLy8gICAgIH1cbi8vXG4vLyAgICAgdXBkYXRlRGF0ZSA9ICgpID0+IHtcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4vLyAgICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy9cbi8vICAgICByZW5kZXIoKSB7XG4vLyAgICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgICAgICA8PlxuLy8gICAgICAgICAgICAgICAgIDxkYXRlPnsgdGhpcy5zdGF0ZS50aW1lIH08L2RhdGU+XG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnVwZGF0ZURhdGV9Plpha3R1YWxpenVqIGRhdMSZPC9idXR0b24+XG4vLyAgICAgICAgICAgICA8Lz5cbi8vICAgICAgICAgKVxuLy8gICAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudERhdGU7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTg4ZjAzNTg2Njc3ZGUzZTliNzRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDdXJyZW50RGF0ZSIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJteVRpbWUiLCJEYXRlIiwidG9TdHJpbmciLCJ0aW1lVXBkYXRlIiwic2V0U3RhdGUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9