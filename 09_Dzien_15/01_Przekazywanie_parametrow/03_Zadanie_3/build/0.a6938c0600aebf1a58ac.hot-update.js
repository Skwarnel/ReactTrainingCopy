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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function CrazyDiv() {
  var style0 = {
    width: '100px',
    height: '100px',
    background: 'red',
    position: 'absolute'
  };
  // const style1 = { width: '200px', height: '200px', background: 'green', top: 1000, left: 600};

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(style0),
    _useState2 = _slicedToArray(_useState, 2),
    crazyDivStyle = _useState2[0],
    setStyle = _useState2[1];
  var handleHover = function handleHover() {
    var topValue = Math.floor(Math.random() * (600 - 300) + 301);
    var leftValue = Math.floor(Math.random() * 1000 + 1);
    setStyle(_objectSpread(_objectSpread({}, style0), {}, {
      width: '200px',
      height: '200px',
      background: 'green',
      top: topValue,
      left: leftValue
    }));
  };
  // const handleClick = () => {
  //   setBulbState(prev => !prev);
  // }
  // () => handleHover(0, 1000); // przedział 0 - 1000
  // () => handleHover(300, 600); // przedział 300 - 600
  // onMouseLeave={() => setStyle(style0)}

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: crazyDivStyle,
    onMouseEnter: handleHover
  }, "My style changes on mouse enter");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CrazyDiv);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9bfa993682ebe2e97390")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNjkzOGMwNjAwYWViZjFhNThhYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxTQUFTRSxRQUFRQSxDQUFBLEVBQUc7RUFDaEIsSUFBTUMsTUFBTSxHQUFHO0lBQUVDLEtBQUssRUFBRSxPQUFPO0lBQUVDLE1BQU0sRUFBRSxPQUFPO0lBQUVDLFVBQVUsRUFBRSxLQUFLO0lBQUVDLFFBQVEsRUFBRTtFQUFVLENBQUM7RUFDMUY7O0VBR0EsSUFBQUMsU0FBQSxHQUFvQ1AsK0NBQVEsQ0FBQ0UsTUFBTSxDQUFDO0lBQUFNLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTVDRyxhQUFhLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBRy9CLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEIsSUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDOUQsSUFBTUMsU0FBUyxHQUFHSCxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7SUFDdERMLFFBQVEsQ0FBQU8sYUFBQSxDQUFBQSxhQUFBLEtBQUtoQixNQUFNO01BQUVDLEtBQUssRUFBRSxPQUFPO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVDLFVBQVUsRUFBRSxPQUFPO01BQUVjLEdBQUcsRUFBRU4sUUFBUTtNQUFFTyxJQUFJLEVBQUVIO0lBQVMsRUFBQyxDQUFDO0VBQy9HLENBQUM7RUFDRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUEsb0JBQ0lsQiwwREFBQTtJQUFLdUIsS0FBSyxFQUFFWixhQUFjO0lBQUNhLFlBQVksRUFBRVg7RUFBWSxHQUFFLGlDQUVsRCxDQUFDO0FBRWQ7QUFFQSxpRUFBZVgsUUFBUTs7Ozs7Ozs7VUM3QnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDFfUHJ6ZWthenl3YW5pZV9wYXJhbWV0cm93LzAzX1phZGFuaWVfMy9qcy9DcmF6eURpdi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQ3JhenlEaXYoKSB7XG4gICAgY29uc3Qgc3R5bGUwID0geyB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnLCBiYWNrZ3JvdW5kOiAncmVkJywgcG9zaXRpb246ICdhYnNvbHV0ZSd9O1xuICAgIC8vIGNvbnN0IHN0eWxlMSA9IHsgd2lkdGg6ICcyMDBweCcsIGhlaWdodDogJzIwMHB4JywgYmFja2dyb3VuZDogJ2dyZWVuJywgdG9wOiAxMDAwLCBsZWZ0OiA2MDB9O1xuXG5cbiAgICBjb25zdCBbIGNyYXp5RGl2U3R5bGUsIHNldFN0eWxlIF0gPSB1c2VTdGF0ZShzdHlsZTApO1xuXG5cbiAgICBjb25zdCBoYW5kbGVIb3ZlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9wVmFsdWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNjAwIC0gMzAwKSArIDMwMSk7XG4gICAgICAgIGNvbnN0IGxlZnRWYWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAgKyAxKTtcbiAgICAgICAgc2V0U3R5bGUoey4uLnN0eWxlMCwgd2lkdGg6ICcyMDBweCcsIGhlaWdodDogJzIwMHB4JywgYmFja2dyb3VuZDogJ2dyZWVuJywgdG9wOiB0b3BWYWx1ZSwgbGVmdDogbGVmdFZhbHVlfSk7XG4gICAgfVxuICAgIC8vIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIC8vICAgc2V0QnVsYlN0YXRlKHByZXYgPT4gIXByZXYpO1xuICAgIC8vIH1cbiAgICAvLyAoKSA9PiBoYW5kbGVIb3ZlcigwLCAxMDAwKTsgLy8gcHJ6ZWR6aWHFgiAwIC0gMTAwMFxuICAgIC8vICgpID0+IGhhbmRsZUhvdmVyKDMwMCwgNjAwKTsgLy8gcHJ6ZWR6aWHFgiAzMDAgLSA2MDBcbiAgICAvLyBvbk1vdXNlTGVhdmU9eygpID0+IHNldFN0eWxlKHN0eWxlMCl9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtjcmF6eURpdlN0eWxlfSBvbk1vdXNlRW50ZXI9e2hhbmRsZUhvdmVyfSA+XG4gICAgICAgICAgICBNeSBzdHlsZSBjaGFuZ2VzIG9uIG1vdXNlIGVudGVyXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JhenlEaXY7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWJmYTk5MzY4MmViZTJlOTczOTBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNyYXp5RGl2Iiwic3R5bGUwIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwicG9zaXRpb24iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjcmF6eURpdlN0eWxlIiwic2V0U3R5bGUiLCJoYW5kbGVIb3ZlciIsInRvcFZhbHVlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVmdFZhbHVlIiwiX29iamVjdFNwcmVhZCIsInRvcCIsImxlZnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJvbk1vdXNlRW50ZXIiXSwic291cmNlUm9vdCI6IiJ9