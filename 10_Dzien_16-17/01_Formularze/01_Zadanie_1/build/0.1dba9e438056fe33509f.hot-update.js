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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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

var Hello = /*#__PURE__*/function (_Component) {
  _inherits(Hello, _Component);
  var _super = _createSuper(Hello);
  function Hello() {
    var _this;
    _classCallCheck(this, Hello);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      name: "You"
    };
    _this.handleNameChange = function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    };
    _this.handleSubmit = function (e) {
      e.preventDefault();
      console.log("your name is ".concat(_this.state.name));
    };
    return _this;
  }
  _createClass(Hello, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Imi\u0119 i nazwisko:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Hello "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        name: "name",
        value: this.state.name,
        onChange: this.handleNameChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "submit",
        value: "Wy\u015Blij"
      }));
    }
  }]);
  return Hello;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hello);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d7981b1eb3804e093b19")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZGJhOWU0MzgwNTZmZTMzNTA5Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQUEsSUFFakNFLEtBQUssMEJBQUFDLFVBQUE7RUFBQUMsU0FBQSxDQUFBRixLQUFBLEVBQUFDLFVBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosS0FBQTtFQUFBLFNBQUFBLE1BQUE7SUFBQSxJQUFBSyxLQUFBO0lBQUFDLGVBQUEsT0FBQU4sS0FBQTtJQUFBLFNBQUFPLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQUFQLEtBQUEsR0FBQUYsTUFBQSxDQUFBVSxJQUFBLENBQUFDLEtBQUEsQ0FBQVgsTUFBQSxTQUFBWSxNQUFBLENBQUFMLElBQUE7SUFBQUwsS0FBQSxDQUNQVyxLQUFLLEdBQUc7TUFDSkMsSUFBSSxFQUFFO0lBQ1YsQ0FBQztJQUFBWixLQUFBLENBRURhLGdCQUFnQixHQUFHLFVBQUFDLENBQUMsRUFBSTtNQUNwQmQsS0FBQSxDQUFLZSxRQUFRLENBQUFDLGVBQUEsS0FDUkYsQ0FBQyxDQUFDRyxNQUFNLENBQUNMLElBQUksRUFBR0UsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFBQWxCLEtBQUEsQ0FFRG1CLFlBQVksR0FBRyxVQUFBTCxDQUFDLEVBQUk7TUFDaEJBLENBQUMsQ0FBQ00sY0FBYyxDQUFDLENBQUM7TUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxpQkFBQVosTUFBQSxDQUFpQlYsS0FBQSxDQUFLVyxLQUFLLENBQUNDLElBQUksQ0FBRSxDQUFDO0lBQ2xELENBQUM7SUFBQSxPQUFBWixLQUFBO0VBQUE7RUFBQXVCLFlBQUEsQ0FBQTVCLEtBQUE7SUFBQTZCLEdBQUE7SUFBQU4sS0FBQSxFQUVELFNBQUFPLE9BQUEsRUFBUztNQUNMLG9CQUNJaEMsMERBQUE7UUFBTWtDLFFBQVEsRUFBRSxJQUFJLENBQUNSO01BQWEsZ0JBQ2xDMUIsMERBQUEsZ0JBQU8sdUJBQ0gsZUFBQUEsMERBQUEsYUFBSSxRQUFZLENBQUMsZUFDakJBLDBEQUFBO1FBQU9tQyxJQUFJLEVBQUMsTUFBTTtRQUFDaEIsSUFBSSxFQUFDLE1BQU07UUFBQ00sS0FBSyxFQUFFLElBQUksQ0FBQ1AsS0FBSyxDQUFDQyxJQUFLO1FBQUNpQixRQUFRLEVBQUUsSUFBSSxDQUFDaEI7TUFBaUIsQ0FBQyxDQUNyRixDQUFDLGVBQ1JwQiwwREFBQTtRQUFPbUMsSUFBSSxFQUFDLFFBQVE7UUFBQ1YsS0FBSyxFQUFDO01BQVEsQ0FBQyxDQUNsQyxDQUFDO0lBRVg7RUFBQztFQUFBLE9BQUF2QixLQUFBO0FBQUEsRUF6QmVELDRDQUFTO0FBNEI3QixpRUFBZUMsS0FBSzs7Ozs7Ozs7VUM5QnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTBfRHppZW5fMTYtMTcvMDFfRm9ybXVsYXJ6ZS8wMV9aYWRhbmllXzEvanMvSGVsbG8uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgSGVsbG8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBuYW1lOiBcIllvdVwiXG4gICAgfVxuXG4gICAgaGFuZGxlTmFtZUNoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWV9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhgeW91ciBuYW1lIGlzICR7dGhpcy5zdGF0ZS5uYW1lfWApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWw+SW1pxJkgaSBuYXp3aXNrbzpcbiAgICAgICAgICAgICAgICA8aDE+SGVsbG8ge308L2gxPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX0vPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJXecWbbGlqXCIvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbGxvO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDc5ODFiMWViMzgwNGUwOTNiMTlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJIZWxsbyIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJuYW1lIiwiaGFuZGxlTmFtZUNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIm9uU3VibWl0IiwidHlwZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==