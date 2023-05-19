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
    child3 = props.child3,
    grandChild1 = props.grandChild1;
  var _props$children = props.children,
    grandchild1 = _props$children.grandchild1,
    grandchild2 = _props$children.grandchild2,
    grandchild3 = _props$children.grandchild3;
  // let tab = [];
  // for (let i = 0; i < props.children.length; i++) {
  //     tab.push(<h1>I have {i} children</h1>);
  // }
  // return <div>{tab}</div>;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, child1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, child2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, child3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GrandChildComponent, {
    grandChild1: "Tu jest grandChild1"
  }, " ", grandchild1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GrandChildComponent, null, "Tu jest grandChild2 ", props.children.grandChild1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GrandChildComponent, null, "Tu jest grandChild3")));
}
var ParentComponent = function ParentComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildComponent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.children));
};
var ChildComponent = function ChildComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GrandChildComponent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null));
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
  child3: "kolacja",
  grandChild1: "dfasdfadsf"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  grandChild1: "grandChild1"
}, "efsdfasdfads")));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2ca24e7ec5daa02209f1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQVAsSUFBSSxDQUFDd0IsTUFBTTtBQUFBO0FBQ1A7QUFDQTtBQUNBO0FBRUE5QiwwREFBQSxDQUFDa0IsWUFBWTtFQUFDQyxNQUFNLEVBQUMsVUFBVTtFQUFDQyxNQUFNLEVBQUMsZ0JBQWdCO0VBQUNDLE1BQU0sRUFBQyxTQUFTO0VBQUNDLFdBQVcsRUFBQztBQUFZLGdCQUM3RnRCLDBEQUFBO0VBQUdzQixXQUFXLEVBQUM7QUFBYSxHQUFDLGNBQWUsQ0FDbEMsQ0FDbEIsQ0FBQzs7Ozs7Ozs7VUM5RkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfS29tcG96eWNqYV9pX3Byb3BzX2NoaWxkcmVuLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbi8vIENhbGxzIHRoZSBjaGlsZHJlbiBjYWxsYmFjayBudW1UaW1lcyB0byBwcm9kdWNlIGEgcmVwZWF0ZWQgY29tcG9uZW50XG5mdW5jdGlvbiBSZXBlYXQocHJvcHMpIHtcbiAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLm51bVRpbWVzOyBpKyspIHtcbiAgICAgICAgaXRlbXMucHVzaChwcm9wcy5jaGlsZHJlbihpKSk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2PntpdGVtc308L2Rpdj47XG59XG5cbmZ1bmN0aW9uIExpc3RPZlRlblRoaW5ncygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVwZWF0IG51bVRpbWVzPXsxMH0+XG4gICAgICAgICAgICB7KGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9PlRoaXMgaXMgaXRlbSB7aW5kZXh9IGluIHRoZSBsaXN0PC9kaXY+fVxuICAgICAgICA8L1JlcGVhdD5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBDaGlsZHJlblRlc3QocHJvcHMpIHtcbiAgICBjb25zdCB7Y2hpbGQxLCBjaGlsZDIsIGNoaWxkMywgZ3JhbmRDaGlsZDF9ID0gcHJvcHM7XG4gICAgY29uc3Qge2dyYW5kY2hpbGQxLCBncmFuZGNoaWxkMiwgZ3JhbmRjaGlsZDN9ID0gcHJvcHMuY2hpbGRyZW47XG4gICAgLy8gbGV0IHRhYiA9IFtdO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgdGFiLnB1c2goPGgxPkkgaGF2ZSB7aX0gY2hpbGRyZW48L2gxPik7XG4gICAgLy8gfVxuICAgIC8vIHJldHVybiA8ZGl2Pnt0YWJ9PC9kaXY+O1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8aDQ+e2NoaWxkMX08L2g0PlxuICAgICAgICA8aDU+e2NoaWxkMn08L2g1PlxuICAgICAgICA8aDY+e2NoaWxkM308L2g2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEdyYW5kQ2hpbGRDb21wb25lbnQgZ3JhbmRDaGlsZDE9XCJUdSBqZXN0IGdyYW5kQ2hpbGQxXCI+IHtncmFuZGNoaWxkMX08L0dyYW5kQ2hpbGRDb21wb25lbnQ+XG4gICAgICAgICAgICA8R3JhbmRDaGlsZENvbXBvbmVudD5UdSBqZXN0IGdyYW5kQ2hpbGQyIHtwcm9wcy5jaGlsZHJlbi5ncmFuZENoaWxkMX08L0dyYW5kQ2hpbGRDb21wb25lbnQ+XG4gICAgICAgICAgICA8R3JhbmRDaGlsZENvbXBvbmVudD5UdSBqZXN0IGdyYW5kQ2hpbGQzPC9HcmFuZENoaWxkQ29tcG9uZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj47XG59XG5cblxuY29uc3QgUGFyZW50Q29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxDaGlsZENvbXBvbmVudD5cbiAgICAgICAgPGgxPntwcm9wcy5jaGlsZHJlbn08L2gxPlxuICAgIDwvQ2hpbGRDb21wb25lbnQ+XG59XG5cbmNvbnN0IENoaWxkQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG5cbiAgICByZXR1cm4gPEdyYW5kQ2hpbGRDb21wb25lbnQ+XG4gICAgICAgIDxoMT57fTwvaDE+XG4gICAgPC9HcmFuZENoaWxkQ29tcG9uZW50PlxufVxuXG5jb25zdCBHcmFuZENoaWxkQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxoMT57cHJvcHMuY2hpbGRyZW59PC9oMT5cbn1cblxuXG4vLyBjb25zdCBBcHAgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgPFdyYXBwZXIgdGl0bGU9XCJJIGFtIHRoZSB3cmFwcGVyXCI+XG4vLyAgICAgICAgICAgICA8Q2hpbGQgYm9keT1cIkNoaWxkIGNvbXBvbmVudFwiIC8+XG4vLyAgICAgICAgIDwvV3JhcHBlcj5cbi8vICAgICAgICAgPENoaWxkIGJvZHk9XCJJIGFtIG5vdCB3cmFwcGVkXCI+PC9DaGlsZD5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgV3JhcHBlciA9IChwcm9wcykgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuLy8gICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuLy8gICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gfTtcbi8vXG4vLyBjb25zdCBDaGlsZCA9IChwcm9wcykgPT4ge1xuLy8gICAgIHJldHVybiA8aDQ+e3Byb3BzLmJvZHl9PC9oND47XG4vLyB9O1xuXG5yb290LnJlbmRlcihcbiAgICAvLyA8UmVwZWF0IG51bVRpbWVzPXsxMH0+XG4gICAgLy8gICAgIHsoaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0+VGhpcyBpcyBpdGVtIHtpbmRleH0gaW4gdGhlIGxpc3Q8L2Rpdj59XG4gICAgLy8gPC9SZXBlYXQ+XG5cbiAgICA8Q2hpbGRyZW5UZXN0IGNoaWxkMT1cInRyYWR5Y2phXCIgY2hpbGQyPVwieiBwcnp5amFjaWVsZW1cIiBjaGlsZDM9XCJrb2xhY2phXCIgZ3JhbmRDaGlsZDE9XCJkZmFzZGZhZHNmXCI+XG4gICAgICAgIDxwIGdyYW5kQ2hpbGQxPVwiZ3JhbmRDaGlsZDFcIj5lZnNkZmFzZGZhZHM8L3A+XG4gICAgPC9DaGlsZHJlblRlc3Q+XG4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJjYTI0ZTdlYzVkYWEwMjIwOWYxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiUmVwZWF0IiwicHJvcHMiLCJpdGVtcyIsImkiLCJudW1UaW1lcyIsInB1c2giLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJMaXN0T2ZUZW5UaGluZ3MiLCJpbmRleCIsImtleSIsIkNoaWxkcmVuVGVzdCIsImNoaWxkMSIsImNoaWxkMiIsImNoaWxkMyIsImdyYW5kQ2hpbGQxIiwiX3Byb3BzJGNoaWxkcmVuIiwiZ3JhbmRjaGlsZDEiLCJncmFuZGNoaWxkMiIsImdyYW5kY2hpbGQzIiwiR3JhbmRDaGlsZENvbXBvbmVudCIsIlBhcmVudENvbXBvbmVudCIsIkNoaWxkQ29tcG9uZW50IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==