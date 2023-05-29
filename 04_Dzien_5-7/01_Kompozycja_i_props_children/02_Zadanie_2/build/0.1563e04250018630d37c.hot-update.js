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
  var title = props.title,
    description = props.description,
    image = props.image,
    price = props.price;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, title);
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
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dccd346a4427371c88f3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xNTYzZTA0MjUwMDE4NjMwZDM3Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsb0JBQU9ULDBEQUFBLENBQUNXLFFBQVE7SUFBQ0MsSUFBSSxFQUFFSDtFQUFNLENBQUUsQ0FBQztBQUNwQztBQUVBLFNBQVNFLFFBQVFBLENBQUNGLEtBQUssRUFBRTtFQUNyQixJQUFPSSxLQUFLLEdBQStCSixLQUFLLENBQXpDSSxLQUFLO0lBQUVDLFdBQVcsR0FBa0JMLEtBQUssQ0FBbENLLFdBQVc7SUFBRUMsS0FBSyxHQUFXTixLQUFLLENBQXJCTSxLQUFLO0lBQUVDLEtBQUssR0FBSVAsS0FBSyxDQUFkTyxLQUFLO0VBQ3ZDLG9CQUNJaEIsMERBQUEsa0JBQ0thLEtBQ0ksQ0FBQztBQUVsQjtBQUVBLFNBQVNJLGNBQWNBLENBQUNSLEtBQUssRUFBRTtFQUMzQixJQUFPSSxLQUFLLEdBQUlKLEtBQUssQ0FBZEksS0FBSztFQUNaLG9CQUNJYiwwREFBQSw4QkFDSUEsMERBQUEsYUFBS2EsS0FBVSxDQUFDLGVBQ2hCYiwwREFBQTtJQUFLa0IsR0FBRyxFQUFFSCxLQUFNO0lBQUNJLEtBQUssRUFBQztFQUFPLENBQUMsQ0FDM0IsQ0FBQztBQUVqQjtBQUVBLFNBQVNDLG1CQUFtQkEsQ0FBQ1gsS0FBSyxFQUFFO0VBQ2hDLElBQU9LLFdBQVcsR0FBSUwsS0FBSyxDQUFwQkssV0FBVztFQUNsQixvQkFDSWQsMERBQUEsK0JBQ0lBLDBEQUFBLFlBQUljLFdBQWUsQ0FDZCxDQUFDO0FBRWxCO0FBRUEsU0FBU08sZUFBZUEsQ0FBQ1osS0FBSyxFQUFFO0VBQzVCLElBQU9PLEtBQUssR0FBSVAsS0FBSyxDQUFkTyxLQUFLO0VBQ1osb0JBQ0loQiwwREFBQSxpQkFBUSxRQUNFLEVBQUNnQixLQUFLLEVBQUMsVUFDYixlQUFBaEIsMERBQUEsaUJBQVEsTUFBWSxDQUNoQixDQUFDO0FBRWpCO0FBRUEsSUFBTVksSUFBSSxHQUFHO0VBQ1RDLEtBQUssRUFBRSxhQUFhO0VBQ3BCRSxLQUFLLEVBQUUsK0dBQStHO0VBQ3RIRCxXQUFXLEVBQUUsc1FBQXNRO0VBQ25SRSxLQUFLLEVBQUU7QUFDWCxDQUFDO0FBRURULElBQUksQ0FBQ2UsTUFBTSxlQUNQdEIsMERBQUEsQ0FBQ1EsR0FBRztFQUFDSSxJQUFJLEVBQUVBO0FBQUssQ0FBRSxDQUN0QixDQUFDOzs7Ozs7OztVQ3pERCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIHJldHVybiA8U2hvcEl0ZW0gZGF0YT17cHJvcHN9IC8+O1xufVxuXG5mdW5jdGlvbiBTaG9wSXRlbShwcm9wcykge1xuICAgIGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlLCBwcmljZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1IZWFkZXIocHJvcHMpIHtcbiAgICBjb25zdCB7dGl0bGV9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gd2lkdGg9JzM1MHB4Jy8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1EZXNjcmlwdGlvbihwcm9wcykge1xuICAgIGNvbnN0IHtkZXNjcmlwdGlvbn0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtUHJpY2luZyhwcm9wcykge1xuICAgIGNvbnN0IHtwcmljZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgQ2VuYToge3ByaWNlfSB6xYJcbiAgICAgICAgICAgIDxidXR0b24+S3VwITwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApXG59XG5cbmNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGU6IFwiTWFjQm9vayBQcm9cIixcbiAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zMDMzODMvcGV4ZWxzLXBob3RvLTMwMzM4My5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0xXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9jIGkgbW9iaWxub8WbxIcg4oCTIE1hY0Jvb2sgUHJvIHd5cmHFum5pZSBwb2Rub3NpIHR1IHBvcHJ6ZWN6a8SZLiBUZXJheiBtb8W8ZXN6IGplc3pjemUgc3p5YmNpZWogcmVhbGl6b3dhxIcgc3dvamUgcG9teXPFgnkuIFBvbW9nxIUgQ2kgdyB0eW0gd3lkYWpuZSBwcm9jZXNvcnkgaSB1a8WCYWR5IHBhbWnEmWNpLCB6YWF3YW5zb3dhbmEgZ3JhZmlrYSwgYsWCeXNrYXdpY3puaWUgZHppYcWCYWrEhWNhIHBhbWnEmcSHIG1hc293YSBpIGlubmUgZG9za29uYcWCZSByb3p3acSFemFuaWEuXCIsXG4gICAgcHJpY2U6IDk5OTlcbn07XG5cbnJvb3QucmVuZGVyKFxuICAgIDxBcHAgZGF0YT17ZGF0YX0gLz5cbik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGNjZDM0NmE0NDI3MzcxYzg4ZjNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIlNob3BJdGVtIiwiZGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInByaWNlIiwiU2hvcEl0ZW1IZWFkZXIiLCJzcmMiLCJ3aWR0aCIsIlNob3BJdGVtRGVzY3JpcHRpb24iLCJTaG9wSXRlbVByaWNpbmciLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9