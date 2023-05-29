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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemHeader, {
    list: list
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemDescription, {
    list: list
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemPricing, {
    list: list
  }));
}
function ShopItemHeader(props) {
  var list = props.list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, list.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: list.image,
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
/******/ 	__webpack_require__.h = () => ("fd3791494e14c1af23c8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iY2I5NjZmZmY1MmRlNDkwZTgyMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsb0JBQU9ULDBEQUFBLENBQUNXLFFBQVE7SUFBQ0MsSUFBSSxFQUFFSDtFQUFNLENBQUMsQ0FBQztBQUNuQztBQUVBLFNBQVNFLFFBQVFBLENBQUNGLEtBQUssRUFBRTtFQUNyQixJQUFPSSxJQUFJLEdBQUlKLEtBQUssQ0FBYkksSUFBSTtFQUNYLG9CQUNJYiwwREFBQSwrQkFDSUEsMERBQUEsQ0FBQ2MsY0FBYztJQUFDRCxJQUFJLEVBQUVBO0VBQUssQ0FBRSxDQUFDLGVBQzlCYiwwREFBQSxDQUFDZSxtQkFBbUI7SUFBQ0YsSUFBSSxFQUFFQTtFQUFLLENBQUUsQ0FBQyxlQUNuQ2IsMERBQUEsQ0FBQ2dCLGVBQWU7SUFBQ0gsSUFBSSxFQUFFQTtFQUFLLENBQUUsQ0FDekIsQ0FBQztBQUVsQjtBQUVBLFNBQVNDLGNBQWNBLENBQUNMLEtBQUssRUFBRTtFQUMzQixJQUFPSSxJQUFJLEdBQUlKLEtBQUssQ0FBYkksSUFBSTtFQUNYLG9CQUNJYiwwREFBQSw4QkFDSUEsMERBQUEsYUFBS2EsSUFBSSxDQUFDSSxLQUFVLENBQUMsZUFDckJqQiwwREFBQTtJQUFLa0IsR0FBRyxFQUFFTCxJQUFJLENBQUNNLEtBQU07SUFBQ0MsS0FBSyxFQUFDO0VBQU8sQ0FBQyxDQUNoQyxDQUFDO0FBRWpCO0FBRUEsU0FBU0wsbUJBQW1CQSxDQUFDTixLQUFLLEVBQUU7RUFDaEMsSUFBT1ksV0FBVyxHQUFJWixLQUFLLENBQXBCWSxXQUFXO0VBQ2xCLG9CQUNJckIsMERBQUEsK0JBQ0lBLDBEQUFBLFlBQUlxQixXQUFlLENBQ2QsQ0FBQztBQUVsQjtBQUVBLFNBQVNMLGVBQWVBLENBQUNQLEtBQUssRUFBRTtFQUM1QixJQUFPYSxLQUFLLEdBQUliLEtBQUssQ0FBZGEsS0FBSztFQUNaLG9CQUNJdEIsMERBQUEsaUJBQVEsUUFDRSxFQUFDc0IsS0FBSyxFQUFDLFVBQ2IsZUFBQXRCLDBEQUFBLGlCQUFRLE1BQVksQ0FDaEIsQ0FBQztBQUVqQjtBQUVBLElBQU1ZLElBQUksR0FBRztFQUNUSyxLQUFLLEVBQUUsYUFBYTtFQUNwQkUsS0FBSyxFQUFFLCtHQUErRztFQUN0SEUsV0FBVyxFQUFFLHNRQUFzUTtFQUNuUkMsS0FBSyxFQUFFO0FBQ1gsQ0FBQztBQUVEZixJQUFJLENBQUNnQixNQUFNLGVBQ1B2QiwwREFBQSxDQUFDUSxHQUFHO0VBQUNJLElBQUksRUFBRUE7QUFBSyxDQUFDLENBQ3JCLENBQUM7Ozs7Ozs7O1VDM0REIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX0tvbXBvenljamFfaV9wcm9wc19jaGlsZHJlbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuZnVuY3Rpb24gQXBwKHByb3BzKSB7XG4gICAgcmV0dXJuIDxTaG9wSXRlbSBkYXRhPXtwcm9wc30vPjtcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW0ocHJvcHMpIHtcbiAgICBjb25zdCB7bGlzdH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxTaG9wSXRlbUhlYWRlciBsaXN0PXtsaXN0fSAvPlxuICAgICAgICAgICAgPFNob3BJdGVtRGVzY3JpcHRpb24gbGlzdD17bGlzdH0gLz5cbiAgICAgICAgICAgIDxTaG9wSXRlbVByaWNpbmcgbGlzdD17bGlzdH0gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1IZWFkZXIocHJvcHMpIHtcbiAgICBjb25zdCB7bGlzdH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPntsaXN0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8aW1nIHNyYz17bGlzdC5pbWFnZX0gd2lkdGg9JzM1MHB4Jy8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1EZXNjcmlwdGlvbihwcm9wcykge1xuICAgIGNvbnN0IHtkZXNjcmlwdGlvbn0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtUHJpY2luZyhwcm9wcykge1xuICAgIGNvbnN0IHtwcmljZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgQ2VuYToge3ByaWNlfSB6xYJcbiAgICAgICAgICAgIDxidXR0b24+S3VwITwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApXG59XG5cbmNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGU6IFwiTWFjQm9vayBQcm9cIixcbiAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zMDMzODMvcGV4ZWxzLXBob3RvLTMwMzM4My5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0xXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9jIGkgbW9iaWxub8WbxIcg4oCTIE1hY0Jvb2sgUHJvIHd5cmHFum5pZSBwb2Rub3NpIHR1IHBvcHJ6ZWN6a8SZLiBUZXJheiBtb8W8ZXN6IGplc3pjemUgc3p5YmNpZWogcmVhbGl6b3dhxIcgc3dvamUgcG9teXPFgnkuIFBvbW9nxIUgQ2kgdyB0eW0gd3lkYWpuZSBwcm9jZXNvcnkgaSB1a8WCYWR5IHBhbWnEmWNpLCB6YWF3YW5zb3dhbmEgZ3JhZmlrYSwgYsWCeXNrYXdpY3puaWUgZHppYcWCYWrEhWNhIHBhbWnEmcSHIG1hc293YSBpIGlubmUgZG9za29uYcWCZSByb3p3acSFemFuaWEuXCIsXG4gICAgcHJpY2U6IDk5OTlcbn07XG5cbnJvb3QucmVuZGVyKFxuICAgIDxBcHAgZGF0YT17ZGF0YX0vPlxuKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZkMzc5MTQ5NGUxNGMxYWYyM2M4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHAiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJTaG9wSXRlbSIsImRhdGEiLCJsaXN0IiwiU2hvcEl0ZW1IZWFkZXIiLCJTaG9wSXRlbURlc2NyaXB0aW9uIiwiU2hvcEl0ZW1QcmljaW5nIiwidGl0bGUiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=