"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


function genNumber() {
  return Math.round(Math.random() * 9 + 1);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
var numberA = genNumber();
var numberB = genNumber();
var sum = numberA + numberB;
var result = Number(prompt("Jaki jest wynik dodawania tych dwóch liczb?" + numberA + "oraz " + numberB));
function checkResult(num) {
  if (result === sum) {
    root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Pierwsza liczba to: ", numberA), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "A druga liczba to: ", numberB), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      backgroundColor: "green"
    }, "Udzieli\u0142e\u015B poprawnej odpowiedzi")));
  } else {
    root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Pierwsza liczba to: ", numberA), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "A druga liczba to: ", numberB), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      backgroundColor: "red"
    }, "Udzieli\u0142e\u015B niepoprawnej odpowiedzi")));
  }
}
checkResult(result);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c0325116e2581e2d8f35")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lNTU5OWRkNjY3ZTg3MmQ0YTJhNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsU0FBU0UsU0FBU0EsQ0FBQSxFQUFHO0VBQ25CLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQztBQUVBLElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1IsNERBQVUsQ0FBQ0ssU0FBUyxDQUFDO0FBRWxDLElBQU1JLE9BQU8sR0FBR1IsU0FBUyxDQUFDLENBQUM7QUFDM0IsSUFBTVMsT0FBTyxHQUFHVCxTQUFTLENBQUMsQ0FBQztBQUMzQixJQUFNVSxHQUFHLEdBQUdGLE9BQU8sR0FBR0MsT0FBTztBQUU3QixJQUFNRSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLDZDQUE2QyxHQUN0RUwsT0FBTyxHQUFHLE9BQU8sR0FBR0MsT0FBTyxDQUFDLENBQUM7QUFFakMsU0FBU0ssV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0VBQ3hCLElBQUlKLE1BQU0sS0FBS0QsR0FBRyxFQUFFO0lBQ2xCSCxJQUFJLENBQUNTLE1BQU0sZUFBQ2xCLDBEQUFBLDJCQUNWQSwwREFBQSxhQUFJLHNCQUFvQixFQUFDVSxPQUFZLENBQUMsZUFDdENWLDBEQUFBLGFBQUkscUJBQW1CLEVBQUNXLE9BQVksQ0FBQyxlQUNyQ1gsMERBQUE7TUFBSW9CLGVBQWUsRUFBRztJQUFPLEdBQUMsMkNBQW1DLENBQzlELENBQUMsQ0FBQztFQUVULENBQUMsTUFBTTtJQUNMWCxJQUFJLENBQUNTLE1BQU0sZUFBQ2xCLDBEQUFBLDJCQUNWQSwwREFBQSxhQUFJLHNCQUFvQixFQUFDVSxPQUFZLENBQUMsZUFDdENWLDBEQUFBLGFBQUkscUJBQW1CLEVBQUNXLE9BQVksQ0FBQyxlQUNyQ1gsMERBQUE7TUFBSW9CLGVBQWUsRUFBRztJQUFLLEdBQUMsOENBQXNDLENBQy9ELENBQUMsQ0FBQztFQUVUO0FBQ0Y7QUFFQUosV0FBVyxDQUFDSCxNQUFNLENBQUM7Ozs7Ozs7O1VDbkNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9BdHJ5YnV0eV9lbGVtZW50b3cvMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBnZW5OdW1iZXIoKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5ICsgMSk7XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuY29uc3QgbnVtYmVyQSA9IGdlbk51bWJlcigpO1xuY29uc3QgbnVtYmVyQiA9IGdlbk51bWJlcigpO1xuY29uc3Qgc3VtID0gbnVtYmVyQSArIG51bWJlckI7XG5cbmNvbnN0IHJlc3VsdCA9IE51bWJlcihwcm9tcHQoXCJKYWtpIGplc3Qgd3luaWsgZG9kYXdhbmlhIHR5Y2ggZHfDs2NoIGxpY3piP1wiICtcbiAgICBudW1iZXJBICsgXCJvcmF6IFwiICsgbnVtYmVyQikpO1xuXG5mdW5jdGlvbiBjaGVja1Jlc3VsdChudW0pIHtcbiAgaWYgKHJlc3VsdCA9PT0gc3VtKSB7XG4gICAgcm9vdC5yZW5kZXIoPGRpdj5cbiAgICAgIDxoMT5QaWVyd3N6YSBsaWN6YmEgdG86IHtudW1iZXJBfTwvaDE+XG4gICAgICA8aDE+QSBkcnVnYSBsaWN6YmEgdG86IHtudW1iZXJCfTwvaDE+XG4gICAgICA8aDMgYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJz5VZHppZWxpxYJlxZsgcG9wcmF3bmVqIG9kcG93aWVkemk8L2gzPlxuICAgIDwvZGl2Pik7XG5cbiAgfSBlbHNlIHtcbiAgICByb290LnJlbmRlcig8ZGl2PlxuICAgICAgPGgxPlBpZXJ3c3phIGxpY3piYSB0bzoge251bWJlckF9PC9oMT5cbiAgICAgIDxoMT5BIGRydWdhIGxpY3piYSB0bzoge251bWJlckJ9PC9oMT5cbiAgICAgIDxoMyBiYWNrZ3JvdW5kQ29sb3IgPSAncmVkJz5VZHppZWxpxYJlxZsgbmllcG9wcmF3bmVqIG9kcG93aWVkemk8L2gzPlxuICAgIDwvZGl2Pik7XG5cbiAgfVxufVxuXG5jaGVja1Jlc3VsdChyZXN1bHQpO1xuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMwMzI1MTE2ZTI1ODFlMmQ4ZjM1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImdlbk51bWJlciIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwibnVtYmVyQSIsIm51bWJlckIiLCJzdW0iLCJyZXN1bHQiLCJOdW1iZXIiLCJwcm9tcHQiLCJjaGVja1Jlc3VsdCIsIm51bSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9