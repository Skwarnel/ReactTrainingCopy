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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemHeader, {
    title: list.title,
    image: list.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemDescription, {
    description: list.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemPricing, {
    price: list.price
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
  data: data
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6bb80944440af93e54d7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZDA3ODAwMWRjYTk1MTU4Zjc3OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsb0JBQU9ULDBEQUFBLENBQUNXLFFBQVE7SUFBQ0MsSUFBSSxFQUFFSDtFQUFNLENBQUUsQ0FBQztBQUNwQztBQUVBLFNBQVNFLFFBQVFBLENBQUNGLEtBQUssRUFBRTtFQUNyQixJQUFPSSxLQUFLLEdBQStCSixLQUFLLENBQXpDSSxLQUFLO0lBQUVDLFdBQVcsR0FBa0JMLEtBQUssQ0FBbENLLFdBQVc7SUFBRUMsS0FBSyxHQUFXTixLQUFLLENBQXJCTSxLQUFLO0lBQUVDLEtBQUssR0FBSVAsS0FBSyxDQUFkTyxLQUFLO0VBQ3ZDLG9CQUNJaEIsMERBQUEsK0JBQ0lBLDBEQUFBLENBQUNpQixjQUFjO0lBQUNKLEtBQUssRUFBRUssSUFBSSxDQUFDTCxLQUFNO0lBQUNFLEtBQUssRUFBRUcsSUFBSSxDQUFDSDtFQUFNLENBQUUsQ0FBQyxlQUN4RGYsMERBQUEsQ0FBQ21CLG1CQUFtQjtJQUFDTCxXQUFXLEVBQUVJLElBQUksQ0FBQ0o7RUFBWSxDQUFFLENBQUMsZUFDdERkLDBEQUFBLENBQUNvQixlQUFlO0lBQUNKLEtBQUssRUFBRUUsSUFBSSxDQUFDRjtFQUFNLENBQUUsQ0FDaEMsQ0FBQztBQUVsQjtBQUVBLFNBQVNDLGNBQWNBLENBQUNSLEtBQUssRUFBRTtFQUMzQixJQUFPSSxLQUFLLEdBQUlKLEtBQUssQ0FBZEksS0FBSztFQUNaLG9CQUNJYiwwREFBQSw4QkFDSUEsMERBQUEsYUFBS2EsS0FBVSxDQUFDLGVBQ2hCYiwwREFBQTtJQUFLcUIsR0FBRyxFQUFFTixLQUFNO0lBQUNPLEtBQUssRUFBQztFQUFPLENBQUMsQ0FDM0IsQ0FBQztBQUVqQjtBQUVBLFNBQVNILG1CQUFtQkEsQ0FBQ1YsS0FBSyxFQUFFO0VBQ2hDLElBQU9LLFdBQVcsR0FBSUwsS0FBSyxDQUFwQkssV0FBVztFQUNsQixvQkFDSWQsMERBQUEsK0JBQ0lBLDBEQUFBLFlBQUljLFdBQWUsQ0FDZCxDQUFDO0FBRWxCO0FBRUEsU0FBU00sZUFBZUEsQ0FBQ1gsS0FBSyxFQUFFO0VBQzVCLElBQU9PLEtBQUssR0FBSVAsS0FBSyxDQUFkTyxLQUFLO0VBQ1osb0JBQ0loQiwwREFBQSxpQkFBUSxRQUNFLEVBQUNnQixLQUFLLEVBQUMsVUFDYixlQUFBaEIsMERBQUEsaUJBQVEsTUFBWSxDQUNoQixDQUFDO0FBRWpCO0FBRUEsSUFBTVksSUFBSSxHQUFHO0VBQ1RDLEtBQUssRUFBRSxhQUFhO0VBQ3BCRSxLQUFLLEVBQUUsK0dBQStHO0VBQ3RIRCxXQUFXLEVBQUUsc1FBQXNRO0VBQ25SRSxLQUFLLEVBQUU7QUFDWCxDQUFDO0FBRURULElBQUksQ0FBQ2dCLE1BQU0sZUFDUHZCLDBEQUFBLENBQUNRLEdBQUc7RUFBQ0ksSUFBSSxFQUFFQTtBQUFLLENBQUUsQ0FDdEIsQ0FBQzs7Ozs7Ozs7VUMzREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfS29tcG96eWNqYV9pX3Byb3BzX2NoaWxkcmVuLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5mdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgICByZXR1cm4gPFNob3BJdGVtIGRhdGE9e3Byb3BzfSAvPjtcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW0ocHJvcHMpIHtcbiAgICBjb25zdCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZSwgcHJpY2V9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8U2hvcEl0ZW1IZWFkZXIgdGl0bGU9e2xpc3QudGl0bGV9IGltYWdlPXtsaXN0LmltYWdlfSAvPlxuICAgICAgICAgICAgPFNob3BJdGVtRGVzY3JpcHRpb24gZGVzY3JpcHRpb249e2xpc3QuZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICA8U2hvcEl0ZW1QcmljaW5nIHByaWNlPXtsaXN0LnByaWNlfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbUhlYWRlcihwcm9wcykge1xuICAgIGNvbnN0IHt0aXRsZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSB3aWR0aD0nMzUwcHgnLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbURlc2NyaXB0aW9uKHByb3BzKSB7XG4gICAgY29uc3Qge2Rlc2NyaXB0aW9ufSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1QcmljaW5nKHByb3BzKSB7XG4gICAgY29uc3Qge3ByaWNlfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICBDZW5hOiB7cHJpY2V9IHrFglxuICAgICAgICAgICAgPGJ1dHRvbj5LdXAhPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn1cblxuY29uc3QgZGF0YSA9IHtcbiAgICB0aXRsZTogXCJNYWNCb29rIFByb1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzMwMzM4My9wZXhlbHMtcGhvdG8tMzAzMzgzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2MgaSBtb2JpbG5vxZvEhyDigJMgTWFjQm9vayBQcm8gd3lyYcW6bmllIHBvZG5vc2kgdHUgcG9wcnplY3prxJkuIFRlcmF6IG1vxbxlc3ogamVzemN6ZSBzenliY2llaiByZWFsaXpvd2HEhyBzd29qZSBwb215c8WCeS4gUG9tb2fEhSBDaSB3IHR5bSB3eWRham5lIHByb2Nlc29yeSBpIHVrxYJhZHkgcGFtacSZY2ksIHphYXdhbnNvd2FuYSBncmFmaWthLCBixYJ5c2thd2ljem5pZSBkemlhxYJhasSFY2EgcGFtacSZxIcgbWFzb3dhIGkgaW5uZSBkb3Nrb25hxYJlIHJvendpxIV6YW5pYS5cIixcbiAgICBwcmljZTogOTk5OVxufTtcblxucm9vdC5yZW5kZXIoXG4gICAgPEFwcCBkYXRhPXtkYXRhfSAvPlxuKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2YmI4MDk0NDQ0MGFmOTNlNTRkN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiU2hvcEl0ZW0iLCJkYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwicHJpY2UiLCJTaG9wSXRlbUhlYWRlciIsImxpc3QiLCJTaG9wSXRlbURlc2NyaXB0aW9uIiwiU2hvcEl0ZW1QcmljaW5nIiwic3JjIiwid2lkdGgiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9