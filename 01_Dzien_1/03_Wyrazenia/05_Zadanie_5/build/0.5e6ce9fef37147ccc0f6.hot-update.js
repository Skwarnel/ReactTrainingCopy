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
    return "(<h1> + a + b + </h1>)";
  } else if (operation === "-") {
    return "(<h2> + a - b + </h2>)";
  } else if (operation === "*") {
    return "<h3> + a * b + </h3>";
  } else if (operation === ":") {
    return "<h4> + a / b + </h4>";
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
/******/ 	__webpack_require__.h = () => ("d753b4bc4ce8da4870fc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZTZjZTlmZWYzNzE0N2NjYzBmNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFFbEMsSUFBTUksT0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3pELElBQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN0RCxJQUFNRSxrQkFBa0IsR0FBR0MsTUFBTSxDQUFDSCxNQUFNLENBQUMsd0RBQXdELENBQUMsQ0FBQztBQUVuRyxTQUFTSSxJQUFJQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsU0FBUyxFQUFFO0VBQzNCLElBQUlBLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDbkI7RUFDSixDQUFDLE1BQU0sSUFBSUEsU0FBUyxLQUFLLEdBQUcsRUFBRTtJQUMxQjtFQUNKLENBQUMsTUFBTSxJQUFJQSxTQUFTLEtBQUssR0FBRyxFQUFFO0lBQzFCO0VBQ0osQ0FBQyxNQUFNLElBQUlBLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDMUI7RUFDSixDQUFDLE1BQU07SUFDSCxPQUFPLG1DQUFtQztFQUM5QztBQUNKO0FBRUFWLElBQUksQ0FBQ1csTUFBTSxlQUFDaEIsMERBQUEsY0FBSyxZQUFVLEVBQUNZLElBQUksQ0FBQ04sT0FBTyxFQUFFRyxPQUFPLEVBQUVDLGtCQUFrQixDQUFPLENBQUMsQ0FBQzs7Ozs7Ozs7VUN4QjlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRHppZW5fMS8wM19XeXJhemVuaWEvMDVfWmFkYW5pZV81L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmNvbnN0IG51bWJlckEgPSBOdW1iZXIocHJvbXB0KCdQb2RhaiBwaWVyd3N6xIUgbGljemLEmTogJykpO1xuY29uc3QgbnVtYmVyQiA9IE51bWJlcihwcm9tcHQoJ1BvZGFqIGRydWfEhSBsaWN6YsSZOiAnKSk7XG5jb25zdCBhbGdlYnJhaWNPcGVyYXRpb24gPSBTdHJpbmcocHJvbXB0KCdXeWJpZXJ6IG1hdGVtYXR5Y3puZSBkemlhxYJhbmllIGRvIHd5a29uYW5pYSAoKyAtICogOiApJykpO1xuXG5mdW5jdGlvbiBjYWxjKGEsIGIsIG9wZXJhdGlvbikge1xuICAgIGlmIChvcGVyYXRpb24gPT09IFwiK1wiKSB7XG4gICAgICAgIHJldHVybiBgKDxoMT4gKyBhICsgYiArIDwvaDE+KWA7XG4gICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09IFwiLVwiKSB7XG4gICAgICAgIHJldHVybiBgKDxoMj4gKyBhIC0gYiArIDwvaDI+KWA7XG4gICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09IFwiKlwiKSB7XG4gICAgICAgIHJldHVybiBgPGgzPiArIGEgKiBiICsgPC9oMz5gO1xuICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSBcIjpcIikge1xuICAgICAgICByZXR1cm4gYDxoND4gKyBhIC8gYiArIDwvaDQ+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCI8aDU+V3Byb3dhZHppxYJlxZsgYsWCxJlkbmUgZGFuZTwvaDU+XCI7XG4gICAgfVxufVxuXG5yb290LnJlbmRlcig8ZGl2Pld5bmlrIHRvOiB7Y2FsYyhudW1iZXJBLCBudW1iZXJCLCBhbGdlYnJhaWNPcGVyYXRpb24pfTwvZGl2Pik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNzUzYjRiYzRjZThkYTQ4NzBmY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIm51bWJlckEiLCJOdW1iZXIiLCJwcm9tcHQiLCJudW1iZXJCIiwiYWxnZWJyYWljT3BlcmF0aW9uIiwiU3RyaW5nIiwiY2FsYyIsImEiLCJiIiwib3BlcmF0aW9uIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=