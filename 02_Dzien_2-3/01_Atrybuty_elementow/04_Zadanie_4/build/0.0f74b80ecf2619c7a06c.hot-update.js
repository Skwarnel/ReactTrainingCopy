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
    root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      style: style
    }, "Udzieli\u0142a\u015B poprawnej odpowiedzi"));
  } else {
    root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Przykro nam :( nie mamy takiego koloru w ofercie"));
  }
}
if (result) {}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("69b2d3bc7236d088a893")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wZjc0YjgwZWNmMjYxOWM3YTA2Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFDbEMsSUFBTUksS0FBSyxHQUFHQyxNQUFNLENBQUMsbUNBQW1DLENBQUM7QUFDekQsSUFBTUMsY0FBYyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7QUFDL0MsSUFBTUMsS0FBSyxHQUFHO0VBQUNDLEtBQUssRUFBRSxPQUFPO0VBQUVDLE1BQU0sRUFBRSxPQUFPO0VBQUVDLFdBQVcsRUFBRSxLQUFLO0VBQUVDLFdBQVcsRUFBRSxPQUFPO0VBQUVDLFdBQVcsRUFBRTtJQUFDUixLQUFLLEVBQUxBO0VBQUs7QUFBQyxDQUFDO0FBRS9HLElBQUlTLE1BQU0sR0FBRyxLQUFLO0FBRWxCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUixjQUFjLENBQUNTLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7RUFDNUMsSUFBSVIsY0FBYyxDQUFDUSxDQUFDLENBQUMsS0FBS1YsS0FBSyxFQUFFO0lBQzdCUyxNQUFNLEdBQUcsSUFBSTtJQUNiVixJQUFJLENBQUNhLE1BQU0sZUFBQ2xCLDBEQUFBO01BQUlTLEtBQUssRUFBRUE7SUFBTSxHQUFDLDJDQUFtQyxDQUFDLENBQUM7RUFDdkUsQ0FBQyxNQUFNO0lBQ0hKLElBQUksQ0FBQ2EsTUFBTSxlQUFDbEIsMERBQUEsYUFBSSxrREFBb0QsQ0FBQyxDQUFDO0VBQzFFO0FBQ0o7QUFHQSxJQUFJZSxNQUFNLEVBQUUsQ0FHWjs7Ozs7Ozs7VUN4QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMl9Eemllbl8yLTMvMDFfQXRyeWJ1dHlfZWxlbWVudG93LzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuY29uc3QgY29sb3IgPSBwcm9tcHQoJ0pha2kga29sb3IgcmFta2kgY2hjZXN6IHpvYmFjennEhz8nKTtcbmNvbnN0IGFsbG93ZWRBbnN3ZXJzID0gWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddO1xuY29uc3Qgc3R5bGUgPSB7d2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4JywgYm9yZGVyV2lkdGg6ICc1cHgnLCBib3JkZXJTdHlsZTogJ3NvbGlkJywgYm9yZGVyQ29sb3I6IHtjb2xvcn19O1xuXG5sZXQgcmVzdWx0ID0gZmFsc2U7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgYWxsb3dlZEFuc3dlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYWxsb3dlZEFuc3dlcnNbaV0gPT09IGNvbG9yKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIHJvb3QucmVuZGVyKDxoMSBzdHlsZT17c3R5bGV9PlVkemllbGnFgmHFmyBwb3ByYXduZWogb2Rwb3dpZWR6aTwvaDE+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LnJlbmRlcig8aDE+UHJ6eWtybyBuYW0gOiggbmllIG1hbXkgdGFraWVnbyBrb2xvcnUgdyBvZmVyY2llPC9oMT4pO1xuICAgIH1cbn1cblxuXG5pZiAocmVzdWx0KSB7XG5cblxufVxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY5YjJkM2JjNzIzNmQwODhhODkzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiY29sb3IiLCJwcm9tcHQiLCJhbGxvd2VkQW5zd2VycyIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=