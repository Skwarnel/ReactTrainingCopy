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
      task: element.title
    });
  }));
};
var ToDoItem = function ToDoItem(props) {
  var task = props.task;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "This is my task: ", task);
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("03a8ba02bd0104690d53")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40ZTk4MjA4OWE1OWE0ZjY1NTg5My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxJQUFNRyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2Qsb0JBQU9ILDBEQUFBLENBQUNLLFFBQVEsTUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBRW5CLElBQUFDLFNBQUEsR0FBOEJMLCtDQUFRLENBQUMsQ0FDbkM7TUFBQ00sRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWUsQ0FBQyxFQUMvQjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBZ0MsQ0FBQyxFQUNoRDtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBdUIsQ0FBQyxDQUMxQyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBSktLLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFTMUIsb0JBQ0lULDBEQUFBLGFBQ0tXLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFVBQUFDLE9BQU87SUFBQSxvQkFBSWQsMERBQUEsQ0FBQ2UsUUFBUTtNQUFDQyxHQUFHLEVBQUVGLE9BQU8sQ0FBQ1AsRUFBRztNQUFDVSxJQUFJLEVBQUVILE9BQU8sQ0FBQ047SUFBTSxDQUFDLENBQUM7RUFBQSxFQUMzRSxDQUFDO0FBRWIsQ0FBQztBQUVELElBQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJRyxLQUFLLEVBQUs7RUFDeEIsSUFBT0QsSUFBSSxHQUFJQyxLQUFLLENBQWJELElBQUk7RUFDWCxvQkFBT2pCLDBEQUFBLGFBQUksbUJBQWlCLEVBQUNpQixJQUFTLENBQUM7QUFDM0MsQ0FBQztBQUdELElBQU1FLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3BCLDREQUFVLENBQUNpQixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDdkIsMERBQUEsQ0FBQ0csR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNqQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUHJ6ZWthenl3YW5pZV96ZGFyemVuLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gPFRvRG9MaXN0IC8+XG59XG5cbmNvbnN0IFRvRG9MaXN0ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3Rhc2tzTGlzdCwgc2V0VGFza3NdID0gdXNlU3RhdGUoW1xuICAgICAgICB7aWQ6IDEsIHRpdGxlOiBcIlpyb2JpxIcgemFrdXB5XCJ9LFxuICAgICAgICB7aWQ6IDIsIHRpdGxlOiBcIk9iZWpyemXEhyBub3d5IHNlem9uIEdyeSBvIFRyb25cIn0sXG4gICAgICAgIHtpZDogMywgdGl0bGU6IFwiWnJvYmnEhyB6YWRhbmlhIGRvbW93ZVwifVxuICAgIF0pO1xuXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgICAge3Rhc2tzTGlzdC5tYXAoZWxlbWVudCA9PiA8VG9Eb0l0ZW0ga2V5PXtlbGVtZW50LmlkfSB0YXNrPXtlbGVtZW50LnRpdGxlfS8+KX1cbiAgICAgICAgPC91bD5cbiAgICApXG59XG5cbmNvbnN0IFRvRG9JdGVtID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge3Rhc2t9ID0gcHJvcHM7XG4gICAgcmV0dXJuIDxsaT5UaGlzIGlzIG15IHRhc2s6IHt0YXNrfTwvbGk+XG59XG5cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwM2E4YmEwMmJkMDEwNDY5MGQ1M1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJUb0RvTGlzdCIsIl91c2VTdGF0ZSIsImlkIiwidGl0bGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0YXNrc0xpc3QiLCJzZXRUYXNrcyIsIm1hcCIsImVsZW1lbnQiLCJUb0RvSXRlbSIsImtleSIsInRhc2siLCJwcm9wcyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==