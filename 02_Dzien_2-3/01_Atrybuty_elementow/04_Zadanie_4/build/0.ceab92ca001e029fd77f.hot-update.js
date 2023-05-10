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
var answer = String(prompt('Jaki kolor ramki chcesz zobaczyć?'));
var allowedAnswers = ['red', 'green', 'blue'];
var result = false;
for (var i = 0; i < allowedAnswers.length; i++) {
  if (allowedAnswers[i] === answer) {
    result = true;
  }
}
var style = {
  width: '100px',
  height: '100px',
  borderWidth: '5px',
  borderStyle: 'solid',
  backgroundColor: color
};
if (result) {
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: style
  }, "Udzieli\u0142a\u015B poprawnej odpowiedzi"));
} else {
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Przykro nam :( nie mamy takiego koloru w ofercie"));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a1544a218f681722d5c1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZWFiOTJjYTAwMWUwMjlmZDc3Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFDbEMsSUFBTUksTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ2xFLElBQU1DLGNBQWMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO0FBRS9DLElBQUlDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixjQUFjLENBQUNHLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7RUFDNUMsSUFBSUYsY0FBYyxDQUFDRSxDQUFDLENBQUMsS0FBS0wsTUFBTSxFQUFFO0lBQzlCSSxNQUFNLEdBQUcsSUFBSTtFQUNqQjtBQUNKO0FBRUEsSUFBTUcsS0FBSyxHQUFHO0VBQUNDLEtBQUssRUFBRSxPQUFPO0VBQUVDLE1BQU0sRUFBRSxPQUFPO0VBQUVDLFdBQVcsRUFBRSxLQUFLO0VBQUVDLFdBQVcsRUFBRSxPQUFPO0VBQ3hGQyxlQUFlLEVBQUVDO0FBQUssQ0FBQztBQUV2QixJQUFJVCxNQUFNLEVBQUU7RUFDUkwsSUFBSSxDQUFDZSxNQUFNLGVBQUNwQiwwREFBQTtJQUFJYSxLQUFLLEVBQUVBO0VBQU0sR0FBQywyQ0FBbUMsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsTUFBTTtFQUNIUixJQUFJLENBQUNlLE1BQU0sZUFBQ3BCLDBEQUFBLGFBQUksa0RBQW9ELENBQUMsQ0FBQztBQUMxRTs7Ozs7Ozs7VUN2QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMl9Eemllbl8yLTMvMDFfQXRyeWJ1dHlfZWxlbWVudG93LzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuY29uc3QgYW5zd2VyID0gU3RyaW5nKHByb21wdCgnSmFraSBrb2xvciByYW1raSBjaGNlc3ogem9iYWN6ecSHPycpKTtcbmNvbnN0IGFsbG93ZWRBbnN3ZXJzID0gWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddO1xuXG5sZXQgcmVzdWx0ID0gZmFsc2U7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgYWxsb3dlZEFuc3dlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYWxsb3dlZEFuc3dlcnNbaV0gPT09IGFuc3dlcikge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cbn1cblxuY29uc3Qgc3R5bGUgPSB7d2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4JywgYm9yZGVyV2lkdGg6ICc1cHgnLCBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbmJhY2tncm91bmRDb2xvcjogY29sb3J9O1xuXG5pZiAocmVzdWx0KSB7XG4gICAgcm9vdC5yZW5kZXIoPGgxIHN0eWxlPXtzdHlsZX0+VWR6aWVsacWCYcWbIHBvcHJhd25laiBvZHBvd2llZHppPC9oMT4pO1xufSBlbHNlIHtcbiAgICByb290LnJlbmRlcig8aDE+UHJ6eWtybyBuYW0gOiggbmllIG1hbXkgdGFraWVnbyBrb2xvcnUgdyBvZmVyY2llPC9oMT4pO1xufVxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImExNTQ0YTIxOGY2ODE3MjJkNWMxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiYW5zd2VyIiwiU3RyaW5nIiwicHJvbXB0IiwiYWxsb3dlZEFuc3dlcnMiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9