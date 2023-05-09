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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Wynik to: ", a - b);
  } else if (operation === "*") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Wynik to: ", a * b);
  } else if (operation === "/") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Wynik to: ", a / b);
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
/******/ 	__webpack_require__.h = () => ("b24c14e09596846d2d86")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lYTkyMDFmZTIzNmY1MDE5YmM2Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFFbEMsSUFBTUksT0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3pELElBQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN0RCxJQUFNRSxrQkFBa0IsR0FBR0MsTUFBTSxDQUFDSCxNQUFNLENBQUMsd0RBQXdELENBQUMsQ0FBQztBQUVuRyxTQUFTSSxJQUFJQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsU0FBUyxFQUFFO0VBQzNCLElBQUlBLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDbkIsb0JBQU9mLDBEQUFBLGFBQUksWUFBVSxFQUFDYSxDQUFDLEdBQUdDLENBQU0sQ0FBQztFQUNyQyxDQUFDLE1BQU0sSUFBSUMsU0FBUyxLQUFLLEdBQUcsRUFBRTtJQUMxQixvQkFBT2YsMERBQUEsYUFBSSxZQUFVLEVBQUNhLENBQUMsR0FBR0MsQ0FBTSxDQUFDO0VBQ3JDLENBQUMsTUFBTSxJQUFJQyxTQUFTLEtBQUssR0FBRyxFQUFFO0lBQzFCLG9CQUFPZiwwREFBQSxhQUFJLFlBQVUsRUFBQ2EsQ0FBQyxHQUFHQyxDQUFNLENBQUM7RUFDckMsQ0FBQyxNQUFNLElBQUlDLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDMUIsb0JBQU9mLDBEQUFBLGFBQUksWUFBVSxFQUFDYSxDQUFDLEdBQUdDLENBQU0sQ0FBQztFQUNyQyxDQUFDLE1BQU07SUFDSCxPQUFPLG1DQUFtQztFQUM5QztBQUNKO0FBRUFULElBQUksQ0FBQ1ksTUFBTSxlQUFDakIsMERBQUEsY0FBTVksSUFBSSxDQUFDTixPQUFPLEVBQUVHLE9BQU8sRUFBRUMsa0JBQWtCLENBQU8sQ0FBQyxDQUFDOzs7Ozs7OztVQ3hCcEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAzX1d5cmF6ZW5pYS8wNV9aYWRhbmllXzUvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuY29uc3QgbnVtYmVyQSA9IE51bWJlcihwcm9tcHQoJ1BvZGFqIHBpZXJ3c3rEhSBsaWN6YsSZOiAnKSk7XG5jb25zdCBudW1iZXJCID0gTnVtYmVyKHByb21wdCgnUG9kYWogZHJ1Z8SFIGxpY3pixJk6ICcpKTtcbmNvbnN0IGFsZ2VicmFpY09wZXJhdGlvbiA9IFN0cmluZyhwcm9tcHQoJ1d5YmllcnogbWF0ZW1hdHljem5lIGR6aWHFgmFuaWUgZG8gd3lrb25hbmlhICgrIC0gKiA6ICknKSk7XG5cbmZ1bmN0aW9uIGNhbGMoYSwgYiwgb3BlcmF0aW9uKSB7XG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gXCIrXCIpIHtcbiAgICAgICAgcmV0dXJuIDxoMT5XeW5payB0bzoge2EgKyBifTwvaDE+O1xuICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSBcIi1cIikge1xuICAgICAgICByZXR1cm4gPGgyPld5bmlrIHRvOiB7YSAtIGJ9PC9oMj47XG4gICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09IFwiKlwiKSB7XG4gICAgICAgIHJldHVybiA8aDM+V3luaWsgdG86IHthICogYn08L2gzPjtcbiAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gXCIvXCIpIHtcbiAgICAgICAgcmV0dXJuIDxoND5XeW5payB0bzoge2EgLyBifTwvaDQ+O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIjxoNT5XcHJvd2FkemnFgmXFmyBixYLEmWRuZSBkYW5lPC9oNT5cIjtcbiAgICB9XG59XG5cbnJvb3QucmVuZGVyKDxkaXY+e2NhbGMobnVtYmVyQSwgbnVtYmVyQiwgYWxnZWJyYWljT3BlcmF0aW9uKX08L2Rpdj4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjI0YzE0ZTA5NTk2ODQ2ZDJkODZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJudW1iZXJBIiwiTnVtYmVyIiwicHJvbXB0IiwibnVtYmVyQiIsImFsZ2VicmFpY09wZXJhdGlvbiIsIlN0cmluZyIsImNhbGMiLCJhIiwiYiIsIm9wZXJhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9