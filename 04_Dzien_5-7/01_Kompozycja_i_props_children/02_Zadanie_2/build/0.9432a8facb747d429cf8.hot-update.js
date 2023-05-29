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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, null, " ", props.children, " ");
}
function ShopItem(props) {
  var list = props.list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, list.title)

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
/******/ 	__webpack_require__.h = () => ("d75a8b2dfe9f53b717f9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45NDMyYThmYWNiNzQ3ZDQyOWNmOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsb0JBQU9ULDBEQUFBLENBQUNXLFFBQVEsUUFBQyxHQUFDLEVBQUNGLEtBQUssQ0FBQ0csUUFBUSxFQUFDLEdBQVcsQ0FBQztBQUNsRDtBQUVBLFNBQVNELFFBQVFBLENBQUNGLEtBQUssRUFBRTtFQUNyQixJQUFPSSxJQUFJLEdBQUlKLEtBQUssQ0FBYkksSUFBSTtFQUNYLG9CQUNJYiwwREFBQSxZQUFJYSxJQUFJLENBQUNDLEtBQVM7O0VBRWxCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFBQTtBQUVSOztBQUVBLFNBQVNDLGNBQWNBLENBQUNOLEtBQUssRUFBRTtFQUMzQixJQUFPSyxLQUFLLEdBQUlMLEtBQUssQ0FBZEssS0FBSztFQUNaLG9CQUNJZCwwREFBQSw4QkFDSUEsMERBQUEsYUFBS2MsS0FBVSxDQUFDLGVBQ2hCZCwwREFBQTtJQUFLZ0IsR0FBRyxFQUFFQyxLQUFNO0lBQUNDLEtBQUssRUFBQztFQUFPLENBQUMsQ0FDM0IsQ0FBQztBQUVqQjtBQUVBLFNBQVNDLG1CQUFtQkEsQ0FBQ1YsS0FBSyxFQUFFO0VBQ2hDLElBQU9XLFdBQVcsR0FBSVgsS0FBSyxDQUFwQlcsV0FBVztFQUNsQixvQkFDSXBCLDBEQUFBLCtCQUNJQSwwREFBQSxZQUFJb0IsV0FBZSxDQUNkLENBQUM7QUFFbEI7QUFFQSxTQUFTQyxlQUFlQSxDQUFDWixLQUFLLEVBQUU7RUFDNUIsSUFBT2EsS0FBSyxHQUFJYixLQUFLLENBQWRhLEtBQUs7RUFDWixvQkFDSXRCLDBEQUFBLGlCQUFRLFFBQ0UsRUFBQ3NCLEtBQUssRUFBQyxVQUNiLGVBQUF0QiwwREFBQSxpQkFBUSxNQUFZLENBQ2hCLENBQUM7QUFFakI7QUFFQSxJQUFNdUIsSUFBSSxHQUFHO0VBQ1RULEtBQUssRUFBRSxhQUFhO0VBQ3BCRyxLQUFLLEVBQUUsK0dBQStHO0VBQ3RIRyxXQUFXLEVBQUUsc1FBQXNRO0VBQ25SRSxLQUFLLEVBQUU7QUFDWCxDQUFDO0FBRURmLElBQUksQ0FBQ2lCLE1BQU0sZUFDUHhCLDBEQUFBLENBQUNRLEdBQUc7RUFBQ2UsSUFBSSxFQUFFQTtBQUFLLEdBQUMsR0FBQyxFQUFDQSxJQUFJLENBQUNULEtBQUssRUFBQyxHQUFNLENBQ3hDLENBQUM7Ozs7Ozs7O1VDN0REIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX0tvbXBvenljamFfaV9wcm9wc19jaGlsZHJlbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuZnVuY3Rpb24gQXBwKHByb3BzKSB7XG4gICAgcmV0dXJuIDxTaG9wSXRlbT4ge3Byb3BzLmNoaWxkcmVufSA8L1Nob3BJdGVtPjtcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW0ocHJvcHMpIHtcbiAgICBjb25zdCB7bGlzdH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8cD57bGlzdC50aXRsZX08L3A+XG5cbiAgICAgICAgLy8gPHNlY3Rpb24+XG4gICAgICAgIC8vICAgICA8U2hvcEl0ZW1IZWFkZXIgdGl0bGU9e2xpc3QudGl0bGV9IGltYWdlPXtsaXN0LmltYWdlfSAvPlxuICAgICAgICAvLyAgICAgPFNob3BJdGVtRGVzY3JpcHRpb24gZGVzY3JpcHRpb249e2xpc3QuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIC8vICAgICA8U2hvcEl0ZW1QcmljaW5nIHByaWNlPXtsaXN0LnByaWNlfSAvPlxuICAgICAgICAvLyA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbUhlYWRlcihwcm9wcykge1xuICAgIGNvbnN0IHt0aXRsZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSB3aWR0aD0nMzUwcHgnLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbURlc2NyaXB0aW9uKHByb3BzKSB7XG4gICAgY29uc3Qge2Rlc2NyaXB0aW9ufSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1QcmljaW5nKHByb3BzKSB7XG4gICAgY29uc3Qge3ByaWNlfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICBDZW5hOiB7cHJpY2V9IHrFglxuICAgICAgICAgICAgPGJ1dHRvbj5LdXAhPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn1cblxuY29uc3QgZGF0YSA9IHtcbiAgICB0aXRsZTogXCJNYWNCb29rIFByb1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzMwMzM4My9wZXhlbHMtcGhvdG8tMzAzMzgzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2MgaSBtb2JpbG5vxZvEhyDigJMgTWFjQm9vayBQcm8gd3lyYcW6bmllIHBvZG5vc2kgdHUgcG9wcnplY3prxJkuIFRlcmF6IG1vxbxlc3ogamVzemN6ZSBzenliY2llaiByZWFsaXpvd2HEhyBzd29qZSBwb215c8WCeS4gUG9tb2fEhSBDaSB3IHR5bSB3eWRham5lIHByb2Nlc29yeSBpIHVrxYJhZHkgcGFtacSZY2ksIHphYXdhbnNvd2FuYSBncmFmaWthLCBixYJ5c2thd2ljem5pZSBkemlhxYJhasSFY2EgcGFtacSZxIcgbWFzb3dhIGkgaW5uZSBkb3Nrb25hxYJlIHJvendpxIV6YW5pYS5cIixcbiAgICBwcmljZTogOTk5OVxufTtcblxucm9vdC5yZW5kZXIoXG4gICAgPEFwcCBkYXRhPXtkYXRhfT4ge2RhdGEudGl0bGV9IDwvQXBwPlxuKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ3NWE4YjJkZmU5ZjUzYjcxN2Y5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHAiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJTaG9wSXRlbSIsImNoaWxkcmVuIiwibGlzdCIsInRpdGxlIiwiU2hvcEl0ZW1IZWFkZXIiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiU2hvcEl0ZW1EZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiU2hvcEl0ZW1QcmljaW5nIiwicHJpY2UiLCJkYXRhIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==