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
var numberA = Number(prompt('Podaj pierwszą liczbę: '));
var numberB = Number(prompt('Podaj drugą liczbę: '));
var algebraicOperation = String(prompt('Wybierz matematyczne działanie do wykonania (+ - * : )'));
function calc(a, b, operation) {
  if (operation === "+") {
    return "<h1>" + a + b + "</h1>";
  } else if (operation === "-") {
    return "<h2>" + a - b + "</h2>";
  } else if (operation === "*") {
    return "<h3>" + a * b + "</h3>";
  } else if (operation === ":") {
    return "<h4>" + a / b + "</h4>";
  } else {
    return "<h5>Wprowadziłeś błędne dane</h5>";
  }
}
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Wynik to: ", calc(numberA, numberB, algebraicOperation)));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5ac4a45ca3d3a9216d5d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMGJlMTdmNDdhY2FlOTA1NGFhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFFbEMsSUFBTUksT0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3pELElBQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN0RCxJQUFNRSxrQkFBa0IsR0FBR0MsTUFBTSxDQUFDSCxNQUFNLENBQUMsd0RBQXdELENBQUMsQ0FBQztBQUVuRyxTQUFTSSxJQUFJQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsU0FBUyxFQUFFO0VBQzNCLElBQUlBLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDbkIsT0FBTyxNQUFNLEdBQUdGLENBQUMsR0FBR0MsQ0FBQyxHQUFHLE9BQU87RUFDbkMsQ0FBQyxNQUFNLElBQUlDLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDMUIsT0FBTyxNQUFNLEdBQUdGLENBQUMsR0FBR0MsQ0FBQyxHQUFHLE9BQU87RUFDbkMsQ0FBQyxNQUFNLElBQUlDLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDMUIsT0FBTyxNQUFNLEdBQUdGLENBQUMsR0FBR0MsQ0FBQyxHQUFHLE9BQU87RUFDbkMsQ0FBQyxNQUFNLElBQUlDLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDMUIsT0FBTyxNQUFNLEdBQUdGLENBQUMsR0FBR0MsQ0FBQyxHQUFHLE9BQU87RUFDbkMsQ0FBQyxNQUFNO0lBQ0gsT0FBTyxtQ0FBbUM7RUFDOUM7QUFDSjtBQUVBVCxJQUFJLENBQUNXLE1BQU0sZUFBQ2hCLDBEQUFBLGNBQUssWUFBVSxFQUFDWSxJQUFJLENBQUNOLE9BQU8sRUFBRUcsT0FBTyxFQUFFQyxrQkFBa0IsQ0FBTyxDQUFDLENBQUM7Ozs7Ozs7O1VDeEI5RSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0R6aWVuXzEvMDNfV3lyYXplbmlhLzA1X1phZGFuaWVfNS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5jb25zdCBudW1iZXJBID0gTnVtYmVyKHByb21wdCgnUG9kYWogcGllcndzesSFIGxpY3pixJk6ICcpKTtcbmNvbnN0IG51bWJlckIgPSBOdW1iZXIocHJvbXB0KCdQb2RhaiBkcnVnxIUgbGljemLEmTogJykpO1xuY29uc3QgYWxnZWJyYWljT3BlcmF0aW9uID0gU3RyaW5nKHByb21wdCgnV3liaWVyeiBtYXRlbWF0eWN6bmUgZHppYcWCYW5pZSBkbyB3eWtvbmFuaWEgKCsgLSAqIDogKScpKTtcblxuZnVuY3Rpb24gY2FsYyhhLCBiLCBvcGVyYXRpb24pIHtcbiAgICBpZiAob3BlcmF0aW9uID09PSBcIitcIikge1xuICAgICAgICByZXR1cm4gXCI8aDE+XCIgKyBhICsgYiArIFwiPC9oMT5cIjtcbiAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gXCItXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiPGgyPlwiICsgYSAtIGIgKyBcIjwvaDI+XCI7XG4gICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09IFwiKlwiKSB7XG4gICAgICAgIHJldHVybiBcIjxoMz5cIiArIGEgKiBiICsgXCI8L2gzPlwiO1xuICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSBcIjpcIikge1xuICAgICAgICByZXR1cm4gXCI8aDQ+XCIgKyBhIC8gYiArIFwiPC9oND5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCI8aDU+V3Byb3dhZHppxYJlxZsgYsWCxJlkbmUgZGFuZTwvaDU+XCI7XG4gICAgfVxufVxuXG5yb290LnJlbmRlcig8ZGl2Pld5bmlrIHRvOiB7Y2FsYyhudW1iZXJBLCBudW1iZXJCLCBhbGdlYnJhaWNPcGVyYXRpb24pfTwvZGl2Pik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1YWM0YTQ1Y2EzZDNhOTIxNmQ1ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIm51bWJlckEiLCJOdW1iZXIiLCJwcm9tcHQiLCJudW1iZXJCIiwiYWxnZWJyYWljT3BlcmF0aW9uIiwiU3RyaW5nIiwiY2FsYyIsImEiLCJiIiwib3BlcmF0aW9uIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=