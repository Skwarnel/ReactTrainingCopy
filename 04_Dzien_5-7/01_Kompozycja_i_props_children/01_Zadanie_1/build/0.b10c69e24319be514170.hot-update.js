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

// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  var items = [];
  for (var i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, items);
}
function ListOfTenThings() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Repeat, {
    numTimes: 10
  }, function (index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index
    }, "This is item ", index, " in the list");
  });
}
function ChildrenTest() {
  for (var i = 0; i < props.children.length; i++) {
    /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "I have ", i, " children");
  }
}
var ParentComponent = function ParentComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildComponent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.children));
};
var ChildComponent = function ChildComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GrandChildComponent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.children));
};
var GrandChildComponent = function GrandChildComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.children);
};

// const App = () => {
//     return (
//         <div>
//         <Wrapper title="I am the wrapper">
//             <Child body="Child component" />
//         </Wrapper>
//         <Child body="I am not wrapped"></Child>
//         </div>
//     );
// };
//
// const Wrapper = (props) => {
//     return (
//         <div className="wrapper">
//             <h1>{props.title}</h1>
//             {props.children}
//         </div>
//     );
// };
//
// const Child = (props) => {
//     return <h4>{props.body}</h4>;
// };

root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Repeat, {
  numTimes: 10
}, function (index) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index
  }, "This is item ", index, " in the list");
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("630073822600de6a11fe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMTBjNjllMjQzMTliZTUxNDE3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDSztBQUU1QyxJQUFNRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQzs7QUFFbEM7QUFDQSxTQUFTSSxNQUFNQSxDQUFDQyxLQUFLLEVBQUU7RUFDbkIsSUFBSUMsS0FBSyxHQUFHLEVBQUU7RUFDZCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsS0FBSyxDQUFDRyxRQUFRLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQ3JDRCxLQUFLLENBQUNHLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxRQUFRLENBQUNILENBQUMsQ0FBQyxDQUFDO0VBQ2pDO0VBQ0Esb0JBQU9WLDBEQUFBLGNBQU1TLEtBQVcsQ0FBQztBQUM3QjtBQUVBLFNBQVNNLGVBQWVBLENBQUEsRUFBRztFQUN2QixvQkFDSWYsMERBQUEsQ0FBQ08sTUFBTTtJQUFDSSxRQUFRLEVBQUU7RUFBRyxHQUNoQixVQUFDSyxLQUFLO0lBQUEsb0JBQUtoQiwwREFBQTtNQUFLaUIsR0FBRyxFQUFFRDtJQUFNLEdBQUMsZUFBYSxFQUFDQSxLQUFLLEVBQUMsY0FBaUIsQ0FBQztFQUFBLENBQy9ELENBQUM7QUFFakI7QUFFQSxTQUFTRSxZQUFZQSxDQUFBLEVBQUc7RUFDcEIsS0FBSyxJQUFJUixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLEtBQUssQ0FBQ0ssUUFBUSxDQUFDTSxNQUFNLEVBQUVULENBQUMsRUFBRSxFQUFFO0lBQzVDLGFBQUFWLDBEQUFBLGFBQUksU0FBTyxFQUFDVSxDQUFDLEVBQUMsV0FBYSxDQUFDO0VBQ2hDO0FBQ0o7QUFFQSxJQUFNVSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlaLEtBQUssRUFBSztFQUMvQixvQkFBT1IsMERBQUEsQ0FBQ3FCLGNBQWMscUJBQ2xCckIsMERBQUEsYUFBS1EsS0FBSyxDQUFDSyxRQUFhLENBQ1osQ0FBQztBQUNyQixDQUFDO0FBRUQsSUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJYixLQUFLLEVBQUs7RUFDOUIsb0JBQU9SLDBEQUFBLENBQUNzQixtQkFBbUIscUJBQ3ZCdEIsMERBQUEsYUFBS1EsS0FBSyxDQUFDSyxRQUFhLENBQ1AsQ0FBQztBQUMxQixDQUFDO0FBRUQsSUFBTVMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBSWQsS0FBSyxFQUFLO0VBQ25DLG9CQUFPUiwwREFBQSxhQUFLUSxLQUFLLENBQUNLLFFBQWEsQ0FBQztBQUNwQyxDQUFDOztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFQLElBQUksQ0FBQ2lCLE1BQU0sZUFDUHZCLDBEQUFBLENBQUNPLE1BQU07RUFBQ0ksUUFBUSxFQUFFO0FBQUcsR0FDaEIsVUFBQ0ssS0FBSztFQUFBLG9CQUFLaEIsMERBQUE7SUFBS2lCLEdBQUcsRUFBRUQ7RUFBTSxHQUFDLGVBQWEsRUFBQ0EsS0FBSyxFQUFDLGNBQWlCLENBQUM7QUFBQSxDQUMvRCxDQUVaLENBQUM7Ozs7Ozs7O1VDM0VEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX0tvbXBvenljamFfaV9wcm9wc19jaGlsZHJlbi8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG4vLyBDYWxscyB0aGUgY2hpbGRyZW4gY2FsbGJhY2sgbnVtVGltZXMgdG8gcHJvZHVjZSBhIHJlcGVhdGVkIGNvbXBvbmVudFxuZnVuY3Rpb24gUmVwZWF0KHByb3BzKSB7XG4gICAgbGV0IGl0ZW1zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5udW1UaW1lczsgaSsrKSB7XG4gICAgICAgIGl0ZW1zLnB1c2gocHJvcHMuY2hpbGRyZW4oaSkpO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj57aXRlbXN9PC9kaXY+O1xufVxuXG5mdW5jdGlvbiBMaXN0T2ZUZW5UaGluZ3MoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlcGVhdCBudW1UaW1lcz17MTB9PlxuICAgICAgICAgICAgeyhpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fT5UaGlzIGlzIGl0ZW0ge2luZGV4fSBpbiB0aGUgbGlzdDwvZGl2Pn1cbiAgICAgICAgPC9SZXBlYXQ+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gQ2hpbGRyZW5UZXN0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgPGgxPkkgaGF2ZSB7aX0gY2hpbGRyZW48L2gxPjtcbiAgICB9XG59XG5cbmNvbnN0IFBhcmVudENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8Q2hpbGRDb21wb25lbnQ+XG4gICAgICAgIDxoMT57cHJvcHMuY2hpbGRyZW59PC9oMT5cbiAgICA8L0NoaWxkQ29tcG9uZW50PlxufVxuXG5jb25zdCBDaGlsZENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8R3JhbmRDaGlsZENvbXBvbmVudD5cbiAgICAgICAgPGgxPntwcm9wcy5jaGlsZHJlbn08L2gxPlxuICAgIDwvR3JhbmRDaGlsZENvbXBvbmVudD5cbn1cblxuY29uc3QgR3JhbmRDaGlsZENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8aDE+e3Byb3BzLmNoaWxkcmVufTwvaDE+XG59XG5cblxuLy8gY29uc3QgQXBwID0gKCkgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxXcmFwcGVyIHRpdGxlPVwiSSBhbSB0aGUgd3JhcHBlclwiPlxuLy8gICAgICAgICAgICAgPENoaWxkIGJvZHk9XCJDaGlsZCBjb21wb25lbnRcIiAvPlxuLy8gICAgICAgICA8L1dyYXBwZXI+XG4vLyAgICAgICAgIDxDaGlsZCBib2R5PVwiSSBhbSBub3Qgd3JhcHBlZFwiPjwvQ2hpbGQ+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IFdyYXBwZXIgPSAocHJvcHMpID0+IHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbi8vICAgICAgICAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cbi8vICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgQ2hpbGQgPSAocHJvcHMpID0+IHtcbi8vICAgICByZXR1cm4gPGg0Pntwcm9wcy5ib2R5fTwvaDQ+O1xuLy8gfTtcblxucm9vdC5yZW5kZXIoXG4gICAgPFJlcGVhdCBudW1UaW1lcz17MTB9PlxuICAgICAgICB7KGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9PlRoaXMgaXMgaXRlbSB7aW5kZXh9IGluIHRoZSBsaXN0PC9kaXY+fVxuICAgIDwvUmVwZWF0PlxuXG4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYzMDA3MzgyMjYwMGRlNmExMWZlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiUmVwZWF0IiwicHJvcHMiLCJpdGVtcyIsImkiLCJudW1UaW1lcyIsInB1c2giLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJMaXN0T2ZUZW5UaGluZ3MiLCJpbmRleCIsImtleSIsIkNoaWxkcmVuVGVzdCIsImxlbmd0aCIsIlBhcmVudENvbXBvbmVudCIsIkNoaWxkQ29tcG9uZW50IiwiR3JhbmRDaGlsZENvbXBvbmVudCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=