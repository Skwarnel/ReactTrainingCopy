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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ToDoList, null);
};
var ToDoList = function ToDoList() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      id: 1,
      title: "Zrobić zakupy"
    }, {
      id: 2,
      title: "Obejrzeć nowy sezon Gry o Tron"
    }, {
      id: 3,
      title: "Zrobić zadania domowe"
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    tasksList = _useState2[0],
    setTasks = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, tasksList.map(function (element) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ToDoItem, {
      key: element.id,
      task: element.title,
      my2prop: 242
    });
  }));
};
var ToDoItem = function ToDoItem(props) {
  var my2prop = props.my2prop,
    task = props.task;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, task, " and this is my ", my2prop);
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("95a99c2ff88ecb053388")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44MjQ0MDIxNzZlNjA4MTgzMTM3ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxJQUFNRyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2Qsb0JBQU9ILDBEQUFBLENBQUNLLFFBQVEsTUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBRW5CLElBQUFDLFNBQUEsR0FBOEJMLCtDQUFRLENBQUMsQ0FDbkM7TUFBQ00sRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWUsQ0FBQyxFQUMvQjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBZ0MsQ0FBQyxFQUNoRDtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBdUIsQ0FBQyxDQUMxQyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBSktLLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFNMUIsb0JBQ0lULDBEQUFBLGFBQ0tXLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFVBQUFDLE9BQU87SUFBQSxvQkFBSWQsMERBQUEsQ0FBQ2UsUUFBUTtNQUFDQyxHQUFHLEVBQUVGLE9BQU8sQ0FBQ1AsRUFBRztNQUFDVSxJQUFJLEVBQUVILE9BQU8sQ0FBQ04sS0FBTTtNQUFDVSxPQUFPLEVBQUU7SUFBSSxDQUFDLENBQUM7RUFBQSxFQUN6RixDQUFDO0FBRWIsQ0FBQztBQUVELElBQU1ILFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJSSxLQUFLLEVBQUs7RUFDeEIsSUFBT0QsT0FBTyxHQUFVQyxLQUFLLENBQXRCRCxPQUFPO0lBQUVELElBQUksR0FBSUUsS0FBSyxDQUFiRixJQUFJO0VBQ3BCLG9CQUFPakIsMERBQUEsYUFBS2lCLElBQUksRUFBQyxrQkFBZ0IsRUFBQ0MsT0FBWSxDQUFDO0FBQ25ELENBQUM7QUFHRCxJQUFNRSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdyQiw0REFBVSxDQUFDa0IsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3hCLDBEQUFBLENBQUNHLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDOUJuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1ByemVrYXp5d2FuaWVfemRhcnplbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxUb0RvTGlzdCAvPlxufVxuXG5jb25zdCBUb0RvTGlzdCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt0YXNrc0xpc3QsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtcbiAgICAgICAge2lkOiAxLCB0aXRsZTogXCJacm9iacSHIHpha3VweVwifSxcbiAgICAgICAge2lkOiAyLCB0aXRsZTogXCJPYmVqcnplxIcgbm93eSBzZXpvbiBHcnkgbyBUcm9uXCJ9LFxuICAgICAgICB7aWQ6IDMsIHRpdGxlOiBcIlpyb2JpxIcgemFkYW5pYSBkb21vd2VcIn1cbiAgICBdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHt0YXNrc0xpc3QubWFwKGVsZW1lbnQgPT4gPFRvRG9JdGVtIGtleT17ZWxlbWVudC5pZH0gdGFzaz17ZWxlbWVudC50aXRsZX0gbXkycHJvcD17MjQyfS8+KX1cbiAgICAgICAgPC91bD5cbiAgICApXG59XG5cbmNvbnN0IFRvRG9JdGVtID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge215MnByb3AsIHRhc2t9ID0gcHJvcHM7XG4gICAgcmV0dXJuIDxsaT57dGFza30gYW5kIHRoaXMgaXMgbXkge215MnByb3B9PC9saT5cbn1cblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk1YTk5YzJmZjg4ZWNiMDUzMzg4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIlRvRG9MaXN0IiwiX3VzZVN0YXRlIiwiaWQiLCJ0aXRsZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRhc2tzTGlzdCIsInNldFRhc2tzIiwibWFwIiwiZWxlbWVudCIsIlRvRG9JdGVtIiwia2V5IiwidGFzayIsIm15MnByb3AiLCJwcm9wcyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==