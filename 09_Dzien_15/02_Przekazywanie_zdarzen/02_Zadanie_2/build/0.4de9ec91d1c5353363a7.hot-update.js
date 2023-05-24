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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
    setShopItem = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    cart = _useState4[0],
    setCart = _useState4[1];
  var productBuy = function productBuy(item) {
    setCart(function (prevCart) {
      return [].concat(_toConsumableArray(prevCart), [item]);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Tutaj jest Shop a poni\u017Cej shop item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, shopItemList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ShopItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      item: item,
      onBuy: productBuy
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "You have bought:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, cart.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ShopItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      item: item
    });
  }))));
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
  var item = props.item,
    onBuy = props.onBuy;
  var handleBuy = function handleBuy(item) {
    if (typeof onBuy === 'function') {
      onBuy(item);
    }
  };
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

// app.js

// import React, {Component} from "react";
// import ReactDOM from "react-dom";
//
// import Shop from './Shop';
//
// function App() {
//     return <Shop />;
// }
//
// ReactDOM.render(<App/>, document.getElementById("app"));
//
// // Shop.js
//
// import React, { useState } from 'react';
//
// import ShopItem from './ShopItem';
//
// function Shop() {
//
//     const [ cart, setCart ] = useState([]);
//
//     const addToCart = (item) => {
//         setCart(prevCart => [...prevCart, item]);
//     }
//
//     return (
//         <>
//             <ShopItem title="MacBook Pro" onBuy={addToCart} />
//             <ShopItem title="Dell" onBuy={addToCart} />
//             <ShopItem title="Asus" onBuy={addToCart} />
//             <h1>Koszyk</h1>
//             { cart.map(item => <li key={item}>{ item }</li>) }
//         </>
//     )
//
// }
//
// export default Shop;
//
// // ShopItem.js
//
// function ShopItem() {
//
//     return (
//         <>
//             <h1>{ props.title }</h1>
//             <button onClick={() => props.onBuy(props.title)}>Kup</button>
//         </>
//     )
//
// }
//
// export default Shop;
//
//
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("150b2200f899a64b25d1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSw2Q0FBSSxNQUFFLENBQUM7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTXdCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBRzdCLDREQUFVLENBQUMwQixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDaEMsMERBQUEsQ0FBQzJCLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDNUduQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1ByemVrYXp5d2FuaWVfemRhcnplbi8wMl9aYWRhbmllXzIvanMvU2hvcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9Qcnpla2F6eXdhbmllX3pkYXJ6ZW4vMDJfWmFkYW5pZV8yL2pzL1Nob3BJdGVtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1ByemVrYXp5d2FuaWVfemRhcnplbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFNob3BJdGVtIGZyb20gXCIuL1Nob3BJdGVtXCI7XG5cbmNvbnN0IFNob3AgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBbc2hvcEl0ZW1MaXN0LCBzZXRTaG9wSXRlbV0gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtpZDogMSwgdGl0bGU6ICdNYWNCb29rIFBybyd9LFxuICAgICAgICB7aWQ6IDIsIHRpdGxlOiAnRGVsbCBYNTUwMCd9LFxuICAgICAgICB7aWQ6IDMsIHRpdGxlOiAnQXN1cyBOVDYwMDAnfSxcbiAgICAgICAge2lkOiA0LCB0aXRsZTogJ0RlbGwgQ2FybWVuJ30sXG4gICAgICAgIHtpZDogNSwgdGl0bGU6ICdQb250aWFjJ31cbiAgICBdKTtcblxuICAgIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IHByb2R1Y3RCdXkgPSBpdGVtID0+IHtcbiAgICAgICAgc2V0Q2FydChwcmV2Q2FydCA9PiBbLi4ucHJldkNhcnQsIGl0ZW1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlR1dGFqIGplc3QgU2hvcCBhIHBvbmnFvGVqIHNob3AgaXRlbTwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3Nob3BJdGVtTGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNob3BJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gb25CdXk9e3Byb2R1Y3RCdXl9Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBZb3UgaGF2ZSBib3VnaHQ6XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7Y2FydC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxTaG9wSXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBTaG9wSXRlbSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGNvbnN0IHtpdGVtLCBvbkJ1eX0gPSBwcm9wcztcblxuICAgIGNvbnN0IGhhbmRsZUJ1eSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygb25CdXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG9uQnV5KGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGgzPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8YnV0dG9uID5LdXAgbmF0eWNobWlhc3Q8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wSXRlbTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgU2hvcCBmcm9tICcuL1Nob3AnXG5jb25zdCBBcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIDxTaG9wIC8+O1xufVxuXG4vLyBjb25zdCBBcHAgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIDxUb0RvTGlzdC8+XG4vLyB9XG4vL1xuLy8gY29uc3QgVG9Eb0xpc3QgPSAoKSA9PiB7XG4vL1xuLy8gICAgIGNvbnN0IFt0YXNrc0xpc3QsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtcbi8vICAgICAgICAge2lkOiAxLCB0aXRsZTogXCJacm9iacSHIHpha3VweVwifSxcbi8vICAgICAgICAge2lkOiAyLCB0aXRsZTogXCJPYmVqcnplxIcgbm93eSBzZXpvbiBHcnkgbyBUcm9uXCJ9LFxuLy8gICAgICAgICB7aWQ6IDMsIHRpdGxlOiBcIlpyb2JpxIcgemFkYW5pYSBkb21vd2VcIn1cbi8vICAgICBdKTtcbi8vXG4vLyAgICAgY29uc3QgaGFuZGxlVGFza0RvbmUgPSBpZCA9PiB7XG4vLyAgICAgICAgIHNldFRhc2tzKHByZXZTdGF0ZSA9PiB7XG4vLyAgICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlLmZpbHRlcih0YXNrID0+IHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5pZCAhPT0gaWQ7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfTtcbi8vXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAge3Rhc2tzTGlzdC5tYXAodGFzayA9PiA8VG9Eb0l0ZW0ga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkRvbmU9e2hhbmRsZVRhc2tEb25lfS8+KX1cbi8vICAgICAgICAgPC91bD5cbi8vICAgICApO1xuLy8gfTtcbi8vXG4vLyBjb25zdCBUb0RvSXRlbSA9IChwcm9wcykgPT4ge1xuLy8gICAgIGNvbnN0IHt0YXNrLCBvbkRvbmV9ID0gcHJvcHM7XG4vLyAgICAgY29uc3QgaGFuZGxlRG9uZUNsaWNrID0gKCkgPT4ge3pcbi8vICAgICAgICAgaWYgKHR5cGVvZiBvbkRvbmUgPT09ICdmdW5jdGlvbicpIHtcbi8vICAgICAgICAgICAgIG9uRG9uZSh0YXNrLmlkKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICA8aDQ+VGhpcyBpcyBteSB0YXNrOiB7dGFzay50aXRsZX08L2g0PlxuLy8gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEb25lQ2xpY2t9PlRhc2sgZG9uZTwvYnV0dG9uPlxuLy8gICAgICAgICA8L2xpPlxuLy8gICAgICk7XG4vLyB9O1xuXG4vLyBhcHAuanNcblxuLy8gaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG4vL1xuLy8gaW1wb3J0IFNob3AgZnJvbSAnLi9TaG9wJztcbi8vXG4vLyBmdW5jdGlvbiBBcHAoKSB7XG4vLyAgICAgcmV0dXJuIDxTaG9wIC8+O1xuLy8gfVxuLy9cbi8vIFJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcbi8vXG4vLyAvLyBTaG9wLmpzXG4vL1xuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy9cbi8vIGltcG9ydCBTaG9wSXRlbSBmcm9tICcuL1Nob3BJdGVtJztcbi8vXG4vLyBmdW5jdGlvbiBTaG9wKCkge1xuLy9cbi8vICAgICBjb25zdCBbIGNhcnQsIHNldENhcnQgXSA9IHVzZVN0YXRlKFtdKTtcbi8vXG4vLyAgICAgY29uc3QgYWRkVG9DYXJ0ID0gKGl0ZW0pID0+IHtcbi8vICAgICAgICAgc2V0Q2FydChwcmV2Q2FydCA9PiBbLi4ucHJldkNhcnQsIGl0ZW1dKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDw+XG4vLyAgICAgICAgICAgICA8U2hvcEl0ZW0gdGl0bGU9XCJNYWNCb29rIFByb1wiIG9uQnV5PXthZGRUb0NhcnR9IC8+XG4vLyAgICAgICAgICAgICA8U2hvcEl0ZW0gdGl0bGU9XCJEZWxsXCIgb25CdXk9e2FkZFRvQ2FydH0gLz5cbi8vICAgICAgICAgICAgIDxTaG9wSXRlbSB0aXRsZT1cIkFzdXNcIiBvbkJ1eT17YWRkVG9DYXJ0fSAvPlxuLy8gICAgICAgICAgICAgPGgxPktvc3p5azwvaDE+XG4vLyAgICAgICAgICAgICB7IGNhcnQubWFwKGl0ZW0gPT4gPGxpIGtleT17aXRlbX0+eyBpdGVtIH08L2xpPikgfVxuLy8gICAgICAgICA8Lz5cbi8vICAgICApXG4vL1xuLy8gfVxuLy9cbi8vIGV4cG9ydCBkZWZhdWx0IFNob3A7XG4vL1xuLy8gLy8gU2hvcEl0ZW0uanNcbi8vXG4vLyBmdW5jdGlvbiBTaG9wSXRlbSgpIHtcbi8vXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPD5cbi8vICAgICAgICAgICAgIDxoMT57IHByb3BzLnRpdGxlIH08L2gxPlxuLy8gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkJ1eShwcm9wcy50aXRsZSl9Pkt1cDwvYnV0dG9uPlxuLy8gICAgICAgICA8Lz5cbi8vICAgICApXG4vL1xuLy8gfVxuLy9cbi8vIGV4cG9ydCBkZWZhdWx0IFNob3A7XG4vL1xuLy9cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTUwYjIyMDBmODk5YTY0YjI1ZDFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJTaG9wSXRlbSIsIlNob3AiLCJfdXNlU3RhdGUiLCJpZCIsInRpdGxlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvcEl0ZW1MaXN0Iiwic2V0U2hvcEl0ZW0iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImNhcnQiLCJzZXRDYXJ0IiwicHJvZHVjdEJ1eSIsIml0ZW0iLCJwcmV2Q2FydCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJrZXkiLCJvbkJ1eSIsInByb3BzIiwiaGFuZGxlQnV5IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9