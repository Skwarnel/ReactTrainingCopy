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
  product: data
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b0e0828fbe32a32915cf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42NjE3YzBjZGJiNjZmYzNhNTEzMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsSUFBT0MsT0FBTyxHQUFJRCxLQUFLLENBQWhCQyxPQUFPO0VBQ2Qsb0JBQU9WLDBEQUFBLENBQUNZLFFBQVE7SUFBQ0YsT0FBTyxFQUFFQTtFQUFRLENBQUUsQ0FBQztBQUN6QztBQUVBLFNBQVNFLFFBQVFBLENBQUNILEtBQUssRUFBRTtFQUNyQixJQUFPQyxPQUFPLEdBQUlELEtBQUssQ0FBaEJDLE9BQU87RUFDZCxvQkFDSVYsMERBQUEsK0JBQ0lBLDBEQUFBLENBQUNhLGNBQWM7SUFBQ0MsS0FBSyxFQUFFSixPQUFPLENBQUNJLEtBQU07SUFBQ0MsS0FBSyxFQUFFTCxPQUFPLENBQUNLO0VBQU0sQ0FBRSxDQUFDLGVBQzlEZiwwREFBQSxDQUFDZ0IsbUJBQW1CO0lBQUNDLElBQUksRUFBRVAsT0FBTyxDQUFDUTtFQUFZLENBQUMsQ0FBQyxlQUNqRGxCLDBEQUFBLENBQUNtQixlQUFlO0lBQUNDLEtBQUssRUFBRVYsT0FBTyxDQUFDVTtFQUFNLENBQUMsQ0FDbEMsQ0FBQztBQUVsQjtBQUVBLFNBQVNQLGNBQWNBLENBQUNKLEtBQUssRUFBRTtFQUMzQixJQUFPSyxLQUFLLEdBQUlMLEtBQUssQ0FBZEssS0FBSztFQUNaLG9CQUNJZCwwREFBQSw4QkFDSUEsMERBQUEsYUFBS2MsS0FBVSxDQUFDLGVBQ2hCZCwwREFBQTtJQUFLcUIsR0FBRyxFQUFFTixLQUFNO0lBQUNPLEtBQUssRUFBQztFQUFPLENBQUMsQ0FDM0IsQ0FBQztBQUVqQjtBQUVBLFNBQVNOLG1CQUFtQkEsQ0FBQ1AsS0FBSyxFQUFFO0VBQ2hDLElBQU9TLFdBQVcsR0FBSVQsS0FBSyxDQUFwQlMsV0FBVztFQUNsQixvQkFDSWxCLDBEQUFBLCtCQUNJQSwwREFBQSxZQUFJa0IsV0FBZSxDQUNkLENBQUM7QUFFbEI7QUFFQSxTQUFTQyxlQUFlQSxDQUFDVixLQUFLLEVBQUU7RUFDNUIsSUFBT1csS0FBSyxHQUFJWCxLQUFLLENBQWRXLEtBQUs7RUFDWixvQkFDSXBCLDBEQUFBLGlCQUFRLFFBQ0UsRUFBQ29CLEtBQUssRUFBQyxVQUNiLGVBQUFwQiwwREFBQSxpQkFBUSxNQUFZLENBQ2hCLENBQUM7QUFFakI7QUFFQSxJQUFNdUIsSUFBSSxHQUFHO0VBQ1RULEtBQUssRUFBRSxhQUFhO0VBQ3BCQyxLQUFLLEVBQUUsK0dBQStHO0VBQ3RIRyxXQUFXLEVBQUUsc1FBQXNRO0VBQ25SRSxLQUFLLEVBQUU7QUFDWCxDQUFDO0FBRURiLElBQUksQ0FBQ2lCLE1BQU0sZUFDUHhCLDBEQUFBLENBQUNRLEdBQUc7RUFBQ0UsT0FBTyxFQUFFYTtBQUFLLENBQUUsQ0FDekIsQ0FBQzs7Ozs7Ozs7VUM1REQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfS29tcG96eWNqYV9pX3Byb3BzX2NoaWxkcmVuLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5mdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgICBjb25zdCB7cHJvZHVjdH0gPSBwcm9wcztcbiAgICByZXR1cm4gPFNob3BJdGVtIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+O1xufVxuXG5mdW5jdGlvbiBTaG9wSXRlbShwcm9wcykge1xuICAgIGNvbnN0IHtwcm9kdWN0fSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPFNob3BJdGVtSGVhZGVyIHRpdGxlPXtwcm9kdWN0LnRpdGxlfSBpbWFnZT17cHJvZHVjdC5pbWFnZX0gLz5cbiAgICAgICAgICAgIDxTaG9wSXRlbURlc2NyaXB0aW9uIGRlc2M9e3Byb2R1Y3QuZGVzY3JpcHRpb259Lz5cbiAgICAgICAgICAgIDxTaG9wSXRlbVByaWNpbmcgcHJpY2U9e3Byb2R1Y3QucHJpY2V9Lz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1IZWFkZXIocHJvcHMpIHtcbiAgICBjb25zdCB7dGl0bGV9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gd2lkdGg9JzM1MHB4Jy8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1EZXNjcmlwdGlvbihwcm9wcykge1xuICAgIGNvbnN0IHtkZXNjcmlwdGlvbn0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtUHJpY2luZyhwcm9wcykge1xuICAgIGNvbnN0IHtwcmljZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgQ2VuYToge3ByaWNlfSB6xYJcbiAgICAgICAgICAgIDxidXR0b24+S3VwITwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApXG59XG5cbmNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGU6IFwiTWFjQm9vayBQcm9cIixcbiAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zMDMzODMvcGV4ZWxzLXBob3RvLTMwMzM4My5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0xXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9jIGkgbW9iaWxub8WbxIcg4oCTIE1hY0Jvb2sgUHJvIHd5cmHFum5pZSBwb2Rub3NpIHR1IHBvcHJ6ZWN6a8SZLiBUZXJheiBtb8W8ZXN6IGplc3pjemUgc3p5YmNpZWogcmVhbGl6b3dhxIcgc3dvamUgcG9teXPFgnkuIFBvbW9nxIUgQ2kgdyB0eW0gd3lkYWpuZSBwcm9jZXNvcnkgaSB1a8WCYWR5IHBhbWnEmWNpLCB6YWF3YW5zb3dhbmEgZ3JhZmlrYSwgYsWCeXNrYXdpY3puaWUgZHppYcWCYWrEhWNhIHBhbWnEmcSHIG1hc293YSBpIGlubmUgZG9za29uYcWCZSByb3p3acSFemFuaWEuXCIsXG4gICAgcHJpY2U6IDk5OTlcbn07XG5cbnJvb3QucmVuZGVyKFxuICAgIDxBcHAgcHJvZHVjdD17ZGF0YX0gLz5cbik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjBlMDgyOGZiZTMyYTMyOTE1Y2ZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsInByb3BzIiwicHJvZHVjdCIsImNyZWF0ZUVsZW1lbnQiLCJTaG9wSXRlbSIsIlNob3BJdGVtSGVhZGVyIiwidGl0bGUiLCJpbWFnZSIsIlNob3BJdGVtRGVzY3JpcHRpb24iLCJkZXNjIiwiZGVzY3JpcHRpb24iLCJTaG9wSXRlbVByaWNpbmciLCJwcmljZSIsInNyYyIsIndpZHRoIiwiZGF0YSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=