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
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, null);
}
function ShopItem(props) {
  var data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemDescription, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemPricing, null));
}
function ShopItemHeader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: props.image
  }));
}
function ShopItemDescription(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.description));
}
function ShopItemPricing() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, "Cena: ", props.price, " z\u0142", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup!"));
}
var data = {
  title: "MacBook Pro",
  image: "https://bit.ly/2EEtduD",
  description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
  price: 9999
};
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, {
  data: data
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a48271367e77d7ee7b9c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lYmYyNTViMGE3MjRkNmRjMmFkZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT1IsMERBQUEsQ0FBQ1UsUUFBUSxNQUFFLENBQUM7QUFDdkI7QUFFQSxTQUFTQSxRQUFRQSxDQUFDQyxLQUFLLEVBQUU7RUFDckIsSUFBT0MsSUFBSSxHQUFJRCxLQUFLLENBQWJDLElBQUk7RUFDWCxvQkFDSVosMERBQUEsK0JBQ0lBLDBEQUFBLENBQUNhLGNBQWMsTUFBQyxDQUFDLGVBQ2pCYiwwREFBQSxDQUFDYyxtQkFBbUIsTUFBQyxDQUFDLGVBQ3RCZCwwREFBQSxDQUFDZSxlQUFlLE1BQUMsQ0FDWixDQUFDO0FBRWxCO0FBRUEsU0FBU0YsY0FBY0EsQ0FBQ0YsS0FBSyxFQUFFO0VBQzNCLG9CQUNJWCwwREFBQSw4QkFDSUEsMERBQUEsYUFBS1csS0FBSyxDQUFDSyxLQUFVLENBQUMsZUFDdEJoQiwwREFBQTtJQUFLaUIsR0FBRyxFQUFFTixLQUFLLENBQUNPO0VBQU0sQ0FBQyxDQUNuQixDQUFDO0FBRWpCO0FBRUEsU0FBU0osbUJBQW1CQSxDQUFDSCxLQUFLLEVBQUU7RUFDaEMsb0JBQ0lYLDBEQUFBLCtCQUNJQSwwREFBQSxZQUFJVyxLQUFLLENBQUNRLFdBQWUsQ0FDcEIsQ0FBQztBQUVsQjtBQUVBLFNBQVNKLGVBQWVBLENBQUEsRUFBRztFQUN2QixvQkFDSWYsMERBQUEsaUJBQVEsUUFDRSxFQUFDVyxLQUFLLENBQUNTLEtBQUssRUFBQyxVQUNuQixlQUFBcEIsMERBQUEsaUJBQVEsTUFBWSxDQUNoQixDQUFDO0FBRWpCO0FBRUEsSUFBTVksSUFBSSxHQUFHO0VBQ1RJLEtBQUssRUFBRSxhQUFhO0VBQ3BCRSxLQUFLLEVBQUUsd0JBQXdCO0VBQy9CQyxXQUFXLEVBQUUsc1FBQXNRO0VBQ25SQyxLQUFLLEVBQUU7QUFDWCxDQUFDO0FBRURiLElBQUksQ0FBQ2MsTUFBTSxlQUFDckIsMERBQUEsQ0FBQ1EsR0FBRztFQUFDSSxJQUFJLEVBQUVBO0FBQUssQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDdEQvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPFNob3BJdGVtIC8+O1xufVxuXG5mdW5jdGlvbiBTaG9wSXRlbShwcm9wcykge1xuICAgIGNvbnN0IHtkYXRhfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPFNob3BJdGVtSGVhZGVyLz5cbiAgICAgICAgICAgIDxTaG9wSXRlbURlc2NyaXB0aW9uLz5cbiAgICAgICAgICAgIDxTaG9wSXRlbVByaWNpbmcvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbUhlYWRlcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9Lz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbURlc2NyaXB0aW9uKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbVByaWNpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIENlbmE6IHtwcm9wcy5wcmljZX0gesWCXG4gICAgICAgICAgICA8YnV0dG9uPkt1cCE8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKVxufVxuXG5jb25zdCBkYXRhID0ge1xuICAgIHRpdGxlOiBcIk1hY0Jvb2sgUHJvXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9iaXQubHkvMkVFdGR1RFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vYyBpIG1vYmlsbm/Fm8SHIOKAkyBNYWNCb29rIFBybyB3eXJhxbpuaWUgcG9kbm9zaSB0dSBwb3ByemVjemvEmS4gVGVyYXogbW/FvGVzeiBqZXN6Y3plIHN6eWJjaWVqIHJlYWxpem93YcSHIHN3b2plIHBvbXlzxYJ5LiBQb21vZ8SFIENpIHcgdHltIHd5ZGFqbmUgcHJvY2Vzb3J5IGkgdWvFgmFkeSBwYW1pxJljaSwgemFhd2Fuc293YW5hIGdyYWZpa2EsIGLFgnlza2F3aWN6bmllIGR6aWHFgmFqxIVjYSBwYW1pxJnEhyBtYXNvd2EgaSBpbm5lIGRvc2tvbmHFgmUgcm96d2nEhXphbmlhLlwiLFxuICAgIHByaWNlOiA5OTk5XG59O1xuXG5yb290LnJlbmRlcig8QXBwIGRhdGE9e2RhdGF9Lz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTQ4MjcxMzY3ZTc3ZDdlZTdiOWNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJTaG9wSXRlbSIsInByb3BzIiwiZGF0YSIsIlNob3BJdGVtSGVhZGVyIiwiU2hvcEl0ZW1EZXNjcmlwdGlvbiIsIlNob3BJdGVtUHJpY2luZyIsInRpdGxlIiwic3JjIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==