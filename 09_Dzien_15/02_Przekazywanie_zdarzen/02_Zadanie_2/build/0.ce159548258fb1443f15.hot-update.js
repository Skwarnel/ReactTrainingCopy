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
/******/ 	__webpack_require__.h = () => ("c17d765d64f1c7cb6519")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZTE1OTU0ODI1OGZiMTQ0M2YxNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxJQUFNRyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2Qsb0JBQU9ILDBEQUFBLENBQUNLLFFBQVEsTUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBRW5CLElBQUFDLFNBQUEsR0FBOEJMLCtDQUFRLENBQUMsQ0FDbkM7TUFBQ00sRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWUsQ0FBQyxFQUMvQjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBZ0MsQ0FBQyxFQUNoRDtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBdUIsQ0FBQyxDQUMxQyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBSktLLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFNMUIsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFHTixFQUFFLEVBQUk7SUFDekJLLFFBQVEsQ0FBQyxVQUFBRSxTQUFTLEVBQUk7TUFDbEIsT0FBT0EsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBQUMsSUFBSSxFQUFJO1FBQzVCLE9BQU9BLElBQUksQ0FBQ1QsRUFBRSxLQUFLQSxFQUFFO01BQ3pCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUM7RUFHRCxvQkFDSVAsMERBQUEsYUFDS1csU0FBUyxDQUFDTSxHQUFHLENBQUMsVUFBQUMsT0FBTztJQUFBLG9CQUFJbEIsMERBQUEsQ0FBQ21CLFFBQVE7TUFBQ0MsR0FBRyxFQUFFRixPQUFPLENBQUNYLEVBQUc7TUFBQ1MsSUFBSSxFQUFFRSxPQUFPLENBQUNWO0lBQU0sQ0FBQyxDQUFDO0VBQUEsRUFDM0UsQ0FBQztBQUViLENBQUM7QUFFRCxJQUFNVyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUUsS0FBSyxFQUFLO0VBQ3hCLElBQU9MLElBQUksR0FBSUssS0FBSyxDQUFiTCxJQUFJO0VBQ1gsb0JBQU9oQiwwREFBQSxhQUFJLG1CQUFpQixFQUFDZ0IsSUFBUyxDQUFDO0FBQzNDLENBQUM7QUFHRCxJQUFNTSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUd2Qiw0REFBVSxDQUFDb0IsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQzFCLDBEQUFBLENBQUNHLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDdkNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1ByemVrYXp5d2FuaWVfemRhcnplbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxUb0RvTGlzdCAvPlxufVxuXG5jb25zdCBUb0RvTGlzdCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt0YXNrc0xpc3QsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtcbiAgICAgICAge2lkOiAxLCB0aXRsZTogXCJacm9iacSHIHpha3VweVwifSxcbiAgICAgICAge2lkOiAyLCB0aXRsZTogXCJPYmVqcnplxIcgbm93eSBzZXpvbiBHcnkgbyBUcm9uXCJ9LFxuICAgICAgICB7aWQ6IDMsIHRpdGxlOiBcIlpyb2JpxIcgemFkYW5pYSBkb21vd2VcIn1cbiAgICBdKTtcblxuICAgIGNvbnN0IGhhbmRsZVRhc2tEb25lID0gaWQgPT4ge1xuICAgICAgICBzZXRUYXNrcyhwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZS5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2suaWQgIT09IGlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgICAge3Rhc2tzTGlzdC5tYXAoZWxlbWVudCA9PiA8VG9Eb0l0ZW0ga2V5PXtlbGVtZW50LmlkfSB0YXNrPXtlbGVtZW50LnRpdGxlfS8+KX1cbiAgICAgICAgPC91bD5cbiAgICApXG59XG5cbmNvbnN0IFRvRG9JdGVtID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge3Rhc2t9ID0gcHJvcHM7XG4gICAgcmV0dXJuIDxsaT5UaGlzIGlzIG15IHRhc2s6IHt0YXNrfTwvbGk+XG59XG5cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjMTdkNzY1ZDY0ZjFjN2NiNjUxOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJUb0RvTGlzdCIsIl91c2VTdGF0ZSIsImlkIiwidGl0bGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0YXNrc0xpc3QiLCJzZXRUYXNrcyIsImhhbmRsZVRhc2tEb25lIiwicHJldlN0YXRlIiwiZmlsdGVyIiwidGFzayIsIm1hcCIsImVsZW1lbnQiLCJUb0RvSXRlbSIsImtleSIsInByb3BzIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9