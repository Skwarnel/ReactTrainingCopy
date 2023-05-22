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
    width: '100px',
    height: '100px',
    background: 'green',
    top: '100px',
    left: '100px'
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(style0),
    _useState2 = _slicedToArray(_useState, 2),
    crazyDivStyle = _useState2[0],
    setStyle = _useState2[1];
  var handleHover = function handleHover() {
    console.log('Działam');
    setStyle(style1);
  };
  // const handleClick = () => {
  //   setBulbState(prev => !prev);
  // }
  // () => handleHover(0, 1000); // przedział 0 - 1000
  // () => handleHover(300, 600); // przedział 300 - 600

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: crazyDivStyle,
    onMouseEnter: function onMouseEnter() {
      return setStyle(style1);
    }
  }, "My style changes on mouse enter");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CrazyDiv);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0aa3dfe133927109d673")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xYmMzMjYxODk0MDdmMjYxZmY0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxTQUFTRSxRQUFRQSxDQUFBLEVBQUc7RUFDaEIsSUFBTUMsTUFBTSxHQUFHO0lBQUVDLEtBQUssRUFBRSxPQUFPO0lBQUVDLE1BQU0sRUFBRSxPQUFPO0lBQUVDLFVBQVUsRUFBRSxLQUFLO0lBQUVDLFFBQVEsRUFBRTtFQUFVLENBQUM7RUFDMUYsSUFBTUMsTUFBTSxHQUFHO0lBQUVKLEtBQUssRUFBRSxPQUFPO0lBQUVDLE1BQU0sRUFBRSxPQUFPO0lBQUVDLFVBQVUsRUFBRSxPQUFPO0lBQUVHLEdBQUcsRUFBRSxPQUFPO0lBQUVDLElBQUksRUFBRTtFQUFPLENBQUM7RUFHbkcsSUFBQUMsU0FBQSxHQUFvQ1YsK0NBQVEsQ0FBQ0UsTUFBTSxDQUFDO0lBQUFTLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTVDRyxhQUFhLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBRy9CLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUN0QkgsUUFBUSxDQUFDUCxNQUFNLENBQUM7RUFDcEIsQ0FBQztFQUNEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBR0Esb0JBQ0lSLDBEQUFBO0lBQUtvQixLQUFLLEVBQUVOLGFBQWM7SUFBQ08sWUFBWSxFQUFFLFNBQUFBLGFBQUE7TUFBQSxPQUFNTixRQUFRLENBQUNQLE1BQU0sQ0FBQztJQUFBO0VBQUMsR0FBQyxpQ0FFNUQsQ0FBQztBQUVkO0FBRUEsaUVBQWVOLFFBQVE7Ozs7Ozs7O1VDNUJ2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAxX1ByemVrYXp5d2FuaWVfcGFyYW1ldHJvdy8wM19aYWRhbmllXzMvanMvQ3JhenlEaXYuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIENyYXp5RGl2KCkge1xuICAgIGNvbnN0IHN0eWxlMCA9IHsgd2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4JywgYmFja2dyb3VuZDogJ3JlZCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnfTtcbiAgICBjb25zdCBzdHlsZTEgPSB7IHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcsIGJhY2tncm91bmQ6ICdncmVlbicsIHRvcDogJzEwMHB4JywgbGVmdDogJzEwMHB4J307XG5cblxuICAgIGNvbnN0IFsgY3JhenlEaXZTdHlsZSwgc2V0U3R5bGUgXSA9IHVzZVN0YXRlKHN0eWxlMCk7XG5cblxuICAgIGNvbnN0IGhhbmRsZUhvdmVyID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRHppYcWCYW0nKTtcbiAgICAgICAgc2V0U3R5bGUoc3R5bGUxKTtcbiAgICB9XG4gICAgLy8gY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgLy8gICBzZXRCdWxiU3RhdGUocHJldiA9PiAhcHJldik7XG4gICAgLy8gfVxuICAgIC8vICgpID0+IGhhbmRsZUhvdmVyKDAsIDEwMDApOyAvLyBwcnplZHppYcWCIDAgLSAxMDAwXG4gICAgLy8gKCkgPT4gaGFuZGxlSG92ZXIoMzAwLCA2MDApOyAvLyBwcnplZHppYcWCIDMwMCAtIDYwMFxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtjcmF6eURpdlN0eWxlfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFN0eWxlKHN0eWxlMSl9PlxuICAgICAgICAgICAgTXkgc3R5bGUgY2hhbmdlcyBvbiBtb3VzZSBlbnRlclxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyYXp5RGl2OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBhYTNkZmUxMzM5MjcxMDlkNjczXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDcmF6eURpdiIsInN0eWxlMCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwic3R5bGUxIiwidG9wIiwibGVmdCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImNyYXp5RGl2U3R5bGUiLCJzZXRTdHlsZSIsImhhbmRsZUhvdmVyIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIm9uTW91c2VFbnRlciJdLCJzb3VyY2VSb290IjoiIn0=