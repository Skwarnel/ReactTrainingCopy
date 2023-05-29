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
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, null);
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
/******/ 	__webpack_require__.h = () => ("335eb694beadb250b650")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mOTM0NmIyZDQ5MDQ2ODAzZGZiNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT1IsMERBQUEsQ0FBQ1UsUUFBUSxNQUFFLENBQUM7QUFDdkI7QUFFQSxTQUFTQSxRQUFRQSxDQUFDQyxLQUFLLEVBQUU7RUFDckIsb0JBQ0lYLDBEQUFBLCtCQUNJQSwwREFBQSxDQUFDWSxjQUFjLE1BQUMsQ0FBQyxlQUNqQlosMERBQUEsQ0FBQ2EsbUJBQW1CLE1BQUMsQ0FBQyxlQUN0QmIsMERBQUEsQ0FBQ2MsZUFBZSxNQUFDLENBQ1osQ0FBQztBQUVsQjtBQUVBLFNBQVNGLGNBQWNBLENBQUNELEtBQUssRUFBRTtFQUMzQixJQUFPSSxJQUFJLEdBQUlKLEtBQUssQ0FBYkksSUFBSTtFQUNYLG9CQUNJZiwwREFBQSw4QkFDSUEsMERBQUEsYUFBS2UsSUFBSSxDQUFDQyxLQUFVLENBQUMsZUFDckJoQiwwREFBQTtJQUFLaUIsR0FBRyxFQUFFRixJQUFJLENBQUNHO0VBQU0sQ0FBQyxDQUNsQixDQUFDO0FBRWpCO0FBRUEsU0FBU0wsbUJBQW1CQSxDQUFDRixLQUFLLEVBQUU7RUFDaEMsSUFBT0ksSUFBSSxHQUFJSixLQUFLLENBQWJJLElBQUk7RUFDWCxvQkFDSWYsMERBQUEsK0JBQ0lBLDBEQUFBLFlBQUllLElBQUksQ0FBQ0ksV0FBZSxDQUNuQixDQUFDO0FBRWxCO0FBRUEsU0FBU0wsZUFBZUEsQ0FBQ0gsS0FBSyxFQUFFO0VBQzVCLElBQU9JLElBQUksR0FBSUosS0FBSyxDQUFiSSxJQUFJO0VBQ1gsb0JBQ0lmLDBEQUFBLGlCQUFRLFFBQ0UsRUFBQ2UsSUFBSSxDQUFDSyxLQUFLLEVBQUMsVUFDbEIsZUFBQXBCLDBEQUFBLGlCQUFRLE1BQVksQ0FDaEIsQ0FBQztBQUVqQjtBQUVBLElBQU1lLElBQUksR0FBRztFQUNUQyxLQUFLLEVBQUUsYUFBYTtFQUNwQkUsS0FBSyxFQUFFLHdCQUF3QjtFQUMvQkMsV0FBVyxFQUFFLHNRQUFzUTtFQUNuUkMsS0FBSyxFQUFFO0FBQ1gsQ0FBQztBQUVEYixJQUFJLENBQUNjLE1BQU0sZUFBQ3JCLDBEQUFBLENBQUNRLEdBQUc7RUFBQ08sSUFBSSxFQUFFQTtBQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3hEL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfS29tcG96eWNqYV9pX3Byb3BzX2NoaWxkcmVuLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxTaG9wSXRlbSAvPjtcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW0ocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxTaG9wSXRlbUhlYWRlci8+XG4gICAgICAgICAgICA8U2hvcEl0ZW1EZXNjcmlwdGlvbi8+XG4gICAgICAgICAgICA8U2hvcEl0ZW1QcmljaW5nLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1IZWFkZXIocHJvcHMpIHtcbiAgICBjb25zdCB7ZGF0YX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWFnZX0vPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtRGVzY3JpcHRpb24ocHJvcHMpIHtcbiAgICBjb25zdCB7ZGF0YX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxwPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1QcmljaW5nKHByb3BzKSB7XG4gICAgY29uc3Qge2RhdGF9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIENlbmE6IHtkYXRhLnByaWNlfSB6xYJcbiAgICAgICAgICAgIDxidXR0b24+S3VwITwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApXG59XG5cbmNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGU6IFwiTWFjQm9vayBQcm9cIixcbiAgICBpbWFnZTogXCJodHRwczovL2JpdC5seS8yRUV0ZHVEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9jIGkgbW9iaWxub8WbxIcg4oCTIE1hY0Jvb2sgUHJvIHd5cmHFum5pZSBwb2Rub3NpIHR1IHBvcHJ6ZWN6a8SZLiBUZXJheiBtb8W8ZXN6IGplc3pjemUgc3p5YmNpZWogcmVhbGl6b3dhxIcgc3dvamUgcG9teXPFgnkuIFBvbW9nxIUgQ2kgdyB0eW0gd3lkYWpuZSBwcm9jZXNvcnkgaSB1a8WCYWR5IHBhbWnEmWNpLCB6YWF3YW5zb3dhbmEgZ3JhZmlrYSwgYsWCeXNrYXdpY3puaWUgZHppYcWCYWrEhWNhIHBhbWnEmcSHIG1hc293YSBpIGlubmUgZG9za29uYcWCZSByb3p3acSFemFuaWEuXCIsXG4gICAgcHJpY2U6IDk5OTlcbn07XG5cbnJvb3QucmVuZGVyKDxBcHAgZGF0YT17ZGF0YX0vPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMzVlYjY5NGJlYWRiMjUwYjY1MFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIlNob3BJdGVtIiwicHJvcHMiLCJTaG9wSXRlbUhlYWRlciIsIlNob3BJdGVtRGVzY3JpcHRpb24iLCJTaG9wSXRlbVByaWNpbmciLCJkYXRhIiwidGl0bGUiLCJzcmMiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9