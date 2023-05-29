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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Nazwa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Cena"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Ilo\u015B\u0107"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "\u0141\u0105czna cena")), table.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, item.name);
  }), table.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, item.single_price);
  }), table.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, item.qty);
  }), table.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, item.single_price * item.qty);
  })));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("71e3af95634bbfcb2c97")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MzU3ZjVjYWVmNTgxOGRlZTY1MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tCO0FBQ0w7QUFFdkMsSUFBTUcsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUFPSCwwREFBQSxDQUFDSyxPQUFPO0lBQUNDLEtBQUssRUFBRUosc0RBQVFBO0VBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFFRCxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUUsS0FBSyxFQUFLO0VBQ3ZCLElBQU9ELEtBQUssR0FBSUMsS0FBSyxDQUFkRCxLQUFLO0VBQ1osb0JBQ0lOLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFPUSxTQUFTLEVBQUM7RUFBTyxnQkFDcEJSLDBEQUFBLDBCQUNJQSwwREFBQSxhQUFJLE9BQVMsQ0FBQyxlQUNkQSwwREFBQSxhQUFJLE1BQVEsQ0FBQyxlQUNiQSwwREFBQSxhQUFJLGlCQUFTLENBQUMsZUFDZEEsMERBQUEsYUFBSSx1QkFBZSxDQUNuQixDQUFDLEVBQ0pNLEtBQUssQ0FBQ0csR0FBRyxDQUFDLFVBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLO0lBQ3hCLG9CQUNJWCwwREFBQSxhQUFLVSxJQUFJLENBQUNFLElBQVMsQ0FBQztFQUU1QixDQUFDLENBQUMsRUFFRE4sS0FBSyxDQUFDRyxHQUFHLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUs7SUFDeEIsb0JBQ0lYLDBEQUFBLGFBQUtVLElBQUksQ0FBQ0csWUFBaUIsQ0FBQztFQUVwQyxDQUFDLENBQUMsRUFFRFAsS0FBSyxDQUFDRyxHQUFHLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUs7SUFDeEIsb0JBQ0lYLDBEQUFBLGFBQUtVLElBQUksQ0FBQ0ksR0FBUSxDQUFDO0VBRTNCLENBQUMsQ0FBQyxFQUVEUixLQUFLLENBQUNHLEdBQUcsQ0FBQyxVQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBSztJQUN4QixvQkFDSVgsMERBQUEsYUFBS1UsSUFBSSxDQUFDRyxZQUFZLEdBQUdILElBQUksQ0FBQ0ksR0FBUSxDQUFDO0VBRS9DLENBQUMsQ0FDRSxDQUVOLENBQUM7QUFFZCxDQUFDO0FBRUQsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHakIsNERBQVUsQ0FBQ2MsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ25CLDBEQUFBLENBQUNHLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDbERuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMl9Qb2RzdW1vd2FuaWUvMDFfWmFkYW5pZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi9kYXRhL3Byb2R1Y3RzJztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiA8UmVjZWlwdCB0YWJsZT17cHJvZHVjdHN9Lz47XG59XG5cbmNvbnN0IFJlY2VpcHQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7dGFibGV9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hendhPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkNlbmE8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+SWxvxZvEhzwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD7FgcSFY3puYSBjZW5hPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIHt0YWJsZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+e2l0ZW0ubmFtZX08L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICB7dGFibGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPntpdGVtLnNpbmdsZV9wcmljZX08L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICB7dGFibGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPntpdGVtLnF0eX08L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICB7dGFibGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPntpdGVtLnNpbmdsZV9wcmljZSAqIGl0ZW0ucXR5fTwvdHI+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzFlM2FmOTU2MzRiYmZjYjJjOTdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwicHJvZHVjdHMiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiUmVjZWlwdCIsInRhYmxlIiwicHJvcHMiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYW1lIiwic2luZ2xlX3ByaWNlIiwicXR5IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9