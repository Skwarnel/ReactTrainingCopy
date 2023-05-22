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
    width: '200px',
    height: '200px',
    background: 'green',
    top: '1000px',
    left: '600px'
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
/******/ 	__webpack_require__.h = () => ("0a12803626f7658cd074")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMTIxOTQ5YmJmMzRlNzQ3YjdjNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxTQUFTRSxRQUFRQSxDQUFBLEVBQUc7RUFDaEIsSUFBTUMsTUFBTSxHQUFHO0lBQUVDLEtBQUssRUFBRSxPQUFPO0lBQUVDLE1BQU0sRUFBRSxPQUFPO0lBQUVDLFVBQVUsRUFBRSxLQUFLO0lBQUVDLFFBQVEsRUFBRTtFQUFVLENBQUM7RUFDMUYsSUFBTUMsTUFBTSxHQUFHO0lBQUVKLEtBQUssRUFBRSxPQUFPO0lBQUVDLE1BQU0sRUFBRSxPQUFPO0lBQUVDLFVBQVUsRUFBRSxPQUFPO0lBQUVHLEdBQUcsRUFBRSxRQUFRO0lBQUVDLElBQUksRUFBRTtFQUFPLENBQUM7RUFHcEcsSUFBQUMsU0FBQSxHQUFvQ1YsK0NBQVEsQ0FBQ0UsTUFBTSxDQUFDO0lBQUFTLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTVDRyxhQUFhLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBRy9CLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUN0QkgsUUFBUSxDQUFDUCxNQUFNLENBQUM7RUFDcEIsQ0FBQztFQUNEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBR0Esb0JBQ0lSLDBEQUFBO0lBQUtvQixLQUFLLEVBQUVOLGFBQWM7SUFBQ08sWUFBWSxFQUFFTCxXQUFZO0lBQUNNLFlBQVksRUFBRSxTQUFBQSxhQUFBO01BQUEsT0FBTVAsUUFBUSxDQUFDWixNQUFNLENBQUM7SUFBQTtFQUFDLEdBQUMsaUNBRXZGLENBQUM7QUFFZDtBQUVBLGlFQUFlRCxRQUFROzs7Ozs7OztVQzVCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMV9Qcnpla2F6eXdhbmllX3BhcmFtZXRyb3cvMDNfWmFkYW5pZV8zL2pzL0NyYXp5RGl2LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBDcmF6eURpdigpIHtcbiAgICBjb25zdCBzdHlsZTAgPSB7IHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcsIGJhY2tncm91bmQ6ICdyZWQnLCBwb3NpdGlvbjogJ2Fic29sdXRlJ307XG4gICAgY29uc3Qgc3R5bGUxID0geyB3aWR0aDogJzIwMHB4JywgaGVpZ2h0OiAnMjAwcHgnLCBiYWNrZ3JvdW5kOiAnZ3JlZW4nLCB0b3A6ICcxMDAwcHgnLCBsZWZ0OiAnNjAwcHgnfTtcblxuXG4gICAgY29uc3QgWyBjcmF6eURpdlN0eWxlLCBzZXRTdHlsZSBdID0gdXNlU3RhdGUoc3R5bGUwKTtcblxuXG4gICAgY29uc3QgaGFuZGxlSG92ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEemlhxYJhbScpO1xuICAgICAgICBzZXRTdHlsZShzdHlsZTEpO1xuICAgIH1cbiAgICAvLyBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAvLyAgIHNldEJ1bGJTdGF0ZShwcmV2ID0+ICFwcmV2KTtcbiAgICAvLyB9XG4gICAgLy8gKCkgPT4gaGFuZGxlSG92ZXIoMCwgMTAwMCk7IC8vIHByemVkemlhxYIgMCAtIDEwMDBcbiAgICAvLyAoKSA9PiBoYW5kbGVIb3ZlcigzMDAsIDYwMCk7IC8vIHByemVkemlhxYIgMzAwIC0gNjAwXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e2NyYXp5RGl2U3R5bGV9IG9uTW91c2VFbnRlcj17aGFuZGxlSG92ZXJ9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U3R5bGUoc3R5bGUwKX0+XG4gICAgICAgICAgICBNeSBzdHlsZSBjaGFuZ2VzIG9uIG1vdXNlIGVudGVyXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JhenlEaXY7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGExMjgwMzYyNmY3NjU4Y2QwNzRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNyYXp5RGl2Iiwic3R5bGUwIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwicG9zaXRpb24iLCJzdHlsZTEiLCJ0b3AiLCJsZWZ0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY3JhenlEaXZTdHlsZSIsInNldFN0eWxlIiwiaGFuZGxlSG92ZXIiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIl0sInNvdXJjZVJvb3QiOiIifQ==