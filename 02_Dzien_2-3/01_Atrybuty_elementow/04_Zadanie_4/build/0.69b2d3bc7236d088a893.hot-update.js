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
var color = prompt('Jaki kolor ramki chcesz zobaczyć?');
var allowedAnswers = ['red', 'green', 'blue'];
var style = {
  width: '100px',
  height: '100px',
  borderWidth: '5px',
  borderStyle: 'solid',
  borderColor: {
    color: color
  }
};
var result = false;
for (var i = 0; i < allowedAnswers.length; i++) {
  if (allowedAnswers[i] === color) {
    result = true;
  } else {}
}
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
/******/ 	__webpack_require__.h = () => ("972f01c5d883d74e8b2d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42OWIyZDNiYzcyMzZkMDg4YTg5My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFDbEMsSUFBTUksS0FBSyxHQUFHQyxNQUFNLENBQUMsbUNBQW1DLENBQUM7QUFDekQsSUFBTUMsY0FBYyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7QUFDL0MsSUFBTUMsS0FBSyxHQUFHO0VBQUNDLEtBQUssRUFBRSxPQUFPO0VBQUVDLE1BQU0sRUFBRSxPQUFPO0VBQUVDLFdBQVcsRUFBRSxLQUFLO0VBQUVDLFdBQVcsRUFBRSxPQUFPO0VBQUVDLFdBQVcsRUFBRTtJQUFDUixLQUFLLEVBQUxBO0VBQUs7QUFBQyxDQUFDO0FBRS9HLElBQUlTLE1BQU0sR0FBRyxLQUFLO0FBRWxCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUixjQUFjLENBQUNTLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7RUFDNUMsSUFBSVIsY0FBYyxDQUFDUSxDQUFDLENBQUMsS0FBS1YsS0FBSyxFQUFFO0lBQzdCUyxNQUFNLEdBQUcsSUFBSTtFQUVqQixDQUFDLE1BQU0sQ0FFUDtBQUNKO0FBR0EsSUFBSUEsTUFBTSxFQUFFO0VBQ1JWLElBQUksQ0FBQ2EsTUFBTSxlQUFDbEIsMERBQUE7SUFBSVMsS0FBSyxFQUFFQTtFQUFNLEdBQUMsMkNBQW1DLENBQUMsQ0FBQztBQUN2RSxDQUFDLE1BQU07RUFDSEosSUFBSSxDQUFDYSxNQUFNLGVBQUNsQiwwREFBQSxhQUFJLGtEQUFvRCxDQUFDLENBQUM7QUFDMUU7Ozs7Ozs7O1VDekJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDJfRHppZW5fMi0zLzAxX0F0cnlidXR5X2VsZW1lbnRvdy8wNF9aYWRhbmllXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbmNvbnN0IGNvbG9yID0gcHJvbXB0KCdKYWtpIGtvbG9yIHJhbWtpIGNoY2VzeiB6b2JhY3p5xIc/Jyk7XG5jb25zdCBhbGxvd2VkQW5zd2VycyA9IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXTtcbmNvbnN0IHN0eWxlID0ge3dpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcsIGJvcmRlcldpZHRoOiAnNXB4JywgYm9yZGVyU3R5bGU6ICdzb2xpZCcsIGJvcmRlckNvbG9yOiB7Y29sb3J9fTtcblxubGV0IHJlc3VsdCA9IGZhbHNlO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGFsbG93ZWRBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFsbG93ZWRBbnN3ZXJzW2ldID09PSBjb2xvcikge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgfSBlbHNlIHtcblxuICAgIH1cbn1cblxuXG5pZiAocmVzdWx0KSB7XG4gICAgcm9vdC5yZW5kZXIoPGgxIHN0eWxlPXtzdHlsZX0+VWR6aWVsacWCYcWbIHBvcHJhd25laiBvZHBvd2llZHppPC9oMT4pO1xufSBlbHNlIHtcbiAgICByb290LnJlbmRlcig8aDE+UHJ6eWtybyBuYW0gOiggbmllIG1hbXkgdGFraWVnbyBrb2xvcnUgdyBvZmVyY2llPC9oMT4pO1xufVxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk3MmYwMWM1ZDg4M2Q3NGU4YjJkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiY29sb3IiLCJwcm9tcHQiLCJhbGxvd2VkQW5zd2VycyIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=