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
  var handleTaskDone = function handleTaskDone(id) {
    console.log('działam' + id);
    // setTasks(prevState => {
    //     return prevState.filter(task => {
    //         return task.id !== id;
    //     });
    // });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, tasksList.map(function (element) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ToDoItem, {
      key: element.id,
      task: element.title,
      onDone: handleTaskDone
    });
  }));
};
var ToDoItem = function ToDoItem(props) {
  var task = props.task,
    onDone = props.onDone;
  var handleDoneClick = function handleDoneClick() {
    if (typeof onDone === 'function') {
      onDone(task.id);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "This is my task: ", task), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleDoneClick
  }, "Task done"));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ca15893363d223b0d5fe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42N2I4ODA3MDJkNWM4ZTMzY2UyMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxJQUFNRyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2Qsb0JBQU9ILDBEQUFBLENBQUNLLFFBQVEsTUFBQyxDQUFDO0FBQ3RCLENBQUM7QUFFRCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBRW5CLElBQUFDLFNBQUEsR0FBOEJMLCtDQUFRLENBQUMsQ0FDbkM7TUFBQ00sRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWUsQ0FBQyxFQUMvQjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBZ0MsQ0FBQyxFQUNoRDtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBdUIsQ0FBQyxDQUMxQyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBSktLLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFNMUIsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFHTixFQUFFLEVBQUk7SUFDekJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsR0FBR1IsRUFBRSxDQUFDO0lBQzNCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDSixDQUFDOztFQUVELG9CQUNJUCwwREFBQSxhQUNLVyxTQUFTLENBQUNLLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO0lBQUEsb0JBQUlqQiwwREFBQSxDQUFDa0IsUUFBUTtNQUFDQyxHQUFHLEVBQUVGLE9BQU8sQ0FBQ1YsRUFBRztNQUFDYSxJQUFJLEVBQUVILE9BQU8sQ0FBQ1QsS0FBTTtNQUFDYSxNQUFNLEVBQUVSO0lBQWUsQ0FBQyxDQUFDO0VBQUEsRUFDbkcsQ0FBQztBQUViLENBQUM7QUFFRCxJQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUksS0FBSyxFQUFLO0VBQ3hCLElBQU9GLElBQUksR0FBWUUsS0FBSyxDQUFyQkYsSUFBSTtJQUFFQyxNQUFNLEdBQUlDLEtBQUssQ0FBZkQsTUFBTTtFQUNuQixJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUEsRUFBUztJQUMxQixJQUFJLE9BQU9GLE1BQU0sS0FBSyxVQUFVLEVBQUU7TUFDOUJBLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDYixFQUFFLENBQUM7SUFDbkI7RUFDSixDQUFDO0VBQ0Qsb0JBQ0lQLDBEQUFBLDBCQUNJQSwwREFBQSxhQUFJLG1CQUFpQixFQUFDb0IsSUFBUyxDQUFDLGVBQ2hDcEIsMERBQUE7SUFBUXdCLE9BQU8sRUFBRUQ7RUFBZ0IsR0FBQyxXQUFpQixDQUNuRCxDQUFDO0FBRWIsQ0FBQztBQUdELElBQU1FLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBRzFCLDREQUFVLENBQUN1QixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDN0IsMERBQUEsQ0FBQ0csR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNqRG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUHJ6ZWthenl3YW5pZV96ZGFyemVuLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gPFRvRG9MaXN0Lz5cbn1cblxuY29uc3QgVG9Eb0xpc3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbdGFza3NMaXN0LCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtpZDogMSwgdGl0bGU6IFwiWnJvYmnEhyB6YWt1cHlcIn0sXG4gICAgICAgIHtpZDogMiwgdGl0bGU6IFwiT2JlanJ6ZcSHIG5vd3kgc2V6b24gR3J5IG8gVHJvblwifSxcbiAgICAgICAge2lkOiAzLCB0aXRsZTogXCJacm9iacSHIHphZGFuaWEgZG9tb3dlXCJ9XG4gICAgXSk7XG5cbiAgICBjb25zdCBoYW5kbGVUYXNrRG9uZSA9IGlkID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2R6aWHFgmFtJyArIGlkKTtcbiAgICAgICAgLy8gc2V0VGFza3MocHJldlN0YXRlID0+IHtcbiAgICAgICAgLy8gICAgIHJldHVybiBwcmV2U3RhdGUuZmlsdGVyKHRhc2sgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0YXNrLmlkICE9PSBpZDtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgICAge3Rhc2tzTGlzdC5tYXAoZWxlbWVudCA9PiA8VG9Eb0l0ZW0ga2V5PXtlbGVtZW50LmlkfSB0YXNrPXtlbGVtZW50LnRpdGxlfSBvbkRvbmU9e2hhbmRsZVRhc2tEb25lfS8+KX1cbiAgICAgICAgPC91bD5cbiAgICApO1xufTtcblxuY29uc3QgVG9Eb0l0ZW0gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7dGFzaywgb25Eb25lfSA9IHByb3BzO1xuICAgIGNvbnN0IGhhbmRsZURvbmVDbGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBvbkRvbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG9uRG9uZSh0YXNrLmlkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aDQ+VGhpcyBpcyBteSB0YXNrOiB7dGFza308L2g0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEb25lQ2xpY2t9PlRhc2sgZG9uZTwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICk7XG59O1xuXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2ExNTg5MzM2M2QyMjNiMGQ1ZmVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiVG9Eb0xpc3QiLCJfdXNlU3RhdGUiLCJpZCIsInRpdGxlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidGFza3NMaXN0Iiwic2V0VGFza3MiLCJoYW5kbGVUYXNrRG9uZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJlbGVtZW50IiwiVG9Eb0l0ZW0iLCJrZXkiLCJ0YXNrIiwib25Eb25lIiwicHJvcHMiLCJoYW5kbGVEb25lQ2xpY2siLCJvbkNsaWNrIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9