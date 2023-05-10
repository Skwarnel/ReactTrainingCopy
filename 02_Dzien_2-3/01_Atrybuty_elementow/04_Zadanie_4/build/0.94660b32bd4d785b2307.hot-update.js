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
    var _style = {
      width: '100px',
      height: '100px',
      borderWidth: '5px',
      borderStyle: 'solid'
    };
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
/******/ 	__webpack_require__.h = () => ("6366c459bb4d51e48d5b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45NDY2MGIzMmJkNGQ3ODViMjMwNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFDbEMsSUFBTUksTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ2xFLElBQU1DLGNBQWMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO0FBRS9DLElBQUlDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixjQUFjLENBQUNHLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7RUFDNUMsSUFBSUYsY0FBYyxDQUFDRSxDQUFDLENBQUMsS0FBS0wsTUFBTSxFQUFFO0lBQzlCSSxNQUFNLEdBQUcsSUFBSTtJQUNiLElBQU1HLE1BQUssR0FBRztNQUFDQyxLQUFLLEVBQUUsT0FBTztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFQyxXQUFXLEVBQUUsS0FBSztNQUFFQyxXQUFXLEVBQUU7SUFBTyxDQUFDO0VBQzdGO0FBQ0o7QUFHQSxJQUFJUCxNQUFNLEVBQUU7RUFDUkwsSUFBSSxDQUFDYSxNQUFNLGVBQUNsQiwwREFBQTtJQUFJYSxLQUFLLEVBQUVBO0VBQU0sR0FBQywyQ0FBbUMsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsTUFBTTtFQUNIUixJQUFJLENBQUNhLE1BQU0sZUFBQ2xCLDBEQUFBLGFBQUksa0RBQW9ELENBQUMsQ0FBQztBQUMxRTs7Ozs7Ozs7VUN0QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMl9Eemllbl8yLTMvMDFfQXRyeWJ1dHlfZWxlbWVudG93LzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuY29uc3QgYW5zd2VyID0gU3RyaW5nKHByb21wdCgnSmFraSBrb2xvciByYW1raSBjaGNlc3ogem9iYWN6ecSHPycpKTtcbmNvbnN0IGFsbG93ZWRBbnN3ZXJzID0gWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddO1xuXG5sZXQgcmVzdWx0ID0gZmFsc2U7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgYWxsb3dlZEFuc3dlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYWxsb3dlZEFuc3dlcnNbaV0gPT09IGFuc3dlcikge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHt3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnLCBib3JkZXJXaWR0aDogJzVweCcsIGJvcmRlclN0eWxlOiAnc29saWQnfTtcbiAgICB9XG59XG5cblxuaWYgKHJlc3VsdCkge1xuICAgIHJvb3QucmVuZGVyKDxoMSBzdHlsZT17c3R5bGV9PlVkemllbGnFgmHFmyBwb3ByYXduZWogb2Rwb3dpZWR6aTwvaDE+KTtcbn0gZWxzZSB7XG4gICAgcm9vdC5yZW5kZXIoPGgxPlByenlrcm8gbmFtIDooIG5pZSBtYW15IHRha2llZ28ga29sb3J1IHcgb2ZlcmNpZTwvaDE+KTtcbn1cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MzY2YzQ1OWJiNGQ1MWU0OGQ1YlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsImFuc3dlciIsIlN0cmluZyIsInByb21wdCIsImFsbG93ZWRBbnN3ZXJzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=