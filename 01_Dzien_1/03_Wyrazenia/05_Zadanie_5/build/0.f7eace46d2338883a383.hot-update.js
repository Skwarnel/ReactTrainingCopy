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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Wynik to: ", a + b);
  } else if (operation === "-") {
    return "(<h2>Wynik to: a - b</h2>)";
  } else if (operation === "*") {
    return "<h3>Wynik to: a * b</h3>";
  } else if (operation === ":") {
    return "<h4>Wynik to: a / b</h4>";
  } else {
    return "<h5>Wprowadziłeś błędne dane</h5>";
  }
}
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, calc(numberA, numberB, algebraicOperation)));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eca548f595acc0ca4af5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mN2VhY2U0NmQyMzM4ODgzYTM4My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFFbEMsSUFBTUksT0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3pELElBQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN0RCxJQUFNRSxrQkFBa0IsR0FBR0MsTUFBTSxDQUFDSCxNQUFNLENBQUMsd0RBQXdELENBQUMsQ0FBQztBQUVuRyxTQUFTSSxJQUFJQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsU0FBUyxFQUFFO0VBQzNCLElBQUlBLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDbkIsb0JBQU9mLDBEQUFBLGFBQUksWUFBVSxFQUFDYSxDQUFDLEdBQUdDLENBQU0sQ0FBQztFQUNyQyxDQUFDLE1BQU0sSUFBSUMsU0FBUyxLQUFLLEdBQUcsRUFBRTtJQUMxQjtFQUNKLENBQUMsTUFBTSxJQUFJQSxTQUFTLEtBQUssR0FBRyxFQUFFO0lBQzFCO0VBQ0osQ0FBQyxNQUFNLElBQUlBLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDMUI7RUFDSixDQUFDLE1BQU07SUFDSCxPQUFPLG1DQUFtQztFQUM5QztBQUNKO0FBRUFWLElBQUksQ0FBQ1ksTUFBTSxlQUFDakIsMERBQUEsY0FBTVksSUFBSSxDQUFDTixPQUFPLEVBQUVHLE9BQU8sRUFBRUMsa0JBQWtCLENBQU8sQ0FBQyxDQUFDOzs7Ozs7OztVQ3hCcEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAzX1d5cmF6ZW5pYS8wNV9aYWRhbmllXzUvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuY29uc3QgbnVtYmVyQSA9IE51bWJlcihwcm9tcHQoJ1BvZGFqIHBpZXJ3c3rEhSBsaWN6YsSZOiAnKSk7XG5jb25zdCBudW1iZXJCID0gTnVtYmVyKHByb21wdCgnUG9kYWogZHJ1Z8SFIGxpY3pixJk6ICcpKTtcbmNvbnN0IGFsZ2VicmFpY09wZXJhdGlvbiA9IFN0cmluZyhwcm9tcHQoJ1d5YmllcnogbWF0ZW1hdHljem5lIGR6aWHFgmFuaWUgZG8gd3lrb25hbmlhICgrIC0gKiA6ICknKSk7XG5cbmZ1bmN0aW9uIGNhbGMoYSwgYiwgb3BlcmF0aW9uKSB7XG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gXCIrXCIpIHtcbiAgICAgICAgcmV0dXJuIDxoMT5XeW5payB0bzoge2EgKyBifTwvaDE+O1xuICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSBcIi1cIikge1xuICAgICAgICByZXR1cm4gYCg8aDI+V3luaWsgdG86IGEgLSBiPC9oMj4pYDtcbiAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gXCIqXCIpIHtcbiAgICAgICAgcmV0dXJuIGA8aDM+V3luaWsgdG86IGEgKiBiPC9oMz5gO1xuICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSBcIjpcIikge1xuICAgICAgICByZXR1cm4gYDxoND5XeW5payB0bzogYSAvIGI8L2g0PmA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiPGg1Pldwcm93YWR6acWCZcWbIGLFgsSZZG5lIGRhbmU8L2g1PlwiO1xuICAgIH1cbn1cblxucm9vdC5yZW5kZXIoPGRpdj57Y2FsYyhudW1iZXJBLCBudW1iZXJCLCBhbGdlYnJhaWNPcGVyYXRpb24pfTwvZGl2Pik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlY2E1NDhmNTk1YWNjMGNhNGFmNVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIm51bWJlckEiLCJOdW1iZXIiLCJwcm9tcHQiLCJudW1iZXJCIiwiYWxnZWJyYWljT3BlcmF0aW9uIiwiU3RyaW5nIiwiY2FsYyIsImEiLCJiIiwib3BlcmF0aW9uIiwiY3JlYXRlRWxlbWVudCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=