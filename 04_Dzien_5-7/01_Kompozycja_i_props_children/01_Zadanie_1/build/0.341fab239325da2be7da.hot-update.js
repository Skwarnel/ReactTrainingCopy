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
  }, " ", grandchild1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Tu jest grandChild2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Tu jest grandChild3")));
}
var ParentComponent = function ParentComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildComponent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.children));
};
var ChildComponent = function ChildComponent(props) {
  var grandChild1 = props.grandChild1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GrandChildComponent, null);
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
/******/ 	__webpack_require__.h = () => ("01e2d22f6ab2079b3aac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUN3QixNQUFNO0FBQUE7QUFDUDtBQUNBO0FBQ0E7QUFFQTlCLDBEQUFBLENBQUNrQixZQUFZO0VBQUNDLE1BQU0sRUFBQyxVQUFVO0VBQUNDLE1BQU0sRUFBQyxnQkFBZ0I7RUFBQ0MsTUFBTSxFQUFDLFNBQVM7RUFBQ0MsV0FBVyxFQUFDO0FBQVksZ0JBQzdGdEIsMERBQUE7RUFBR3NCLFdBQVcsRUFBQztBQUFhLEdBQUMsY0FBZSxDQUNsQyxDQUNsQixDQUFDOzs7Ozs7OztVQzdGRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDFfWmFkYW5pZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuLy8gQ2FsbHMgdGhlIGNoaWxkcmVuIGNhbGxiYWNrIG51bVRpbWVzIHRvIHByb2R1Y2UgYSByZXBlYXRlZCBjb21wb25lbnRcbmZ1bmN0aW9uIFJlcGVhdChwcm9wcykge1xuICAgIGxldCBpdGVtcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubnVtVGltZXM7IGkrKykge1xuICAgICAgICBpdGVtcy5wdXNoKHByb3BzLmNoaWxkcmVuKGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXY+e2l0ZW1zfTwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gTGlzdE9mVGVuVGhpbmdzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZXBlYXQgbnVtVGltZXM9ezEwfT5cbiAgICAgICAgICAgIHsoaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0+VGhpcyBpcyBpdGVtIHtpbmRleH0gaW4gdGhlIGxpc3Q8L2Rpdj59XG4gICAgICAgIDwvUmVwZWF0PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIENoaWxkcmVuVGVzdChwcm9wcykge1xuICAgIGNvbnN0IHtjaGlsZDEsIGNoaWxkMiwgY2hpbGQzLCBncmFuZENoaWxkMX0gPSBwcm9wcztcbiAgICBjb25zdCB7Z3JhbmRjaGlsZDEsIGdyYW5kY2hpbGQyLCBncmFuZGNoaWxkM30gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAvLyBsZXQgdGFiID0gW107XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICB0YWIucHVzaCg8aDE+SSBoYXZlIHtpfSBjaGlsZHJlbjwvaDE+KTtcbiAgICAvLyB9XG4gICAgLy8gcmV0dXJuIDxkaXY+e3RhYn08L2Rpdj47XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxoND57Y2hpbGQxfTwvaDQ+XG4gICAgICAgIDxoNT57Y2hpbGQyfTwvaDU+XG4gICAgICAgIDxoNj57Y2hpbGQzfTwvaDY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8R3JhbmRDaGlsZENvbXBvbmVudCBncmFuZENoaWxkMT1cIlR1IGplc3QgZ3JhbmRDaGlsZDFcIj4ge2dyYW5kY2hpbGQxfTwvR3JhbmRDaGlsZENvbXBvbmVudD5cbiAgICAgICAgICAgIDxoNT5UdSBqZXN0IGdyYW5kQ2hpbGQyPC9oNT5cbiAgICAgICAgICAgIDxoNj5UdSBqZXN0IGdyYW5kQ2hpbGQzPC9oNj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+O1xufVxuXG5cbmNvbnN0IFBhcmVudENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8Q2hpbGRDb21wb25lbnQ+XG4gICAgICAgIDxoMT57cHJvcHMuY2hpbGRyZW59PC9oMT5cbiAgICA8L0NoaWxkQ29tcG9uZW50PlxufVxuXG5jb25zdCBDaGlsZENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtncmFuZENoaWxkMX0gPSBwcm9wcztcbiAgICByZXR1cm4gPEdyYW5kQ2hpbGRDb21wb25lbnQ+XG4gICAgPC9HcmFuZENoaWxkQ29tcG9uZW50PlxufVxuXG5jb25zdCBHcmFuZENoaWxkQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxoMT57cHJvcHMuY2hpbGRyZW59PC9oMT5cbn1cblxuXG4vLyBjb25zdCBBcHAgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgPFdyYXBwZXIgdGl0bGU9XCJJIGFtIHRoZSB3cmFwcGVyXCI+XG4vLyAgICAgICAgICAgICA8Q2hpbGQgYm9keT1cIkNoaWxkIGNvbXBvbmVudFwiIC8+XG4vLyAgICAgICAgIDwvV3JhcHBlcj5cbi8vICAgICAgICAgPENoaWxkIGJvZHk9XCJJIGFtIG5vdCB3cmFwcGVkXCI+PC9DaGlsZD5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgV3JhcHBlciA9IChwcm9wcykgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuLy8gICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuLy8gICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gfTtcbi8vXG4vLyBjb25zdCBDaGlsZCA9IChwcm9wcykgPT4ge1xuLy8gICAgIHJldHVybiA8aDQ+e3Byb3BzLmJvZHl9PC9oND47XG4vLyB9O1xuXG5yb290LnJlbmRlcihcbiAgICAvLyA8UmVwZWF0IG51bVRpbWVzPXsxMH0+XG4gICAgLy8gICAgIHsoaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0+VGhpcyBpcyBpdGVtIHtpbmRleH0gaW4gdGhlIGxpc3Q8L2Rpdj59XG4gICAgLy8gPC9SZXBlYXQ+XG5cbiAgICA8Q2hpbGRyZW5UZXN0IGNoaWxkMT1cInRyYWR5Y2phXCIgY2hpbGQyPVwieiBwcnp5amFjaWVsZW1cIiBjaGlsZDM9XCJrb2xhY2phXCIgZ3JhbmRDaGlsZDE9XCJkZmFzZGZhZHNmXCI+XG4gICAgICAgIDxwIGdyYW5kQ2hpbGQxPVwiZ3JhbmRDaGlsZDFcIj5lZnNkZmFzZGZhZHM8L3A+XG4gICAgPC9DaGlsZHJlblRlc3Q+XG4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAxZTJkMjJmNmFiMjA3OWIzYWFjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiUmVwZWF0IiwicHJvcHMiLCJpdGVtcyIsImkiLCJudW1UaW1lcyIsInB1c2giLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJMaXN0T2ZUZW5UaGluZ3MiLCJpbmRleCIsImtleSIsIkNoaWxkcmVuVGVzdCIsImNoaWxkMSIsImNoaWxkMiIsImNoaWxkMyIsImdyYW5kQ2hpbGQxIiwiX3Byb3BzJGNoaWxkcmVuIiwiZ3JhbmRjaGlsZDEiLCJncmFuZGNoaWxkMiIsImdyYW5kY2hpbGQzIiwiR3JhbmRDaGlsZENvbXBvbmVudCIsIlBhcmVudENvbXBvbmVudCIsIkNoaWxkQ29tcG9uZW50IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==