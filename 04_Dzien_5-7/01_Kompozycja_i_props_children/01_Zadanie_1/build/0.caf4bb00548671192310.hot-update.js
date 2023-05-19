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
  // let items = [];
  // for (let i = 0; i < props.numTimes; i++) {
  //     items.push(props.children(i));
  // }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Co\u015B tutaj");
}
function ListOfTenThings() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Repeat, {
    numTimes: 10
  });
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
/******/ 	__webpack_require__.h = () => ("399a0463cfa836c3523b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYWY0YmIwMDU0ODY3MTE5MjMxMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDSztBQUU1QyxJQUFNRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQzs7QUFFbEM7QUFDQSxTQUFTSSxNQUFNQSxDQUFDQyxLQUFLLEVBQUU7RUFDbkI7RUFDQTtFQUNBO0VBQ0E7RUFDQSxvQkFBT1IsMERBQUEsY0FBSyxnQkFBYyxDQUFDO0FBQy9CO0FBRUEsU0FBU1UsZUFBZUEsQ0FBQSxFQUFHO0VBQ3ZCLG9CQUNJViwwREFBQSxDQUFDTyxNQUFNO0lBQUNJLFFBQVEsRUFBRTtFQUFHLENBRWIsQ0FBQztBQUVqQjtBQUVBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUosS0FBSyxFQUFLO0VBQy9CLG9CQUFPUiwwREFBQSxDQUFDYSxjQUFjLHFCQUNsQmIsMERBQUEsYUFBS1EsS0FBSyxDQUFDTSxRQUFhLENBQ1osQ0FBQztBQUNyQixDQUFDO0FBRUQsSUFBTUQsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJTCxLQUFLLEVBQUs7RUFDOUIsb0JBQU9SLDBEQUFBLENBQUNlLG1CQUFtQixxQkFDdkJmLDBEQUFBLGFBQUtRLEtBQUssQ0FBQ00sUUFBYSxDQUNQLENBQUM7QUFDMUIsQ0FBQztBQUVELElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUlQLEtBQUssRUFBSztFQUNuQyxvQkFBT1IsMERBQUEsYUFBS1EsS0FBSyxDQUFDTSxRQUFhLENBQUM7QUFDcEMsQ0FBQzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBUixJQUFJLENBQUNVLE1BQU0sZUFDUGhCLDBEQUFBLENBQUNPLE1BQU07RUFBQ0ksUUFBUSxFQUFFO0FBQUcsR0FDaEIsVUFBQ00sS0FBSztFQUFBLG9CQUFLakIsMERBQUE7SUFBS2tCLEdBQUcsRUFBRUQ7RUFBTSxHQUFDLGVBQWEsRUFBQ0EsS0FBSyxFQUFDLGNBQWlCLENBQUM7QUFBQSxDQUMvRCxDQUVaLENBQUM7Ozs7Ozs7O1VDckVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX0tvbXBvenljamFfaV9wcm9wc19jaGlsZHJlbi8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG4vLyBDYWxscyB0aGUgY2hpbGRyZW4gY2FsbGJhY2sgbnVtVGltZXMgdG8gcHJvZHVjZSBhIHJlcGVhdGVkIGNvbXBvbmVudFxuZnVuY3Rpb24gUmVwZWF0KHByb3BzKSB7XG4gICAgLy8gbGV0IGl0ZW1zID0gW107XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5udW1UaW1lczsgaSsrKSB7XG4gICAgLy8gICAgIGl0ZW1zLnB1c2gocHJvcHMuY2hpbGRyZW4oaSkpO1xuICAgIC8vIH1cbiAgICByZXR1cm4gPGRpdj5Db8WbIHR1dGFqPC9kaXY+O1xufVxuXG5mdW5jdGlvbiBMaXN0T2ZUZW5UaGluZ3MoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlcGVhdCBudW1UaW1lcz17MTB9PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvUmVwZWF0PlxuICAgICk7XG59XG5cbmNvbnN0IFBhcmVudENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8Q2hpbGRDb21wb25lbnQ+XG4gICAgICAgIDxoMT57cHJvcHMuY2hpbGRyZW59PC9oMT5cbiAgICA8L0NoaWxkQ29tcG9uZW50PlxufVxuXG5jb25zdCBDaGlsZENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8R3JhbmRDaGlsZENvbXBvbmVudD5cbiAgICAgICAgPGgxPntwcm9wcy5jaGlsZHJlbn08L2gxPlxuICAgIDwvR3JhbmRDaGlsZENvbXBvbmVudD5cbn1cblxuY29uc3QgR3JhbmRDaGlsZENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8aDE+e3Byb3BzLmNoaWxkcmVufTwvaDE+XG59XG5cblxuLy8gY29uc3QgQXBwID0gKCkgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxXcmFwcGVyIHRpdGxlPVwiSSBhbSB0aGUgd3JhcHBlclwiPlxuLy8gICAgICAgICAgICAgPENoaWxkIGJvZHk9XCJDaGlsZCBjb21wb25lbnRcIiAvPlxuLy8gICAgICAgICA8L1dyYXBwZXI+XG4vLyAgICAgICAgIDxDaGlsZCBib2R5PVwiSSBhbSBub3Qgd3JhcHBlZFwiPjwvQ2hpbGQ+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IFdyYXBwZXIgPSAocHJvcHMpID0+IHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbi8vICAgICAgICAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cbi8vICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgQ2hpbGQgPSAocHJvcHMpID0+IHtcbi8vICAgICByZXR1cm4gPGg0Pntwcm9wcy5ib2R5fTwvaDQ+O1xuLy8gfTtcblxucm9vdC5yZW5kZXIoXG4gICAgPFJlcGVhdCBudW1UaW1lcz17MTB9PlxuICAgICAgICB7KGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9PlRoaXMgaXMgaXRlbSB7aW5kZXh9IGluIHRoZSBsaXN0PC9kaXY+fVxuICAgIDwvUmVwZWF0PlxuXG4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM5OWEwNDYzY2ZhODM2YzM1MjNiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiUmVwZWF0IiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiTGlzdE9mVGVuVGhpbmdzIiwibnVtVGltZXMiLCJQYXJlbnRDb21wb25lbnQiLCJDaGlsZENvbXBvbmVudCIsImNoaWxkcmVuIiwiR3JhbmRDaGlsZENvbXBvbmVudCIsInJlbmRlciIsImluZGV4Iiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==