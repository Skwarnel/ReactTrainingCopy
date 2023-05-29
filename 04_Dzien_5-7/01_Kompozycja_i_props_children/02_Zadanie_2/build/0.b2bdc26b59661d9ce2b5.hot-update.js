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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\"Gfgeg\"")

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
  data: $data
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("668ea31b341c7862e7f8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMmJkYzI2YjU5NjYxZDljZTJiNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsb0JBQU9ULDBEQUFBLENBQUNXLFFBQVE7SUFBQ0MsSUFBSSxFQUFFSDtFQUFNLENBQUMsQ0FBQztBQUNuQztBQUVBLFNBQVNFLFFBQVFBLENBQUNGLEtBQUssRUFBRTtFQUNyQixJQUFPSSxJQUFJLEdBQUlKLEtBQUssQ0FBYkksSUFBSTtFQUNYLG9CQUNJYiwwREFBQSxjQUFLLFdBRUE7O0VBRUw7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUFBO0FBRVI7O0FBRUEsU0FBU2MsY0FBY0EsQ0FBQ0wsS0FBSyxFQUFFO0VBQzNCLElBQU9NLEtBQUssR0FBSU4sS0FBSyxDQUFkTSxLQUFLO0VBQ1osb0JBQ0lmLDBEQUFBLDhCQUNJQSwwREFBQSxhQUFLZSxLQUFVLENBQUMsZUFDaEJmLDBEQUFBO0lBQUtnQixHQUFHLEVBQUVDLEtBQU07SUFBQ0MsS0FBSyxFQUFDO0VBQU8sQ0FBQyxDQUMzQixDQUFDO0FBRWpCO0FBRUEsU0FBU0MsbUJBQW1CQSxDQUFDVixLQUFLLEVBQUU7RUFDaEMsSUFBT1csV0FBVyxHQUFJWCxLQUFLLENBQXBCVyxXQUFXO0VBQ2xCLG9CQUNJcEIsMERBQUEsK0JBQ0lBLDBEQUFBLFlBQUlvQixXQUFlLENBQ2QsQ0FBQztBQUVsQjtBQUVBLFNBQVNDLGVBQWVBLENBQUNaLEtBQUssRUFBRTtFQUM1QixJQUFPYSxLQUFLLEdBQUliLEtBQUssQ0FBZGEsS0FBSztFQUNaLG9CQUNJdEIsMERBQUEsaUJBQVEsUUFDRSxFQUFDc0IsS0FBSyxFQUFDLFVBQ2IsZUFBQXRCLDBEQUFBLGlCQUFRLE1BQVksQ0FDaEIsQ0FBQztBQUVqQjtBQUVBLElBQU1ZLElBQUksR0FBRztFQUNURyxLQUFLLEVBQUUsYUFBYTtFQUNwQkUsS0FBSyxFQUFFLCtHQUErRztFQUN0SEcsV0FBVyxFQUFFLHNRQUFzUTtFQUNuUkUsS0FBSyxFQUFFO0FBQ1gsQ0FBQztBQUVEZixJQUFJLENBQUNnQixNQUFNLGVBQ1B2QiwwREFBQSxDQUFDUSxHQUFHO0VBQUNJLElBQUksRUFBRVk7QUFBTSxDQUFDLENBQ3RCLENBQUM7Ozs7Ozs7O1VDL0REIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX0tvbXBvenljamFfaV9wcm9wc19jaGlsZHJlbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuZnVuY3Rpb24gQXBwKHByb3BzKSB7XG4gICAgcmV0dXJuIDxTaG9wSXRlbSBkYXRhPXtwcm9wc30vPjtcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW0ocHJvcHMpIHtcbiAgICBjb25zdCB7bGlzdH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgXCJHZmdlZ1wiXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIC8vIDxzZWN0aW9uPlxuICAgICAgICAvLyAgICAgPFNob3BJdGVtSGVhZGVyIHRpdGxlPXtsaXN0LnRpdGxlfSBpbWFnZT17bGlzdC5pbWFnZX0gLz5cbiAgICAgICAgLy8gICAgIDxTaG9wSXRlbURlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtsaXN0LmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAvLyAgICAgPFNob3BJdGVtUHJpY2luZyBwcmljZT17bGlzdC5wcmljZX0gLz5cbiAgICAgICAgLy8gPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1IZWFkZXIocHJvcHMpIHtcbiAgICBjb25zdCB7dGl0bGV9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gd2lkdGg9JzM1MHB4Jy8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1EZXNjcmlwdGlvbihwcm9wcykge1xuICAgIGNvbnN0IHtkZXNjcmlwdGlvbn0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtUHJpY2luZyhwcm9wcykge1xuICAgIGNvbnN0IHtwcmljZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgQ2VuYToge3ByaWNlfSB6xYJcbiAgICAgICAgICAgIDxidXR0b24+S3VwITwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApXG59XG5cbmNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGU6IFwiTWFjQm9vayBQcm9cIixcbiAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zMDMzODMvcGV4ZWxzLXBob3RvLTMwMzM4My5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0xXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9jIGkgbW9iaWxub8WbxIcg4oCTIE1hY0Jvb2sgUHJvIHd5cmHFum5pZSBwb2Rub3NpIHR1IHBvcHJ6ZWN6a8SZLiBUZXJheiBtb8W8ZXN6IGplc3pjemUgc3p5YmNpZWogcmVhbGl6b3dhxIcgc3dvamUgcG9teXPFgnkuIFBvbW9nxIUgQ2kgdyB0eW0gd3lkYWpuZSBwcm9jZXNvcnkgaSB1a8WCYWR5IHBhbWnEmWNpLCB6YWF3YW5zb3dhbmEgZ3JhZmlrYSwgYsWCeXNrYXdpY3puaWUgZHppYcWCYWrEhWNhIHBhbWnEmcSHIG1hc293YSBpIGlubmUgZG9za29uYcWCZSByb3p3acSFemFuaWEuXCIsXG4gICAgcHJpY2U6IDk5OTlcbn07XG5cbnJvb3QucmVuZGVyKFxuICAgIDxBcHAgZGF0YT17JGRhdGF9Lz5cbik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2NjhlYTMxYjM0MWM3ODYyZTdmOFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiU2hvcEl0ZW0iLCJkYXRhIiwibGlzdCIsIlNob3BJdGVtSGVhZGVyIiwidGl0bGUiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiU2hvcEl0ZW1EZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiU2hvcEl0ZW1QcmljaW5nIiwicHJpY2UiLCJyZW5kZXIiLCIkZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=