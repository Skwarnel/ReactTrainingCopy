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
var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventsTest, null);
};
function EventsTest() {
  var styles = {
    width: '500px',
    height: '100px',
    borderStyle: 'solid',
    backgroundColor: 'red'
  };
  var events = {
    onClick: mouseClick(),
    onMouseEnter: mouseClick(),
    monMouseLeave: mouseClick()
  };
  var mouseClick = function mouseClick() {
    console.log("Clicked! Did you hear that?");
    console.log(styles);
    styles.backgroundColor = 'green';
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: styles,
    events: events
  }, "That's me"));
}
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a6b85f86e4396beb60ca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43OGRhNDI2YWQ3OGE5OGM4ZmZjMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFFbEMsSUFBTUksR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUFPTiwwREFBQSxDQUFDUSxVQUFVLE1BQUUsQ0FBQztBQUN6QixDQUFDO0FBRUQsU0FBU0EsVUFBVUEsQ0FBQSxFQUFHO0VBQ2xCLElBQU1DLE1BQU0sR0FBRztJQUNYQyxLQUFLLEVBQUUsT0FBTztJQUNkQyxNQUFNLEVBQUUsT0FBTztJQUNmQyxXQUFXLEVBQUUsT0FBTztJQUNwQkMsZUFBZSxFQUFFO0VBQ3JCLENBQUM7RUFFRCxJQUFNQyxNQUFNLEdBQUc7SUFDWEMsT0FBTyxFQUFFQyxVQUFVLENBQUMsQ0FBQztJQUNyQkMsWUFBWSxFQUFFRCxVQUFVLENBQUMsQ0FBQztJQUMxQkUsYUFBYSxFQUFFRixVQUFVLENBQUM7RUFDOUIsQ0FBQztFQUNELElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDckJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixDQUFDO0lBQzFDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsTUFBTSxDQUFDO0lBQ25CQSxNQUFNLENBQUNJLGVBQWUsR0FBRyxPQUFPO0VBQ3BDLENBQUM7RUFDRCxvQkFDSWIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQUdxQixLQUFLLEVBQUVaLE1BQU87SUFBQ0ssTUFBTSxFQUFFQTtFQUFPLEdBQUMsV0FFL0IsQ0FDRixDQUFDO0FBRWQ7QUFFQVQsSUFBSSxDQUFDaUIsTUFBTSxlQUFDdEIsMERBQUEsQ0FBQ00sR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7VUNyQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMV9Qb2RzdGF3eV96ZGFyemVuLzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxFdmVudHNUZXN0IC8+XG59XG5cbmZ1bmN0aW9uIEV2ZW50c1Rlc3QoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICB3aWR0aDogJzUwMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJ1xuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50cyA9IHtcbiAgICAgICAgb25DbGljazogbW91c2VDbGljaygpLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IG1vdXNlQ2xpY2soKSxcbiAgICAgICAgbW9uTW91c2VMZWF2ZTogbW91c2VDbGljaygpXG4gICAgfVxuICAgIGNvbnN0IG1vdXNlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZCEgRGlkIHlvdSBoZWFyIHRoYXQ/XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhzdHlsZXMpO1xuICAgICAgICBzdHlsZXMuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXN9IGV2ZW50cz17ZXZlbnRzfT5cbiAgICAgICAgICAgICAgICBUaGF0J3MgbWVcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE2Yjg1Zjg2ZTQzOTZiZWI2MGNhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkV2ZW50c1Rlc3QiLCJzdHlsZXMiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZXZlbnRzIiwib25DbGljayIsIm1vdXNlQ2xpY2siLCJvbk1vdXNlRW50ZXIiLCJtb25Nb3VzZUxlYXZlIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==