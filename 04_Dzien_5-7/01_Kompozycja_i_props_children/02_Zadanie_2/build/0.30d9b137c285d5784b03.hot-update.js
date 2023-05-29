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
  }, " ", props.children, " ");
}
function ShopItem(props) {
  var title = props.title,
    description = props.description,
    image = props.image,
    price = props.price;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemHeader, {
    title: list.title,
    image: list.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemDescription, {
    description: list.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemPricing, {
    price: list.price
  }));
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
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ed078001dca95158f778")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMGQ5YjEzN2MyODVkNTc4NGIwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsb0JBQU9ULDBEQUFBLENBQUNXLFFBQVE7SUFBQ0MsSUFBSSxFQUFFSDtFQUFNLEdBQUMsR0FBQyxFQUFDQSxLQUFLLENBQUNJLFFBQVEsRUFBQyxHQUFXLENBQUM7QUFDL0Q7QUFFQSxTQUFTRixRQUFRQSxDQUFDRixLQUFLLEVBQUU7RUFDckIsSUFBT0ssS0FBSyxHQUErQkwsS0FBSyxDQUF6Q0ssS0FBSztJQUFFQyxXQUFXLEdBQWtCTixLQUFLLENBQWxDTSxXQUFXO0lBQUVDLEtBQUssR0FBV1AsS0FBSyxDQUFyQk8sS0FBSztJQUFFQyxLQUFLLEdBQUlSLEtBQUssQ0FBZFEsS0FBSztFQUN2QyxvQkFDSWpCLDBEQUFBLCtCQUNJQSwwREFBQSxDQUFDa0IsY0FBYztJQUFDSixLQUFLLEVBQUVLLElBQUksQ0FBQ0wsS0FBTTtJQUFDRSxLQUFLLEVBQUVHLElBQUksQ0FBQ0g7RUFBTSxDQUFFLENBQUMsZUFDeERoQiwwREFBQSxDQUFDb0IsbUJBQW1CO0lBQUNMLFdBQVcsRUFBRUksSUFBSSxDQUFDSjtFQUFZLENBQUUsQ0FBQyxlQUN0RGYsMERBQUEsQ0FBQ3FCLGVBQWU7SUFBQ0osS0FBSyxFQUFFRSxJQUFJLENBQUNGO0VBQU0sQ0FBRSxDQUNoQyxDQUFDO0FBRWxCO0FBRUEsU0FBU0MsY0FBY0EsQ0FBQ1QsS0FBSyxFQUFFO0VBQzNCLElBQU9LLEtBQUssR0FBSUwsS0FBSyxDQUFkSyxLQUFLO0VBQ1osb0JBQ0lkLDBEQUFBLDhCQUNJQSwwREFBQSxhQUFLYyxLQUFVLENBQUMsZUFDaEJkLDBEQUFBO0lBQUtzQixHQUFHLEVBQUVOLEtBQU07SUFBQ08sS0FBSyxFQUFDO0VBQU8sQ0FBQyxDQUMzQixDQUFDO0FBRWpCO0FBRUEsU0FBU0gsbUJBQW1CQSxDQUFDWCxLQUFLLEVBQUU7RUFDaEMsSUFBT00sV0FBVyxHQUFJTixLQUFLLENBQXBCTSxXQUFXO0VBQ2xCLG9CQUNJZiwwREFBQSwrQkFDSUEsMERBQUEsWUFBSWUsV0FBZSxDQUNkLENBQUM7QUFFbEI7QUFFQSxTQUFTTSxlQUFlQSxDQUFDWixLQUFLLEVBQUU7RUFDNUIsSUFBT1EsS0FBSyxHQUFJUixLQUFLLENBQWRRLEtBQUs7RUFDWixvQkFDSWpCLDBEQUFBLGlCQUFRLFFBQ0UsRUFBQ2lCLEtBQUssRUFBQyxVQUNiLGVBQUFqQiwwREFBQSxpQkFBUSxNQUFZLENBQ2hCLENBQUM7QUFFakI7QUFFQSxJQUFNWSxJQUFJLEdBQUc7RUFDVEUsS0FBSyxFQUFFLGFBQWE7RUFDcEJFLEtBQUssRUFBRSwrR0FBK0c7RUFDdEhELFdBQVcsRUFBRSxzUUFBc1E7RUFDblJFLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRFYsSUFBSSxDQUFDaUIsTUFBTSxlQUNQeEIsMERBQUEsQ0FBQ1EsR0FBRztFQUFDSSxJQUFJLEVBQUVBO0FBQUssQ0FBRSxDQUN0QixDQUFDOzs7Ozs7OztVQzNERCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIHJldHVybiA8U2hvcEl0ZW0gZGF0YT17cHJvcHN9PiB7cHJvcHMuY2hpbGRyZW59IDwvU2hvcEl0ZW0+O1xufVxuXG5mdW5jdGlvbiBTaG9wSXRlbShwcm9wcykge1xuICAgIGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlLCBwcmljZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxTaG9wSXRlbUhlYWRlciB0aXRsZT17bGlzdC50aXRsZX0gaW1hZ2U9e2xpc3QuaW1hZ2V9IC8+XG4gICAgICAgICAgICA8U2hvcEl0ZW1EZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17bGlzdC5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgIDxTaG9wSXRlbVByaWNpbmcgcHJpY2U9e2xpc3QucHJpY2V9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtSGVhZGVyKHByb3BzKSB7XG4gICAgY29uc3Qge3RpdGxlfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IHdpZHRoPSczNTBweCcvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtRGVzY3JpcHRpb24ocHJvcHMpIHtcbiAgICBjb25zdCB7ZGVzY3JpcHRpb259ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbVByaWNpbmcocHJvcHMpIHtcbiAgICBjb25zdCB7cHJpY2V9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIENlbmE6IHtwcmljZX0gesWCXG4gICAgICAgICAgICA8YnV0dG9uPkt1cCE8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKVxufVxuXG5jb25zdCBkYXRhID0ge1xuICAgIHRpdGxlOiBcIk1hY0Jvb2sgUHJvXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzAzMzgzL3BleGVscy1waG90by0zMDMzODMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vYyBpIG1vYmlsbm/Fm8SHIOKAkyBNYWNCb29rIFBybyB3eXJhxbpuaWUgcG9kbm9zaSB0dSBwb3ByemVjemvEmS4gVGVyYXogbW/FvGVzeiBqZXN6Y3plIHN6eWJjaWVqIHJlYWxpem93YcSHIHN3b2plIHBvbXlzxYJ5LiBQb21vZ8SFIENpIHcgdHltIHd5ZGFqbmUgcHJvY2Vzb3J5IGkgdWvFgmFkeSBwYW1pxJljaSwgemFhd2Fuc293YW5hIGdyYWZpa2EsIGLFgnlza2F3aWN6bmllIGR6aWHFgmFqxIVjYSBwYW1pxJnEhyBtYXNvd2EgaSBpbm5lIGRvc2tvbmHFgmUgcm96d2nEhXphbmlhLlwiLFxuICAgIHByaWNlOiA5OTk5XG59O1xuXG5yb290LnJlbmRlcihcbiAgICA8QXBwIGRhdGE9e2RhdGF9IC8+XG4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVkMDc4MDAxZGNhOTUxNThmNzc4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHAiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJTaG9wSXRlbSIsImRhdGEiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInByaWNlIiwiU2hvcEl0ZW1IZWFkZXIiLCJsaXN0IiwiU2hvcEl0ZW1EZXNjcmlwdGlvbiIsIlNob3BJdGVtUHJpY2luZyIsInNyYyIsIndpZHRoIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==