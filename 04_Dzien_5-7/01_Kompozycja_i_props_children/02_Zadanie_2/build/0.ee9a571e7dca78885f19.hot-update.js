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
function ShopItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShoptItemHeader, null, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemDescription, null, props.description), "a", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemPricing, null));
}
function ShoptItemHeader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.children.title);
  // <img src={props.img}/>
}

function ShopItemDescription(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.children.desc));
}
function ShopItemPricing(data) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, "Cena: ", data.price, " z\u0142", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup!"));
}
var data = {
  title: "MacBook Pro",
  image: "https://bit.ly/2EEtduD",
  description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
  price: 9999
};
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, {
  props: data
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("67f5f429c8631f4b5dc8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZTlhNTcxZTdkY2E3ODg4NWYxOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxRQUFRQSxDQUFDQyxLQUFLLEVBQUU7RUFDckIsb0JBQU9ULDBEQUFBLCtCQUNIQSwwREFBQSxDQUFDVyxlQUFlLFFBQ1hGLEtBQUssQ0FBQ0csS0FDTSxDQUFDLGVBQ2xCWiwwREFBQSxDQUFDYSxtQkFBbUIsUUFDZkosS0FBSyxDQUFDSyxXQUNVLENBQUMsS0FDdEIsZUFBQWQsMERBQUEsQ0FBQ2UsZUFBZSxNQUFrQixDQUM3QixDQUFDO0FBQ2Q7QUFFQSxTQUFTSixlQUFlQSxDQUFDRixLQUFLLEVBQUU7RUFDNUIsb0JBQU9ULDBEQUFBLGFBQUtTLEtBQUssQ0FBQ08sUUFBUSxDQUFDSixLQUFVLENBQUM7RUFDdEM7QUFDSjs7QUFFQSxTQUFTQyxtQkFBbUJBLENBQUNKLEtBQUssRUFBRTtFQUNoQyxvQkFBT1QsMERBQUEsK0JBQ0hBLDBEQUFBLFlBQUlTLEtBQUssQ0FBQ08sUUFBUSxDQUFDQyxJQUFRLENBQ3RCLENBQUM7QUFDZDtBQUVBLFNBQVNGLGVBQWVBLENBQUNHLElBQUksRUFBRTtFQUMzQixvQkFBT2xCLDBEQUFBLGlCQUFRLFFBQ0wsRUFBQ2tCLElBQUksQ0FBQ0MsS0FBSyxFQUFDLFVBQ2xCLGVBQUFuQiwwREFBQSxpQkFBUSxNQUFZLENBQ2hCLENBQUM7QUFDYjtBQUVBLElBQU1rQixJQUFJLEdBQUc7RUFDVE4sS0FBSyxFQUFFLGFBQWE7RUFDcEJRLEtBQUssRUFBRSx3QkFBd0I7RUFDL0JOLFdBQVcsRUFBRSxzUUFBc1E7RUFDblJLLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRFosSUFBSSxDQUFDYyxNQUFNLGVBQUNyQiwwREFBQSxDQUFDUSxRQUFRO0VBQUNDLEtBQUssRUFBSVM7QUFBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUMzQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX0tvbXBvenljamFfaV9wcm9wc19jaGlsZHJlbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuZnVuY3Rpb24gU2hvcEl0ZW0ocHJvcHMpIHtcbiAgICByZXR1cm4gPHNlY3Rpb24+XG4gICAgICAgIDxTaG9wdEl0ZW1IZWFkZXI+XG4gICAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgIDwvU2hvcHRJdGVtSGVhZGVyPlxuICAgICAgICA8U2hvcEl0ZW1EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9TaG9wSXRlbURlc2NyaXB0aW9uPmFcbiAgICAgICAgPFNob3BJdGVtUHJpY2luZz48L1Nob3BJdGVtUHJpY2luZz5cbiAgICA8L3NlY3Rpb24+XG59XG5cbmZ1bmN0aW9uIFNob3B0SXRlbUhlYWRlcihwcm9wcykge1xuICAgIHJldHVybiA8aDE+e3Byb3BzLmNoaWxkcmVuLnRpdGxlfTwvaDE+XG4gICAgLy8gPGltZyBzcmM9e3Byb3BzLmltZ30vPlxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbURlc2NyaXB0aW9uKHByb3BzKSB7XG4gICAgcmV0dXJuIDxhcnRpY2xlPlxuICAgICAgICA8cD57cHJvcHMuY2hpbGRyZW4uZGVzY308L3A+XG4gICAgPC9hcnRpY2xlPlxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbVByaWNpbmcoZGF0YSkge1xuICAgIHJldHVybiA8Zm9vdGVyPlxuICAgICAgICBDZW5hOiB7ZGF0YS5wcmljZX0gesWCXG4gICAgICAgIDxidXR0b24+S3VwITwvYnV0dG9uPlxuICAgIDwvZm9vdGVyPjtcbn1cblxuY29uc3QgZGF0YSA9IHtcbiAgICB0aXRsZTogXCJNYWNCb29rIFByb1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vYml0Lmx5LzJFRXRkdURcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2MgaSBtb2JpbG5vxZvEhyDigJMgTWFjQm9vayBQcm8gd3lyYcW6bmllIHBvZG5vc2kgdHUgcG9wcnplY3prxJkuIFRlcmF6IG1vxbxlc3ogamVzemN6ZSBzenliY2llaiByZWFsaXpvd2HEhyBzd29qZSBwb215c8WCeS4gUG9tb2fEhSBDaSB3IHR5bSB3eWRham5lIHByb2Nlc29yeSBpIHVrxYJhZHkgcGFtacSZY2ksIHphYXdhbnNvd2FuYSBncmFmaWthLCBixYJ5c2thd2ljem5pZSBkemlhxYJhasSFY2EgcGFtacSZxIcgbWFzb3dhIGkgaW5uZSBkb3Nrb25hxYJlIHJvendpxIV6YW5pYS5cIixcbiAgICBwcmljZTogOTk5OVxufTtcblxucm9vdC5yZW5kZXIoPFNob3BJdGVtIHByb3BzID0ge2RhdGF9Lz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjdmNWY0MjljODYzMWY0YjVkYzhcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIlNob3BJdGVtIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiU2hvcHRJdGVtSGVhZGVyIiwidGl0bGUiLCJTaG9wSXRlbURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJTaG9wSXRlbVByaWNpbmciLCJjaGlsZHJlbiIsImRlc2MiLCJkYXRhIiwicHJpY2UiLCJpbWFnZSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=