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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Cena: ", price, " z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup!"));
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
/******/ 	__webpack_require__.h = () => ("438d492dd5b6363edaf6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MjViNzBkOGViMmQ4YzAzNzc2YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsSUFBT0MsT0FBTyxHQUFJRCxLQUFLLENBQWhCQyxPQUFPO0VBQ2Qsb0JBQU9WLDBEQUFBLENBQUNZLFFBQVE7SUFBQ0YsT0FBTyxFQUFFQTtFQUFRLENBQUUsQ0FBQztBQUN6QztBQUVBLFNBQVNFLFFBQVFBLENBQUNILEtBQUssRUFBRTtFQUNyQixJQUFPQyxPQUFPLEdBQUlELEtBQUssQ0FBaEJDLE9BQU87RUFDZCxvQkFDSVYsMERBQUEsK0JBQ0lBLDBEQUFBLENBQUNhLGNBQWM7SUFBQ0MsS0FBSyxFQUFFSixPQUFPLENBQUNJLEtBQU07SUFBQ0MsS0FBSyxFQUFFTCxPQUFPLENBQUNLO0VBQU0sQ0FBRSxDQUFDLGVBQzlEZiwwREFBQSxDQUFDZ0IsbUJBQW1CO0lBQUNDLElBQUksRUFBRVAsT0FBTyxDQUFDUTtFQUFZLENBQUUsQ0FBQyxlQUNsRGxCLDBEQUFBLENBQUNtQixlQUFlO0lBQUNDLEtBQUssRUFBRVYsT0FBTyxDQUFDVTtFQUFNLENBQUUsQ0FDbkMsQ0FBQztBQUVsQjtBQUVBLFNBQVNQLGNBQWNBLENBQUNKLEtBQUssRUFBRTtFQUMzQixJQUFPSyxLQUFLLEdBQVdMLEtBQUssQ0FBckJLLEtBQUs7SUFBRUMsS0FBSyxHQUFJTixLQUFLLENBQWRNLEtBQUs7RUFDbkIsb0JBQ0lmLDBEQUFBLDhCQUNJQSwwREFBQSxhQUFLYyxLQUFVLENBQUMsZUFDaEJkLDBEQUFBO0lBQUtxQixHQUFHLEVBQUVOLEtBQU07SUFBQ08sS0FBSyxFQUFDO0VBQU8sQ0FBQyxDQUMzQixDQUFDO0FBRWpCO0FBRUEsU0FBU04sbUJBQW1CQSxDQUFDUCxLQUFLLEVBQUU7RUFDaEMsSUFBT1MsV0FBVyxHQUFJVCxLQUFLLENBQXBCUyxXQUFXO0VBQ2xCLG9CQUNJbEIsMERBQUEsK0JBQ0lBLDBEQUFBLFlBQUlrQixXQUFlLENBQ2QsQ0FBQztBQUVsQjtBQUVBLFNBQVNDLGVBQWVBLENBQUNWLEtBQUssRUFBRTtFQUM1QixJQUFPVyxLQUFLLEdBQUlYLEtBQUssQ0FBZFcsS0FBSztFQUNaLG9CQUNJcEIsMERBQUEsOEJBQ0lBLDBEQUFBLFlBQUcsUUFBTSxFQUFDb0IsS0FBSyxFQUFDLFVBQU0sQ0FBQyxlQUN2QnBCLDBEQUFBLGlCQUFRLE1BQVksQ0FDaEIsQ0FBQztBQUVqQjtBQUVBLElBQU11QixJQUFJLEdBQUc7RUFDVFQsS0FBSyxFQUFFLGFBQWE7RUFDcEJDLEtBQUssRUFBRSwrR0FBK0c7RUFDdEhHLFdBQVcsRUFBRSxzUUFBc1E7RUFDblJFLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRGIsSUFBSSxDQUFDaUIsTUFBTSxlQUNQeEIsMERBQUEsQ0FBQ1EsR0FBRztFQUFDRSxPQUFPLEVBQUVhO0FBQUssQ0FBRSxDQUN6QixDQUFDOzs7Ozs7OztVQzVERCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIGNvbnN0IHtwcm9kdWN0fSA9IHByb3BzO1xuICAgIHJldHVybiA8U2hvcEl0ZW0gcHJvZHVjdD17cHJvZHVjdH0gLz47XG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtKHByb3BzKSB7XG4gICAgY29uc3Qge3Byb2R1Y3R9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8U2hvcEl0ZW1IZWFkZXIgdGl0bGU9e3Byb2R1Y3QudGl0bGV9IGltYWdlPXtwcm9kdWN0LmltYWdlfSAvPlxuICAgICAgICAgICAgPFNob3BJdGVtRGVzY3JpcHRpb24gZGVzYz17cHJvZHVjdC5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgIDxTaG9wSXRlbVByaWNpbmcgcHJpY2U9e3Byb2R1Y3QucHJpY2V9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtSGVhZGVyKHByb3BzKSB7XG4gICAgY29uc3Qge3RpdGxlLCBpbWFnZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSB3aWR0aD0nMzUwcHgnLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbURlc2NyaXB0aW9uKHByb3BzKSB7XG4gICAgY29uc3Qge2Rlc2NyaXB0aW9ufSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1QcmljaW5nKHByb3BzKSB7XG4gICAgY29uc3Qge3ByaWNlfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8cD5DZW5hOiB7cHJpY2V9IHrFgjwvcD5cbiAgICAgICAgICAgIDxidXR0b24+S3VwITwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApXG59XG5cbmNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGU6IFwiTWFjQm9vayBQcm9cIixcbiAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zMDMzODMvcGV4ZWxzLXBob3RvLTMwMzM4My5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0xXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9jIGkgbW9iaWxub8WbxIcg4oCTIE1hY0Jvb2sgUHJvIHd5cmHFum5pZSBwb2Rub3NpIHR1IHBvcHJ6ZWN6a8SZLiBUZXJheiBtb8W8ZXN6IGplc3pjemUgc3p5YmNpZWogcmVhbGl6b3dhxIcgc3dvamUgcG9teXPFgnkuIFBvbW9nxIUgQ2kgdyB0eW0gd3lkYWpuZSBwcm9jZXNvcnkgaSB1a8WCYWR5IHBhbWnEmWNpLCB6YWF3YW5zb3dhbmEgZ3JhZmlrYSwgYsWCeXNrYXdpY3puaWUgZHppYcWCYWrEhWNhIHBhbWnEmcSHIG1hc293YSBpIGlubmUgZG9za29uYcWCZSByb3p3acSFemFuaWEuXCIsXG4gICAgcHJpY2U6IDk5OTlcbn07XG5cbnJvb3QucmVuZGVyKFxuICAgIDxBcHAgcHJvZHVjdD17ZGF0YX0gLz5cbik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDM4ZDQ5MmRkNWI2MzYzZWRhZjZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsInByb3BzIiwicHJvZHVjdCIsImNyZWF0ZUVsZW1lbnQiLCJTaG9wSXRlbSIsIlNob3BJdGVtSGVhZGVyIiwidGl0bGUiLCJpbWFnZSIsIlNob3BJdGVtRGVzY3JpcHRpb24iLCJkZXNjIiwiZGVzY3JpcHRpb24iLCJTaG9wSXRlbVByaWNpbmciLCJwcmljZSIsInNyYyIsIndpZHRoIiwiZGF0YSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=