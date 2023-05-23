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
    setTasks(function (prevState) {
      return prevState.filter(function (task) {
        return task.id !== id;
      });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, tasksList.map(function (element) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ToDoItem, {
      key: element.id,
      task: element.title,
      onDone: handleTaskDone(id)
    });
  }));
};
var ToDoItem = function ToDoItem(props) {
  var task = props.task;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "This is my task: ", task), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Task done"));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("326361d3cde9bde11764")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43OTY2OWQ1MDg2ZTcxOTYzYjFhMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxJQUFNRyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2Qsb0JBQU9ILDBEQUFBLENBQUNLLFFBQVEsTUFBQyxDQUFDO0FBQ3RCLENBQUM7QUFFRCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBRW5CLElBQUFDLFNBQUEsR0FBOEJMLCtDQUFRLENBQUMsQ0FDbkM7TUFBQ00sRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWUsQ0FBQyxFQUMvQjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBZ0MsQ0FBQyxFQUNoRDtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBdUIsQ0FBQyxDQUMxQyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBSktLLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFNMUIsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFHTixFQUFFLEVBQUk7SUFDekJLLFFBQVEsQ0FBQyxVQUFBRSxTQUFTLEVBQUk7TUFDbEIsT0FBT0EsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBQUMsSUFBSSxFQUFJO1FBQzVCLE9BQU9BLElBQUksQ0FBQ1QsRUFBRSxLQUFLQSxFQUFFO01BQ3pCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxvQkFDSVAsMERBQUEsYUFDS1csU0FBUyxDQUFDTSxHQUFHLENBQUMsVUFBQUMsT0FBTztJQUFBLG9CQUFJbEIsMERBQUEsQ0FBQ21CLFFBQVE7TUFBQ0MsR0FBRyxFQUFFRixPQUFPLENBQUNYLEVBQUc7TUFBQ1MsSUFBSSxFQUFFRSxPQUFPLENBQUNWLEtBQU07TUFBQ2EsTUFBTSxFQUFFUixjQUFjLENBQUNOLEVBQUU7SUFBRSxDQUFDLENBQUM7RUFBQSxFQUN2RyxDQUFDO0FBRWIsQ0FBQztBQUVELElBQU1ZLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJRyxLQUFLLEVBQUs7RUFDeEIsSUFBT04sSUFBSSxHQUFJTSxLQUFLLENBQWJOLElBQUk7RUFDWCxvQkFDSWhCLDBEQUFBLDBCQUNJQSwwREFBQSxhQUFJLG1CQUFpQixFQUFDZ0IsSUFBUyxDQUFDLGVBQ2hDaEIsMERBQUEsaUJBQVEsV0FBaUIsQ0FDekIsQ0FBQztBQUViLENBQUM7QUFHRCxJQUFNdUIsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHeEIsNERBQVUsQ0FBQ3FCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUMzQiwwREFBQSxDQUFDRyxHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQzNDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9Qcnpla2F6eXdhbmllX3pkYXJ6ZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiA8VG9Eb0xpc3QvPlxufVxuXG5jb25zdCBUb0RvTGlzdCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt0YXNrc0xpc3QsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtcbiAgICAgICAge2lkOiAxLCB0aXRsZTogXCJacm9iacSHIHpha3VweVwifSxcbiAgICAgICAge2lkOiAyLCB0aXRsZTogXCJPYmVqcnplxIcgbm93eSBzZXpvbiBHcnkgbyBUcm9uXCJ9LFxuICAgICAgICB7aWQ6IDMsIHRpdGxlOiBcIlpyb2JpxIcgemFkYW5pYSBkb21vd2VcIn1cbiAgICBdKTtcblxuICAgIGNvbnN0IGhhbmRsZVRhc2tEb25lID0gaWQgPT4ge1xuICAgICAgICBzZXRUYXNrcyhwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZS5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2suaWQgIT09IGlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dGFza3NMaXN0Lm1hcChlbGVtZW50ID0+IDxUb0RvSXRlbSBrZXk9e2VsZW1lbnQuaWR9IHRhc2s9e2VsZW1lbnQudGl0bGV9IG9uRG9uZT17aGFuZGxlVGFza0RvbmUoaWQpfS8+KX1cbiAgICAgICAgPC91bD5cbiAgICApO1xufTtcblxuY29uc3QgVG9Eb0l0ZW0gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7dGFza30gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aDQ+VGhpcyBpcyBteSB0YXNrOiB7dGFza308L2g0PlxuICAgICAgICAgICAgPGJ1dHRvbj5UYXNrIGRvbmU8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICApO1xufTtcblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMyNjM2MWQzY2RlOWJkZTExNzY0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIlRvRG9MaXN0IiwiX3VzZVN0YXRlIiwiaWQiLCJ0aXRsZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRhc2tzTGlzdCIsInNldFRhc2tzIiwiaGFuZGxlVGFza0RvbmUiLCJwcmV2U3RhdGUiLCJmaWx0ZXIiLCJ0YXNrIiwibWFwIiwiZWxlbWVudCIsIlRvRG9JdGVtIiwia2V5Iiwib25Eb25lIiwicHJvcHMiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=