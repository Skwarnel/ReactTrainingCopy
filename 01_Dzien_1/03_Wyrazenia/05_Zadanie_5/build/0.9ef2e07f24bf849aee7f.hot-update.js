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
    return "<h1>Wynik to: {a + b}</h1>";
  } else if (operation === "-") {
    return "<h2>Wynik to: {a - b}</h2>";
  } else if (operation === "*") {
    return "<h3>Wynik to: {a * b}</h3>";
  } else if (operation === ":") {
    return "<h4>Wynik to: {a / b}</h4>";
  } else {
    return "<h5>Wprowadziłeś błędne dane</h5>";
  }
}
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "calc(numberA, numberB, algebraicOperation)"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("70183e0231e139cc1a6c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45ZWYyZTA3ZjI0YmY4NDlhZWU3Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFFbEMsSUFBTUksT0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3pELElBQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN0RCxJQUFNRSxrQkFBa0IsR0FBR0MsTUFBTSxDQUFDSCxNQUFNLENBQUMsd0RBQXdELENBQUMsQ0FBQztBQUVuRyxTQUFTSSxJQUFJQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsU0FBUyxFQUFFO0VBQzNCLElBQUlBLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDbkIsT0FBTyw0QkFBNEI7RUFDdkMsQ0FBQyxNQUFNLElBQUlBLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDMUIsT0FBTyw0QkFBNEI7RUFDdkMsQ0FBQyxNQUFNLElBQUlBLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDMUIsT0FBTyw0QkFBNEI7RUFDdkMsQ0FBQyxNQUFNLElBQUlBLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDMUIsT0FBTyw0QkFBNEI7RUFDdkMsQ0FBQyxNQUFNO0lBQ0gsT0FBTyxtQ0FBbUM7RUFDOUM7QUFDSjtBQUVBVixJQUFJLENBQUNXLE1BQU0sZUFBQ2hCLDBEQUFBLGNBQUssNENBQStDLENBQUMsQ0FBQzs7Ozs7Ozs7VUN4QmxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRHppZW5fMS8wM19XeXJhemVuaWEvMDVfWmFkYW5pZV81L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmNvbnN0IG51bWJlckEgPSBOdW1iZXIocHJvbXB0KCdQb2RhaiBwaWVyd3N6xIUgbGljemLEmTogJykpO1xuY29uc3QgbnVtYmVyQiA9IE51bWJlcihwcm9tcHQoJ1BvZGFqIGRydWfEhSBsaWN6YsSZOiAnKSk7XG5jb25zdCBhbGdlYnJhaWNPcGVyYXRpb24gPSBTdHJpbmcocHJvbXB0KCdXeWJpZXJ6IG1hdGVtYXR5Y3puZSBkemlhxYJhbmllIGRvIHd5a29uYW5pYSAoKyAtICogOiApJykpO1xuXG5mdW5jdGlvbiBjYWxjKGEsIGIsIG9wZXJhdGlvbikge1xuICAgIGlmIChvcGVyYXRpb24gPT09IFwiK1wiKSB7XG4gICAgICAgIHJldHVybiBcIjxoMT5XeW5payB0bzoge2EgKyBifTwvaDE+XCI7XG4gICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09IFwiLVwiKSB7XG4gICAgICAgIHJldHVybiBcIjxoMj5XeW5payB0bzoge2EgLSBifTwvaDI+XCI7XG4gICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09IFwiKlwiKSB7XG4gICAgICAgIHJldHVybiBcIjxoMz5XeW5payB0bzoge2EgKiBifTwvaDM+XCI7XG4gICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09IFwiOlwiKSB7XG4gICAgICAgIHJldHVybiBcIjxoND5XeW5payB0bzoge2EgLyBifTwvaDQ+XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiPGg1Pldwcm93YWR6acWCZcWbIGLFgsSZZG5lIGRhbmU8L2g1PlwiO1xuICAgIH1cbn1cblxucm9vdC5yZW5kZXIoPGRpdj5jYWxjKG51bWJlckEsIG51bWJlckIsIGFsZ2VicmFpY09wZXJhdGlvbik8L2Rpdj4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzAxODNlMDIzMWUxMzljYzFhNmNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJudW1iZXJBIiwiTnVtYmVyIiwicHJvbXB0IiwibnVtYmVyQiIsImFsZ2VicmFpY09wZXJhdGlvbiIsIlN0cmluZyIsImNhbGMiLCJhIiwiYiIsIm9wZXJhdGlvbiIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9