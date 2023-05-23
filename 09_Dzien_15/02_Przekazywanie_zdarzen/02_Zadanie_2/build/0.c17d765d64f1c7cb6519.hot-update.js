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
/******/ 	__webpack_require__.h = () => ("1eb81b2a7461d9a7c289")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMTdkNzY1ZDY0ZjFjN2NiNjUxOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxJQUFNRyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2Qsb0JBQU9ILDBEQUFBLENBQUNLLFFBQVEsTUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBRW5CLElBQUFDLFNBQUEsR0FBOEJMLCtDQUFRLENBQUMsQ0FDbkM7TUFBQ00sRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWUsQ0FBQyxFQUMvQjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBZ0MsQ0FBQyxFQUNoRDtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBdUIsQ0FBQyxDQUMxQyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBSktLLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFNMUIsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFHTixFQUFFLEVBQUk7SUFDekJLLFFBQVEsQ0FBQyxVQUFBRSxTQUFTLEVBQUk7TUFDbEIsT0FBT0EsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBQUMsSUFBSSxFQUFJO1FBQzVCLE9BQU9BLElBQUksQ0FBQ1QsRUFBRSxLQUFLQSxFQUFFO01BQ3pCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUM7RUFHRCxvQkFDSVAsMERBQUEsYUFDS1csU0FBUyxDQUFDTSxHQUFHLENBQUMsVUFBQUMsT0FBTztJQUFBLG9CQUFJbEIsMERBQUEsQ0FBQ21CLFFBQVE7TUFBQ0MsR0FBRyxFQUFFRixPQUFPLENBQUNYLEVBQUc7TUFBQ1MsSUFBSSxFQUFFRSxPQUFPLENBQUNWO0lBQU0sQ0FBQyxDQUFDO0VBQUEsRUFDM0UsQ0FBQztBQUViLENBQUM7QUFFRCxJQUFNVyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUUsS0FBSyxFQUFLO0VBQ3hCLElBQU9MLElBQUksR0FBSUssS0FBSyxDQUFiTCxJQUFJO0VBQ1gsb0JBQU9oQiwwREFBQSxhQUFJLG1CQUFpQixFQUFDZ0IsSUFBUyxDQUFDO0FBQzNDLENBQUM7QUFHRCxJQUFNTSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUd2Qiw0REFBVSxDQUFDb0IsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQzFCLDBEQUFBLENBQUNHLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDdkNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1ByemVrYXp5d2FuaWVfemRhcnplbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxUb0RvTGlzdCAvPlxufVxuXG5jb25zdCBUb0RvTGlzdCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt0YXNrc0xpc3QsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtcbiAgICAgICAge2lkOiAxLCB0aXRsZTogXCJacm9iacSHIHpha3VweVwifSxcbiAgICAgICAge2lkOiAyLCB0aXRsZTogXCJPYmVqcnplxIcgbm93eSBzZXpvbiBHcnkgbyBUcm9uXCJ9LFxuICAgICAgICB7aWQ6IDMsIHRpdGxlOiBcIlpyb2JpxIcgemFkYW5pYSBkb21vd2VcIn1cbiAgICBdKTtcblxuICAgIGNvbnN0IGhhbmRsZVRhc2tEb25lID0gaWQgPT4ge1xuICAgICAgICBzZXRUYXNrcyhwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZS5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2suaWQgIT09IGlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHt0YXNrc0xpc3QubWFwKGVsZW1lbnQgPT4gPFRvRG9JdGVtIGtleT17ZWxlbWVudC5pZH0gdGFzaz17ZWxlbWVudC50aXRsZX0vPil9XG4gICAgICAgIDwvdWw+XG4gICAgKVxufVxuXG5jb25zdCBUb0RvSXRlbSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHt0YXNrfSA9IHByb3BzO1xuICAgIHJldHVybiA8bGk+VGhpcyBpcyBteSB0YXNrOiB7dGFza308L2xpPlxufVxuXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWViODFiMmE3NDYxZDlhN2MyODlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiVG9Eb0xpc3QiLCJfdXNlU3RhdGUiLCJpZCIsInRpdGxlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidGFza3NMaXN0Iiwic2V0VGFza3MiLCJoYW5kbGVUYXNrRG9uZSIsInByZXZTdGF0ZSIsImZpbHRlciIsInRhc2siLCJtYXAiLCJlbGVtZW50IiwiVG9Eb0l0ZW0iLCJrZXkiLCJwcm9wcyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==