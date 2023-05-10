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
    root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundColor: 'green'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Pierwsza liczba to: ", numberA), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "A druga liczba to: ", numberB), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Udzieli\u0142e\u015B poprawnej odpowiedzi")));
  } else {
    root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundColor: 'red'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Pierwsza liczba to: ", numberA), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "A druga liczba to: ", numberB), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Twoja odpowied\u017A jest niestety niepoprawna")));
  }
}
checkResult(result);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("04b9d49793e19ab2e116")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hZWQ5ODk3Njk1ZjA3OTlhYTJmOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsU0FBU0UsU0FBU0EsQ0FBQSxFQUFHO0VBQ25CLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQztBQUVBLElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1IsNERBQVUsQ0FBQ0ssU0FBUyxDQUFDO0FBRWxDLElBQU1JLE9BQU8sR0FBR1IsU0FBUyxDQUFDLENBQUM7QUFDM0IsSUFBTVMsT0FBTyxHQUFHVCxTQUFTLENBQUMsQ0FBQztBQUMzQixJQUFNVSxHQUFHLEdBQUdGLE9BQU8sR0FBR0MsT0FBTztBQUU3QixJQUFNRSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLDZDQUE2QyxHQUN0RUwsT0FBTyxHQUFHLE9BQU8sR0FBR0MsT0FBTyxDQUFDLENBQUM7QUFFakMsU0FBU0ssV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0VBQ3hCLElBQUlKLE1BQU0sS0FBS0QsR0FBRyxFQUFFO0lBQ2xCSCxJQUFJLENBQUNTLE1BQU0sZUFBQ2xCLDBEQUFBO01BQUtvQixLQUFLLEVBQUU7UUFBQ0MsZUFBZSxFQUFFO01BQU87SUFBRSxnQkFDakRyQiwwREFBQSxhQUFJLHNCQUFvQixFQUFDVSxPQUFZLENBQUMsZUFDdENWLDBEQUFBLGFBQUkscUJBQW1CLEVBQUNXLE9BQVksQ0FBQyxlQUNyQ1gsMERBQUEsYUFBSSwyQ0FBbUMsQ0FDcEMsQ0FBQyxDQUFDO0VBRVQsQ0FBQyxNQUFNO0lBQ0xTLElBQUksQ0FBQ1MsTUFBTSxlQUFDbEIsMERBQUE7TUFBS29CLEtBQUssRUFBRTtRQUFDQyxlQUFlLEVBQUU7TUFBSztJQUFFLGdCQUMvQ3JCLDBEQUFBLGFBQUksc0JBQW9CLEVBQUNVLE9BQVksQ0FBQyxlQUN0Q1YsMERBQUEsYUFBSSxxQkFBbUIsRUFBQ1csT0FBWSxDQUFDLGVBQ3JDWCwwREFBQSxhQUFJLGdEQUE2QyxDQUM5QyxDQUFDLENBQUM7RUFFVDtBQUNGO0FBRUFnQixXQUFXLENBQUNILE1BQU0sQ0FBQzs7Ozs7Ozs7VUNuQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDJfRHppZW5fMi0zLzAxX0F0cnlidXR5X2VsZW1lbnRvdy8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIGdlbk51bWJlcigpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkgKyAxKTtcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5jb25zdCBudW1iZXJBID0gZ2VuTnVtYmVyKCk7XG5jb25zdCBudW1iZXJCID0gZ2VuTnVtYmVyKCk7XG5jb25zdCBzdW0gPSBudW1iZXJBICsgbnVtYmVyQjtcblxuY29uc3QgcmVzdWx0ID0gTnVtYmVyKHByb21wdChcIkpha2kgamVzdCB3eW5payBkb2Rhd2FuaWEgdHljaCBkd8OzY2ggbGljemI/XCIgK1xuICAgIG51bWJlckEgKyBcIm9yYXogXCIgKyBudW1iZXJCKSk7XG5cbmZ1bmN0aW9uIGNoZWNrUmVzdWx0KG51bSkge1xuICBpZiAocmVzdWx0ID09PSBzdW0pIHtcbiAgICByb290LnJlbmRlcig8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nfX0+XG4gICAgICA8aDE+UGllcndzemEgbGljemJhIHRvOiB7bnVtYmVyQX08L2gxPlxuICAgICAgPGgxPkEgZHJ1Z2EgbGljemJhIHRvOiB7bnVtYmVyQn08L2gxPlxuICAgICAgPGgzPlVkemllbGnFgmXFmyBwb3ByYXduZWogb2Rwb3dpZWR6aTwvaDM+XG4gICAgPC9kaXY+KTtcblxuICB9IGVsc2Uge1xuICAgIHJvb3QucmVuZGVyKDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX0+XG4gICAgICA8aDE+UGllcndzemEgbGljemJhIHRvOiB7bnVtYmVyQX08L2gxPlxuICAgICAgPGgxPkEgZHJ1Z2EgbGljemJhIHRvOiB7bnVtYmVyQn08L2gxPlxuICAgICAgPGgzPlR3b2phIG9kcG93aWVkxbogamVzdCBuaWVzdGV0eSBuaWVwb3ByYXduYTwvaDM+XG4gICAgPC9kaXY+KTtcblxuICB9XG59XG5cbmNoZWNrUmVzdWx0KHJlc3VsdCk7XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDRiOWQ0OTc5M2UxOWFiMmUxMTZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiZ2VuTnVtYmVyIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJudW1iZXJBIiwibnVtYmVyQiIsInN1bSIsInJlc3VsdCIsIk51bWJlciIsInByb21wdCIsImNoZWNrUmVzdWx0IiwibnVtIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==