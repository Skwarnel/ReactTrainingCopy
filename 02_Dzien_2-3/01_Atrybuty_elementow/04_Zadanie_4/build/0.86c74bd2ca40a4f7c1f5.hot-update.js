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
var answer = prompt('Jaki kolor ramki chcesz zobaczyć?');
var allowedAnswers = ['red', 'green', 'blue'];
var result = false;
for (var i = 0; i < allowedAnswers.length; i++) {
  if (allowedAnswers[i] === answer) {
    result = true;
    var color = answer;
  }
}
if (result) {
  var style = {
    width: '100px',
    height: '100px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: 'red'
  };
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
/******/ 	__webpack_require__.h = () => ("cf5240f6751a32616634")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44NmM3NGJkMmNhNDBhNGY3YzFmNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFDbEMsSUFBTUksTUFBTSxHQUFHQyxNQUFNLENBQUMsbUNBQW1DLENBQUM7QUFDMUQsSUFBTUMsY0FBYyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7QUFFL0MsSUFBSUMsTUFBTSxHQUFHLEtBQUs7QUFFbEIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLGNBQWMsQ0FBQ0csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtFQUM1QyxJQUFJRixjQUFjLENBQUNFLENBQUMsQ0FBQyxLQUFLSixNQUFNLEVBQUU7SUFDOUJHLE1BQU0sR0FBRyxJQUFJO0lBQ2IsSUFBTUcsS0FBSyxHQUFHTixNQUFNO0VBQ3hCO0FBQ0o7QUFHQSxJQUFJRyxNQUFNLEVBQUU7RUFDUixJQUFNSSxLQUFLLEdBQUc7SUFBQ0MsS0FBSyxFQUFFLE9BQU87SUFBRUMsTUFBTSxFQUFFLE9BQU87SUFBRUMsV0FBVyxFQUFFLEtBQUs7SUFBRUMsV0FBVyxFQUFFLE9BQU87SUFBRUMsV0FBVyxFQUFFO0VBQUssQ0FBQztFQUM3R2IsSUFBSSxDQUFDYyxNQUFNLGVBQUNuQiwwREFBQTtJQUFJYSxLQUFLLEVBQUVBO0VBQU0sR0FBQywyQ0FBbUMsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsTUFBTTtFQUNIUixJQUFJLENBQUNjLE1BQU0sZUFBQ25CLDBEQUFBLGFBQUksa0RBQW9ELENBQUMsQ0FBQztBQUMxRTs7Ozs7Ozs7VUN2QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMl9Eemllbl8yLTMvMDFfQXRyeWJ1dHlfZWxlbWVudG93LzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuY29uc3QgYW5zd2VyID0gcHJvbXB0KCdKYWtpIGtvbG9yIHJhbWtpIGNoY2VzeiB6b2JhY3p5xIc/Jyk7XG5jb25zdCBhbGxvd2VkQW5zd2VycyA9IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXTtcblxubGV0IHJlc3VsdCA9IGZhbHNlO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGFsbG93ZWRBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFsbG93ZWRBbnN3ZXJzW2ldID09PSBhbnN3ZXIpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBhbnN3ZXI7XG4gICAgfVxufVxuXG5cbmlmIChyZXN1bHQpIHtcbiAgICBjb25zdCBzdHlsZSA9IHt3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnLCBib3JkZXJXaWR0aDogJzVweCcsIGJvcmRlclN0eWxlOiAnc29saWQnLCBib3JkZXJDb2xvcjogJ3JlZCd9O1xuICAgIHJvb3QucmVuZGVyKDxoMSBzdHlsZT17c3R5bGV9PlVkemllbGnFgmHFmyBwb3ByYXduZWogb2Rwb3dpZWR6aTwvaDE+KTtcbn0gZWxzZSB7XG4gICAgcm9vdC5yZW5kZXIoPGgxPlByenlrcm8gbmFtIDooIG5pZSBtYW15IHRha2llZ28ga29sb3J1IHcgb2ZlcmNpZTwvaDE+KTtcbn1cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZjUyNDBmNjc1MWEzMjYxNjYzNFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsImFuc3dlciIsInByb21wdCIsImFsbG93ZWRBbnN3ZXJzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImNvbG9yIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJDb2xvciIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9