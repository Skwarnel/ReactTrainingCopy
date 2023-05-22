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
  var style1 = {
    width: '200px',
    height: '200px',
    background: 'green',
    top: 1000,
    left: 600
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(style0),
    _useState2 = _slicedToArray(_useState, 2),
    crazyDivStyle = _useState2[0],
    setStyle = _useState2[1];
  var handleHover = function handleHover() {
    console.log('Działam');
    setStyle(_objectSpread(_objectSpread({}, style1), {}, {
      background: 'green'
    }));
  };
  // const handleClick = () => {
  //   setBulbState(prev => !prev);
  // }
  // () => handleHover(0, 1000); // przedział 0 - 1000
  // () => handleHover(300, 600); // przedział 300 - 600

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: crazyDivStyle,
    onMouseEnter: handleHover,
    onMouseLeave: function onMouseLeave() {
      return setStyle(style0);
    }
  }, "My style changes on mouse enter");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CrazyDiv);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eb95d95f6af9a7727a09")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMzViODQzOTgzMzk3YzRmMzY3OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxTQUFTRSxRQUFRQSxDQUFBLEVBQUc7RUFDaEIsSUFBTUMsTUFBTSxHQUFHO0lBQUVDLEtBQUssRUFBRSxPQUFPO0lBQUVDLE1BQU0sRUFBRSxPQUFPO0lBQUVDLFVBQVUsRUFBRSxLQUFLO0lBQUVDLFFBQVEsRUFBRTtFQUFVLENBQUM7RUFDMUYsSUFBTUMsTUFBTSxHQUFHO0lBQUVKLEtBQUssRUFBRSxPQUFPO0lBQUVDLE1BQU0sRUFBRSxPQUFPO0lBQUVDLFVBQVUsRUFBRSxPQUFPO0lBQUVHLEdBQUcsRUFBRSxJQUFJO0lBQUVDLElBQUksRUFBRTtFQUFHLENBQUM7RUFHNUYsSUFBQUMsU0FBQSxHQUFvQ1YsK0NBQVEsQ0FBQ0UsTUFBTSxDQUFDO0lBQUFTLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTVDRyxhQUFhLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBRy9CLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUN0QkgsUUFBUSxDQUFBSSxhQUFBLENBQUFBLGFBQUEsS0FBS1gsTUFBTTtNQUFFRixVQUFVLEVBQUU7SUFBTyxFQUFDLENBQUM7RUFDOUMsQ0FBQztFQUNEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBR0Esb0JBQ0lOLDBEQUFBO0lBQUtxQixLQUFLLEVBQUVQLGFBQWM7SUFBQ1EsWUFBWSxFQUFFTixXQUFZO0lBQUNPLFlBQVksRUFBRSxTQUFBQSxhQUFBO01BQUEsT0FBTVIsUUFBUSxDQUFDWixNQUFNLENBQUM7SUFBQTtFQUFDLEdBQUMsaUNBRXZGLENBQUM7QUFFZDtBQUVBLGlFQUFlRCxRQUFROzs7Ozs7OztVQzVCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMV9Qcnpla2F6eXdhbmllX3BhcmFtZXRyb3cvMDNfWmFkYW5pZV8zL2pzL0NyYXp5RGl2LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBDcmF6eURpdigpIHtcbiAgICBjb25zdCBzdHlsZTAgPSB7IHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcsIGJhY2tncm91bmQ6ICdyZWQnLCBwb3NpdGlvbjogJ2Fic29sdXRlJ307XG4gICAgY29uc3Qgc3R5bGUxID0geyB3aWR0aDogJzIwMHB4JywgaGVpZ2h0OiAnMjAwcHgnLCBiYWNrZ3JvdW5kOiAnZ3JlZW4nLCB0b3A6IDEwMDAsIGxlZnQ6IDYwMH07XG5cblxuICAgIGNvbnN0IFsgY3JhenlEaXZTdHlsZSwgc2V0U3R5bGUgXSA9IHVzZVN0YXRlKHN0eWxlMCk7XG5cblxuICAgIGNvbnN0IGhhbmRsZUhvdmVyID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRHppYcWCYW0nKTtcbiAgICAgICAgc2V0U3R5bGUoey4uLnN0eWxlMSwgYmFja2dyb3VuZDogJ2dyZWVuJ30pO1xuICAgIH1cbiAgICAvLyBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAvLyAgIHNldEJ1bGJTdGF0ZShwcmV2ID0+ICFwcmV2KTtcbiAgICAvLyB9XG4gICAgLy8gKCkgPT4gaGFuZGxlSG92ZXIoMCwgMTAwMCk7IC8vIHByemVkemlhxYIgMCAtIDEwMDBcbiAgICAvLyAoKSA9PiBoYW5kbGVIb3ZlcigzMDAsIDYwMCk7IC8vIHByemVkemlhxYIgMzAwIC0gNjAwXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e2NyYXp5RGl2U3R5bGV9IG9uTW91c2VFbnRlcj17aGFuZGxlSG92ZXJ9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U3R5bGUoc3R5bGUwKX0+XG4gICAgICAgICAgICBNeSBzdHlsZSBjaGFuZ2VzIG9uIG1vdXNlIGVudGVyXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JhenlEaXY7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWI5NWQ5NWY2YWY5YTc3MjdhMDlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNyYXp5RGl2Iiwic3R5bGUwIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwicG9zaXRpb24iLCJzdHlsZTEiLCJ0b3AiLCJsZWZ0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY3JhenlEaXZTdHlsZSIsInNldFN0eWxlIiwiaGFuZGxlSG92ZXIiLCJjb25zb2xlIiwibG9nIiwiX29iamVjdFNwcmVhZCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSJdLCJzb3VyY2VSb290IjoiIn0=