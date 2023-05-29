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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, {
    data: data
  });
}
function ShopItem(props) {
  var title = props.title,
    image = props.image,
    description = props.description,
    price = props.price;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, title);
}
function ShopItemHeader(_ref) {
  var title = _ref.title,
    image = _ref.image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: image
  }));
}
function ShopItemDescription(_ref2) {
  var desc = _ref2.desc;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, desc));
}
function ShopItemPricing(_ref3) {
  var price = _ref3.price;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, "Cena: ", price, " z\u0142", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup!"));
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
/******/ 	__webpack_require__.h = () => ("3be0fffc1ac934aa1146")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZjE0NjIzNjcwYzc1Njc5YTFiYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsSUFBT0MsSUFBSSxHQUFJRCxLQUFLLENBQWJDLElBQUk7RUFDWCxvQkFBT1YsMERBQUEsQ0FBQ1ksUUFBUTtJQUFDRixJQUFJLEVBQUVBO0VBQUssQ0FBRSxDQUFDO0FBQ25DO0FBRUEsU0FBU0UsUUFBUUEsQ0FBQ0gsS0FBSyxFQUFFO0VBQ3JCLElBQU9JLEtBQUssR0FBK0JKLEtBQUssQ0FBekNJLEtBQUs7SUFBRUMsS0FBSyxHQUF3QkwsS0FBSyxDQUFsQ0ssS0FBSztJQUFFQyxXQUFXLEdBQVdOLEtBQUssQ0FBM0JNLFdBQVc7SUFBRUMsS0FBSyxHQUFJUCxLQUFLLENBQWRPLEtBQUs7RUFDdkMsb0JBQ0loQiwwREFBQSxZQUNLYSxLQUNGLENBQUM7QUFFWjtBQUVBLFNBQVNJLGNBQWNBLENBQUFDLElBQUEsRUFBaUI7RUFBQSxJQUFmTCxLQUFLLEdBQUFLLElBQUEsQ0FBTEwsS0FBSztJQUFFQyxLQUFLLEdBQUFJLElBQUEsQ0FBTEosS0FBSztFQUNqQyxvQkFDSWQsMERBQUEsOEJBQ0lBLDBEQUFBLGFBQUthLEtBQVUsQ0FBQyxlQUNoQmIsMERBQUE7SUFBS21CLEdBQUcsRUFBRUw7RUFBTSxDQUFFLENBQ2QsQ0FBQztBQUVqQjtBQUVBLFNBQVNNLG1CQUFtQkEsQ0FBQUMsS0FBQSxFQUFTO0VBQUEsSUFBUEMsSUFBSSxHQUFBRCxLQUFBLENBQUpDLElBQUk7RUFDOUIsb0JBQ0l0QiwwREFBQSwrQkFDSUEsMERBQUEsWUFBSXNCLElBQVEsQ0FDUCxDQUFDO0FBRWxCO0FBRUEsU0FBU0MsZUFBZUEsQ0FBQUMsS0FBQSxFQUFVO0VBQUEsSUFBUlIsS0FBSyxHQUFBUSxLQUFBLENBQUxSLEtBQUs7RUFDM0Isb0JBQ0loQiwwREFBQSxpQkFBUSxRQUNFLEVBQUNnQixLQUFLLEVBQUMsVUFDYixlQUFBaEIsMERBQUEsaUJBQVEsTUFBWSxDQUNoQixDQUFDO0FBRWpCO0FBRUEsSUFBTVUsSUFBSSxHQUFHO0VBQ1RHLEtBQUssRUFBRSxhQUFhO0VBQ3BCQyxLQUFLLEVBQUUsd0JBQXdCO0VBQy9CQyxXQUFXLEVBQUUsc1FBQXNRO0VBQ25SQyxLQUFLLEVBQUU7QUFDWCxDQUFDO0FBRURULElBQUksQ0FBQ2tCLE1BQU0sZUFDUHpCLDBEQUFBLENBQUNRLEdBQUc7RUFBQ0UsSUFBSSxFQUFFQTtBQUFLLENBQUMsQ0FDckIsQ0FBQzs7Ozs7Ozs7VUN2REQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfS29tcG96eWNqYV9pX3Byb3BzX2NoaWxkcmVuLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5mdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgICBjb25zdCB7ZGF0YX0gPSBwcm9wcztcbiAgICByZXR1cm4gPFNob3BJdGVtIGRhdGE9e2RhdGF9IC8+O1xufVxuXG5mdW5jdGlvbiBTaG9wSXRlbShwcm9wcykge1xuICAgIGNvbnN0IHt0aXRsZSwgaW1hZ2UsIGRlc2NyaXB0aW9uLCBwcmljZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8cD5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9wPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1IZWFkZXIoe3RpdGxlLCBpbWFnZX0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtRGVzY3JpcHRpb24oe2Rlc2N9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8cD57ZGVzY308L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtUHJpY2luZyh7cHJpY2V9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIENlbmE6IHtwcmljZX0gesWCXG4gICAgICAgICAgICA8YnV0dG9uPkt1cCE8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKVxufVxuXG5jb25zdCBkYXRhID0ge1xuICAgIHRpdGxlOiBcIk1hY0Jvb2sgUHJvXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9iaXQubHkvMkVFdGR1RFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vYyBpIG1vYmlsbm/Fm8SHIOKAkyBNYWNCb29rIFBybyB3eXJhxbpuaWUgcG9kbm9zaSB0dSBwb3ByemVjemvEmS4gVGVyYXogbW/FvGVzeiBqZXN6Y3plIHN6eWJjaWVqIHJlYWxpem93YcSHIHN3b2plIHBvbXlzxYJ5LiBQb21vZ8SFIENpIHcgdHltIHd5ZGFqbmUgcHJvY2Vzb3J5IGkgdWvFgmFkeSBwYW1pxJljaSwgemFhd2Fuc293YW5hIGdyYWZpa2EsIGLFgnlza2F3aWN6bmllIGR6aWHFgmFqxIVjYSBwYW1pxJnEhyBtYXNvd2EgaSBpbm5lIGRvc2tvbmHFgmUgcm96d2nEhXphbmlhLlwiLFxuICAgIHByaWNlOiA5OTk5XG59O1xuXG5yb290LnJlbmRlcihcbiAgICA8QXBwIGRhdGE9e2RhdGF9Lz5cbik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzYmUwZmZmYzFhYzkzNGFhMTE0NlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwicHJvcHMiLCJkYXRhIiwiY3JlYXRlRWxlbWVudCIsIlNob3BJdGVtIiwidGl0bGUiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJTaG9wSXRlbUhlYWRlciIsIl9yZWYiLCJzcmMiLCJTaG9wSXRlbURlc2NyaXB0aW9uIiwiX3JlZjIiLCJkZXNjIiwiU2hvcEl0ZW1QcmljaW5nIiwiX3JlZjMiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9