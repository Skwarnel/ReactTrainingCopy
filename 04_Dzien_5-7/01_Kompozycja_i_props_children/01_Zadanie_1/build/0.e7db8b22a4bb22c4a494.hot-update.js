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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Ja si\u0119 powtarzam ", items.index, " raz ", items);
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
/******/ 	__webpack_require__.h = () => ("97a9719b8be4cba0da12")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lN2RiOGIyMmE0YmIyMmM0YTQ5NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDSztBQUU1QyxJQUFNRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQzs7QUFFbEM7QUFDQSxTQUFTSSxNQUFNQSxDQUFDQyxLQUFLLEVBQUU7RUFDbkIsSUFBSUMsS0FBSyxHQUFHLEVBQUU7RUFDZCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsS0FBSyxDQUFDRyxRQUFRLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQ3JDRCxLQUFLLENBQUNHLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxRQUFRLENBQUNILENBQUMsQ0FBQyxDQUFDO0VBQ2pDO0VBQ0Esb0JBQU9WLDBEQUFBLGNBQUssd0JBQWlCLEVBQUNTLEtBQUssQ0FBQ00sS0FBSyxFQUFDLE9BQUssRUFBQ04sS0FBVyxDQUFDO0FBQ2hFO0FBRUEsU0FBU08sZUFBZUEsQ0FBQSxFQUFHO0VBQ3ZCLG9CQUNJaEIsMERBQUEsQ0FBQ08sTUFBTTtJQUFDSSxRQUFRLEVBQUU7RUFBRyxHQUNoQixVQUFDSSxLQUFLO0lBQUEsb0JBQUtmLDBEQUFBO01BQUtpQixHQUFHLEVBQUVGO0lBQU0sR0FBQyxlQUFhLEVBQUNBLEtBQUssRUFBQyxjQUFpQixDQUFDO0VBQUEsQ0FDL0QsQ0FBQztBQUVqQjtBQUVBLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSVYsS0FBSyxFQUFLO0VBQy9CLG9CQUFPUiwwREFBQSxDQUFDbUIsY0FBYyxxQkFDbEJuQiwwREFBQSxhQUFLUSxLQUFLLENBQUNLLFFBQWEsQ0FDWixDQUFDO0FBQ3JCLENBQUM7QUFFRCxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUlYLEtBQUssRUFBSztFQUM5QixvQkFBT1IsMERBQUEsQ0FBQ29CLG1CQUFtQixxQkFDdkJwQiwwREFBQSxhQUFLUSxLQUFLLENBQUNLLFFBQWEsQ0FDUCxDQUFDO0FBQzFCLENBQUM7QUFFRCxJQUFNTyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJWixLQUFLLEVBQUs7RUFDbkMsb0JBQU9SLDBEQUFBLGFBQUtRLEtBQUssQ0FBQ0ssUUFBYSxDQUFDO0FBQ3BDLENBQUM7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQVAsSUFBSSxDQUFDZSxNQUFNLGVBQ1ByQiwwREFBQSxDQUFDTyxNQUFNO0VBQUNJLFFBQVEsRUFBRTtBQUFHLEdBQ2hCLFVBQUNJLEtBQUs7RUFBQSxvQkFBS2YsMERBQUE7SUFBS2lCLEdBQUcsRUFBRUY7RUFBTSxHQUFDLGVBQWEsRUFBQ0EsS0FBSyxFQUFDLGNBQWlCLENBQUM7QUFBQSxDQUMvRCxDQUVaLENBQUM7Ozs7Ozs7O1VDckVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX0tvbXBvenljamFfaV9wcm9wc19jaGlsZHJlbi8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG4vLyBDYWxscyB0aGUgY2hpbGRyZW4gY2FsbGJhY2sgbnVtVGltZXMgdG8gcHJvZHVjZSBhIHJlcGVhdGVkIGNvbXBvbmVudFxuZnVuY3Rpb24gUmVwZWF0KHByb3BzKSB7XG4gICAgbGV0IGl0ZW1zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5udW1UaW1lczsgaSsrKSB7XG4gICAgICAgIGl0ZW1zLnB1c2gocHJvcHMuY2hpbGRyZW4oaSkpO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj5KYSBzacSZIHBvd3RhcnphbSB7aXRlbXMuaW5kZXh9IHJheiB7aXRlbXN9PC9kaXY+O1xufVxuXG5mdW5jdGlvbiBMaXN0T2ZUZW5UaGluZ3MoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlcGVhdCBudW1UaW1lcz17MTB9PlxuICAgICAgICAgICAgeyhpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fT5UaGlzIGlzIGl0ZW0ge2luZGV4fSBpbiB0aGUgbGlzdDwvZGl2Pn1cbiAgICAgICAgPC9SZXBlYXQ+XG4gICAgKTtcbn1cblxuY29uc3QgUGFyZW50Q29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxDaGlsZENvbXBvbmVudD5cbiAgICAgICAgPGgxPntwcm9wcy5jaGlsZHJlbn08L2gxPlxuICAgIDwvQ2hpbGRDb21wb25lbnQ+XG59XG5cbmNvbnN0IENoaWxkQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxHcmFuZENoaWxkQ29tcG9uZW50PlxuICAgICAgICA8aDE+e3Byb3BzLmNoaWxkcmVufTwvaDE+XG4gICAgPC9HcmFuZENoaWxkQ29tcG9uZW50PlxufVxuXG5jb25zdCBHcmFuZENoaWxkQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxoMT57cHJvcHMuY2hpbGRyZW59PC9oMT5cbn1cblxuXG4vLyBjb25zdCBBcHAgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgPFdyYXBwZXIgdGl0bGU9XCJJIGFtIHRoZSB3cmFwcGVyXCI+XG4vLyAgICAgICAgICAgICA8Q2hpbGQgYm9keT1cIkNoaWxkIGNvbXBvbmVudFwiIC8+XG4vLyAgICAgICAgIDwvV3JhcHBlcj5cbi8vICAgICAgICAgPENoaWxkIGJvZHk9XCJJIGFtIG5vdCB3cmFwcGVkXCI+PC9DaGlsZD5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgV3JhcHBlciA9IChwcm9wcykgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuLy8gICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuLy8gICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gfTtcbi8vXG4vLyBjb25zdCBDaGlsZCA9IChwcm9wcykgPT4ge1xuLy8gICAgIHJldHVybiA8aDQ+e3Byb3BzLmJvZHl9PC9oND47XG4vLyB9O1xuXG5yb290LnJlbmRlcihcbiAgICA8UmVwZWF0IG51bVRpbWVzPXsxMH0+XG4gICAgICAgIHsoaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0+VGhpcyBpcyBpdGVtIHtpbmRleH0gaW4gdGhlIGxpc3Q8L2Rpdj59XG4gICAgPC9SZXBlYXQ+XG5cbik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTdhOTcxOWI4YmU0Y2JhMGRhMTJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJSZXBlYXQiLCJwcm9wcyIsIml0ZW1zIiwiaSIsIm51bVRpbWVzIiwicHVzaCIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImluZGV4IiwiTGlzdE9mVGVuVGhpbmdzIiwia2V5IiwiUGFyZW50Q29tcG9uZW50IiwiQ2hpbGRDb21wb25lbnQiLCJHcmFuZENoaWxkQ29tcG9uZW50IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==