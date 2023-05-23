"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TaskList, null);
};
var TaskList = function TaskList() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      id: 1,
      task: 'Zrobić zakupy'
    }, {
      id: 2,
      task: 'Obejrzeć nowy sezon serialu na podstawie książki GPS'
    }, {
      id: 3,
      task: 'Zrobić kolację'
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    tasksList = _useState2[0],
    setTasks = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, tasksList.map(function (element) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: element.id,
      task: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("element", {
        className: "tit"
      })
    });
  }));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6fa8f5f501f96b41a76e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZDBlZmJhOTlhNjJiMWM0NjA4Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxJQUFNRyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2Qsb0JBQU9ILDBEQUFBLENBQUNLLFFBQVEsTUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBQ25CLElBQUFDLFNBQUEsR0FBOEJMLCtDQUFRLENBQUMsQ0FDbkM7TUFBQ00sRUFBRSxFQUFFLENBQUM7TUFBRUMsSUFBSSxFQUFFO0lBQWUsQ0FBQyxFQUM5QjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxJQUFJLEVBQUU7SUFBc0QsQ0FBQyxFQUNyRTtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxJQUFJLEVBQUU7SUFBZ0IsQ0FBQyxDQUNsQyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBSktLLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFNMUIsb0JBQ0lULDBEQUFBLGFBQ0tXLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFVBQUFDLE9BQU87SUFBQSxvQkFBSWQsMERBQUE7TUFBSWUsR0FBRyxFQUFFRCxPQUFPLENBQUNQLEVBQUc7TUFBQ0MsSUFBSSxlQUFFUiwwREFBQTtRQUFTZ0IsU0FBUyxFQUFDO01BQUssQ0FBVTtJQUFFLENBQUUsQ0FBQztFQUFBLEVBQzVGLENBQUM7QUFFYixDQUFDO0FBR0QsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHbEIsNERBQVUsQ0FBQ2UsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3JCLDBEQUFBLENBQUNHLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDeEJuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1ByemVrYXp5d2FuaWVfemRhcnplbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxUYXNrTGlzdCAvPlxufVxuXG5jb25zdCBUYXNrTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBbdGFza3NMaXN0LCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtpZDogMSwgdGFzazogJ1pyb2JpxIcgemFrdXB5J30sXG4gICAgICAgIHtpZDogMiwgdGFzazogJ09iZWpyemXEhyBub3d5IHNlem9uIHNlcmlhbHUgbmEgcG9kc3Rhd2llIGtzacSFxbxraSBHUFMnfSxcbiAgICAgICAge2lkOiAzLCB0YXNrOiAnWnJvYmnEhyBrb2xhY2rEmSd9XG4gICAgXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dGFza3NMaXN0Lm1hcChlbGVtZW50ID0+IDxsaSBrZXk9e2VsZW1lbnQuaWR9IHRhc2s9ezxlbGVtZW50IGNsYXNzTmFtZT1cInRpdFwiPjwvZWxlbWVudD59IC8+KX1cbiAgICAgICAgPC91bD5cbiAgICApXG59XG5cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZmE4ZjVmNTAxZjk2YjQxYTc2ZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJUYXNrTGlzdCIsIl91c2VTdGF0ZSIsImlkIiwidGFzayIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRhc2tzTGlzdCIsInNldFRhc2tzIiwibWFwIiwiZWxlbWVudCIsImtleSIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==