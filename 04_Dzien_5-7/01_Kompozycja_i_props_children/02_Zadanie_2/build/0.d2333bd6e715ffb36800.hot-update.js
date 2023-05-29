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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, {
    data: data
  });
}
function ShopItem(props) {
  var title = props.title,
    image = props.image,
    description = props.description,
    price = props.price;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, title);
}
function ShopItemHeader(_ref) {
  var title = _ref.title,
    image = _ref.image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: image
  }));
}
function ShopItemDescription(_ref2) {
  var desc = _ref2.desc;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, desc));
}
function ShopItemPricing(_ref3) {
  var price = _ref3.price;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, "Cena: ", price, " z\u0142", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup!"));
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
/******/ 	__webpack_require__.h = () => ("8f14623670c75679a1bc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMjMzM2JkNmU3MTVmZmIzNjgwMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsSUFBT0MsSUFBSSxHQUFJRCxLQUFLLENBQWJDLElBQUk7RUFDWCxvQkFBT1YsMERBQUEsQ0FBQ1ksUUFBUTtJQUFDRixJQUFJLEVBQUVBO0VBQUssQ0FBRSxDQUFDO0FBQ25DO0FBRUEsU0FBU0UsUUFBUUEsQ0FBQ0gsS0FBSyxFQUFFO0VBQ3JCLElBQU9JLEtBQUssR0FBK0JKLEtBQUssQ0FBekNJLEtBQUs7SUFBRUMsS0FBSyxHQUF3QkwsS0FBSyxDQUFsQ0ssS0FBSztJQUFFQyxXQUFXLEdBQVdOLEtBQUssQ0FBM0JNLFdBQVc7SUFBRUMsS0FBSyxHQUFJUCxLQUFLLENBQWRPLEtBQUs7RUFDdkMsb0JBQ0loQiwwREFBQSxrQkFDS2EsS0FDSSxDQUFDO0FBRWxCO0FBRUEsU0FBU0ksY0FBY0EsQ0FBQUMsSUFBQSxFQUFpQjtFQUFBLElBQWZMLEtBQUssR0FBQUssSUFBQSxDQUFMTCxLQUFLO0lBQUVDLEtBQUssR0FBQUksSUFBQSxDQUFMSixLQUFLO0VBQ2pDLG9CQUNJZCwwREFBQSw4QkFDSUEsMERBQUEsYUFBS2EsS0FBVSxDQUFDLGVBQ2hCYiwwREFBQTtJQUFLbUIsR0FBRyxFQUFFTDtFQUFNLENBQUUsQ0FDZCxDQUFDO0FBRWpCO0FBRUEsU0FBU00sbUJBQW1CQSxDQUFBQyxLQUFBLEVBQVM7RUFBQSxJQUFQQyxJQUFJLEdBQUFELEtBQUEsQ0FBSkMsSUFBSTtFQUM5QixvQkFDSXRCLDBEQUFBLCtCQUNJQSwwREFBQSxZQUFJc0IsSUFBUSxDQUNQLENBQUM7QUFFbEI7QUFFQSxTQUFTQyxlQUFlQSxDQUFBQyxLQUFBLEVBQVU7RUFBQSxJQUFSUixLQUFLLEdBQUFRLEtBQUEsQ0FBTFIsS0FBSztFQUMzQixvQkFDSWhCLDBEQUFBLGlCQUFRLFFBQ0UsRUFBQ2dCLEtBQUssRUFBQyxVQUNiLGVBQUFoQiwwREFBQSxpQkFBUSxNQUFZLENBQ2hCLENBQUM7QUFFakI7QUFFQSxJQUFNVSxJQUFJLEdBQUc7RUFDVEcsS0FBSyxFQUFFLGFBQWE7RUFDcEJDLEtBQUssRUFBRSx3QkFBd0I7RUFDL0JDLFdBQVcsRUFBRSxzUUFBc1E7RUFDblJDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRFQsSUFBSSxDQUFDa0IsTUFBTSxlQUNQekIsMERBQUEsQ0FBQ1EsR0FBRztFQUFDRSxJQUFJLEVBQUVBO0FBQUssQ0FBQyxDQUNyQixDQUFDOzs7Ozs7OztVQ3ZERCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIGNvbnN0IHtkYXRhfSA9IHByb3BzO1xuICAgIHJldHVybiA8U2hvcEl0ZW0gZGF0YT17ZGF0YX0gLz47XG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtKHByb3BzKSB7XG4gICAgY29uc3Qge3RpdGxlLCBpbWFnZSwgZGVzY3JpcHRpb24sIHByaWNlfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbUhlYWRlcih7dGl0bGUsIGltYWdlfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IC8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1EZXNjcmlwdGlvbih7ZGVzY30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxwPntkZXNjfTwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1QcmljaW5nKHtwcmljZX0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgQ2VuYToge3ByaWNlfSB6xYJcbiAgICAgICAgICAgIDxidXR0b24+S3VwITwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApXG59XG5cbmNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGU6IFwiTWFjQm9vayBQcm9cIixcbiAgICBpbWFnZTogXCJodHRwczovL2JpdC5seS8yRUV0ZHVEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9jIGkgbW9iaWxub8WbxIcg4oCTIE1hY0Jvb2sgUHJvIHd5cmHFum5pZSBwb2Rub3NpIHR1IHBvcHJ6ZWN6a8SZLiBUZXJheiBtb8W8ZXN6IGplc3pjemUgc3p5YmNpZWogcmVhbGl6b3dhxIcgc3dvamUgcG9teXPFgnkuIFBvbW9nxIUgQ2kgdyB0eW0gd3lkYWpuZSBwcm9jZXNvcnkgaSB1a8WCYWR5IHBhbWnEmWNpLCB6YWF3YW5zb3dhbmEgZ3JhZmlrYSwgYsWCeXNrYXdpY3puaWUgZHppYcWCYWrEhWNhIHBhbWnEmcSHIG1hc293YSBpIGlubmUgZG9za29uYcWCZSByb3p3acSFemFuaWEuXCIsXG4gICAgcHJpY2U6IDk5OTlcbn07XG5cbnJvb3QucmVuZGVyKFxuICAgIDxBcHAgZGF0YT17ZGF0YX0vPlxuKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhmMTQ2MjM2NzBjNzU2NzlhMWJjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHAiLCJwcm9wcyIsImRhdGEiLCJjcmVhdGVFbGVtZW50IiwiU2hvcEl0ZW0iLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIlNob3BJdGVtSGVhZGVyIiwiX3JlZiIsInNyYyIsIlNob3BJdGVtRGVzY3JpcHRpb24iLCJfcmVmMiIsImRlc2MiLCJTaG9wSXRlbVByaWNpbmciLCJfcmVmMyIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=