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
var answer = prompt('Jaki kolor ramki chcesz zobaczyć?');
var allowedAnswers = ['red', 'green', 'blue'];
var result = false;
for (var i = 0; i < allowedAnswers.length; i++) {
  if (allowedAnswers[i] === answer) {
    result = true;
    var _color = answer;
  }
}
if (result) {
  var style = {
    width: '100px',
    height: '100px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: color
  };
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
/******/ 	__webpack_require__.h = () => ("86c74bd2ca40a4f7c1f5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40Zjc5NzhhMmEyZWVkYWQ3ZTkzYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFDbEMsSUFBTUksTUFBTSxHQUFHQyxNQUFNLENBQUMsbUNBQW1DLENBQUM7QUFDMUQsSUFBTUMsY0FBYyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7QUFFL0MsSUFBSUMsTUFBTSxHQUFHLEtBQUs7QUFFbEIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLGNBQWMsQ0FBQ0csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtFQUM1QyxJQUFJRixjQUFjLENBQUNFLENBQUMsQ0FBQyxLQUFLSixNQUFNLEVBQUU7SUFDOUJHLE1BQU0sR0FBRyxJQUFJO0lBQ2IsSUFBTUcsTUFBSyxHQUFHTixNQUFNO0VBQ3hCO0FBQ0o7QUFHQSxJQUFJRyxNQUFNLEVBQUU7RUFDUixJQUFNSSxLQUFLLEdBQUc7SUFBQ0MsS0FBSyxFQUFFLE9BQU87SUFBRUMsTUFBTSxFQUFFLE9BQU87SUFBRUMsV0FBVyxFQUFFLEtBQUs7SUFBRUMsV0FBVyxFQUFFLE9BQU87SUFBRUMsV0FBVyxFQUFFTjtFQUFLLENBQUM7RUFDN0dQLElBQUksQ0FBQ2MsTUFBTSxlQUFDbkIsMERBQUE7SUFBSWEsS0FBSyxFQUFFQTtFQUFNLEdBQUMsMkNBQW1DLENBQUMsQ0FBQztBQUN2RSxDQUFDLE1BQU07RUFDSFIsSUFBSSxDQUFDYyxNQUFNLGVBQUNuQiwwREFBQSxhQUFJLGtEQUFvRCxDQUFDLENBQUM7QUFDMUU7Ozs7Ozs7O1VDdkJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDJfRHppZW5fMi0zLzAxX0F0cnlidXR5X2VsZW1lbnRvdy8wNF9aYWRhbmllXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbmNvbnN0IGFuc3dlciA9IHByb21wdCgnSmFraSBrb2xvciByYW1raSBjaGNlc3ogem9iYWN6ecSHPycpO1xuY29uc3QgYWxsb3dlZEFuc3dlcnMgPSBbJ3JlZCcsICdncmVlbicsICdibHVlJ107XG5cbmxldCByZXN1bHQgPSBmYWxzZTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxvd2VkQW5zd2Vycy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhbGxvd2VkQW5zd2Vyc1tpXSA9PT0gYW5zd2VyKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gYW5zd2VyO1xuICAgIH1cbn1cblxuXG5pZiAocmVzdWx0KSB7XG4gICAgY29uc3Qgc3R5bGUgPSB7d2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4JywgYm9yZGVyV2lkdGg6ICc1cHgnLCBib3JkZXJTdHlsZTogJ3NvbGlkJywgYm9yZGVyQ29sb3I6IGNvbG9yfTtcbiAgICByb290LnJlbmRlcig8aDEgc3R5bGU9e3N0eWxlfT5VZHppZWxpxYJhxZsgcG9wcmF3bmVqIG9kcG93aWVkemk8L2gxPik7XG59IGVsc2Uge1xuICAgIHJvb3QucmVuZGVyKDxoMT5Qcnp5a3JvIG5hbSA6KCBuaWUgbWFteSB0YWtpZWdvIGtvbG9ydSB3IG9mZXJjaWU8L2gxPik7XG59XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODZjNzRiZDJjYTQwYTRmN2MxZjVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJhbnN3ZXIiLCJwcm9tcHQiLCJhbGxvd2VkQW5zd2VycyIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJjb2xvciIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==