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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Tutaj jest Shop a poni\u017Cej shop item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, shopItemList.map(function (item) {
    // <ShopItem key={item.id} title={item.title}/>
    /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup natychmiast");
  }), ";"));
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
  var title = props.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, title);
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
/******/ 	__webpack_require__.h = () => ("db23b6a8915cc8d68e8a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45Yjk4ZTU4NGVjNmViMTEzYTJkMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFDVjtBQUVsQyxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFlO0VBQ3JCLElBQUFDLFNBQUEsR0FBeUNKLCtDQUFRLENBQUMsQ0FDOUM7TUFBQ0ssRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWEsQ0FBQyxFQUM3QjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBWSxDQUFDLEVBQzVCO01BQUNELEVBQUUsRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFhLENBQUMsRUFDN0I7TUFBQ0QsRUFBRSxFQUFFLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQWEsQ0FBQyxFQUM3QjtNQUFDRCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBUyxDQUFDLENBQzVCLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFKLFNBQUE7SUFOS0ssWUFBWSxHQUFBRixVQUFBO0lBQUVHLGdCQUFnQixHQUFBSCxVQUFBO0VBU3JDLG9CQUNJUiwwREFBQSwyQkFDSUEsMERBQUEsYUFBSSwwQ0FBdUMsQ0FBQyxlQUM1Q0EsMERBQUEsYUFDS1UsWUFBWSxDQUFDRyxHQUFHLENBQUMsVUFBQUMsSUFBSSxFQUFJO0lBQ2xCO0lBQ0EsYUFBQWQsMERBQUEsaUJBQVEsaUJBQXVCLENBQUM7RUFDcEMsQ0FDSixDQUFDLEVBQUMsR0FDRixDQUNILENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVJLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDNUJPO0FBQ2tCO0FBRTVDLElBQU1ELFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFhWSxLQUFLLEVBQUU7RUFDOUIsSUFBT1IsS0FBSyxHQUFJUSxLQUFLLENBQWRSLEtBQUs7RUFDWixvQkFDSVAsMERBQUEsYUFBS08sS0FBVSxDQUFDO0FBRXhCLENBQUM7QUFFRCxpRUFBZUosUUFBUTs7Ozs7Ozs7Ozs7O0FDVmU7QUFDTTtBQUNuQjtBQUN6QixJQUFNYSxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFlO0VBQ3BCLG9CQUFPaEIsMERBQUEsQ0FBQ0ksNkNBQUksTUFBRSxDQUFDO0FBQ25CLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNYSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdsQiw0REFBVSxDQUFDZSxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDckIsMERBQUEsQ0FBQ2dCLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDcERuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1ByemVrYXp5d2FuaWVfemRhcnplbi8wMl9aYWRhbmllXzIvanMvU2hvcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9Qcnpla2F6eXdhbmllX3pkYXJ6ZW4vMDJfWmFkYW5pZV8yL2pzL1Nob3BJdGVtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1ByemVrYXp5d2FuaWVfemRhcnplbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFNob3BJdGVtIGZyb20gXCIuL1Nob3BJdGVtXCI7XG5cbmNvbnN0IFNob3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgW3Nob3BJdGVtTGlzdCwgc2V0U2hvcEl0ZW1TdGF0ZV0gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtpZDogMSwgdGl0bGU6ICdNYWNCb29rIFBybyd9LFxuICAgICAgICB7aWQ6IDIsIHRpdGxlOiAnRGVsbCBYNTUwMCd9LFxuICAgICAgICB7aWQ6IDMsIHRpdGxlOiAnQXN1cyBOVDYwMDAnfSxcbiAgICAgICAge2lkOiA0LCB0aXRsZTogJ0RlbGwgQ2FybWVuJ30sXG4gICAgICAgIHtpZDogNSwgdGl0bGU6ICdQb250aWFjJ31cbiAgICBdKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5UdXRhaiBqZXN0IFNob3AgYSBwb25pxbxlaiBzaG9wIGl0ZW08L2gxPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtzaG9wSXRlbUxpc3QubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPFNob3BJdGVtIGtleT17aXRlbS5pZH0gdGl0bGU9e2l0ZW0udGl0bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+S3VwIG5hdHljaG1pYXN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApfTtcbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBTaG9wSXRlbSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGNvbnN0IHt0aXRsZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGk+e3RpdGxlfTwvbGk+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcEl0ZW07IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFNob3AgZnJvbSAnLi9TaG9wJ1xuY29uc3QgQXBwID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiA8U2hvcCAvPjtcbn1cblxuLy8gY29uc3QgQXBwID0gKCkgPT4ge1xuLy8gICAgIHJldHVybiA8VG9Eb0xpc3QvPlxuLy8gfVxuLy9cbi8vIGNvbnN0IFRvRG9MaXN0ID0gKCkgPT4ge1xuLy9cbi8vICAgICBjb25zdCBbdGFza3NMaXN0LCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXG4vLyAgICAgICAgIHtpZDogMSwgdGl0bGU6IFwiWnJvYmnEhyB6YWt1cHlcIn0sXG4vLyAgICAgICAgIHtpZDogMiwgdGl0bGU6IFwiT2JlanJ6ZcSHIG5vd3kgc2V6b24gR3J5IG8gVHJvblwifSxcbi8vICAgICAgICAge2lkOiAzLCB0aXRsZTogXCJacm9iacSHIHphZGFuaWEgZG9tb3dlXCJ9XG4vLyAgICAgXSk7XG4vL1xuLy8gICAgIGNvbnN0IGhhbmRsZVRhc2tEb25lID0gaWQgPT4ge1xuLy8gICAgICAgICBzZXRUYXNrcyhwcmV2U3RhdGUgPT4ge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZS5maWx0ZXIodGFzayA9PiB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2suaWQgIT09IGlkO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH07XG4vL1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgIHt0YXNrc0xpc3QubWFwKHRhc2sgPT4gPFRvRG9JdGVtIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gb25Eb25lPXtoYW5kbGVUYXNrRG9uZX0vPil9XG4vLyAgICAgICAgIDwvdWw+XG4vLyAgICAgKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgVG9Eb0l0ZW0gPSAocHJvcHMpID0+IHtcbi8vICAgICBjb25zdCB7dGFzaywgb25Eb25lfSA9IHByb3BzO1xuLy8gICAgIGNvbnN0IGhhbmRsZURvbmVDbGljayA9ICgpID0+IHt6XG4vLyAgICAgICAgIGlmICh0eXBlb2Ygb25Eb25lID09PSAnZnVuY3Rpb24nKSB7XG4vLyAgICAgICAgICAgICBvbkRvbmUodGFzay5pZCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgICAgPGg0PlRoaXMgaXMgbXkgdGFzazoge3Rhc2sudGl0bGV9PC9oND5cbi8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRG9uZUNsaWNrfT5UYXNrIGRvbmU8L2J1dHRvbj5cbi8vICAgICAgICAgPC9saT5cbi8vICAgICApO1xuLy8gfTtcblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRiMjNiNmE4OTE1Y2M4ZDY4ZThhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiU2hvcEl0ZW0iLCJTaG9wIiwiX3VzZVN0YXRlIiwiaWQiLCJ0aXRsZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNob3BJdGVtTGlzdCIsInNldFNob3BJdGVtU3RhdGUiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiaXRlbSIsInByb3BzIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9