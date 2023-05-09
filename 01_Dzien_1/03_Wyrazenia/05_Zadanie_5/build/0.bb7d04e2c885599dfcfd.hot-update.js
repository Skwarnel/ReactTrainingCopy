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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, " + ", a + b, "+ ");
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
/******/ 	__webpack_require__.h = () => ("f7eace46d2338883a383")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iYjdkMDRlMmM4ODU1OTlkZmNmZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFFbEMsSUFBTUksT0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3pELElBQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN0RCxJQUFNRSxrQkFBa0IsR0FBR0MsTUFBTSxDQUFDSCxNQUFNLENBQUMsd0RBQXdELENBQUMsQ0FBQztBQUVuRyxTQUFTSSxJQUFJQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsU0FBUyxFQUFFO0VBQzNCLElBQUlBLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDbkIsb0JBQU9mLDBEQUFBLGFBQUksS0FBRyxFQUFDYSxDQUFDLEdBQUdDLENBQUMsRUFBQyxJQUFNLENBQUM7RUFDaEMsQ0FBQyxNQUFNLElBQUlDLFNBQVMsS0FBSyxHQUFHLEVBQUU7SUFDMUI7RUFDSixDQUFDLE1BQU0sSUFBSUEsU0FBUyxLQUFLLEdBQUcsRUFBRTtJQUMxQjtFQUNKLENBQUMsTUFBTSxJQUFJQSxTQUFTLEtBQUssR0FBRyxFQUFFO0lBQzFCO0VBQ0osQ0FBQyxNQUFNO0lBQ0gsT0FBTyxtQ0FBbUM7RUFDOUM7QUFDSjtBQUVBVixJQUFJLENBQUNZLE1BQU0sZUFBQ2pCLDBEQUFBLGNBQUssWUFBVSxFQUFDWSxJQUFJLENBQUNOLE9BQU8sRUFBRUcsT0FBTyxFQUFFQyxrQkFBa0IsQ0FBTyxDQUFDLENBQUM7Ozs7Ozs7O1VDeEI5RSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0R6aWVuXzEvMDNfV3lyYXplbmlhLzA1X1phZGFuaWVfNS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5jb25zdCBudW1iZXJBID0gTnVtYmVyKHByb21wdCgnUG9kYWogcGllcndzesSFIGxpY3pixJk6ICcpKTtcbmNvbnN0IG51bWJlckIgPSBOdW1iZXIocHJvbXB0KCdQb2RhaiBkcnVnxIUgbGljemLEmTogJykpO1xuY29uc3QgYWxnZWJyYWljT3BlcmF0aW9uID0gU3RyaW5nKHByb21wdCgnV3liaWVyeiBtYXRlbWF0eWN6bmUgZHppYcWCYW5pZSBkbyB3eWtvbmFuaWEgKCsgLSAqIDogKScpKTtcblxuZnVuY3Rpb24gY2FsYyhhLCBiLCBvcGVyYXRpb24pIHtcbiAgICBpZiAob3BlcmF0aW9uID09PSBcIitcIikge1xuICAgICAgICByZXR1cm4gPGgxPiArIHthICsgYn0rIDwvaDE+O1xuICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSBcIi1cIikge1xuICAgICAgICByZXR1cm4gYCg8aDI+ICsgYSAtIGIgKyA8L2gyPilgO1xuICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSBcIipcIikge1xuICAgICAgICByZXR1cm4gYDxoMz4gKyBhICogYiArIDwvaDM+YDtcbiAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gXCI6XCIpIHtcbiAgICAgICAgcmV0dXJuIGA8aDQ+ICsgYSAvIGIgKyA8L2g0PmA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiPGg1Pldwcm93YWR6acWCZcWbIGLFgsSZZG5lIGRhbmU8L2g1PlwiO1xuICAgIH1cbn1cblxucm9vdC5yZW5kZXIoPGRpdj5XeW5payB0bzoge2NhbGMobnVtYmVyQSwgbnVtYmVyQiwgYWxnZWJyYWljT3BlcmF0aW9uKX08L2Rpdj4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjdlYWNlNDZkMjMzODg4M2EzODNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJudW1iZXJBIiwiTnVtYmVyIiwicHJvbXB0IiwibnVtYmVyQiIsImFsZ2VicmFpY09wZXJhdGlvbiIsIlN0cmluZyIsImNhbGMiLCJhIiwiYiIsIm9wZXJhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9