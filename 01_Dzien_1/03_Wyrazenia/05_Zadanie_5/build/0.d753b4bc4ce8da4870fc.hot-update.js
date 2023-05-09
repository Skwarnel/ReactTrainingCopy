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
    return "<h1> + a + b + </h1>";
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
/******/ 	__webpack_require__.h = () => ("9a5bacb6bd3947ca4b7f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kNzUzYjRiYzRjZThkYTQ4NzBmYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFFbEMsSUFBTUksT0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3pELElBQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN0RCxJQUFNRSxrQkFBa0IsR0FBR0MsTUFBTSxDQUFDSCxNQUFNLENBQUMsd0RBQXdELENBQUMsQ0FBQztBQUVuRyxTQUFTSSxJQUFJQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsU0FBUyxFQUFFO0VBQzNCLElBQUlBLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDbkI7RUFDSixDQUFDLE1BQU0sSUFBSUEsU0FBUyxLQUFLLEdBQUcsRUFBRTtJQUMxQjtFQUNKLENBQUMsTUFBTSxJQUFJQSxTQUFTLEtBQUssR0FBRyxFQUFFO0lBQzFCO0VBQ0osQ0FBQyxNQUFNLElBQUlBLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDMUI7RUFDSixDQUFDLE1BQU07SUFDSCxPQUFPLG1DQUFtQztFQUM5QztBQUNKO0FBRUFWLElBQUksQ0FBQ1csTUFBTSxlQUFDaEIsMERBQUEsY0FBSyxZQUFVLEVBQUNZLElBQUksQ0FBQ04sT0FBTyxFQUFFRyxPQUFPLEVBQUVDLGtCQUFrQixDQUFPLENBQUMsQ0FBQzs7Ozs7Ozs7VUN4QjlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRHppZW5fMS8wM19XeXJhemVuaWEvMDVfWmFkYW5pZV81L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmNvbnN0IG51bWJlckEgPSBOdW1iZXIocHJvbXB0KCdQb2RhaiBwaWVyd3N6xIUgbGljemLEmTogJykpO1xuY29uc3QgbnVtYmVyQiA9IE51bWJlcihwcm9tcHQoJ1BvZGFqIGRydWfEhSBsaWN6YsSZOiAnKSk7XG5jb25zdCBhbGdlYnJhaWNPcGVyYXRpb24gPSBTdHJpbmcocHJvbXB0KCdXeWJpZXJ6IG1hdGVtYXR5Y3puZSBkemlhxYJhbmllIGRvIHd5a29uYW5pYSAoKyAtICogOiApJykpO1xuXG5mdW5jdGlvbiBjYWxjKGEsIGIsIG9wZXJhdGlvbikge1xuICAgIGlmIChvcGVyYXRpb24gPT09IFwiK1wiKSB7XG4gICAgICAgIHJldHVybiBgPGgxPiArIGEgKyBiICsgPC9oMT5gO1xuICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSBcIi1cIikge1xuICAgICAgICByZXR1cm4gYCg8aDI+ICsgYSAtIGIgKyA8L2gyPilgO1xuICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSBcIipcIikge1xuICAgICAgICByZXR1cm4gYDxoMz4gKyBhICogYiArIDwvaDM+YDtcbiAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gXCI6XCIpIHtcbiAgICAgICAgcmV0dXJuIGA8aDQ+ICsgYSAvIGIgKyA8L2g0PmA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiPGg1Pldwcm93YWR6acWCZcWbIGLFgsSZZG5lIGRhbmU8L2g1PlwiO1xuICAgIH1cbn1cblxucm9vdC5yZW5kZXIoPGRpdj5XeW5payB0bzoge2NhbGMobnVtYmVyQSwgbnVtYmVyQiwgYWxnZWJyYWljT3BlcmF0aW9uKX08L2Rpdj4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWE1YmFjYjZiZDM5NDdjYTRiN2ZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJudW1iZXJBIiwiTnVtYmVyIiwicHJvbXB0IiwibnVtYmVyQiIsImFsZ2VicmFpY09wZXJhdGlvbiIsIlN0cmluZyIsImNhbGMiLCJhIiwiYiIsIm9wZXJhdGlvbiIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9