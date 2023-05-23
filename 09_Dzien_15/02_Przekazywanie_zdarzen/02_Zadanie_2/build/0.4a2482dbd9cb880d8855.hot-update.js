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
      key: tasksList.id,
      title: tasksList.title
    });
  }));
};
var ToDoItem = function ToDoItem(props) {
  var _props = _slicedToArray(props, 2),
    id = _props[0],
    title = _props[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    id: true
  }, title);
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d70592c4ae2593532ab4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40YTI0ODJkYmQ5Y2I4ODBkODg1NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxJQUFNRyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2Qsb0JBQU9ILDBEQUFBLENBQUNLLFFBQVEsTUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBRW5CLElBQUFDLFNBQUEsR0FBOEJMLCtDQUFRLENBQUMsQ0FDbkM7TUFBQ00sRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWUsQ0FBQyxFQUMvQjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBZ0MsQ0FBQyxFQUNoRDtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBdUIsQ0FBQyxDQUMxQyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBSktLLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFNMUIsb0JBQ0lULDBEQUFBLGFBQ0tXLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFVBQUFDLE9BQU87SUFBQSxvQkFBSWQsMERBQUEsQ0FBQ2UsUUFBUTtNQUFDQyxHQUFHLEVBQUVMLFNBQVMsQ0FBQ0osRUFBRztNQUFDQyxLQUFLLEVBQUVHLFNBQVMsQ0FBQ0g7SUFBTSxDQUFFLENBQUM7RUFBQSxFQUNqRixDQUFDO0FBRWIsQ0FBQztBQUVELElBQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJRSxLQUFLLEVBQUs7RUFDeEIsSUFBQUMsTUFBQSxHQUFBUixjQUFBLENBQW9CTyxLQUFLO0lBQWxCVixFQUFFLEdBQUFXLE1BQUE7SUFBRVYsS0FBSyxHQUFBVSxNQUFBO0VBQ2hCLG9CQUFPbEIsMERBQUE7SUFBSU8sRUFBRTtFQUFBLEdBQUVDLEtBQVUsQ0FBQztBQUM5QixDQUFDO0FBR0QsSUFBTVcsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHcEIsNERBQVUsQ0FBQ2lCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUN2QiwwREFBQSxDQUFDRyxHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQzlCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9Qcnpla2F6eXdhbmllX3pkYXJ6ZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiA8VG9Eb0xpc3QgLz5cbn1cblxuY29uc3QgVG9Eb0xpc3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbdGFza3NMaXN0LCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtpZDogMSwgdGl0bGU6IFwiWnJvYmnEhyB6YWt1cHlcIn0sXG4gICAgICAgIHtpZDogMiwgdGl0bGU6IFwiT2JlanJ6ZcSHIG5vd3kgc2V6b24gR3J5IG8gVHJvblwifSxcbiAgICAgICAge2lkOiAzLCB0aXRsZTogXCJacm9iacSHIHphZGFuaWEgZG9tb3dlXCJ9XG4gICAgXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dGFza3NMaXN0Lm1hcChlbGVtZW50ID0+IDxUb0RvSXRlbSBrZXk9e3Rhc2tzTGlzdC5pZH0gdGl0bGU9e3Rhc2tzTGlzdC50aXRsZX0gLz4pfVxuICAgICAgICA8L3VsPlxuICAgIClcbn1cblxuY29uc3QgVG9Eb0l0ZW0gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbaWQsIHRpdGxlXSA9IHByb3BzO1xuICAgIHJldHVybiA8bGkgaWQ+e3RpdGxlfTwvbGk+XG59XG5cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNzA1OTJjNGFlMjU5MzUzMmFiNFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJUb0RvTGlzdCIsIl91c2VTdGF0ZSIsImlkIiwidGl0bGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0YXNrc0xpc3QiLCJzZXRUYXNrcyIsIm1hcCIsImVsZW1lbnQiLCJUb0RvSXRlbSIsImtleSIsInByb3BzIiwiX3Byb3BzIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9