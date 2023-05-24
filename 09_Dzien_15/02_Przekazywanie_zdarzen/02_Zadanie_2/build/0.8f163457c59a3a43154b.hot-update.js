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
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _ShopItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Shop = function Shop() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      id: 1,
      title: 'MacBook Pro'
    }, {
      id: 2,
      title: 'Dell X5500'
    }, {
      id: 3,
      title: 'Asus NT6000'
    }, {
      id: 4,
      title: 'Dell Carmen'
    }, {
      id: 5,
      title: 'Pontiac'
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    shopItemList = _useState2[0],
    setShopItemState = _useState2[1];
  var handleBuy = function handleBuy() {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Tutaj jest Shop a poni\u017Cej shop item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, shopItemList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ShopItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      item: item,
      onBuy: handleBuy
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shop);

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


var ShopItem = function ShopItem(props) {
  var item = props.item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup natychmiast"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopItem);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _Shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Shop__WEBPACK_IMPORTED_MODULE_2__["default"], null);
};

// const App = () => {
//     return <ToDoList/>
// }
//
// const ToDoList = () => {
//
//     const [tasksList, setTasks] = useState([
//         {id: 1, title: "Zrobić zakupy"},
//         {id: 2, title: "Obejrzeć nowy sezon Gry o Tron"},
//         {id: 3, title: "Zrobić zadania domowe"}
//     ]);
//
//     const handleTaskDone = id => {
//         setTasks(prevState => {
//             return prevState.filter(task => {
//                 return task.id !== id;
//             });
//         });
//     };
//
//     return (
//         <ul>
//             {tasksList.map(task => <ToDoItem key={task.id} task={task} onDone={handleTaskDone}/>)}
//         </ul>
//     );
// };
//
// const ToDoItem = (props) => {
//     const {task, onDone} = props;
//     const handleDoneClick = () => {z
//         if (typeof onDone === 'function') {
//             onDone(task.id);
//         }
//     }
//     return (
//         <li>
//             <h4>This is my task: {task.title}</h4>
//             <button onClick={handleDoneClick}>Task done</button>
//         </li>
//     );
// };

var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4e944ac4448af5932a11")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZjE2MzQ1N2M1OWEzYTQzMTU0Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFDVjtBQUVsQyxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFlO0VBQ3JCLElBQUFDLFNBQUEsR0FBeUNKLCtDQUFRLENBQUMsQ0FDOUM7TUFBQ0ssRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWEsQ0FBQyxFQUM3QjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBWSxDQUFDLEVBQzVCO01BQUNELEVBQUUsRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFhLENBQUMsRUFDN0I7TUFBQ0QsRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWEsQ0FBQyxFQUM3QjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBUyxDQUFDLENBQzVCLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFKLFNBQUE7SUFOS0ssWUFBWSxHQUFBRixVQUFBO0lBQUVHLGdCQUFnQixHQUFBSCxVQUFBO0VBUXJDLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQVMsQ0FFeEIsQ0FBQztFQUVELG9CQUNJWiwwREFBQSwyQkFDSUEsMERBQUEsYUFBSSwwQ0FBdUMsQ0FBQyxlQUM1Q0EsMERBQUEsYUFDS1UsWUFBWSxDQUFDSSxHQUFHLENBQUMsVUFBQUMsSUFBSSxFQUFJO0lBQ2xCLG9CQUFPZiwwREFBQSxDQUFDRyxpREFBUTtNQUFDYSxHQUFHLEVBQUVELElBQUksQ0FBQ1QsRUFBRztNQUFDUyxJQUFJLEVBQUVBLElBQUs7TUFBQ0UsS0FBSyxFQUFFTDtJQUFVLENBQUMsQ0FBQztFQUNsRSxDQUNKLENBQ0EsQ0FDSCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlUixJQUFJOzs7Ozs7Ozs7Ozs7OztBQzlCTztBQUNrQjtBQUU1QyxJQUFNRCxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBYWUsS0FBSyxFQUFFO0VBQzlCLElBQU9ILElBQUksR0FBSUcsS0FBSyxDQUFiSCxJQUFJO0VBQ1gsb0JBQ0lmLDBEQUFBLDBCQUNJQSwwREFBQSxhQUFLZSxJQUFJLENBQUNSLEtBQVUsQ0FBQyxlQUNyQlAsMERBQUEsaUJBQVEsaUJBQXVCLENBQy9CLENBQUM7QUFFYixDQUFDO0FBRUQsaUVBQWVHLFFBQVE7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ007QUFDbkI7QUFDekIsSUFBTWdCLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQWU7RUFDcEIsb0JBQU9uQiwwREFBQSxDQUFDSSw2Q0FBSSxNQUFFLENBQUM7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1nQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdyQiw0REFBVSxDQUFDa0IsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3hCLDBEQUFBLENBQUNtQixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3BEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9Qcnpla2F6eXdhbmllX3pkYXJ6ZW4vMDJfWmFkYW5pZV8yL2pzL1Nob3AuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUHJ6ZWthenl3YW5pZV96ZGFyemVuLzAyX1phZGFuaWVfMi9qcy9TaG9wSXRlbS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9Qcnpla2F6eXdhbmllX3pkYXJ6ZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBTaG9wSXRlbSBmcm9tIFwiLi9TaG9wSXRlbVwiO1xuXG5jb25zdCBTaG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IFtzaG9wSXRlbUxpc3QsIHNldFNob3BJdGVtU3RhdGVdID0gdXNlU3RhdGUoW1xuICAgICAgICB7aWQ6IDEsIHRpdGxlOiAnTWFjQm9vayBQcm8nfSxcbiAgICAgICAge2lkOiAyLCB0aXRsZTogJ0RlbGwgWDU1MDAnfSxcbiAgICAgICAge2lkOiAzLCB0aXRsZTogJ0FzdXMgTlQ2MDAwJ30sXG4gICAgICAgIHtpZDogNCwgdGl0bGU6ICdEZWxsIENhcm1lbid9LFxuICAgICAgICB7aWQ6IDUsIHRpdGxlOiAnUG9udGlhYyd9XG4gICAgXSk7XG5cbiAgICBjb25zdCBoYW5kbGVCdXkgPSAoKSA9PiB7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlR1dGFqIGplc3QgU2hvcCBhIHBvbmnFvGVqIHNob3AgaXRlbTwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3Nob3BJdGVtTGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNob3BJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gb25CdXk9e2hhbmRsZUJ1eX0vPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBTaG9wSXRlbSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGNvbnN0IHtpdGVtfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgPGJ1dHRvbj5LdXAgbmF0eWNobWlhc3Q8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wSXRlbTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgU2hvcCBmcm9tICcuL1Nob3AnXG5jb25zdCBBcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIDxTaG9wIC8+O1xufVxuXG4vLyBjb25zdCBBcHAgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIDxUb0RvTGlzdC8+XG4vLyB9XG4vL1xuLy8gY29uc3QgVG9Eb0xpc3QgPSAoKSA9PiB7XG4vL1xuLy8gICAgIGNvbnN0IFt0YXNrc0xpc3QsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtcbi8vICAgICAgICAge2lkOiAxLCB0aXRsZTogXCJacm9iacSHIHpha3VweVwifSxcbi8vICAgICAgICAge2lkOiAyLCB0aXRsZTogXCJPYmVqcnplxIcgbm93eSBzZXpvbiBHcnkgbyBUcm9uXCJ9LFxuLy8gICAgICAgICB7aWQ6IDMsIHRpdGxlOiBcIlpyb2JpxIcgemFkYW5pYSBkb21vd2VcIn1cbi8vICAgICBdKTtcbi8vXG4vLyAgICAgY29uc3QgaGFuZGxlVGFza0RvbmUgPSBpZCA9PiB7XG4vLyAgICAgICAgIHNldFRhc2tzKHByZXZTdGF0ZSA9PiB7XG4vLyAgICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlLmZpbHRlcih0YXNrID0+IHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5pZCAhPT0gaWQ7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfTtcbi8vXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAge3Rhc2tzTGlzdC5tYXAodGFzayA9PiA8VG9Eb0l0ZW0ga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkRvbmU9e2hhbmRsZVRhc2tEb25lfS8+KX1cbi8vICAgICAgICAgPC91bD5cbi8vICAgICApO1xuLy8gfTtcbi8vXG4vLyBjb25zdCBUb0RvSXRlbSA9IChwcm9wcykgPT4ge1xuLy8gICAgIGNvbnN0IHt0YXNrLCBvbkRvbmV9ID0gcHJvcHM7XG4vLyAgICAgY29uc3QgaGFuZGxlRG9uZUNsaWNrID0gKCkgPT4ge3pcbi8vICAgICAgICAgaWYgKHR5cGVvZiBvbkRvbmUgPT09ICdmdW5jdGlvbicpIHtcbi8vICAgICAgICAgICAgIG9uRG9uZSh0YXNrLmlkKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICA8aDQ+VGhpcyBpcyBteSB0YXNrOiB7dGFzay50aXRsZX08L2g0PlxuLy8gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEb25lQ2xpY2t9PlRhc2sgZG9uZTwvYnV0dG9uPlxuLy8gICAgICAgICA8L2xpPlxuLy8gICAgICk7XG4vLyB9O1xuXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGU5NDRhYzQ0NDhhZjU5MzJhMTFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJTaG9wSXRlbSIsIlNob3AiLCJfdXNlU3RhdGUiLCJpZCIsInRpdGxlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvcEl0ZW1MaXN0Iiwic2V0U2hvcEl0ZW1TdGF0ZSIsImhhbmRsZUJ1eSIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJpdGVtIiwia2V5Iiwib25CdXkiLCJwcm9wcyIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==