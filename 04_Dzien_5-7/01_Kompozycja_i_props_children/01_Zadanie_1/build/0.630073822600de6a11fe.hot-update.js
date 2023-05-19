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
  var tab = [];
  for (var i = 0; i < props.children.length; i++) {
    tab.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "I have ", i, " children"));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, tab);
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
/******/ 	__webpack_require__.h = () => ("46b6f887b59fc56642d6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42MzAwNzM4MjI2MDBkZTZhMTFmZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDSztBQUU1QyxJQUFNRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQzs7QUFFbEM7QUFDQSxTQUFTSSxNQUFNQSxDQUFDQyxLQUFLLEVBQUU7RUFDbkIsSUFBSUMsS0FBSyxHQUFHLEVBQUU7RUFDZCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsS0FBSyxDQUFDRyxRQUFRLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQ3JDRCxLQUFLLENBQUNHLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxRQUFRLENBQUNILENBQUMsQ0FBQyxDQUFDO0VBQ2pDO0VBQ0Esb0JBQU9WLDBEQUFBLGNBQU1TLEtBQVcsQ0FBQztBQUM3QjtBQUVBLFNBQVNNLGVBQWVBLENBQUEsRUFBRztFQUN2QixvQkFDSWYsMERBQUEsQ0FBQ08sTUFBTTtJQUFDSSxRQUFRLEVBQUU7RUFBRyxHQUNoQixVQUFDSyxLQUFLO0lBQUEsb0JBQUtoQiwwREFBQTtNQUFLaUIsR0FBRyxFQUFFRDtJQUFNLEdBQUMsZUFBYSxFQUFDQSxLQUFLLEVBQUMsY0FBaUIsQ0FBQztFQUFBLENBQy9ELENBQUM7QUFFakI7QUFFQSxTQUFTRSxZQUFZQSxDQUFBLEVBQUc7RUFDcEIsSUFBSUMsR0FBRyxHQUFHLEVBQUU7RUFDWixLQUFLLElBQUlULENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsS0FBSyxDQUFDSyxRQUFRLENBQUNPLE1BQU0sRUFBRVYsQ0FBQyxFQUFFLEVBQUU7SUFDNUNTLEdBQUcsQ0FBQ1AsSUFBSSxlQUFDWiwwREFBQSxhQUFJLFNBQU8sRUFBQ1UsQ0FBQyxFQUFDLFdBQWEsQ0FBQyxDQUFDO0VBQzFDO0VBQ0Esb0JBQU9WLDBEQUFBLGNBQU1tQixHQUFTLENBQUM7QUFDM0I7QUFFQSxJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUliLEtBQUssRUFBSztFQUMvQixvQkFBT1IsMERBQUEsQ0FBQ3NCLGNBQWMscUJBQ2xCdEIsMERBQUEsYUFBS1EsS0FBSyxDQUFDSyxRQUFhLENBQ1osQ0FBQztBQUNyQixDQUFDO0FBRUQsSUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJZCxLQUFLLEVBQUs7RUFDOUIsb0JBQU9SLDBEQUFBLENBQUN1QixtQkFBbUIscUJBQ3ZCdkIsMERBQUEsYUFBS1EsS0FBSyxDQUFDSyxRQUFhLENBQ1AsQ0FBQztBQUMxQixDQUFDO0FBRUQsSUFBTVUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBSWYsS0FBSyxFQUFLO0VBQ25DLG9CQUFPUiwwREFBQSxhQUFLUSxLQUFLLENBQUNLLFFBQWEsQ0FBQztBQUNwQyxDQUFDOztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFQLElBQUksQ0FBQ2tCLE1BQU0sZUFDUHhCLDBEQUFBLENBQUNPLE1BQU07RUFBQ0ksUUFBUSxFQUFFO0FBQUcsR0FDaEIsVUFBQ0ssS0FBSztFQUFBLG9CQUFLaEIsMERBQUE7SUFBS2lCLEdBQUcsRUFBRUQ7RUFBTSxHQUFDLGVBQWEsRUFBQ0EsS0FBSyxFQUFDLGNBQWlCLENBQUM7QUFBQSxDQUMvRCxDQUVaLENBQUM7Ozs7Ozs7O1VDN0VEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX0tvbXBvenljamFfaV9wcm9wc19jaGlsZHJlbi8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG4vLyBDYWxscyB0aGUgY2hpbGRyZW4gY2FsbGJhY2sgbnVtVGltZXMgdG8gcHJvZHVjZSBhIHJlcGVhdGVkIGNvbXBvbmVudFxuZnVuY3Rpb24gUmVwZWF0KHByb3BzKSB7XG4gICAgbGV0IGl0ZW1zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5udW1UaW1lczsgaSsrKSB7XG4gICAgICAgIGl0ZW1zLnB1c2gocHJvcHMuY2hpbGRyZW4oaSkpO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj57aXRlbXN9PC9kaXY+O1xufVxuXG5mdW5jdGlvbiBMaXN0T2ZUZW5UaGluZ3MoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlcGVhdCBudW1UaW1lcz17MTB9PlxuICAgICAgICAgICAgeyhpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fT5UaGlzIGlzIGl0ZW0ge2luZGV4fSBpbiB0aGUgbGlzdDwvZGl2Pn1cbiAgICAgICAgPC9SZXBlYXQ+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gQ2hpbGRyZW5UZXN0KCkge1xuICAgIGxldCB0YWIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRhYi5wdXNoKDxoMT5JIGhhdmUge2l9IGNoaWxkcmVuPC9oMT4pO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj57dGFifTwvZGl2PlxufVxuXG5jb25zdCBQYXJlbnRDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gPENoaWxkQ29tcG9uZW50PlxuICAgICAgICA8aDE+e3Byb3BzLmNoaWxkcmVufTwvaDE+XG4gICAgPC9DaGlsZENvbXBvbmVudD5cbn1cblxuY29uc3QgQ2hpbGRDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gPEdyYW5kQ2hpbGRDb21wb25lbnQ+XG4gICAgICAgIDxoMT57cHJvcHMuY2hpbGRyZW59PC9oMT5cbiAgICA8L0dyYW5kQ2hpbGRDb21wb25lbnQ+XG59XG5cbmNvbnN0IEdyYW5kQ2hpbGRDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gPGgxPntwcm9wcy5jaGlsZHJlbn08L2gxPlxufVxuXG5cbi8vIGNvbnN0IEFwcCA9ICgpID0+IHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8V3JhcHBlciB0aXRsZT1cIkkgYW0gdGhlIHdyYXBwZXJcIj5cbi8vICAgICAgICAgICAgIDxDaGlsZCBib2R5PVwiQ2hpbGQgY29tcG9uZW50XCIgLz5cbi8vICAgICAgICAgPC9XcmFwcGVyPlxuLy8gICAgICAgICA8Q2hpbGQgYm9keT1cIkkgYW0gbm90IHdyYXBwZWRcIj48L0NoaWxkPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gfTtcbi8vXG4vLyBjb25zdCBXcmFwcGVyID0gKHByb3BzKSA9PiB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4vLyAgICAgICAgICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XG4vLyAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IENoaWxkID0gKHByb3BzKSA9PiB7XG4vLyAgICAgcmV0dXJuIDxoND57cHJvcHMuYm9keX08L2g0Pjtcbi8vIH07XG5cbnJvb3QucmVuZGVyKFxuICAgIDxSZXBlYXQgbnVtVGltZXM9ezEwfT5cbiAgICAgICAgeyhpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fT5UaGlzIGlzIGl0ZW0ge2luZGV4fSBpbiB0aGUgbGlzdDwvZGl2Pn1cbiAgICA8L1JlcGVhdD5cblxuKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NmI2Zjg4N2I1OWZjNTY2NDJkNlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIlJlcGVhdCIsInByb3BzIiwiaXRlbXMiLCJpIiwibnVtVGltZXMiLCJwdXNoIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiTGlzdE9mVGVuVGhpbmdzIiwiaW5kZXgiLCJrZXkiLCJDaGlsZHJlblRlc3QiLCJ0YWIiLCJsZW5ndGgiLCJQYXJlbnRDb21wb25lbnQiLCJDaGlsZENvbXBvbmVudCIsIkdyYW5kQ2hpbGRDb21wb25lbnQiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9