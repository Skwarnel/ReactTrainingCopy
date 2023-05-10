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
var color = prompt('Jaki kolor ramki chcesz zobaczyć?');
var allowedAnswers = ['red', 'green', 'blue'];
var style = {
  width: '100px',
  height: '100px',
  borderWidth: '5px',
  borderStyle: 'solid',
  borderColor: {
    color: color
  }
};
var result = false;
for (var i = 0; i < allowedAnswers.length; i++) {
  if (allowedAnswers[i] === color) {
    result = true;
    root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      style: style
    }, "Udzieli\u0142a\u015B poprawnej odpowiedzi"));
  }
}
if (result) {}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0f74b80ecf2619c7a06c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZDhmM2IxMTY2N2ZhYjY2OTFiYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFDbEMsSUFBTUksS0FBSyxHQUFHQyxNQUFNLENBQUMsbUNBQW1DLENBQUM7QUFDekQsSUFBTUMsY0FBYyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7QUFDL0MsSUFBTUMsS0FBSyxHQUFHO0VBQUNDLEtBQUssRUFBRSxPQUFPO0VBQUVDLE1BQU0sRUFBRSxPQUFPO0VBQUVDLFdBQVcsRUFBRSxLQUFLO0VBQUVDLFdBQVcsRUFBRSxPQUFPO0VBQUVDLFdBQVcsRUFBRTtJQUFDUixLQUFLLEVBQUxBO0VBQUs7QUFBQyxDQUFDO0FBRS9HLElBQUlTLE1BQU0sR0FBRyxLQUFLO0FBRWxCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUixjQUFjLENBQUNTLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7RUFDNUMsSUFBSVIsY0FBYyxDQUFDUSxDQUFDLENBQUMsS0FBS1YsS0FBSyxFQUFFO0lBQzdCUyxNQUFNLEdBQUcsSUFBSTtJQUNiVixJQUFJLENBQUNhLE1BQU0sZUFBQ2xCLDBEQUFBO01BQUlTLEtBQUssRUFBRUE7SUFBTSxHQUFDLDJDQUFtQyxDQUFDLENBQUM7RUFDdkU7QUFDSjtBQUdBLElBQUlNLE1BQU0sRUFBRSxDQUdaOzs7Ozs7OztVQ3RCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9BdHJ5YnV0eV9lbGVtZW50b3cvMDRfWmFkYW5pZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5jb25zdCBjb2xvciA9IHByb21wdCgnSmFraSBrb2xvciByYW1raSBjaGNlc3ogem9iYWN6ecSHPycpO1xuY29uc3QgYWxsb3dlZEFuc3dlcnMgPSBbJ3JlZCcsICdncmVlbicsICdibHVlJ107XG5jb25zdCBzdHlsZSA9IHt3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnLCBib3JkZXJXaWR0aDogJzVweCcsIGJvcmRlclN0eWxlOiAnc29saWQnLCBib3JkZXJDb2xvcjoge2NvbG9yfX07XG5cbmxldCByZXN1bHQgPSBmYWxzZTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxvd2VkQW5zd2Vycy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhbGxvd2VkQW5zd2Vyc1tpXSA9PT0gY29sb3IpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgcm9vdC5yZW5kZXIoPGgxIHN0eWxlPXtzdHlsZX0+VWR6aWVsacWCYcWbIHBvcHJhd25laiBvZHBvd2llZHppPC9oMT4pO1xuICAgIH1cbn1cblxuXG5pZiAocmVzdWx0KSB7XG5cblxufVxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBmNzRiODBlY2YyNjE5YzdhMDZjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiY29sb3IiLCJwcm9tcHQiLCJhbGxvd2VkQW5zd2VycyIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=