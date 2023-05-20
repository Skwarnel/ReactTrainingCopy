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
      curTi: new Date().toString
    };
    _this.myFunc = function () {
      _this.setState({
        curTi: new Date().toString
      });
    };
    return _this;
  }
  _createClass(CurrentDate, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Aktualna godzina to: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("date", null, this.state.gpsNewTime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.myFuncToUpdate
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
/******/ 	__webpack_require__.h = () => ("589e816ea36a817e5a7a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44NTUxOWU1YjlkNTcxMzhhNDRmZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFdUM7QUFBQSxJQUVqQ0UsV0FBVywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFdBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixXQUFBO0VBQUEsU0FBQUEsWUFBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixXQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBQ2JXLEtBQUssR0FBRztNQUNKQyxLQUFLLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUMsQ0FBQ0M7SUFDdEIsQ0FBQztJQUFBZCxLQUFBLENBRURlLE1BQU0sR0FBRyxZQUFNO01BQ1hmLEtBQUEsQ0FBS2dCLFFBQVEsQ0FBQztRQUNWSixLQUFLLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUMsQ0FBQ0M7TUFDdEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUFBLE9BQUFkLEtBQUE7RUFBQTtFQUFBaUIsWUFBQSxDQUFBdEIsV0FBQTtJQUFBdUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsT0FBQSxFQUFTO01BQ0wsb0JBQ0kzQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsYUFBSSx1QkFBeUIsQ0FBQyxlQUM5QkEsMERBQUEsZUFBTyxJQUFJLENBQUNrQixLQUFLLENBQUNZLFVBQWlCLENBQUMsZUFDcEM5QiwwREFBQTtRQUFRK0IsT0FBTyxFQUFFLElBQUksQ0FBQ0M7TUFBZSxHQUFDLGlCQUF1QixDQUMvRCxDQUFDO0lBRVg7RUFBQztFQUFBLE9BQUE5QixXQUFBO0FBQUEsRUFuQnFCRCw0Q0FBUyxHQXNCbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUksaUVBRUFDLFdBQVc7Ozs7Ozs7Ozs7OztBQ2xEZjs7QUFFdUM7QUFDTjtBQUVPO0FBRXhDLFNBQVNnQyxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT2xDLDBEQUFBLENBQUNFLG9EQUFXLE1BQUUsQ0FBQztBQUMxQjtBQUVBK0IsNkNBQWUsZUFBQ2pDLDBEQUFBLENBQUNrQyxHQUFHLE1BQUMsQ0FBQyxFQUFFQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7VUNYdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAyX1N0YW5fYXBsaWthY2ppLzAyX1phZGFuaWVfMi9qcy9DdXJyZW50RGF0ZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAyX1N0YW5fYXBsaWthY2ppLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXJyZW50RGF0ZS5qc1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQ3VycmVudERhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjdXJUaTogbmV3IERhdGUoKS50b1N0cmluZyxcbiAgICB9XG5cbiAgICBteUZ1bmMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VyVGk6IG5ldyBEYXRlKCkudG9TdHJpbmcsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDI+QWt0dWFsbmEgZ29kemluYSB0bzogPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGF0ZT57dGhpcy5zdGF0ZS5ncHNOZXdUaW1lfTwvZGF0ZT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMubXlGdW5jVG9VcGRhdGV9PkFrdHVhbGl6dWogY3phczwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbi8vIGNsYXNzIEN1cnJlbnREYXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vXG4vLyAgICAgc3RhdGUgPSB7XG4vLyAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcbi8vICAgICB9XG4vL1xuLy8gICAgIHVwZGF0ZURhdGUgPSAoKSA9PiB7XG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxuLy8gICAgICAgICB9KVxuLy8gICAgIH1cbi8vXG4vLyAgICAgcmVuZGVyKCkge1xuLy8gICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgPD5cbi8vICAgICAgICAgICAgICAgICA8ZGF0ZT57IHRoaXMuc3RhdGUudGltZSB9PC9kYXRlPlxuLy8gICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy51cGRhdGVEYXRlfT5aYWt0dWFsaXp1aiBkYXTEmTwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgPC8+XG4vLyAgICAgICAgIClcbi8vICAgICB9XG4vLyB9XG5cbiAgICBleHBvcnRcbiAgICBkZWZhdWx0XG4gICAgQ3VycmVudERhdGU7IiwiLy8gYXBwLmpzXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5pbXBvcnQgQ3VycmVudERhdGUgZnJvbSAnLi9DdXJyZW50RGF0ZSc7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPEN1cnJlbnREYXRlIC8+O1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTg5ZTgxNmVhMzZhODE3ZTVhN2FcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDdXJyZW50RGF0ZSIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJjdXJUaSIsIkRhdGUiLCJ0b1N0cmluZyIsIm15RnVuYyIsInNldFN0YXRlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJncHNOZXdUaW1lIiwib25DbGljayIsIm15RnVuY1RvVXBkYXRlIiwiUmVhY3RET00iLCJBcHAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==