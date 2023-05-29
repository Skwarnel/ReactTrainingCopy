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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, {
    data: props
  });
}
function ShopItem(props) {
  var list = props.list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\"Gfgeg\"")

  // <section>
  //     <ShopItemHeader title={list.title} image={list.image} />
  //     <ShopItemDescription description={list.description} />
  //     <ShopItemPricing price={list.price} />
  // </section>
  ;
}

function ShopItemHeader(props) {
  var title = props.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: image,
    width: "350px"
  }));
}
function ShopItemDescription(props) {
  var description = props.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, description));
}
function ShopItemPricing(props) {
  var price = props.price;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, "Cena: ", price, " z\u0142", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup!"));
}
var data = {
  title: "MacBook Pro",
  image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
  price: 9999
};
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, {
  data: data
}, " ", data.title, " "));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c06c0a754393e6b1324e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMDg3NDQwZTRkZmIxYzg2YjMyYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsb0JBQU9ULDBEQUFBLENBQUNXLFFBQVE7SUFBQ0MsSUFBSSxFQUFFSDtFQUFNLENBQUMsQ0FBQztBQUNuQztBQUVBLFNBQVNFLFFBQVFBLENBQUNGLEtBQUssRUFBRTtFQUNyQixJQUFPSSxJQUFJLEdBQUlKLEtBQUssQ0FBYkksSUFBSTtFQUNYLG9CQUNJYiwwREFBQSxjQUFLLFdBRUE7O0VBRUw7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUFBO0FBRVI7O0FBRUEsU0FBU2MsY0FBY0EsQ0FBQ0wsS0FBSyxFQUFFO0VBQzNCLElBQU9NLEtBQUssR0FBSU4sS0FBSyxDQUFkTSxLQUFLO0VBQ1osb0JBQ0lmLDBEQUFBLDhCQUNJQSwwREFBQSxhQUFLZSxLQUFVLENBQUMsZUFDaEJmLDBEQUFBO0lBQUtnQixHQUFHLEVBQUVDLEtBQU07SUFBQ0MsS0FBSyxFQUFDO0VBQU8sQ0FBQyxDQUMzQixDQUFDO0FBRWpCO0FBRUEsU0FBU0MsbUJBQW1CQSxDQUFDVixLQUFLLEVBQUU7RUFDaEMsSUFBT1csV0FBVyxHQUFJWCxLQUFLLENBQXBCVyxXQUFXO0VBQ2xCLG9CQUNJcEIsMERBQUEsK0JBQ0lBLDBEQUFBLFlBQUlvQixXQUFlLENBQ2QsQ0FBQztBQUVsQjtBQUVBLFNBQVNDLGVBQWVBLENBQUNaLEtBQUssRUFBRTtFQUM1QixJQUFPYSxLQUFLLEdBQUliLEtBQUssQ0FBZGEsS0FBSztFQUNaLG9CQUNJdEIsMERBQUEsaUJBQVEsUUFDRSxFQUFDc0IsS0FBSyxFQUFDLFVBQ2IsZUFBQXRCLDBEQUFBLGlCQUFRLE1BQVksQ0FDaEIsQ0FBQztBQUVqQjtBQUVBLElBQU1ZLElBQUksR0FBRztFQUNURyxLQUFLLEVBQUUsYUFBYTtFQUNwQkUsS0FBSyxFQUFFLCtHQUErRztFQUN0SEcsV0FBVyxFQUFFLHNRQUFzUTtFQUNuUkUsS0FBSyxFQUFFO0FBQ1gsQ0FBQztBQUVEZixJQUFJLENBQUNnQixNQUFNLGVBQ1B2QiwwREFBQSxDQUFDUSxHQUFHO0VBQUNJLElBQUksRUFBRUE7QUFBSyxHQUFDLEdBQUMsRUFBQ0EsSUFBSSxDQUFDRyxLQUFLLEVBQUMsR0FBTSxDQUN4QyxDQUFDOzs7Ozs7OztVQy9ERCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIHJldHVybiA8U2hvcEl0ZW0gZGF0YT17cHJvcHN9Lz47XG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtKHByb3BzKSB7XG4gICAgY29uc3Qge2xpc3R9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFwiR2ZnZWdcIlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICAvLyA8c2VjdGlvbj5cbiAgICAgICAgLy8gICAgIDxTaG9wSXRlbUhlYWRlciB0aXRsZT17bGlzdC50aXRsZX0gaW1hZ2U9e2xpc3QuaW1hZ2V9IC8+XG4gICAgICAgIC8vICAgICA8U2hvcEl0ZW1EZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17bGlzdC5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgLy8gICAgIDxTaG9wSXRlbVByaWNpbmcgcHJpY2U9e2xpc3QucHJpY2V9IC8+XG4gICAgICAgIC8vIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtSGVhZGVyKHByb3BzKSB7XG4gICAgY29uc3Qge3RpdGxlfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IHdpZHRoPSczNTBweCcvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtRGVzY3JpcHRpb24ocHJvcHMpIHtcbiAgICBjb25zdCB7ZGVzY3JpcHRpb259ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbVByaWNpbmcocHJvcHMpIHtcbiAgICBjb25zdCB7cHJpY2V9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIENlbmE6IHtwcmljZX0gesWCXG4gICAgICAgICAgICA8YnV0dG9uPkt1cCE8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKVxufVxuXG5jb25zdCBkYXRhID0ge1xuICAgIHRpdGxlOiBcIk1hY0Jvb2sgUHJvXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzAzMzgzL3BleGVscy1waG90by0zMDMzODMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vYyBpIG1vYmlsbm/Fm8SHIOKAkyBNYWNCb29rIFBybyB3eXJhxbpuaWUgcG9kbm9zaSB0dSBwb3ByemVjemvEmS4gVGVyYXogbW/FvGVzeiBqZXN6Y3plIHN6eWJjaWVqIHJlYWxpem93YcSHIHN3b2plIHBvbXlzxYJ5LiBQb21vZ8SFIENpIHcgdHltIHd5ZGFqbmUgcHJvY2Vzb3J5IGkgdWvFgmFkeSBwYW1pxJljaSwgemFhd2Fuc293YW5hIGdyYWZpa2EsIGLFgnlza2F3aWN6bmllIGR6aWHFgmFqxIVjYSBwYW1pxJnEhyBtYXNvd2EgaSBpbm5lIGRvc2tvbmHFgmUgcm96d2nEhXphbmlhLlwiLFxuICAgIHByaWNlOiA5OTk5XG59O1xuXG5yb290LnJlbmRlcihcbiAgICA8QXBwIGRhdGE9e2RhdGF9PiB7ZGF0YS50aXRsZX0gPC9BcHA+XG4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzA2YzBhNzU0MzkzZTZiMTMyNGVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIlNob3BJdGVtIiwiZGF0YSIsImxpc3QiLCJTaG9wSXRlbUhlYWRlciIsInRpdGxlIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsIlNob3BJdGVtRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsIlNob3BJdGVtUHJpY2luZyIsInByaWNlIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==