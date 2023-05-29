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
  var desc = props.desc;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, descn));
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
/******/ 	__webpack_require__.h = () => ("eebc4e33c36a6dac1faf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40MzhkNDkyZGQ1YjYzNjNlZGFmNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsSUFBT0MsT0FBTyxHQUFJRCxLQUFLLENBQWhCQyxPQUFPO0VBQ2Qsb0JBQU9WLDBEQUFBLENBQUNZLFFBQVE7SUFBQ0YsT0FBTyxFQUFFQTtFQUFRLENBQUUsQ0FBQztBQUN6QztBQUVBLFNBQVNFLFFBQVFBLENBQUNILEtBQUssRUFBRTtFQUNyQixJQUFPQyxPQUFPLEdBQUlELEtBQUssQ0FBaEJDLE9BQU87RUFDZCxvQkFDSVYsMERBQUEsK0JBQ0lBLDBEQUFBLENBQUNhLGNBQWM7SUFBQ0MsS0FBSyxFQUFFSixPQUFPLENBQUNJLEtBQU07SUFBQ0MsS0FBSyxFQUFFTCxPQUFPLENBQUNLO0VBQU0sQ0FBRSxDQUFDLGVBQzlEZiwwREFBQSxDQUFDZ0IsbUJBQW1CO0lBQUNDLElBQUksRUFBRVAsT0FBTyxDQUFDUTtFQUFZLENBQUUsQ0FBQyxlQUNsRGxCLDBEQUFBLENBQUNtQixlQUFlO0lBQUNDLEtBQUssRUFBRVYsT0FBTyxDQUFDVTtFQUFNLENBQUUsQ0FDbkMsQ0FBQztBQUVsQjtBQUVBLFNBQVNQLGNBQWNBLENBQUNKLEtBQUssRUFBRTtFQUMzQixJQUFPSyxLQUFLLEdBQVdMLEtBQUssQ0FBckJLLEtBQUs7SUFBRUMsS0FBSyxHQUFJTixLQUFLLENBQWRNLEtBQUs7RUFDbkIsb0JBQ0lmLDBEQUFBLDhCQUNJQSwwREFBQSxhQUFLYyxLQUFVLENBQUMsZUFDaEJkLDBEQUFBO0lBQUtxQixHQUFHLEVBQUVOLEtBQU07SUFBQ08sS0FBSyxFQUFDO0VBQU8sQ0FBQyxDQUMzQixDQUFDO0FBRWpCO0FBQ0EsU0FBU04sbUJBQW1CQSxDQUFDUCxLQUFLLEVBQUU7RUFDaEMsSUFBT1EsSUFBSSxHQUFJUixLQUFLLENBQWJRLElBQUk7RUFDWCxvQkFDSWpCLDBEQUFBLCtCQUNJQSwwREFBQSxZQUFJdUIsS0FBUyxDQUNSLENBQUM7QUFFbEI7QUFFQSxTQUFTSixlQUFlQSxDQUFDVixLQUFLLEVBQUU7RUFDNUIsSUFBT1csS0FBSyxHQUFJWCxLQUFLLENBQWRXLEtBQUs7RUFDWixvQkFDSXBCLDBEQUFBLDhCQUNJQSwwREFBQSxZQUFHLFFBQU0sRUFBQ29CLEtBQUssRUFBQyxVQUFNLENBQUMsZUFDdkJwQiwwREFBQSxpQkFBUSxNQUFZLENBQ2hCLENBQUM7QUFFakI7QUFFQSxJQUFNd0IsSUFBSSxHQUFHO0VBQ1RWLEtBQUssRUFBRSxhQUFhO0VBQ3BCQyxLQUFLLEVBQUUsK0dBQStHO0VBQ3RIRyxXQUFXLEVBQUUsc1FBQXNRO0VBQ25SRSxLQUFLLEVBQUU7QUFDWCxDQUFDO0FBRURiLElBQUksQ0FBQ2tCLE1BQU0sZUFDUHpCLDBEQUFBLENBQUNRLEdBQUc7RUFBQ0UsT0FBTyxFQUFFYztBQUFLLENBQUUsQ0FDekIsQ0FBQzs7Ozs7Ozs7VUMzREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfS29tcG96eWNqYV9pX3Byb3BzX2NoaWxkcmVuLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5mdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgICBjb25zdCB7cHJvZHVjdH0gPSBwcm9wcztcbiAgICByZXR1cm4gPFNob3BJdGVtIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+O1xufVxuXG5mdW5jdGlvbiBTaG9wSXRlbShwcm9wcykge1xuICAgIGNvbnN0IHtwcm9kdWN0fSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPFNob3BJdGVtSGVhZGVyIHRpdGxlPXtwcm9kdWN0LnRpdGxlfSBpbWFnZT17cHJvZHVjdC5pbWFnZX0gLz5cbiAgICAgICAgICAgIDxTaG9wSXRlbURlc2NyaXB0aW9uIGRlc2M9e3Byb2R1Y3QuZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICA8U2hvcEl0ZW1QcmljaW5nIHByaWNlPXtwcm9kdWN0LnByaWNlfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbUhlYWRlcihwcm9wcykge1xuICAgIGNvbnN0IHt0aXRsZSwgaW1hZ2V9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gd2lkdGg9JzM1MHB4Jy8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cbmZ1bmN0aW9uIFNob3BJdGVtRGVzY3JpcHRpb24ocHJvcHMpIHtcbiAgICBjb25zdCB7ZGVzY30gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxwPntkZXNjbn08L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtUHJpY2luZyhwcm9wcykge1xuICAgIGNvbnN0IHtwcmljZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPHA+Q2VuYToge3ByaWNlfSB6xYI8L3A+XG4gICAgICAgICAgICA8YnV0dG9uPkt1cCE8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKVxufVxuXG5jb25zdCBkYXRhID0ge1xuICAgIHRpdGxlOiBcIk1hY0Jvb2sgUHJvXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzAzMzgzL3BleGVscy1waG90by0zMDMzODMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1vYyBpIG1vYmlsbm/Fm8SHIOKAkyBNYWNCb29rIFBybyB3eXJhxbpuaWUgcG9kbm9zaSB0dSBwb3ByemVjemvEmS4gVGVyYXogbW/FvGVzeiBqZXN6Y3plIHN6eWJjaWVqIHJlYWxpem93YcSHIHN3b2plIHBvbXlzxYJ5LiBQb21vZ8SFIENpIHcgdHltIHd5ZGFqbmUgcHJvY2Vzb3J5IGkgdWvFgmFkeSBwYW1pxJljaSwgemFhd2Fuc293YW5hIGdyYWZpa2EsIGLFgnlza2F3aWN6bmllIGR6aWHFgmFqxIVjYSBwYW1pxJnEhyBtYXNvd2EgaSBpbm5lIGRvc2tvbmHFgmUgcm96d2nEhXphbmlhLlwiLFxuICAgIHByaWNlOiA5OTk5XG59O1xuXG5yb290LnJlbmRlcihcbiAgICA8QXBwIHByb2R1Y3Q9e2RhdGF9IC8+XG4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVlYmM0ZTMzYzM2YTZkYWMxZmFmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHAiLCJwcm9wcyIsInByb2R1Y3QiLCJjcmVhdGVFbGVtZW50IiwiU2hvcEl0ZW0iLCJTaG9wSXRlbUhlYWRlciIsInRpdGxlIiwiaW1hZ2UiLCJTaG9wSXRlbURlc2NyaXB0aW9uIiwiZGVzYyIsImRlc2NyaXB0aW9uIiwiU2hvcEl0ZW1QcmljaW5nIiwicHJpY2UiLCJzcmMiLCJ3aWR0aCIsImRlc2NuIiwiZGF0YSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=