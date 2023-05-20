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
    _this["const"] = void 0;
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Aktualna godzina to: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        onMouseEnter: timeUpdate
      }, this.state.myTime));
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
/******/ 	__webpack_require__.h = () => ("2632acfb08c4725a643d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xYzYyYThkNDUzMTQwY2RiYjQyZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFeUM7QUFBQSxJQUVuQ0UsV0FBVywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFdBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixXQUFBO0VBQUEsU0FBQUEsWUFBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixXQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBRWJXLEtBQUssR0FBRztNQUNKQyxNQUFNLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFBQWQsS0FBQTtJQUFBQSxLQUFBLENBRURlLFVBQVUsR0FBRyxZQUFNO01BQ2ZmLEtBQUEsQ0FBS2dCLFFBQVEsQ0FBQztRQUNWSixNQUFNLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUMsQ0FBQ0M7TUFDdkIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUFBLE9BQUFkLEtBQUE7RUFBQTtFQUFBaUIsWUFBQSxDQUFBdEIsV0FBQTtJQUFBdUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsT0FBQSxFQUFTO01BQ0wsb0JBQ0kzQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsYUFBSSx1QkFBeUIsQ0FBQyxlQUM5QkEsMERBQUE7UUFBRzhCLFlBQVksRUFBRVI7TUFBVyxHQUFFLElBQUksQ0FBQ0osS0FBSyxDQUFDQyxNQUFVLENBRXJELENBQUM7SUFFWDtFQUFDO0VBQUEsT0FBQWpCLFdBQUE7QUFBQSxFQXBCcUJELDRDQUFTLEdBeUJuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZUMsV0FBVzs7Ozs7Ozs7VUNuRDFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMl9TdGFuX2FwbGlrYWNqaS8wMl9aYWRhbmllXzIvanMvQ3VycmVudERhdGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXJyZW50RGF0ZS5qc1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBDdXJyZW50RGF0ZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbXlUaW1lOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKClcbiAgICB9XG4gICAgY29uc3RcbiAgICB0aW1lVXBkYXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG15VGltZTogbmV3IERhdGUoKS50b1N0cmluZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoMj5Ba3R1YWxuYSBnb2R6aW5hIHRvOiA8L2gyPlxuICAgICAgICAgICAgICAgIDxwIG9uTW91c2VFbnRlcj17dGltZVVwZGF0ZX0+e3RoaXMuc3RhdGUubXlUaW1lfTwvcD5cbiAgICAgICAgICAgICAgICB7Lyo8YnV0dG9uIG9uTW91c2VFbnRlcj17dGltZVVwZGF0ZX0+QWt0dWFsaXp1aiBjemFzPC9idXR0b24+Ki99XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5cbi8vIGNsYXNzIEN1cnJlbnREYXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vXG4vLyAgICAgc3RhdGUgPSB7XG4vLyAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcbi8vICAgICB9XG4vL1xuLy8gICAgIHVwZGF0ZURhdGUgPSAoKSA9PiB7XG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxuLy8gICAgICAgICB9KVxuLy8gICAgIH1cbi8vXG4vLyAgICAgcmVuZGVyKCkge1xuLy8gICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgPD5cbi8vICAgICAgICAgICAgICAgICA8ZGF0ZT57IHRoaXMuc3RhdGUudGltZSB9PC9kYXRlPlxuLy8gICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy51cGRhdGVEYXRlfT5aYWt0dWFsaXp1aiBkYXTEmTwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgPC8+XG4vLyAgICAgICAgIClcbi8vICAgICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnREYXRlOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI2MzJhY2ZiMDhjNDcyNWE2NDNkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ3VycmVudERhdGUiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwibXlUaW1lIiwiRGF0ZSIsInRvU3RyaW5nIiwidGltZVVwZGF0ZSIsInNldFN0YXRlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbk1vdXNlRW50ZXIiXSwic291cmNlUm9vdCI6IiJ9