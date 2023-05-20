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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Aktualna godzina to: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("date", null, this.state.curTi), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e02c7c51db7cdd2b74d9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ODllODE2ZWEzNmE4MTdlNWE3YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFdUM7QUFBQSxJQUVqQ0UsV0FBVywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFdBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixXQUFBO0VBQUEsU0FBQUEsWUFBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixXQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBQ2JXLEtBQUssR0FBRztNQUNKQyxLQUFLLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUMsQ0FBQ0M7SUFDdEIsQ0FBQztJQUFBZCxLQUFBLENBRURlLE1BQU0sR0FBRyxZQUFNO01BQ1hmLEtBQUEsQ0FBS2dCLFFBQVEsQ0FBQztRQUNWSixLQUFLLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUMsQ0FBQ0M7TUFDdEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUFBLE9BQUFkLEtBQUE7RUFBQTtFQUFBaUIsWUFBQSxDQUFBdEIsV0FBQTtJQUFBdUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsT0FBQSxFQUFTO01BQ0wsb0JBQ0kzQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsYUFBSSx1QkFBeUIsQ0FBQyxlQUM5QkEsMERBQUEsZUFBTyxJQUFJLENBQUNrQixLQUFLLENBQUNDLEtBQVksQ0FBQyxlQUMvQm5CLDBEQUFBO1FBQVE4QixPQUFPLEVBQUUsSUFBSSxDQUFDQztNQUFlLEdBQUMsaUJBQXVCLENBQy9ELENBQUM7SUFFWDtFQUFDO0VBQUEsT0FBQTdCLFdBQUE7QUFBQSxFQW5CcUJELDRDQUFTLEdBc0JuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZUMsV0FBVzs7Ozs7Ozs7VUNoRDFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMl9TdGFuX2FwbGlrYWNqaS8wMl9aYWRhbmllXzIvanMvQ3VycmVudERhdGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXJyZW50RGF0ZS5qc1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQ3VycmVudERhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjdXJUaTogbmV3IERhdGUoKS50b1N0cmluZyxcbiAgICB9XG5cbiAgICBteUZ1bmMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VyVGk6IG5ldyBEYXRlKCkudG9TdHJpbmcsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDI+QWt0dWFsbmEgZ29kemluYSB0bzogPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGF0ZT57dGhpcy5zdGF0ZS5jdXJUaX08L2RhdGU+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm15RnVuY1RvVXBkYXRlfT5Ba3R1YWxpenVqIGN6YXM8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG4vLyBjbGFzcyBDdXJyZW50RGF0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4vL1xuLy8gICAgIHN0YXRlID0ge1xuLy8gICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4vLyAgICAgfVxuLy9cbi8vICAgICB1cGRhdGVEYXRlID0gKCkgPT4ge1xuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcbi8vICAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcbi8vICAgICAgICAgfSlcbi8vICAgICB9XG4vL1xuLy8gICAgIHJlbmRlcigpIHtcbi8vICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAgIDw+XG4vLyAgICAgICAgICAgICAgICAgPGRhdGU+eyB0aGlzLnN0YXRlLnRpbWUgfTwvZGF0ZT5cbi8vICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudXBkYXRlRGF0ZX0+WmFrdHVhbGl6dWogZGF0xJk8L2J1dHRvbj5cbi8vICAgICAgICAgICAgIDwvPlxuLy8gICAgICAgICApXG4vLyAgICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50RGF0ZTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMDJjN2M1MWRiN2NkZDJiNzRkOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkN1cnJlbnREYXRlIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsImN1clRpIiwiRGF0ZSIsInRvU3RyaW5nIiwibXlGdW5jIiwic2V0U3RhdGUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2xpY2siLCJteUZ1bmNUb1VwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=