"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
function App(props) {
  var data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopList, {
    data: data
  });
}
function ShopList(props) {
  var data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "shopList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, "data.map(item => ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: item.title
  }, item.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: data.image
  }))));
}

// function ShopItemHeader() {
//     return (
//         <header>
//             <h1>{data.title}</h1>
//             <img src={data.image} width='350px'/>
//         </header>
//     )
// }
//
// function ShopItemDescription() {
//     return (
//         <article>
//             <p>{data.description}</p>
//         </article>
//     )
// }
//
// function ShopItemPricing() {
//     return (
//         <footer>
//             Cena: {data.price} zł
//             <button>Kup!</button>
//         </footer>
//     )
// }

var data = [{
  title: "Mysz komputerowa",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
}, {
  title: "Klawiatura",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
}, {
  title: "Laptop programisty",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
}];
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, {
  data: data
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d7f8263438ddb3079c08")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMzQwN2IyYjNkYjY0NWEwZTY0Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsSUFBT0MsSUFBSSxHQUFJRCxLQUFLLENBQWJDLElBQUk7RUFDWCxvQkFBT1YsMERBQUEsQ0FBQ1ksUUFBUTtJQUFDRixJQUFJLEVBQUVBO0VBQUssQ0FBQyxDQUFDO0FBQ2xDO0FBRUEsU0FBU0UsUUFBUUEsQ0FBQ0gsS0FBSyxFQUFFO0VBQ3JCLElBQU9DLElBQUksR0FBSUQsS0FBSyxDQUFiQyxJQUFJO0VBQ1gsb0JBQ0lWLDBEQUFBO0lBQUthLFNBQVMsRUFBQztFQUFVLGdCQUNyQmIsMERBQUEsYUFBSSxtQkFDaUIsZUFDakJBLDBEQUFBO0lBQUljLEdBQUcsRUFBRUMsSUFBSSxDQUFDQztFQUFNLEdBQUVELElBQUksQ0FBQ0MsS0FBSyxlQUNoQ2hCLDBEQUFBO0lBQUtpQixHQUFHLEVBQUVQLElBQUksQ0FBQ1E7RUFBTSxDQUFFLENBQ25CLENBRUosQ0FDSCxDQUFDO0FBRWQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTVIsSUFBSSxHQUFHLENBQ0w7RUFDSU0sS0FBSyxFQUFFLGtCQUFrQjtFQUN6QkUsS0FBSyxFQUFFO0FBQ1gsQ0FBQyxFQUNEO0VBQ0lGLEtBQUssRUFBRSxZQUFZO0VBQ25CRSxLQUFLLEVBQ0Q7QUFDUixDQUFDLEVBQ0Q7RUFDSUYsS0FBSyxFQUFFLG9CQUFvQjtFQUMzQkUsS0FBSyxFQUNEO0FBQ1IsQ0FBQyxDQUNKO0FBR0xYLElBQUksQ0FBQ1ksTUFBTSxlQUNQbkIsMERBQUEsQ0FBQ1EsR0FBRztFQUFDRSxJQUFJLEVBQUVBO0FBQUssQ0FBQyxDQUNyQixDQUFDOzs7Ozs7OztVQ3hFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIGNvbnN0IHtkYXRhfSA9IHByb3BzO1xuICAgIHJldHVybiA8U2hvcExpc3QgZGF0YT17ZGF0YX0vPjtcbn1cblxuZnVuY3Rpb24gU2hvcExpc3QocHJvcHMpIHtcbiAgICBjb25zdCB7ZGF0YX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3BMaXN0XCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgZGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS50aXRsZX0+e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuLy8gZnVuY3Rpb24gU2hvcEl0ZW1IZWFkZXIoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGhlYWRlcj5cbi8vICAgICAgICAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxuLy8gICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2V9IHdpZHRoPSczNTBweCcvPlxuLy8gICAgICAgICA8L2hlYWRlcj5cbi8vICAgICApXG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gU2hvcEl0ZW1EZXNjcmlwdGlvbigpIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8YXJ0aWNsZT5cbi8vICAgICAgICAgICAgIDxwPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbi8vICAgICAgICAgPC9hcnRpY2xlPlxuLy8gICAgIClcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBTaG9wSXRlbVByaWNpbmcoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGZvb3Rlcj5cbi8vICAgICAgICAgICAgIENlbmE6IHtkYXRhLnByaWNlfSB6xYJcbi8vICAgICAgICAgICAgIDxidXR0b24+S3VwITwvYnV0dG9uPlxuLy8gICAgICAgICA8L2Zvb3Rlcj5cbi8vICAgICApXG4vLyB9XG5cbmNvbnN0IGRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk15c3oga29tcHV0ZXJvd2FcIixcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYy9jNS9SZWRfY29tcHV0ZXJfbW91c2UuanBnXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiS2xhd2lhdHVyYVwiLFxuICAgICAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzYvNjYvQ29tcHV0ZXJfa2V5Ym9hcmRfRGFuaXNoX2xheW91dC5zdmcvMTAwMHB4LUNvbXB1dGVyX2tleWJvYXJkX0RhbmlzaF9sYXlvdXQuc3ZnLnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkxhcHRvcCBwcm9ncmFtaXN0eVwiLFxuICAgICAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2IvYjkvVHlwaW5nX2NvbXB1dGVyX3NjcmVlbl9yZWZsZWN0aW9uLmpwZy82NDBweC1UeXBpbmdfY29tcHV0ZXJfc2NyZWVuX3JlZmxlY3Rpb24uanBnXCJcbiAgICAgICAgfVxuICAgIF1cbjtcblxucm9vdC5yZW5kZXIoXG4gICAgPEFwcCBkYXRhPXtkYXRhfS8+XG4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDdmODI2MzQzOGRkYjMwNzljMDhcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsInByb3BzIiwiZGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJTaG9wTGlzdCIsImNsYXNzTmFtZSIsImtleSIsIml0ZW0iLCJ0aXRsZSIsInNyYyIsImltYWdlIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==