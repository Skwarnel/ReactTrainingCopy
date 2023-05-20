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
  var mouseClick = function mouseClick() {
    console.log("Clicked! Did you hear that?");
    console.log(styles);
    // styles.backgroundColor = 'green';
  };

  var mouseEnter = function mouseEnter() {
    console.log("Have you seen that? Mouse entered the room");
  };
  var mouseLeave = function mouseLeave() {
    console.log("Mouse hit the road");
  };
  var events = {
    onClick: {
      mouseClick: mouseClick
    },
    onMouseEnter: {
      mouseEnter: mouseEnter
    },
    onMouseLeave: {
      mouseLeave: mouseLeave
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: styles,
    onClick: mouseClick,
    onMouseEnter: mouseEnter,
    onMouseLeave: mouseLeave
  }, "That's me"));
}
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("62110a61c38523023ef1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42NjdhODFmMTkyN2NlOTJmMWZjOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFFbEMsSUFBTUksR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUFPTiwwREFBQSxDQUFDUSxVQUFVLE1BQUUsQ0FBQztBQUN6QixDQUFDO0FBRUQsU0FBU0EsVUFBVUEsQ0FBQSxFQUFHO0VBQ2xCLElBQU1DLE1BQU0sR0FBRztJQUNYQyxLQUFLLEVBQUUsT0FBTztJQUNkQyxNQUFNLEVBQUUsT0FBTztJQUNmQyxXQUFXLEVBQUUsT0FBTztJQUNwQkMsZUFBZSxFQUFFO0VBQ3JCLENBQUM7RUFDRCxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQztJQUMxQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNQLE1BQU0sQ0FBQztJQUNuQjtFQUNKLENBQUM7O0VBRUQsSUFBTVEsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUNyQkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsNENBQTRDLENBQUM7RUFDN0QsQ0FBQztFQUVELElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDckJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0VBQ3JDLENBQUM7RUFFRCxJQUFNRyxNQUFNLEdBQUc7SUFDWEMsT0FBTyxFQUFFO01BQUNOLFVBQVUsRUFBVkE7SUFBVSxDQUFDO0lBQ3JCTyxZQUFZLEVBQUU7TUFBQ0osVUFBVSxFQUFWQTtJQUFVLENBQUM7SUFDMUJLLFlBQVksRUFBRTtNQUFDSixVQUFVLEVBQVZBO0lBQVU7RUFDN0IsQ0FBQztFQUVELG9CQUNJbEIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQUd1QixLQUFLLEVBQUVkLE1BQU87SUFBQ1csT0FBTyxFQUFFTixVQUFXO0lBQUNPLFlBQVksRUFBRUosVUFBVztJQUFDSyxZQUFZLEVBQUVKO0VBQVcsR0FDbkQsV0FFcEMsQ0FDRixDQUFDO0FBRWQ7QUFFQWIsSUFBSSxDQUFDbUIsTUFBTSxlQUFDeEIsMERBQUEsQ0FBQ00sR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7VUMvQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMV9Qb2RzdGF3eV96ZGFyemVuLzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxFdmVudHNUZXN0IC8+XG59XG5cbmZ1bmN0aW9uIEV2ZW50c1Rlc3QoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICB3aWR0aDogJzUwMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJ1xuICAgIH1cbiAgICBjb25zdCBtb3VzZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWNrZWQhIERpZCB5b3UgaGVhciB0aGF0P1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coc3R5bGVzKTtcbiAgICAgICAgLy8gc3R5bGVzLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgfVxuXG4gICAgY29uc3QgbW91c2VFbnRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIYXZlIHlvdSBzZWVuIHRoYXQ/IE1vdXNlIGVudGVyZWQgdGhlIHJvb21cIik7XG4gICAgfVxuXG4gICAgY29uc3QgbW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNb3VzZSBoaXQgdGhlIHJvYWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRzID0ge1xuICAgICAgICBvbkNsaWNrOiB7bW91c2VDbGlja30sXG4gICAgICAgIG9uTW91c2VFbnRlcjoge21vdXNlRW50ZXJ9LFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHttb3VzZUxlYXZlfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzfSBvbkNsaWNrPXttb3VzZUNsaWNrfSBvbk1vdXNlRW50ZXI9e21vdXNlRW50ZXJ9IG9uTW91c2VMZWF2ZT17bW91c2VMZWF2ZX0+XG4gICAgICAgICAgICB7Lyo8cCBzdHlsZT17c3R5bGVzfSBldmVudHM9e2V2ZW50c30qL31cbiAgICAgICAgICAgICAgICBUaGF0J3MgbWVcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYyMTEwYTYxYzM4NTIzMDIzZWYxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkV2ZW50c1Rlc3QiLCJzdHlsZXMiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibW91c2VDbGljayIsImNvbnNvbGUiLCJsb2ciLCJtb3VzZUVudGVyIiwibW91c2VMZWF2ZSIsImV2ZW50cyIsIm9uQ2xpY2siLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzdHlsZSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=