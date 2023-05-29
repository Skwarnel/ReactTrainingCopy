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
  var data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: data.image,
    width: "100px"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, data.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, "Cena: ", data.price, " z\u0142", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup!")));
}
function ShopItemHeader(_ref) {
  var title = _ref.title,
    image = _ref.image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    style: {
      width: '100px',
      height: '100px'
    },
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
  image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
/******/ 	__webpack_require__.h = () => ("0e4c04e0610772e26233")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMzU3NWQ3M2YwNDI0ZDkzMTQ3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsSUFBT0MsSUFBSSxHQUFJRCxLQUFLLENBQWJDLElBQUk7RUFDWCxvQkFBT1YsMERBQUEsQ0FBQ1ksUUFBUTtJQUFDRixJQUFJLEVBQUVBO0VBQUssQ0FBQyxDQUFDO0FBQ2xDO0FBRUEsU0FBU0UsUUFBUUEsQ0FBQ0gsS0FBSyxFQUFFO0VBQ3JCLElBQU9DLElBQUksR0FBSUQsS0FBSyxDQUFiQyxJQUFJO0VBQ1gsb0JBQ0lWLDBEQUFBLCtCQUNJQSwwREFBQSw4QkFDSUEsMERBQUEsYUFBS1UsSUFBSSxDQUFDRyxLQUFVLENBQUMsZUFDckJiLDBEQUFBO0lBQUtjLEdBQUcsRUFBRUosSUFBSSxDQUFDSyxLQUFNO0lBQUNDLEtBQUssRUFBQztFQUFPLENBQUMsQ0FDaEMsQ0FBQyxlQUNUaEIsMERBQUEsK0JBQ0lBLDBEQUFBLFlBQUlVLElBQUksQ0FBQ08sV0FBZSxDQUNuQixDQUFDLGVBQ1ZqQiwwREFBQSxpQkFBUSxRQUNFLEVBQUNVLElBQUksQ0FBQ1EsS0FBSyxFQUFDLFVBQ2xCLGVBQUFsQiwwREFBQSxpQkFBUSxNQUFZLENBQ2hCLENBQ0gsQ0FBQztBQUVsQjtBQUVBLFNBQVNtQixjQUFjQSxDQUFBQyxJQUFBLEVBQWlCO0VBQUEsSUFBZlAsS0FBSyxHQUFBTyxJQUFBLENBQUxQLEtBQUs7SUFBRUUsS0FBSyxHQUFBSyxJQUFBLENBQUxMLEtBQUs7RUFDakMsb0JBQ0lmLDBEQUFBLDhCQUNJQSwwREFBQSxhQUFLYSxLQUFVLENBQUMsZUFDaEJiLDBEQUFBO0lBQUtxQixLQUFLLEVBQUU7TUFBQ0wsS0FBSyxFQUFFLE9BQU87TUFBRU0sTUFBTSxFQUFFO0lBQU8sQ0FBRTtJQUFDUixHQUFHLEVBQUVDO0VBQU0sQ0FBRyxDQUN6RCxDQUFDO0FBRWpCO0FBRUEsU0FBU1EsbUJBQW1CQSxDQUFBQyxLQUFBLEVBQVM7RUFBQSxJQUFQQyxJQUFJLEdBQUFELEtBQUEsQ0FBSkMsSUFBSTtFQUM5QixvQkFDSXpCLDBEQUFBLCtCQUNJQSwwREFBQSxZQUFJeUIsSUFBUSxDQUNQLENBQUM7QUFFbEI7QUFFQSxTQUFTQyxlQUFlQSxDQUFBQyxLQUFBLEVBQVU7RUFBQSxJQUFSVCxLQUFLLEdBQUFTLEtBQUEsQ0FBTFQsS0FBSztFQUMzQixvQkFDSWxCLDBEQUFBLGlCQUFRLFFBQ0UsRUFBQ2tCLEtBQUssRUFBQyxVQUNiLGVBQUFsQiwwREFBQSxpQkFBUSxNQUFZLENBQ2hCLENBQUM7QUFFakI7QUFFQSxJQUFNVSxJQUFJLEdBQUc7RUFDVEcsS0FBSyxFQUFFLGFBQWE7RUFDcEJFLEtBQUssRUFBRSwrR0FBK0c7RUFDdEhFLFdBQVcsRUFBRSxzUUFBc1E7RUFDblJDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRFgsSUFBSSxDQUFDcUIsTUFBTSxlQUNQNUIsMERBQUEsQ0FBQ1EsR0FBRztFQUFDRSxJQUFJLEVBQUVBO0FBQUssQ0FBQyxDQUNyQixDQUFDOzs7Ozs7OztVQ2pFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIGNvbnN0IHtkYXRhfSA9IHByb3BzO1xuICAgIHJldHVybiA8U2hvcEl0ZW0gZGF0YT17ZGF0YX0vPjtcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW0ocHJvcHMpIHtcbiAgICBjb25zdCB7ZGF0YX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGgxPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2V9IHdpZHRoPScxMDBweCcvPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8cD57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgIENlbmE6IHtkYXRhLnByaWNlfSB6xYJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPkt1cCE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbUhlYWRlcih7dGl0bGUsIGltYWdlfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4J319IHNyYz17aW1hZ2V9ICAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtRGVzY3JpcHRpb24oe2Rlc2N9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8cD57ZGVzY308L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtUHJpY2luZyh7cHJpY2V9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIENlbmE6IHtwcmljZX0gesWCXG4gICAgICAgICAgICA8YnV0dG9uPkt1cCE8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKVxufVxuXG5jb25zdCBkYXRhID0ge1xuICAgIHRpdGxlOiBcIk1hY0Jvb2sgUHJvXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzAzMzgzL3BleGVscy1waG90by0zMDMzODMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vYyBpIG1vYmlsbm/Fm8SHIOKAkyBNYWNCb29rIFBybyB3eXJhxbpuaWUgcG9kbm9zaSB0dSBwb3ByemVjemvEmS4gVGVyYXogbW/FvGVzeiBqZXN6Y3plIHN6eWJjaWVqIHJlYWxpem93YcSHIHN3b2plIHBvbXlzxYJ5LiBQb21vZ8SFIENpIHcgdHltIHd5ZGFqbmUgcHJvY2Vzb3J5IGkgdWvFgmFkeSBwYW1pxJljaSwgemFhd2Fuc293YW5hIGdyYWZpa2EsIGLFgnlza2F3aWN6bmllIGR6aWHFgmFqxIVjYSBwYW1pxJnEhyBtYXNvd2EgaSBpbm5lIGRvc2tvbmHFgmUgcm96d2nEhXphbmlhLlwiLFxuICAgIHByaWNlOiA5OTk5XG59O1xuXG5yb290LnJlbmRlcihcbiAgICA8QXBwIGRhdGE9e2RhdGF9Lz5cbik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZTRjMDRlMDYxMDc3MmUyNjIzM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwicHJvcHMiLCJkYXRhIiwiY3JlYXRlRWxlbWVudCIsIlNob3BJdGVtIiwidGl0bGUiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIlNob3BJdGVtSGVhZGVyIiwiX3JlZiIsInN0eWxlIiwiaGVpZ2h0IiwiU2hvcEl0ZW1EZXNjcmlwdGlvbiIsIl9yZWYyIiwiZGVzYyIsIlNob3BJdGVtUHJpY2luZyIsIl9yZWYzIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==