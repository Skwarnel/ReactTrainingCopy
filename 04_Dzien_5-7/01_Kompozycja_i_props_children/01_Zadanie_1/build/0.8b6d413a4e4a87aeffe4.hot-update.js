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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, child1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, child2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, child3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    grandChild1: "Tu jest grandChild1"
  }, " ", grandchild1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Tu jest grandChild2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Tu jest grandChild3")));
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
/******/ 	__webpack_require__.h = () => ("c9700c7e7335f8e84077")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44YjZkNDEzYTRlNGE4N2FlZmZlNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDSztBQUU1QyxJQUFNRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQzs7QUFFbEM7QUFDQSxTQUFTSSxNQUFNQSxDQUFDQyxLQUFLLEVBQUU7RUFDbkIsSUFBSUMsS0FBSyxHQUFHLEVBQUU7RUFDZCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsS0FBSyxDQUFDRyxRQUFRLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQ3JDRCxLQUFLLENBQUNHLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxRQUFRLENBQUNILENBQUMsQ0FBQyxDQUFDO0VBQ2pDO0VBQ0Esb0JBQU9WLDBEQUFBLGNBQU1TLEtBQVcsQ0FBQztBQUM3QjtBQUVBLFNBQVNNLGVBQWVBLENBQUEsRUFBRztFQUN2QixvQkFDSWYsMERBQUEsQ0FBQ08sTUFBTTtJQUFDSSxRQUFRLEVBQUU7RUFBRyxHQUNoQixVQUFDSyxLQUFLO0lBQUEsb0JBQUtoQiwwREFBQTtNQUFLaUIsR0FBRyxFQUFFRDtJQUFNLEdBQUMsZUFBYSxFQUFDQSxLQUFLLEVBQUMsY0FBaUIsQ0FBQztFQUFBLENBQy9ELENBQUM7QUFFakI7QUFFQSxTQUFTRSxZQUFZQSxDQUFDVixLQUFLLEVBQUU7RUFDekIsSUFBT1csTUFBTSxHQUFvQlgsS0FBSyxDQUEvQlcsTUFBTTtJQUFFQyxNQUFNLEdBQVlaLEtBQUssQ0FBdkJZLE1BQU07SUFBRUMsTUFBTSxHQUFJYixLQUFLLENBQWZhLE1BQU07RUFDN0IsSUFBQUMsZUFBQSxHQUFnRGQsS0FBSyxDQUFDSyxRQUFRO0lBQXZEVSxXQUFXLEdBQUFELGVBQUEsQ0FBWEMsV0FBVztJQUFFQyxXQUFXLEdBQUFGLGVBQUEsQ0FBWEUsV0FBVztJQUFFQyxXQUFXLEdBQUFILGVBQUEsQ0FBWEcsV0FBVztFQUM1QztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0Esb0JBQU96QiwwREFBQSwyQkFDSEEsMERBQUEsYUFBS21CLE1BQVcsQ0FBQyxlQUNqQm5CLDBEQUFBLGFBQUtvQixNQUFXLENBQUMsZUFDakJwQiwwREFBQSxhQUFLcUIsTUFBVyxDQUFDLGVBQ2pCckIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQUcwQixXQUFXLEVBQUM7RUFBcUIsR0FBQyxHQUFDLEVBQUNILFdBQWUsQ0FBQyxlQUN2RHZCLDBEQUFBLGFBQUkscUJBQXVCLENBQUMsZUFDNUJBLDBEQUFBLGFBQUkscUJBQXVCLENBQzFCLENBQ0osQ0FBQztBQUNWO0FBRUEsSUFBTTJCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSW5CLEtBQUssRUFBSztFQUMvQixvQkFBT1IsMERBQUEsQ0FBQzRCLGNBQWMscUJBQ2xCNUIsMERBQUEsYUFBS1EsS0FBSyxDQUFDSyxRQUFhLENBQ1osQ0FBQztBQUNyQixDQUFDO0FBRUQsSUFBTWUsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJcEIsS0FBSyxFQUFLO0VBQzlCLG9CQUFPUiwwREFBQSxDQUFDNkIsbUJBQW1CLHFCQUN2QjdCLDBEQUFBLGFBQUtRLEtBQUssQ0FBQ0ssUUFBYSxDQUNQLENBQUM7QUFDMUIsQ0FBQztBQUVELElBQU1nQixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJckIsS0FBSyxFQUFLO0VBQ25DLG9CQUFPUiwwREFBQSxhQUFLUSxLQUFLLENBQUNLLFFBQWEsQ0FBQztBQUNwQyxDQUFDOztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFQLElBQUksQ0FBQ3dCLE1BQU07QUFBQTtBQUNQO0FBQ0E7QUFDQTtBQUVBOUIsMERBQUEsQ0FBQ2tCLFlBQVk7RUFBQ0MsTUFBTSxFQUFDLFVBQVU7RUFBQ0MsTUFBTSxFQUFDLGdCQUFnQjtFQUFDQyxNQUFNLEVBQUMsU0FBUztFQUFDSyxXQUFXLEVBQUM7QUFBWSxnQkFDN0YxQiwwREFBQTtFQUFHMEIsV0FBVyxFQUFDO0FBQWEsR0FBQyxjQUFlLENBQ2xDLENBQ2xCLENBQUM7Ozs7Ozs7O1VDNUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX0tvbXBvenljamFfaV9wcm9wc19jaGlsZHJlbi8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG4vLyBDYWxscyB0aGUgY2hpbGRyZW4gY2FsbGJhY2sgbnVtVGltZXMgdG8gcHJvZHVjZSBhIHJlcGVhdGVkIGNvbXBvbmVudFxuZnVuY3Rpb24gUmVwZWF0KHByb3BzKSB7XG4gICAgbGV0IGl0ZW1zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5udW1UaW1lczsgaSsrKSB7XG4gICAgICAgIGl0ZW1zLnB1c2gocHJvcHMuY2hpbGRyZW4oaSkpO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj57aXRlbXN9PC9kaXY+O1xufVxuXG5mdW5jdGlvbiBMaXN0T2ZUZW5UaGluZ3MoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlcGVhdCBudW1UaW1lcz17MTB9PlxuICAgICAgICAgICAgeyhpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fT5UaGlzIGlzIGl0ZW0ge2luZGV4fSBpbiB0aGUgbGlzdDwvZGl2Pn1cbiAgICAgICAgPC9SZXBlYXQ+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gQ2hpbGRyZW5UZXN0KHByb3BzKSB7XG4gICAgY29uc3Qge2NoaWxkMSwgY2hpbGQyLCBjaGlsZDN9ID0gcHJvcHM7XG4gICAgY29uc3Qge2dyYW5kY2hpbGQxLCBncmFuZGNoaWxkMiwgZ3JhbmRjaGlsZDN9ID0gcHJvcHMuY2hpbGRyZW47XG4gICAgLy8gbGV0IHRhYiA9IFtdO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgdGFiLnB1c2goPGgxPkkgaGF2ZSB7aX0gY2hpbGRyZW48L2gxPik7XG4gICAgLy8gfVxuICAgIC8vIHJldHVybiA8ZGl2Pnt0YWJ9PC9kaXY+O1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8aDQ+e2NoaWxkMX08L2g0PlxuICAgICAgICA8aDU+e2NoaWxkMn08L2g1PlxuICAgICAgICA8aDY+e2NoaWxkM308L2g2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgZ3JhbmRDaGlsZDE9XCJUdSBqZXN0IGdyYW5kQ2hpbGQxXCI+IHtncmFuZGNoaWxkMX08L3A+XG4gICAgICAgICAgICA8aDU+VHUgamVzdCBncmFuZENoaWxkMjwvaDU+XG4gICAgICAgICAgICA8aDY+VHUgamVzdCBncmFuZENoaWxkMzwvaDY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pjtcbn1cblxuY29uc3QgUGFyZW50Q29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxDaGlsZENvbXBvbmVudD5cbiAgICAgICAgPGgxPntwcm9wcy5jaGlsZHJlbn08L2gxPlxuICAgIDwvQ2hpbGRDb21wb25lbnQ+XG59XG5cbmNvbnN0IENoaWxkQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxHcmFuZENoaWxkQ29tcG9uZW50PlxuICAgICAgICA8aDE+e3Byb3BzLmNoaWxkcmVufTwvaDE+XG4gICAgPC9HcmFuZENoaWxkQ29tcG9uZW50PlxufVxuXG5jb25zdCBHcmFuZENoaWxkQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxoMT57cHJvcHMuY2hpbGRyZW59PC9oMT5cbn1cblxuXG4vLyBjb25zdCBBcHAgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgPFdyYXBwZXIgdGl0bGU9XCJJIGFtIHRoZSB3cmFwcGVyXCI+XG4vLyAgICAgICAgICAgICA8Q2hpbGQgYm9keT1cIkNoaWxkIGNvbXBvbmVudFwiIC8+XG4vLyAgICAgICAgIDwvV3JhcHBlcj5cbi8vICAgICAgICAgPENoaWxkIGJvZHk9XCJJIGFtIG5vdCB3cmFwcGVkXCI+PC9DaGlsZD5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgV3JhcHBlciA9IChwcm9wcykgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuLy8gICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuLy8gICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gfTtcbi8vXG4vLyBjb25zdCBDaGlsZCA9IChwcm9wcykgPT4ge1xuLy8gICAgIHJldHVybiA8aDQ+e3Byb3BzLmJvZHl9PC9oND47XG4vLyB9O1xuXG5yb290LnJlbmRlcihcbiAgICAvLyA8UmVwZWF0IG51bVRpbWVzPXsxMH0+XG4gICAgLy8gICAgIHsoaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0+VGhpcyBpcyBpdGVtIHtpbmRleH0gaW4gdGhlIGxpc3Q8L2Rpdj59XG4gICAgLy8gPC9SZXBlYXQ+XG5cbiAgICA8Q2hpbGRyZW5UZXN0IGNoaWxkMT1cInRyYWR5Y2phXCIgY2hpbGQyPVwieiBwcnp5amFjaWVsZW1cIiBjaGlsZDM9XCJrb2xhY2phXCIgZ3JhbmRDaGlsZDE9XCJkZmFzZGZhZHNmXCI+XG4gICAgICAgIDxwIGdyYW5kQ2hpbGQxPVwiZ3JhbmRDaGlsZDFcIj5lZnNkZmFzZGZhZHM8L3A+XG4gICAgPC9DaGlsZHJlblRlc3Q+XG4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM5NzAwYzdlNzMzNWY4ZTg0MDc3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiUmVwZWF0IiwicHJvcHMiLCJpdGVtcyIsImkiLCJudW1UaW1lcyIsInB1c2giLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJMaXN0T2ZUZW5UaGluZ3MiLCJpbmRleCIsImtleSIsIkNoaWxkcmVuVGVzdCIsImNoaWxkMSIsImNoaWxkMiIsImNoaWxkMyIsIl9wcm9wcyRjaGlsZHJlbiIsImdyYW5kY2hpbGQxIiwiZ3JhbmRjaGlsZDIiLCJncmFuZGNoaWxkMyIsImdyYW5kQ2hpbGQxIiwiUGFyZW50Q29tcG9uZW50IiwiQ2hpbGRDb21wb25lbnQiLCJHcmFuZENoaWxkQ29tcG9uZW50IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==