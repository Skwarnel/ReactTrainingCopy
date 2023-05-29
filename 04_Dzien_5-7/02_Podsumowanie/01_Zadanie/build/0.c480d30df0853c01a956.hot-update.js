"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Receipt, {
    table: _data_products__WEBPACK_IMPORTED_MODULE_2__["default"]
  });
};
var Receipt = function Receipt(props) {
  var table = props.table;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Nazwa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Cena"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Ilo\u015B\u0107"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "\u0141\u0105czna cena")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, table.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, table.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, item.single_price);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, table.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, item.qty);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, table.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, item.single_price * item.qty);
  }))));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ca23f2f1411ac99fb1ba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jNDgwZDMwZGYwODUzYzAxYTk1Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tCO0FBQ0w7QUFFdkMsSUFBTUcsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUFPSCwwREFBQSxDQUFDSyxPQUFPO0lBQUNDLEtBQUssRUFBRUosc0RBQVFBO0VBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFFRCxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUUsS0FBSyxFQUFLO0VBQ3ZCLElBQU9ELEtBQUssR0FBSUMsS0FBSyxDQUFkRCxLQUFLO0VBQ1osb0JBQ0lOLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFPUSxTQUFTLEVBQUM7RUFBTyxnQkFDcEJSLDBEQUFBLDBCQUNJQSwwREFBQSxhQUFJLE9BQVMsQ0FBQyxlQUNkQSwwREFBQSxhQUFJLE1BQVEsQ0FBQyxlQUNiQSwwREFBQSxhQUFJLGlCQUFTLENBQUMsZUFDZEEsMERBQUEsYUFBSSx1QkFBZSxDQUNuQixDQUFDLGVBQ0xBLDBEQUFBLGFBQUtNLEtBQUssQ0FBQ0csR0FBRyxDQUFDLFVBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLO0lBQzVCLG9CQUNJWCwwREFBQSxhQUFLVSxJQUFJLENBQUNFLElBQVMsQ0FBQztFQUU1QixDQUFDLENBQU0sQ0FBQyxlQUVSWiwwREFBQSxhQUFLTSxLQUFLLENBQUNHLEdBQUcsQ0FBQyxVQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBSztJQUM1QixvQkFDSVgsMERBQUEsYUFBS1UsSUFBSSxDQUFDRyxZQUFpQixDQUFDO0VBRXBDLENBQUMsQ0FDRyxDQUFDLGVBQ0xiLDBEQUFBLGFBQUtNLEtBQUssQ0FBQ0csR0FBRyxDQUFDLFVBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLO0lBQzVCLG9CQUNJWCwwREFBQSxhQUFLVSxJQUFJLENBQUNJLEdBQVEsQ0FBQztFQUUzQixDQUFDLENBQU0sQ0FBQyxlQUNSZCwwREFBQSxhQUFLTSxLQUFLLENBQUNHLEdBQUcsQ0FBQyxVQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBSztJQUM1QixvQkFDSVgsMERBQUEsYUFBS1UsSUFBSSxDQUFDRyxZQUFZLEdBQUdILElBQUksQ0FBQ0ksR0FBUSxDQUFDO0VBRS9DLENBQUMsQ0FBTSxDQUNKLENBRU4sQ0FBQztBQUVkLENBQUM7QUFFRCxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdqQiw0REFBVSxDQUFDYyxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDbkIsMERBQUEsQ0FBQ0csR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNqRG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAyX1BvZHN1bW93YW5pZS8wMV9aYWRhbmllL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBwcm9kdWN0cyBmcm9tICcuL2RhdGEvcHJvZHVjdHMnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxSZWNlaXB0IHRhYmxlPXtwcm9kdWN0c30vPjtcbn1cblxuY29uc3QgUmVjZWlwdCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHt0YWJsZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+TmF6d2E8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+Q2VuYTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5JbG/Fm8SHPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPsWBxIVjem5hIGNlbmE8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRkPnt0YWJsZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+e2l0ZW0ubmFtZX08L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9PC90ZD5cblxuICAgICAgICAgICAgICAgIDx0ZD57dGFibGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPntpdGVtLnNpbmdsZV9wcmljZX08L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RhYmxlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj57aXRlbS5xdHl9PC90cj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt0YWJsZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+e2l0ZW0uc2luZ2xlX3ByaWNlICogaXRlbS5xdHl9PC90cj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfTwvdGQ+XG4gICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNhMjNmMmYxNDExYWM5OWZiMWJhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsInByb2R1Y3RzIiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIlJlY2VpcHQiLCJ0YWJsZSIsInByb3BzIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwibmFtZSIsInNpbmdsZV9wcmljZSIsInF0eSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==