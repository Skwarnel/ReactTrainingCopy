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
function ChildrenTest(props) {
  var child1 = props.child1,
    child2 = props.child2,
    child3 = props.child3;
  var _props$children = props.children,
    grandchild1 = _props$children.grandchild1,
    grandchild2 = _props$children.grandchild2,
    grandchild3 = _props$children.grandchild3;
  // let tab = [];
  // for (let i = 0; i < props.children.length; i++) {
  //     tab.push(<h1>I have {i} children</h1>);
  // }
  // return <div>{tab}</div>;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, child1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, child2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, child3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, grandchild1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, grandchild3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, grandchild3));
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

root.render(
/*#__PURE__*/
// <Repeat numTimes={10}>
//     {(index) => <div key={index}>This is item {index} in the list</div>}
// </Repeat>
react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildrenTest, {
  child1: "tradycja",
  child2: "z przyjacielem",
  child3: "kolacja"
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("726b0f9a152369f41727")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxNQUFNLEVBQUM7QUFBUyxDQUMxRCxDQUNsQixDQUFDOzs7Ozs7OztVQ3pGRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDFfWmFkYW5pZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuLy8gQ2FsbHMgdGhlIGNoaWxkcmVuIGNhbGxiYWNrIG51bVRpbWVzIHRvIHByb2R1Y2UgYSByZXBlYXRlZCBjb21wb25lbnRcbmZ1bmN0aW9uIFJlcGVhdChwcm9wcykge1xuICAgIGxldCBpdGVtcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubnVtVGltZXM7IGkrKykge1xuICAgICAgICBpdGVtcy5wdXNoKHByb3BzLmNoaWxkcmVuKGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXY+e2l0ZW1zfTwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gTGlzdE9mVGVuVGhpbmdzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZXBlYXQgbnVtVGltZXM9ezEwfT5cbiAgICAgICAgICAgIHsoaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0+VGhpcyBpcyBpdGVtIHtpbmRleH0gaW4gdGhlIGxpc3Q8L2Rpdj59XG4gICAgICAgIDwvUmVwZWF0PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIENoaWxkcmVuVGVzdChwcm9wcykge1xuICAgIGNvbnN0IHtjaGlsZDEsIGNoaWxkMiwgY2hpbGQzfSA9IHByb3BzO1xuICAgIGNvbnN0IHtncmFuZGNoaWxkMSwgZ3JhbmRjaGlsZDIsIGdyYW5kY2hpbGQzfSA9IHByb3BzLmNoaWxkcmVuO1xuICAgIC8vIGxldCB0YWIgPSBbXTtcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIHRhYi5wdXNoKDxoMT5JIGhhdmUge2l9IGNoaWxkcmVuPC9oMT4pO1xuICAgIC8vIH1cbiAgICAvLyByZXR1cm4gPGRpdj57dGFifTwvZGl2PjtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGgxPntjaGlsZDF9PC9oMT5cbiAgICAgICAgPGgyPntjaGlsZDJ9PC9oMj5cbiAgICAgICAgPGgzPntjaGlsZDN9PC9oMz5cbiAgICAgICAgPGg0PntncmFuZGNoaWxkMX08L2g0PlxuICAgICAgICA8aDU+e2dyYW5kY2hpbGQzfTwvaDU+XG4gICAgICAgIDxoNj57Z3JhbmRjaGlsZDN9PC9oNj5cbiAgICA8L2Rpdj47XG59XG5cbmNvbnN0IFBhcmVudENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8Q2hpbGRDb21wb25lbnQ+XG4gICAgICAgIDxoMT57cHJvcHMuY2hpbGRyZW59PC9oMT5cbiAgICA8L0NoaWxkQ29tcG9uZW50PlxufVxuXG5jb25zdCBDaGlsZENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8R3JhbmRDaGlsZENvbXBvbmVudD5cbiAgICAgICAgPGgxPntwcm9wcy5jaGlsZHJlbn08L2gxPlxuICAgIDwvR3JhbmRDaGlsZENvbXBvbmVudD5cbn1cblxuY29uc3QgR3JhbmRDaGlsZENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8aDE+e3Byb3BzLmNoaWxkcmVufTwvaDE+XG59XG5cblxuLy8gY29uc3QgQXBwID0gKCkgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxXcmFwcGVyIHRpdGxlPVwiSSBhbSB0aGUgd3JhcHBlclwiPlxuLy8gICAgICAgICAgICAgPENoaWxkIGJvZHk9XCJDaGlsZCBjb21wb25lbnRcIiAvPlxuLy8gICAgICAgICA8L1dyYXBwZXI+XG4vLyAgICAgICAgIDxDaGlsZCBib2R5PVwiSSBhbSBub3Qgd3JhcHBlZFwiPjwvQ2hpbGQ+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IFdyYXBwZXIgPSAocHJvcHMpID0+IHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbi8vICAgICAgICAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cbi8vICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgQ2hpbGQgPSAocHJvcHMpID0+IHtcbi8vICAgICByZXR1cm4gPGg0Pntwcm9wcy5ib2R5fTwvaDQ+O1xuLy8gfTtcblxucm9vdC5yZW5kZXIoXG4gICAgLy8gPFJlcGVhdCBudW1UaW1lcz17MTB9PlxuICAgIC8vICAgICB7KGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9PlRoaXMgaXMgaXRlbSB7aW5kZXh9IGluIHRoZSBsaXN0PC9kaXY+fVxuICAgIC8vIDwvUmVwZWF0PlxuXG4gICAgPENoaWxkcmVuVGVzdCBjaGlsZDE9XCJ0cmFkeWNqYVwiIGNoaWxkMj1cInogcHJ6eWphY2llbGVtXCIgY2hpbGQzPVwia29sYWNqYVwiPlxuICAgIDwvQ2hpbGRyZW5UZXN0PlxuKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3MjZiMGY5YTE1MjM2OWY0MTcyN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIlJlcGVhdCIsInByb3BzIiwiaXRlbXMiLCJpIiwibnVtVGltZXMiLCJwdXNoIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiTGlzdE9mVGVuVGhpbmdzIiwiaW5kZXgiLCJrZXkiLCJDaGlsZHJlblRlc3QiLCJjaGlsZDEiLCJjaGlsZDIiLCJjaGlsZDMiLCJfcHJvcHMkY2hpbGRyZW4iLCJncmFuZGNoaWxkMSIsImdyYW5kY2hpbGQyIiwiZ3JhbmRjaGlsZDMiLCJQYXJlbnRDb21wb25lbnQiLCJDaGlsZENvbXBvbmVudCIsIkdyYW5kQ2hpbGRDb21wb25lbnQiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9