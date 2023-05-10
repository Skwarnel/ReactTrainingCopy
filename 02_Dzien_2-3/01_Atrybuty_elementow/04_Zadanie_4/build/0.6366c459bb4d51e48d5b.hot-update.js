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
var style = {
  width: '100px',
  height: '100px',
  borderWidth: '5px',
  borderStyle: 'solid'
};
var result = false;
for (var i = 0; i < allowedAnswers.length; i++) {
  if (allowedAnswers[i] === answer) {
    result = true;
  }
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
/******/ 	__webpack_require__.h = () => ("c4d4dbb4eac2af18f3be")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42MzY2YzQ1OWJiNGQ1MWU0OGQ1Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFDbEMsSUFBTUksTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ2xFLElBQU1DLGNBQWMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO0FBQy9DLElBQU1DLEtBQUssR0FBRztFQUFDQyxLQUFLLEVBQUUsT0FBTztFQUFFQyxNQUFNLEVBQUUsT0FBTztFQUFFQyxXQUFXLEVBQUUsS0FBSztFQUFFQyxXQUFXLEVBQUU7QUFBTyxDQUFDO0FBRXpGLElBQUlDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUCxjQUFjLENBQUNRLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7RUFDNUMsSUFBSVAsY0FBYyxDQUFDTyxDQUFDLENBQUMsS0FBS1YsTUFBTSxFQUFFO0lBQzlCUyxNQUFNLEdBQUcsSUFBSTtFQUNqQjtBQUNKO0FBR0EsSUFBSUEsTUFBTSxFQUFFO0VBQ1JWLElBQUksQ0FBQ2EsTUFBTSxlQUFDbEIsMERBQUE7SUFBSVUsS0FBSyxFQUFFQTtFQUFNLEdBQUMsMkNBQW1DLENBQUMsQ0FBQztBQUN2RSxDQUFDLE1BQU07RUFDSEwsSUFBSSxDQUFDYSxNQUFNLGVBQUNsQiwwREFBQSxhQUFJLGtEQUFvRCxDQUFDLENBQUM7QUFDMUU7Ozs7Ozs7O1VDdEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDJfRHppZW5fMi0zLzAxX0F0cnlidXR5X2VsZW1lbnRvdy8wNF9aYWRhbmllXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbmNvbnN0IGFuc3dlciA9IFN0cmluZyhwcm9tcHQoJ0pha2kga29sb3IgcmFta2kgY2hjZXN6IHpvYmFjennEhz8nKSk7XG5jb25zdCBhbGxvd2VkQW5zd2VycyA9IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXTtcbmNvbnN0IHN0eWxlID0ge3dpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcsIGJvcmRlcldpZHRoOiAnNXB4JywgYm9yZGVyU3R5bGU6ICdzb2xpZCd9O1xuXG5sZXQgcmVzdWx0ID0gZmFsc2U7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgYWxsb3dlZEFuc3dlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYWxsb3dlZEFuc3dlcnNbaV0gPT09IGFuc3dlcikge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cbn1cblxuXG5pZiAocmVzdWx0KSB7XG4gICAgcm9vdC5yZW5kZXIoPGgxIHN0eWxlPXtzdHlsZX0+VWR6aWVsacWCYcWbIHBvcHJhd25laiBvZHBvd2llZHppPC9oMT4pO1xufSBlbHNlIHtcbiAgICByb290LnJlbmRlcig8aDE+UHJ6eWtybyBuYW0gOiggbmllIG1hbXkgdGFraWVnbyBrb2xvcnUgdyBvZmVyY2llPC9oMT4pO1xufVxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM0ZDRkYmI0ZWFjMmFmMThmM2JlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiYW5zd2VyIiwiU3RyaW5nIiwicHJvbXB0IiwiYWxsb3dlZEFuc3dlcnMiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==