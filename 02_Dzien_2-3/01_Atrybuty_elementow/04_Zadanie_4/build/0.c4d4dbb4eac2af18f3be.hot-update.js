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
    var _style = {
      width: '100px',
      height: '100px',
      borderWidth: '5px',
      borderStyle: 'solid'
    };
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
/******/ 	__webpack_require__.h = () => ("e5815f1643227077be91")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jNGQ0ZGJiNGVhYzJhZjE4ZjNiZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFDbEMsSUFBTUksTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ2xFLElBQU1DLGNBQWMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO0FBRS9DLElBQUlDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixjQUFjLENBQUNHLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7RUFDNUMsSUFBSUYsY0FBYyxDQUFDRSxDQUFDLENBQUMsS0FBS0wsTUFBTSxFQUFFO0lBQzlCLElBQU1PLE1BQUssR0FBRztNQUFDQyxLQUFLLEVBQUUsT0FBTztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFQyxXQUFXLEVBQUUsS0FBSztNQUFFQyxXQUFXLEVBQUU7SUFBTyxDQUFDO0lBQ3pGUCxNQUFNLEdBQUcsSUFBSTtFQUNqQjtBQUNKO0FBR0EsSUFBSUEsTUFBTSxFQUFFO0VBQ1JMLElBQUksQ0FBQ2EsTUFBTSxlQUFDbEIsMERBQUE7SUFBSWEsS0FBSyxFQUFFQTtFQUFNLEdBQUMsMkNBQW1DLENBQUMsQ0FBQztBQUN2RSxDQUFDLE1BQU07RUFDSFIsSUFBSSxDQUFDYSxNQUFNLGVBQUNsQiwwREFBQSxhQUFJLGtEQUFvRCxDQUFDLENBQUM7QUFDMUU7Ozs7Ozs7O1VDdEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDJfRHppZW5fMi0zLzAxX0F0cnlidXR5X2VsZW1lbnRvdy8wNF9aYWRhbmllXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbmNvbnN0IGFuc3dlciA9IFN0cmluZyhwcm9tcHQoJ0pha2kga29sb3IgcmFta2kgY2hjZXN6IHpvYmFjennEhz8nKSk7XG5jb25zdCBhbGxvd2VkQW5zd2VycyA9IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXTtcblxubGV0IHJlc3VsdCA9IGZhbHNlO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGFsbG93ZWRBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFsbG93ZWRBbnN3ZXJzW2ldID09PSBhbnN3ZXIpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7d2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4JywgYm9yZGVyV2lkdGg6ICc1cHgnLCBib3JkZXJTdHlsZTogJ3NvbGlkJ307XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxufVxuXG5cbmlmIChyZXN1bHQpIHtcbiAgICByb290LnJlbmRlcig8aDEgc3R5bGU9e3N0eWxlfT5VZHppZWxpxYJhxZsgcG9wcmF3bmVqIG9kcG93aWVkemk8L2gxPik7XG59IGVsc2Uge1xuICAgIHJvb3QucmVuZGVyKDxoMT5Qcnp5a3JvIG5hbSA6KCBuaWUgbWFteSB0YWtpZWdvIGtvbG9ydSB3IG9mZXJjaWU8L2gxPik7XG59XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTU4MTVmMTY0MzIyNzA3N2JlOTFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJhbnN3ZXIiLCJTdHJpbmciLCJwcm9tcHQiLCJhbGxvd2VkQW5zd2VycyIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9