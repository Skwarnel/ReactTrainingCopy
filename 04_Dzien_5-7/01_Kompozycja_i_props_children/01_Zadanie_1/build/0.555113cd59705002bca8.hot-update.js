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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, child1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, child2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, child3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Tu jest grandChild1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Tu jest grandChild2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Tu jest grandChild3")));
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
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  grandChild1: "grandChild1"
}, "grandchild1")));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f9bd6951deb3dd8df5d3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsZ0JBQWdCO0VBQUNDLE1BQU0sRUFBQztBQUFTLGdCQUNwRXJCLDBEQUFBO0VBQUc4QixXQUFXLEVBQUM7QUFBYSxHQUFDLGFBQWMsQ0FDakMsQ0FDbEIsQ0FBQzs7Ozs7Ozs7VUM1RkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfS29tcG96eWNqYV9pX3Byb3BzX2NoaWxkcmVuLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbi8vIENhbGxzIHRoZSBjaGlsZHJlbiBjYWxsYmFjayBudW1UaW1lcyB0byBwcm9kdWNlIGEgcmVwZWF0ZWQgY29tcG9uZW50XG5mdW5jdGlvbiBSZXBlYXQocHJvcHMpIHtcbiAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLm51bVRpbWVzOyBpKyspIHtcbiAgICAgICAgaXRlbXMucHVzaChwcm9wcy5jaGlsZHJlbihpKSk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2PntpdGVtc308L2Rpdj47XG59XG5cbmZ1bmN0aW9uIExpc3RPZlRlblRoaW5ncygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVwZWF0IG51bVRpbWVzPXsxMH0+XG4gICAgICAgICAgICB7KGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9PlRoaXMgaXMgaXRlbSB7aW5kZXh9IGluIHRoZSBsaXN0PC9kaXY+fVxuICAgICAgICA8L1JlcGVhdD5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBDaGlsZHJlblRlc3QocHJvcHMpIHtcbiAgICBjb25zdCB7Y2hpbGQxLCBjaGlsZDIsIGNoaWxkM30gPSBwcm9wcztcbiAgICBjb25zdCB7Z3JhbmRjaGlsZDEsIGdyYW5kY2hpbGQyLCBncmFuZGNoaWxkM30gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAvLyBsZXQgdGFiID0gW107XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICB0YWIucHVzaCg8aDE+SSBoYXZlIHtpfSBjaGlsZHJlbjwvaDE+KTtcbiAgICAvLyB9XG4gICAgLy8gcmV0dXJuIDxkaXY+e3RhYn08L2Rpdj47XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxoND57Y2hpbGQxfTwvaDQ+XG4gICAgICAgIDxoNT57Y2hpbGQyfTwvaDU+XG4gICAgICAgIDxoNj57Y2hpbGQzfTwvaDY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+VHUgamVzdCBncmFuZENoaWxkMTwvaDQ+XG4gICAgICAgICAgICA8aDU+VHUgamVzdCBncmFuZENoaWxkMjwvaDU+XG4gICAgICAgICAgICA8aDY+VHUgamVzdCBncmFuZENoaWxkMzwvaDY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pjtcbn1cblxuY29uc3QgUGFyZW50Q29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxDaGlsZENvbXBvbmVudD5cbiAgICAgICAgPGgxPntwcm9wcy5jaGlsZHJlbn08L2gxPlxuICAgIDwvQ2hpbGRDb21wb25lbnQ+XG59XG5cbmNvbnN0IENoaWxkQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxHcmFuZENoaWxkQ29tcG9uZW50PlxuICAgICAgICA8aDE+e3Byb3BzLmNoaWxkcmVufTwvaDE+XG4gICAgPC9HcmFuZENoaWxkQ29tcG9uZW50PlxufVxuXG5jb25zdCBHcmFuZENoaWxkQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxoMT57cHJvcHMuY2hpbGRyZW59PC9oMT5cbn1cblxuXG4vLyBjb25zdCBBcHAgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgPFdyYXBwZXIgdGl0bGU9XCJJIGFtIHRoZSB3cmFwcGVyXCI+XG4vLyAgICAgICAgICAgICA8Q2hpbGQgYm9keT1cIkNoaWxkIGNvbXBvbmVudFwiIC8+XG4vLyAgICAgICAgIDwvV3JhcHBlcj5cbi8vICAgICAgICAgPENoaWxkIGJvZHk9XCJJIGFtIG5vdCB3cmFwcGVkXCI+PC9DaGlsZD5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgV3JhcHBlciA9IChwcm9wcykgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuLy8gICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuLy8gICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gfTtcbi8vXG4vLyBjb25zdCBDaGlsZCA9IChwcm9wcykgPT4ge1xuLy8gICAgIHJldHVybiA8aDQ+e3Byb3BzLmJvZHl9PC9oND47XG4vLyB9O1xuXG5yb290LnJlbmRlcihcbiAgICAvLyA8UmVwZWF0IG51bVRpbWVzPXsxMH0+XG4gICAgLy8gICAgIHsoaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0+VGhpcyBpcyBpdGVtIHtpbmRleH0gaW4gdGhlIGxpc3Q8L2Rpdj59XG4gICAgLy8gPC9SZXBlYXQ+XG5cbiAgICA8Q2hpbGRyZW5UZXN0IGNoaWxkMT1cInRyYWR5Y2phXCIgY2hpbGQyPVwieiBwcnp5amFjaWVsZW1cIiBjaGlsZDM9XCJrb2xhY2phXCI+XG4gICAgICAgIDxwIGdyYW5kQ2hpbGQxPVwiZ3JhbmRDaGlsZDFcIj5ncmFuZGNoaWxkMTwvcD5cbiAgICA8L0NoaWxkcmVuVGVzdD5cbik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjliZDY5NTFkZWIzZGQ4ZGY1ZDNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJSZXBlYXQiLCJwcm9wcyIsIml0ZW1zIiwiaSIsIm51bVRpbWVzIiwicHVzaCIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsIkxpc3RPZlRlblRoaW5ncyIsImluZGV4Iiwia2V5IiwiQ2hpbGRyZW5UZXN0IiwiY2hpbGQxIiwiY2hpbGQyIiwiY2hpbGQzIiwiX3Byb3BzJGNoaWxkcmVuIiwiZ3JhbmRjaGlsZDEiLCJncmFuZGNoaWxkMiIsImdyYW5kY2hpbGQzIiwiUGFyZW50Q29tcG9uZW50IiwiQ2hpbGRDb21wb25lbnQiLCJHcmFuZENoaWxkQ29tcG9uZW50IiwicmVuZGVyIiwiZ3JhbmRDaGlsZDEiXSwic291cmNlUm9vdCI6IiJ9