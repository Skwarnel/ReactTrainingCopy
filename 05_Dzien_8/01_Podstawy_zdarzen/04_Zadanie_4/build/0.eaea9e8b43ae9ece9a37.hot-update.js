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
/******/ 	__webpack_require__.h = () => ("667a81f1927ce92f1fc8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lYWVhOWU4YjQzYWU5ZWNlOWEzNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFFbEMsSUFBTUksR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUFPTiwwREFBQSxDQUFDUSxVQUFVLE1BQUUsQ0FBQztBQUN6QixDQUFDO0FBRUQsU0FBU0EsVUFBVUEsQ0FBQSxFQUFHO0VBQ2xCLElBQU1DLE1BQU0sR0FBRztJQUNYQyxLQUFLLEVBQUUsT0FBTztJQUNkQyxNQUFNLEVBQUUsT0FBTztJQUNmQyxXQUFXLEVBQUUsT0FBTztJQUNwQkMsZUFBZSxFQUFFO0VBQ3JCLENBQUM7RUFDRCxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQztJQUMxQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNQLE1BQU0sQ0FBQztJQUNuQjtFQUNKLENBQUM7O0VBRUQsSUFBTVEsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUNyQkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsNENBQTRDLENBQUM7RUFDN0QsQ0FBQztFQUVELElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDckJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0VBQ3JDLENBQUM7RUFFRCxJQUFNRyxNQUFNLEdBQUc7SUFDWEMsT0FBTyxFQUFFO01BQUNOLFVBQVUsRUFBVkE7SUFBVSxDQUFDO0lBQ3JCTyxZQUFZLEVBQUU7TUFBQ0osVUFBVSxFQUFWQTtJQUFVLENBQUM7SUFDMUJLLFlBQVksRUFBRTtNQUFDSixVQUFVLEVBQVZBO0lBQVU7RUFDN0IsQ0FBQztFQUVELG9CQUNJbEIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQUd1QixLQUFLLEVBQUVkLE1BQU87SUFBQ1csT0FBTyxFQUFFTixVQUFXO0lBQUNPLFlBQVksRUFBRUosVUFBVztJQUFDSyxZQUFZLEVBQUVKO0VBQVcsR0FDTyxXQUU5RixDQUNGLENBQUM7QUFFZDtBQUVBYixJQUFJLENBQUNtQixNQUFNLGVBQUN4QiwwREFBQSxDQUFDTSxHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7OztVQy9DcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAxX1BvZHN0YXd5X3pkYXJ6ZW4vMDRfWmFkYW5pZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gPEV2ZW50c1Rlc3QgLz5cbn1cblxuZnVuY3Rpb24gRXZlbnRzVGVzdCgpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIHdpZHRoOiAnNTAwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnXG4gICAgfVxuICAgIGNvbnN0IG1vdXNlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZCEgRGlkIHlvdSBoZWFyIHRoYXQ/XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhzdHlsZXMpO1xuICAgICAgICAvLyBzdHlsZXMuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICB9XG5cbiAgICBjb25zdCBtb3VzZUVudGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhhdmUgeW91IHNlZW4gdGhhdD8gTW91c2UgZW50ZXJlZCB0aGUgcm9vbVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBtb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1vdXNlIGhpdCB0aGUgcm9hZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudHMgPSB7XG4gICAgICAgIG9uQ2xpY2s6IHttb3VzZUNsaWNrfSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB7bW91c2VFbnRlcn0sXG4gICAgICAgIG9uTW91c2VMZWF2ZToge21vdXNlTGVhdmV9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXN9IG9uQ2xpY2s9e21vdXNlQ2xpY2t9IG9uTW91c2VFbnRlcj17bW91c2VFbnRlcn0gb25Nb3VzZUxlYXZlPXttb3VzZUxlYXZlfT5cbiAgICAgICAgICAgIHsvKjxwIHN0eWxlPXtzdHlsZXN9IG9uQ2xpY2s9e21vdXNlQ2xpY2t9IG9uTW91c2VFbnRlcj17bW91c2VFbnRlcn0gb25Nb3VzZUxlYXZlPXttb3VzZUxlYXZlfT4qL31cbiAgICAgICAgICAgICAgICBUaGF0J3MgbWVcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY2N2E4MWYxOTI3Y2U5MmYxZmM4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkV2ZW50c1Rlc3QiLCJzdHlsZXMiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibW91c2VDbGljayIsImNvbnNvbGUiLCJsb2ciLCJtb3VzZUVudGVyIiwibW91c2VMZWF2ZSIsImV2ZW50cyIsIm9uQ2xpY2siLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzdHlsZSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=