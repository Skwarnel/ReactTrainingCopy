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
  var product = props.product;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, {
    product: product
  });
}
function ShopItem(props) {
  var product = props.product;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemHeader, {
    title: product.title,
    image: product.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemDescription, {
    desc: product.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemPricing, {
    price: product.price
  }));
}
function ShopItemHeader(props) {
  var title = props.title,
    image = props.image;
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
  product: data
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("525b70d8eb2d8c03776a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMjRhNmMzYjY0MDE1YjA3ZDk5NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsSUFBT0MsT0FBTyxHQUFJRCxLQUFLLENBQWhCQyxPQUFPO0VBQ2Qsb0JBQU9WLDBEQUFBLENBQUNZLFFBQVE7SUFBQ0YsT0FBTyxFQUFFQTtFQUFRLENBQUUsQ0FBQztBQUN6QztBQUVBLFNBQVNFLFFBQVFBLENBQUNILEtBQUssRUFBRTtFQUNyQixJQUFPQyxPQUFPLEdBQUlELEtBQUssQ0FBaEJDLE9BQU87RUFDZCxvQkFDSVYsMERBQUEsK0JBQ0lBLDBEQUFBLENBQUNhLGNBQWM7SUFBQ0MsS0FBSyxFQUFFSixPQUFPLENBQUNJLEtBQU07SUFBQ0MsS0FBSyxFQUFFTCxPQUFPLENBQUNLO0VBQU0sQ0FBRSxDQUFDLGVBQzlEZiwwREFBQSxDQUFDZ0IsbUJBQW1CO0lBQUNDLElBQUksRUFBRVAsT0FBTyxDQUFDUTtFQUFZLENBQUUsQ0FBQyxlQUNsRGxCLDBEQUFBLENBQUNtQixlQUFlO0lBQUNDLEtBQUssRUFBRVYsT0FBTyxDQUFDVTtFQUFNLENBQUUsQ0FDbkMsQ0FBQztBQUVsQjtBQUVBLFNBQVNQLGNBQWNBLENBQUNKLEtBQUssRUFBRTtFQUMzQixJQUFPSyxLQUFLLEdBQVdMLEtBQUssQ0FBckJLLEtBQUs7SUFBRUMsS0FBSyxHQUFJTixLQUFLLENBQWRNLEtBQUs7RUFDbkIsb0JBQ0lmLDBEQUFBLDhCQUNJQSwwREFBQSxhQUFLYyxLQUFVLENBQUMsZUFDaEJkLDBEQUFBO0lBQUtxQixHQUFHLEVBQUVOLEtBQU07SUFBQ08sS0FBSyxFQUFDO0VBQU8sQ0FBQyxDQUMzQixDQUFDO0FBRWpCO0FBRUEsU0FBU04sbUJBQW1CQSxDQUFDUCxLQUFLLEVBQUU7RUFDaEMsSUFBT1MsV0FBVyxHQUFJVCxLQUFLLENBQXBCUyxXQUFXO0VBQ2xCLG9CQUNJbEIsMERBQUEsK0JBQ0lBLDBEQUFBLFlBQUlrQixXQUFlLENBQ2QsQ0FBQztBQUVsQjtBQUVBLFNBQVNDLGVBQWVBLENBQUNWLEtBQUssRUFBRTtFQUM1QixJQUFPVyxLQUFLLEdBQUlYLEtBQUssQ0FBZFcsS0FBSztFQUNaLG9CQUNJcEIsMERBQUEsaUJBQVEsUUFDRSxFQUFDb0IsS0FBSyxFQUFDLFVBQ2IsZUFBQXBCLDBEQUFBLGlCQUFRLE1BQVksQ0FDaEIsQ0FBQztBQUVqQjtBQUVBLElBQU11QixJQUFJLEdBQUc7RUFDVFQsS0FBSyxFQUFFLGFBQWE7RUFDcEJDLEtBQUssRUFBRSwrR0FBK0c7RUFDdEhHLFdBQVcsRUFBRSxzUUFBc1E7RUFDblJFLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRGIsSUFBSSxDQUFDaUIsTUFBTSxlQUNQeEIsMERBQUEsQ0FBQ1EsR0FBRztFQUFDRSxPQUFPLEVBQUVhO0FBQUssQ0FBRSxDQUN6QixDQUFDOzs7Ozs7OztVQzVERCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIGNvbnN0IHtwcm9kdWN0fSA9IHByb3BzO1xuICAgIHJldHVybiA8U2hvcEl0ZW0gcHJvZHVjdD17cHJvZHVjdH0gLz47XG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtKHByb3BzKSB7XG4gICAgY29uc3Qge3Byb2R1Y3R9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8U2hvcEl0ZW1IZWFkZXIgdGl0bGU9e3Byb2R1Y3QudGl0bGV9IGltYWdlPXtwcm9kdWN0LmltYWdlfSAvPlxuICAgICAgICAgICAgPFNob3BJdGVtRGVzY3JpcHRpb24gZGVzYz17cHJvZHVjdC5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgIDxTaG9wSXRlbVByaWNpbmcgcHJpY2U9e3Byb2R1Y3QucHJpY2V9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtSGVhZGVyKHByb3BzKSB7XG4gICAgY29uc3Qge3RpdGxlLCBpbWFnZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSB3aWR0aD0nMzUwcHgnLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbURlc2NyaXB0aW9uKHByb3BzKSB7XG4gICAgY29uc3Qge2Rlc2NyaXB0aW9ufSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1QcmljaW5nKHByb3BzKSB7XG4gICAgY29uc3Qge3ByaWNlfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICBDZW5hOiB7cHJpY2V9IHrFglxuICAgICAgICAgICAgPGJ1dHRvbj5LdXAhPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn1cblxuY29uc3QgZGF0YSA9IHtcbiAgICB0aXRsZTogXCJNYWNCb29rIFByb1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzMwMzM4My9wZXhlbHMtcGhvdG8tMzAzMzgzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2MgaSBtb2JpbG5vxZvEhyDigJMgTWFjQm9vayBQcm8gd3lyYcW6bmllIHBvZG5vc2kgdHUgcG9wcnplY3prxJkuIFRlcmF6IG1vxbxlc3ogamVzemN6ZSBzenliY2llaiByZWFsaXpvd2HEhyBzd29qZSBwb215c8WCeS4gUG9tb2fEhSBDaSB3IHR5bSB3eWRham5lIHByb2Nlc29yeSBpIHVrxYJhZHkgcGFtacSZY2ksIHphYXdhbnNvd2FuYSBncmFmaWthLCBixYJ5c2thd2ljem5pZSBkemlhxYJhasSFY2EgcGFtacSZxIcgbWFzb3dhIGkgaW5uZSBkb3Nrb25hxYJlIHJvendpxIV6YW5pYS5cIixcbiAgICBwcmljZTogOTk5OVxufTtcblxucm9vdC5yZW5kZXIoXG4gICAgPEFwcCBwcm9kdWN0PXtkYXRhfSAvPlxuKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MjViNzBkOGViMmQ4YzAzNzc2YVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwicHJvcHMiLCJwcm9kdWN0IiwiY3JlYXRlRWxlbWVudCIsIlNob3BJdGVtIiwiU2hvcEl0ZW1IZWFkZXIiLCJ0aXRsZSIsImltYWdlIiwiU2hvcEl0ZW1EZXNjcmlwdGlvbiIsImRlc2MiLCJkZXNjcmlwdGlvbiIsIlNob3BJdGVtUHJpY2luZyIsInByaWNlIiwic3JjIiwid2lkdGgiLCJkYXRhIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==