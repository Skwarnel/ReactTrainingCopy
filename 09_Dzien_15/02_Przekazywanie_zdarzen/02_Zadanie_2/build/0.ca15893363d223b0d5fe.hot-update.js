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
  var handleDoneClick = function handleDoneClick(id) {
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
/******/ 	__webpack_require__.h = () => ("775e34bf845b27f37134")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYTE1ODkzMzYzZDIyM2IwZDVmZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxJQUFNRyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2Qsb0JBQU9ILDBEQUFBLENBQUNLLFFBQVEsTUFBQyxDQUFDO0FBQ3RCLENBQUM7QUFFRCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBRW5CLElBQUFDLFNBQUEsR0FBOEJMLCtDQUFRLENBQUMsQ0FDbkM7TUFBQ00sRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWUsQ0FBQyxFQUMvQjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBZ0MsQ0FBQyxFQUNoRDtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBdUIsQ0FBQyxDQUMxQyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBSktLLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFNMUIsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFHTixFQUFFLEVBQUk7SUFDekJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsR0FBR1IsRUFBRSxDQUFDO0lBQzNCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDSixDQUFDOztFQUVELG9CQUNJUCwwREFBQSxhQUNLVyxTQUFTLENBQUNLLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO0lBQUEsb0JBQUlqQiwwREFBQSxDQUFDa0IsUUFBUTtNQUFDQyxHQUFHLEVBQUVGLE9BQU8sQ0FBQ1YsRUFBRztNQUFDYSxJQUFJLEVBQUVILE9BQU8sQ0FBQ1QsS0FBTTtNQUFDYSxNQUFNLEVBQUVSO0lBQWUsQ0FBQyxDQUFDO0VBQUEsRUFDbkcsQ0FBQztBQUViLENBQUM7QUFFRCxJQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUksS0FBSyxFQUFLO0VBQ3hCLElBQU9GLElBQUksR0FBWUUsS0FBSyxDQUFyQkYsSUFBSTtJQUFFQyxNQUFNLEdBQUlDLEtBQUssQ0FBZkQsTUFBTTtFQUNuQixJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUloQixFQUFFLEVBQUs7SUFDNUIsSUFBSSxPQUFPYyxNQUFNLEtBQUssVUFBVSxFQUFFO01BQzlCQSxNQUFNLENBQUNELElBQUksQ0FBQ2IsRUFBRSxDQUFDO0lBQ25CO0VBQ0osQ0FBQztFQUNELG9CQUNJUCwwREFBQSwwQkFDSUEsMERBQUEsYUFBSSxtQkFBaUIsRUFBQ29CLElBQVMsQ0FBQyxlQUNoQ3BCLDBEQUFBO0lBQVF3QixPQUFPLEVBQUVEO0VBQWdCLEdBQUMsV0FBaUIsQ0FDbkQsQ0FBQztBQUViLENBQUM7QUFHRCxJQUFNRSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUcxQiw0REFBVSxDQUFDdUIsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQzdCLDBEQUFBLENBQUNHLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDakRuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1ByemVrYXp5d2FuaWVfemRhcnplbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxUb0RvTGlzdC8+XG59XG5cbmNvbnN0IFRvRG9MaXN0ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3Rhc2tzTGlzdCwgc2V0VGFza3NdID0gdXNlU3RhdGUoW1xuICAgICAgICB7aWQ6IDEsIHRpdGxlOiBcIlpyb2JpxIcgemFrdXB5XCJ9LFxuICAgICAgICB7aWQ6IDIsIHRpdGxlOiBcIk9iZWpyemXEhyBub3d5IHNlem9uIEdyeSBvIFRyb25cIn0sXG4gICAgICAgIHtpZDogMywgdGl0bGU6IFwiWnJvYmnEhyB6YWRhbmlhIGRvbW93ZVwifVxuICAgIF0pO1xuXG4gICAgY29uc3QgaGFuZGxlVGFza0RvbmUgPSBpZCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkemlhxYJhbScgKyBpZCk7XG4gICAgICAgIC8vIHNldFRhc2tzKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgIC8vICAgICByZXR1cm4gcHJldlN0YXRlLmZpbHRlcih0YXNrID0+IHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGFzay5pZCAhPT0gaWQ7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHt0YXNrc0xpc3QubWFwKGVsZW1lbnQgPT4gPFRvRG9JdGVtIGtleT17ZWxlbWVudC5pZH0gdGFzaz17ZWxlbWVudC50aXRsZX0gb25Eb25lPXtoYW5kbGVUYXNrRG9uZX0vPil9XG4gICAgICAgIDwvdWw+XG4gICAgKTtcbn07XG5cbmNvbnN0IFRvRG9JdGVtID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge3Rhc2ssIG9uRG9uZX0gPSBwcm9wcztcbiAgICBjb25zdCBoYW5kbGVEb25lQ2xpY2sgPSAoaWQpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBvbkRvbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG9uRG9uZSh0YXNrLmlkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aDQ+VGhpcyBpcyBteSB0YXNrOiB7dGFza308L2g0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEb25lQ2xpY2t9PlRhc2sgZG9uZTwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICk7XG59O1xuXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzc1ZTM0YmY4NDViMjdmMzcxMzRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiVG9Eb0xpc3QiLCJfdXNlU3RhdGUiLCJpZCIsInRpdGxlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidGFza3NMaXN0Iiwic2V0VGFza3MiLCJoYW5kbGVUYXNrRG9uZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJlbGVtZW50IiwiVG9Eb0l0ZW0iLCJrZXkiLCJ0YXNrIiwib25Eb25lIiwicHJvcHMiLCJoYW5kbGVEb25lQ2xpY2siLCJvbkNsaWNrIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9