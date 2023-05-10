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
    var _style = {
      width: '100px',
      height: '100px',
      borderWidth: '5px',
      borderStyle: 'solid',
      borderColor: answer
    };
  }
}
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
/******/ 	__webpack_require__.h = () => ("396c8f2b4481a1325d18")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZjUyNDBmNjc1MWEzMjYxNjYzNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFDbEMsSUFBTUksTUFBTSxHQUFHQyxNQUFNLENBQUMsbUNBQW1DLENBQUM7QUFDMUQsSUFBTUMsY0FBYyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7QUFFL0MsSUFBSUMsTUFBTSxHQUFHLEtBQUs7QUFFbEIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLGNBQWMsQ0FBQ0csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtFQUM1QyxJQUFJRixjQUFjLENBQUNFLENBQUMsQ0FBQyxLQUFLSixNQUFNLEVBQUU7SUFDOUJHLE1BQU0sR0FBRyxJQUFJO0lBQ2IsSUFBTUcsTUFBSyxHQUFHO01BQUNDLEtBQUssRUFBRSxPQUFPO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVDLFdBQVcsRUFBRSxLQUFLO01BQUVDLFdBQVcsRUFBRSxPQUFPO01BQUVDLFdBQVcsRUFBRVg7SUFBTSxDQUFDO0VBQ2xIO0FBQ0o7QUFHQSxJQUFJRyxNQUFNLEVBQUU7RUFDUkosSUFBSSxDQUFDYSxNQUFNLGVBQUNsQiwwREFBQTtJQUFJWSxLQUFLLEVBQUVBO0VBQU0sR0FBQywyQ0FBbUMsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsTUFBTTtFQUNIUCxJQUFJLENBQUNhLE1BQU0sZUFBQ2xCLDBEQUFBLGFBQUksa0RBQW9ELENBQUMsQ0FBQztBQUMxRTs7Ozs7Ozs7VUN0QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMl9Eemllbl8yLTMvMDFfQXRyeWJ1dHlfZWxlbWVudG93LzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuY29uc3QgYW5zd2VyID0gcHJvbXB0KCdKYWtpIGtvbG9yIHJhbWtpIGNoY2VzeiB6b2JhY3p5xIc/Jyk7XG5jb25zdCBhbGxvd2VkQW5zd2VycyA9IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXTtcblxubGV0IHJlc3VsdCA9IGZhbHNlO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGFsbG93ZWRBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFsbG93ZWRBbnN3ZXJzW2ldID09PSBhbnN3ZXIpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7d2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4JywgYm9yZGVyV2lkdGg6ICc1cHgnLCBib3JkZXJTdHlsZTogJ3NvbGlkJywgYm9yZGVyQ29sb3I6IGFuc3dlcn07XG4gICAgfVxufVxuXG5cbmlmIChyZXN1bHQpIHtcbiAgICByb290LnJlbmRlcig8aDEgc3R5bGU9e3N0eWxlfT5VZHppZWxpxYJhxZsgcG9wcmF3bmVqIG9kcG93aWVkemk8L2gxPik7XG59IGVsc2Uge1xuICAgIHJvb3QucmVuZGVyKDxoMT5Qcnp5a3JvIG5hbSA6KCBuaWUgbWFteSB0YWtpZWdvIGtvbG9ydSB3IG9mZXJjaWU8L2gxPik7XG59XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzk2YzhmMmI0NDgxYTEzMjVkMThcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJhbnN3ZXIiLCJwcm9tcHQiLCJhbGxvd2VkQW5zd2VycyIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=