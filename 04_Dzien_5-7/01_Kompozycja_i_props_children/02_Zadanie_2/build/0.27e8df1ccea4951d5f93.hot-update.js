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
  var data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: data.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, data.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, "Cena: ", data.price, " z\u0142", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup!")));
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
/******/ 	__webpack_require__.h = () => ("13575d73f0424d93147b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yN2U4ZGYxY2NlYTQ5NTFkNWY5My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsSUFBT0MsSUFBSSxHQUFJRCxLQUFLLENBQWJDLElBQUk7RUFDWCxvQkFBT1YsMERBQUEsQ0FBQ1ksUUFBUTtJQUFDRixJQUFJLEVBQUVBO0VBQUssQ0FBQyxDQUFDO0FBQ2xDO0FBRUEsU0FBU0UsUUFBUUEsQ0FBQ0gsS0FBSyxFQUFFO0VBQ3JCLElBQU9DLElBQUksR0FBSUQsS0FBSyxDQUFiQyxJQUFJO0VBQ1gsb0JBQ0lWLDBEQUFBLCtCQUNJQSwwREFBQSw4QkFDSUEsMERBQUEsYUFBS1UsSUFBSSxDQUFDRyxLQUFVLENBQUMsZUFDckJiLDBEQUFBO0lBQUtjLEdBQUcsRUFBRUosSUFBSSxDQUFDSztFQUFNLENBQUMsQ0FDbEIsQ0FBQyxlQUNUZiwwREFBQSwrQkFDSUEsMERBQUEsWUFBSVUsSUFBSSxDQUFDTSxXQUFlLENBQ25CLENBQUMsZUFDVmhCLDBEQUFBLGlCQUFRLFFBQ0UsRUFBQ1UsSUFBSSxDQUFDTyxLQUFLLEVBQUMsVUFDbEIsZUFBQWpCLDBEQUFBLGlCQUFRLE1BQVksQ0FDaEIsQ0FDSCxDQUFDO0FBRWxCO0FBRUEsU0FBU2tCLGNBQWNBLENBQUFDLElBQUEsRUFBaUI7RUFBQSxJQUFmTixLQUFLLEdBQUFNLElBQUEsQ0FBTE4sS0FBSztJQUFFRSxLQUFLLEdBQUFJLElBQUEsQ0FBTEosS0FBSztFQUNqQyxvQkFDSWYsMERBQUEsOEJBQ0lBLDBEQUFBLGFBQUthLEtBQVUsQ0FBQyxlQUNoQmIsMERBQUE7SUFBS2MsR0FBRyxFQUFFQztFQUFNLENBQUcsQ0FDZixDQUFDO0FBRWpCO0FBRUEsU0FBU0ssbUJBQW1CQSxDQUFBQyxLQUFBLEVBQVM7RUFBQSxJQUFQQyxJQUFJLEdBQUFELEtBQUEsQ0FBSkMsSUFBSTtFQUM5QixvQkFDSXRCLDBEQUFBLCtCQUNJQSwwREFBQSxZQUFJc0IsSUFBUSxDQUNQLENBQUM7QUFFbEI7QUFFQSxTQUFTQyxlQUFlQSxDQUFBQyxLQUFBLEVBQVU7RUFBQSxJQUFSUCxLQUFLLEdBQUFPLEtBQUEsQ0FBTFAsS0FBSztFQUMzQixvQkFDSWpCLDBEQUFBLGlCQUFRLFFBQ0UsRUFBQ2lCLEtBQUssRUFBQyxVQUNiLGVBQUFqQiwwREFBQSxpQkFBUSxNQUFZLENBQ2hCLENBQUM7QUFFakI7QUFFQSxJQUFNVSxJQUFJLEdBQUc7RUFDVEcsS0FBSyxFQUFFLGFBQWE7RUFDcEJFLEtBQUssRUFBRSwrR0FBK0c7RUFDdEhDLFdBQVcsRUFBRSxzUUFBc1E7RUFDblJDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRFYsSUFBSSxDQUFDa0IsTUFBTSxlQUNQekIsMERBQUEsQ0FBQ1EsR0FBRztFQUFDRSxJQUFJLEVBQUVBO0FBQUssQ0FBQyxDQUNyQixDQUFDOzs7Ozs7OztVQ2pFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIGNvbnN0IHtkYXRhfSA9IHByb3BzO1xuICAgIHJldHVybiA8U2hvcEl0ZW0gZGF0YT17ZGF0YX0vPjtcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW0ocHJvcHMpIHtcbiAgICBjb25zdCB7ZGF0YX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGgxPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2V9Lz5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICBDZW5hOiB7ZGF0YS5wcmljZX0gesWCXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5LdXAhPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1IZWFkZXIoe3RpdGxlLCBpbWFnZX0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAgLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbURlc2NyaXB0aW9uKHtkZXNjfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPHA+e2Rlc2N9PC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbVByaWNpbmcoe3ByaWNlfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICBDZW5hOiB7cHJpY2V9IHrFglxuICAgICAgICAgICAgPGJ1dHRvbj5LdXAhPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn1cblxuY29uc3QgZGF0YSA9IHtcbiAgICB0aXRsZTogXCJNYWNCb29rIFByb1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzMwMzM4My9wZXhlbHMtcGhvdG8tMzAzMzgzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2MgaSBtb2JpbG5vxZvEhyDigJMgTWFjQm9vayBQcm8gd3lyYcW6bmllIHBvZG5vc2kgdHUgcG9wcnplY3prxJkuIFRlcmF6IG1vxbxlc3ogamVzemN6ZSBzenliY2llaiByZWFsaXpvd2HEhyBzd29qZSBwb215c8WCeS4gUG9tb2fEhSBDaSB3IHR5bSB3eWRham5lIHByb2Nlc29yeSBpIHVrxYJhZHkgcGFtacSZY2ksIHphYXdhbnNvd2FuYSBncmFmaWthLCBixYJ5c2thd2ljem5pZSBkemlhxYJhasSFY2EgcGFtacSZxIcgbWFzb3dhIGkgaW5uZSBkb3Nrb25hxYJlIHJvendpxIV6YW5pYS5cIixcbiAgICBwcmljZTogOTk5OVxufTtcblxucm9vdC5yZW5kZXIoXG4gICAgPEFwcCBkYXRhPXtkYXRhfS8+XG4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTM1NzVkNzNmMDQyNGQ5MzE0N2JcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsInByb3BzIiwiZGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJTaG9wSXRlbSIsInRpdGxlIiwic3JjIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiU2hvcEl0ZW1IZWFkZXIiLCJfcmVmIiwiU2hvcEl0ZW1EZXNjcmlwdGlvbiIsIl9yZWYyIiwiZGVzYyIsIlNob3BJdGVtUHJpY2luZyIsIl9yZWYzIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==