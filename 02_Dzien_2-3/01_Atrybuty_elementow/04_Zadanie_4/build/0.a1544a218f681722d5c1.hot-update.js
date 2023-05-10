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
var answer = String(prompt('Jaki kolor ramki chcesz zobaczyć?'));
var allowedAnswers = ['red', 'green', 'blue'];
var color;
var result = false;
for (var i = 0; i < allowedAnswers.length; i++) {
  if (allowedAnswers[i] === answer) {
    result = true;
    color = allowedAnswers[i];
  }
}
var style = {
  width: '100px',
  height: '100px',
  borderWidth: '5px',
  borderStyle: 'solid',
  backgroundColor: color
};
if (result) {
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
/******/ 	__webpack_require__.h = () => ("1034fe3b9a96812c15dc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMTU0NGEyMThmNjgxNzIyZDVjMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFDbEMsSUFBTUksTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ2xFLElBQU1DLGNBQWMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO0FBQy9DLElBQUlDLEtBQUs7QUFDVCxJQUFJQyxNQUFNLEdBQUcsS0FBSztBQUVsQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0gsY0FBYyxDQUFDSSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0VBQzVDLElBQUlILGNBQWMsQ0FBQ0csQ0FBQyxDQUFDLEtBQUtOLE1BQU0sRUFBRTtJQUM5QkssTUFBTSxHQUFHLElBQUk7SUFDYkQsS0FBSyxHQUFHRCxjQUFjLENBQUNHLENBQUMsQ0FBQztFQUM3QjtBQUNKO0FBRUEsSUFBTUUsS0FBSyxHQUFHO0VBQUNDLEtBQUssRUFBRSxPQUFPO0VBQUVDLE1BQU0sRUFBRSxPQUFPO0VBQUVDLFdBQVcsRUFBRSxLQUFLO0VBQUVDLFdBQVcsRUFBRSxPQUFPO0VBQ3hGQyxlQUFlLEVBQUVUO0FBQUssQ0FBQztBQUV2QixJQUFJQyxNQUFNLEVBQUU7RUFDUk4sSUFBSSxDQUFDZSxNQUFNLGVBQUNwQiwwREFBQTtJQUFJYyxLQUFLLEVBQUVBO0VBQU0sR0FBQywyQ0FBbUMsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsTUFBTTtFQUNIVCxJQUFJLENBQUNlLE1BQU0sZUFBQ3BCLDBEQUFBLGFBQUksa0RBQW9ELENBQUMsQ0FBQztBQUMxRTs7Ozs7Ozs7VUN4QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMl9Eemllbl8yLTMvMDFfQXRyeWJ1dHlfZWxlbWVudG93LzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuY29uc3QgYW5zd2VyID0gU3RyaW5nKHByb21wdCgnSmFraSBrb2xvciByYW1raSBjaGNlc3ogem9iYWN6ecSHPycpKTtcbmNvbnN0IGFsbG93ZWRBbnN3ZXJzID0gWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddO1xubGV0IGNvbG9yO1xubGV0IHJlc3VsdCA9IGZhbHNlO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGFsbG93ZWRBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFsbG93ZWRBbnN3ZXJzW2ldID09PSBhbnN3ZXIpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgY29sb3IgPSBhbGxvd2VkQW5zd2Vyc1tpXTtcbiAgICB9XG59XG5cbmNvbnN0IHN0eWxlID0ge3dpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcsIGJvcmRlcldpZHRoOiAnNXB4JywgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG5iYWNrZ3JvdW5kQ29sb3I6IGNvbG9yfTtcblxuaWYgKHJlc3VsdCkge1xuICAgIHJvb3QucmVuZGVyKDxoMSBzdHlsZT17c3R5bGV9PlVkemllbGnFgmHFmyBwb3ByYXduZWogb2Rwb3dpZWR6aTwvaDE+KTtcbn0gZWxzZSB7XG4gICAgcm9vdC5yZW5kZXIoPGgxPlByenlrcm8gbmFtIDooIG5pZSBtYW15IHRha2llZ28ga29sb3J1IHcgb2ZlcmNpZTwvaDE+KTtcbn1cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMDM0ZmUzYjlhOTY4MTJjMTVkY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsImFuc3dlciIsIlN0cmluZyIsInByb21wdCIsImFsbG93ZWRBbnN3ZXJzIiwiY29sb3IiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==