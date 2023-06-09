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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, null, props.children);
}
function ShopItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemDescription, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemPricing, null));
}
function ShopItemHeader(props) {
  var data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: data.image
  }));
}
function ShopItemDescription(props) {
  var data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, data.description));
}
function ShopItemPricing(props) {
  var data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, "Cena: ", data.price, " z\u0142", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup!"));
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
/******/ 	__webpack_require__.h = () => ("d9d7cbf3ece5c1e929be")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMWJkYzYyMzBlZTY5Y2I0YWRhMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsSUFBT0MsSUFBSSxHQUFLRCxLQUFLLENBQWRDLElBQUk7RUFDWCxvQkFBT1YsMERBQUEsQ0FBQ1ksUUFBUSxRQUFFSCxLQUFLLENBQUNJLFFBQW1CLENBQUM7QUFDaEQ7QUFFQSxTQUFTRCxRQUFRQSxDQUFDSCxLQUFLLEVBQUU7RUFDckIsb0JBQ0lULDBEQUFBLCtCQUNJQSwwREFBQSxDQUFDYyxjQUFjLE1BQUMsQ0FBQyxlQUNqQmQsMERBQUEsQ0FBQ2UsbUJBQW1CLE1BQUMsQ0FBQyxlQUN0QmYsMERBQUEsQ0FBQ2dCLGVBQWUsTUFBQyxDQUNaLENBQUM7QUFFbEI7QUFFQSxTQUFTRixjQUFjQSxDQUFDTCxLQUFLLEVBQUU7RUFDM0IsSUFBT0MsSUFBSSxHQUFJRCxLQUFLLENBQWJDLElBQUk7RUFDWCxvQkFDSVYsMERBQUEsOEJBQ0lBLDBEQUFBLGFBQUtVLElBQUksQ0FBQ08sS0FBVSxDQUFDLGVBQ3JCakIsMERBQUE7SUFBS2tCLEdBQUcsRUFBRVIsSUFBSSxDQUFDUztFQUFNLENBQUMsQ0FDbEIsQ0FBQztBQUVqQjtBQUVBLFNBQVNKLG1CQUFtQkEsQ0FBQ04sS0FBSyxFQUFFO0VBQ2hDLElBQU9DLElBQUksR0FBSUQsS0FBSyxDQUFiQyxJQUFJO0VBQ1gsb0JBQ0lWLDBEQUFBLCtCQUNJQSwwREFBQSxZQUFJVSxJQUFJLENBQUNVLFdBQWUsQ0FDbkIsQ0FBQztBQUVsQjtBQUVBLFNBQVNKLGVBQWVBLENBQUNQLEtBQUssRUFBRTtFQUM1QixJQUFPQyxJQUFJLEdBQUlELEtBQUssQ0FBYkMsSUFBSTtFQUNYLG9CQUNJViwwREFBQSxpQkFBUSxRQUNFLEVBQUNVLElBQUksQ0FBQ1csS0FBSyxFQUFDLFVBQ2xCLGVBQUFyQiwwREFBQSxpQkFBUSxNQUFZLENBQ2hCLENBQUM7QUFFakI7QUFFQSxJQUFNVSxJQUFJLEdBQUc7RUFDVE8sS0FBSyxFQUFFLGFBQWE7RUFDcEJFLEtBQUssRUFBRSx3QkFBd0I7RUFDL0JDLFdBQVcsRUFBRSxzUUFBc1E7RUFDblJDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRGQsSUFBSSxDQUFDZSxNQUFNLGVBQUN0QiwwREFBQSxDQUFDUSxHQUFHO0VBQUNFLElBQUksRUFBRUE7QUFBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUN6RC9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX0tvbXBvenljamFfaV9wcm9wc19jaGlsZHJlbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuZnVuY3Rpb24gQXBwKHByb3BzKSB7XG4gICAgY29uc3Qge2RhdGEgfSA9IHByb3BzO1xuICAgIHJldHVybiA8U2hvcEl0ZW0+e3Byb3BzLmNoaWxkcmVufTwvU2hvcEl0ZW0+O1xufVxuXG5mdW5jdGlvbiBTaG9wSXRlbShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPFNob3BJdGVtSGVhZGVyLz5cbiAgICAgICAgICAgIDxTaG9wSXRlbURlc2NyaXB0aW9uLz5cbiAgICAgICAgICAgIDxTaG9wSXRlbVByaWNpbmcvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbUhlYWRlcihwcm9wcykge1xuICAgIGNvbnN0IHtkYXRhfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDE+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlfS8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1EZXNjcmlwdGlvbihwcm9wcykge1xuICAgIGNvbnN0IHtkYXRhfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbVByaWNpbmcocHJvcHMpIHtcbiAgICBjb25zdCB7ZGF0YX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgQ2VuYToge2RhdGEucHJpY2V9IHrFglxuICAgICAgICAgICAgPGJ1dHRvbj5LdXAhPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn1cblxuY29uc3QgZGF0YSA9IHtcbiAgICB0aXRsZTogXCJNYWNCb29rIFByb1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vYml0Lmx5LzJFRXRkdURcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2MgaSBtb2JpbG5vxZvEhyDigJMgTWFjQm9vayBQcm8gd3lyYcW6bmllIHBvZG5vc2kgdHUgcG9wcnplY3prxJkuIFRlcmF6IG1vxbxlc3ogamVzemN6ZSBzenliY2llaiByZWFsaXpvd2HEhyBzd29qZSBwb215c8WCeS4gUG9tb2fEhSBDaSB3IHR5bSB3eWRham5lIHByb2Nlc29yeSBpIHVrxYJhZHkgcGFtacSZY2ksIHphYXdhbnNvd2FuYSBncmFmaWthLCBixYJ5c2thd2ljem5pZSBkemlhxYJhasSFY2EgcGFtacSZxIcgbWFzb3dhIGkgaW5uZSBkb3Nrb25hxYJlIHJvendpxIV6YW5pYS5cIixcbiAgICBwcmljZTogOTk5OVxufTtcblxucm9vdC5yZW5kZXIoPEFwcCBkYXRhPXtkYXRhfS8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ5ZDdjYmYzZWNlNWMxZTkyOWJlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHAiLCJwcm9wcyIsImRhdGEiLCJjcmVhdGVFbGVtZW50IiwiU2hvcEl0ZW0iLCJjaGlsZHJlbiIsIlNob3BJdGVtSGVhZGVyIiwiU2hvcEl0ZW1EZXNjcmlwdGlvbiIsIlNob3BJdGVtUHJpY2luZyIsInRpdGxlIiwic3JjIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==