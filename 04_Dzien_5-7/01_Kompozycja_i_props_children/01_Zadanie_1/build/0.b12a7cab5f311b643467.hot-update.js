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
  // let tab = [];
  // for (let i = 0; i < props.children.length; i++) {
  //     tab.push(<h1>I have {i} children</h1>);
  // }
  // return <div>{tab}</div>;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, child1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, child3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, child3));
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
/******/ 	__webpack_require__.h = () => ("1a3936f7dc64bf061c74")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMTJhN2NhYjVmMzExYjY0MzQ2Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDSztBQUU1QyxJQUFNRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQzs7QUFFbEM7QUFDQSxTQUFTSSxNQUFNQSxDQUFDQyxLQUFLLEVBQUU7RUFDbkIsSUFBSUMsS0FBSyxHQUFHLEVBQUU7RUFDZCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsS0FBSyxDQUFDRyxRQUFRLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQ3JDRCxLQUFLLENBQUNHLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxRQUFRLENBQUNILENBQUMsQ0FBQyxDQUFDO0VBQ2pDO0VBQ0Esb0JBQU9WLDBEQUFBLGNBQU1TLEtBQVcsQ0FBQztBQUM3QjtBQUVBLFNBQVNNLGVBQWVBLENBQUEsRUFBRztFQUN2QixvQkFDSWYsMERBQUEsQ0FBQ08sTUFBTTtJQUFDSSxRQUFRLEVBQUU7RUFBRyxHQUNoQixVQUFDSyxLQUFLO0lBQUEsb0JBQUtoQiwwREFBQTtNQUFLaUIsR0FBRyxFQUFFRDtJQUFNLEdBQUMsZUFBYSxFQUFDQSxLQUFLLEVBQUMsY0FBaUIsQ0FBQztFQUFBLENBQy9ELENBQUM7QUFFakI7QUFFQSxTQUFTRSxZQUFZQSxDQUFDVixLQUFLLEVBQUU7RUFDekIsSUFBT1csTUFBTSxHQUFvQlgsS0FBSyxDQUEvQlcsTUFBTTtJQUFFQyxNQUFNLEdBQVlaLEtBQUssQ0FBdkJZLE1BQU07SUFBRUMsTUFBTSxHQUFJYixLQUFLLENBQWZhLE1BQU07RUFDN0I7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLG9CQUFPckIsMERBQUEsMkJBQ0hBLDBEQUFBLGFBQUttQixNQUFXLENBQUMsZUFDakJuQiwwREFBQSxhQUFLcUIsTUFBVyxDQUFDLGVBQ2pCckIsMERBQUEsYUFBS3FCLE1BQVcsQ0FDZixDQUFDO0FBQ1Y7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlkLEtBQUssRUFBSztFQUMvQixvQkFBT1IsMERBQUEsQ0FBQ3VCLGNBQWMscUJBQ2xCdkIsMERBQUEsYUFBS1EsS0FBSyxDQUFDSyxRQUFhLENBQ1osQ0FBQztBQUNyQixDQUFDO0FBRUQsSUFBTVUsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJZixLQUFLLEVBQUs7RUFDOUIsb0JBQU9SLDBEQUFBLENBQUN3QixtQkFBbUIscUJBQ3ZCeEIsMERBQUEsYUFBS1EsS0FBSyxDQUFDSyxRQUFhLENBQ1AsQ0FBQztBQUMxQixDQUFDO0FBRUQsSUFBTVcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBSWhCLEtBQUssRUFBSztFQUNuQyxvQkFBT1IsMERBQUEsYUFBS1EsS0FBSyxDQUFDSyxRQUFhLENBQUM7QUFDcEMsQ0FBQzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBUCxJQUFJLENBQUNtQixNQUFNO0FBQUE7QUFDUDtBQUNBO0FBQ0E7QUFFQXpCLDBEQUFBLENBQUNrQixZQUFZO0VBQUNDLE1BQU0sRUFBQyxVQUFVO0VBQUNDLE1BQU0sRUFBQyxnQkFBZ0I7RUFBQ0MsTUFBTSxFQUFDO0FBQVMsQ0FDMUQsQ0FDbEIsQ0FBQzs7Ozs7Ozs7VUNyRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfS29tcG96eWNqYV9pX3Byb3BzX2NoaWxkcmVuLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbi8vIENhbGxzIHRoZSBjaGlsZHJlbiBjYWxsYmFjayBudW1UaW1lcyB0byBwcm9kdWNlIGEgcmVwZWF0ZWQgY29tcG9uZW50XG5mdW5jdGlvbiBSZXBlYXQocHJvcHMpIHtcbiAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLm51bVRpbWVzOyBpKyspIHtcbiAgICAgICAgaXRlbXMucHVzaChwcm9wcy5jaGlsZHJlbihpKSk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2PntpdGVtc308L2Rpdj47XG59XG5cbmZ1bmN0aW9uIExpc3RPZlRlblRoaW5ncygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVwZWF0IG51bVRpbWVzPXsxMH0+XG4gICAgICAgICAgICB7KGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9PlRoaXMgaXMgaXRlbSB7aW5kZXh9IGluIHRoZSBsaXN0PC9kaXY+fVxuICAgICAgICA8L1JlcGVhdD5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBDaGlsZHJlblRlc3QocHJvcHMpIHtcbiAgICBjb25zdCB7Y2hpbGQxLCBjaGlsZDIsIGNoaWxkM30gPSBwcm9wcztcbiAgICAvLyBsZXQgdGFiID0gW107XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICB0YWIucHVzaCg8aDE+SSBoYXZlIHtpfSBjaGlsZHJlbjwvaDE+KTtcbiAgICAvLyB9XG4gICAgLy8gcmV0dXJuIDxkaXY+e3RhYn08L2Rpdj47XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxoMT57Y2hpbGQxfTwvaDE+XG4gICAgICAgIDxoMj57Y2hpbGQzfTwvaDI+XG4gICAgICAgIDxoMz57Y2hpbGQzfTwvaDM+XG4gICAgPC9kaXY+O1xufVxuXG5jb25zdCBQYXJlbnRDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gPENoaWxkQ29tcG9uZW50PlxuICAgICAgICA8aDE+e3Byb3BzLmNoaWxkcmVufTwvaDE+XG4gICAgPC9DaGlsZENvbXBvbmVudD5cbn1cblxuY29uc3QgQ2hpbGRDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gPEdyYW5kQ2hpbGRDb21wb25lbnQ+XG4gICAgICAgIDxoMT57cHJvcHMuY2hpbGRyZW59PC9oMT5cbiAgICA8L0dyYW5kQ2hpbGRDb21wb25lbnQ+XG59XG5cbmNvbnN0IEdyYW5kQ2hpbGRDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gPGgxPntwcm9wcy5jaGlsZHJlbn08L2gxPlxufVxuXG5cbi8vIGNvbnN0IEFwcCA9ICgpID0+IHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8V3JhcHBlciB0aXRsZT1cIkkgYW0gdGhlIHdyYXBwZXJcIj5cbi8vICAgICAgICAgICAgIDxDaGlsZCBib2R5PVwiQ2hpbGQgY29tcG9uZW50XCIgLz5cbi8vICAgICAgICAgPC9XcmFwcGVyPlxuLy8gICAgICAgICA8Q2hpbGQgYm9keT1cIkkgYW0gbm90IHdyYXBwZWRcIj48L0NoaWxkPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gfTtcbi8vXG4vLyBjb25zdCBXcmFwcGVyID0gKHByb3BzKSA9PiB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4vLyAgICAgICAgICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XG4vLyAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IENoaWxkID0gKHByb3BzKSA9PiB7XG4vLyAgICAgcmV0dXJuIDxoND57cHJvcHMuYm9keX08L2g0Pjtcbi8vIH07XG5cbnJvb3QucmVuZGVyKFxuICAgIC8vIDxSZXBlYXQgbnVtVGltZXM9ezEwfT5cbiAgICAvLyAgICAgeyhpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fT5UaGlzIGlzIGl0ZW0ge2luZGV4fSBpbiB0aGUgbGlzdDwvZGl2Pn1cbiAgICAvLyA8L1JlcGVhdD5cblxuICAgIDxDaGlsZHJlblRlc3QgY2hpbGQxPVwidHJhZHljamFcIiBjaGlsZDI9XCJ6IHByenlqYWNpZWxlbVwiIGNoaWxkMz1cImtvbGFjamFcIj5cbiAgICA8L0NoaWxkcmVuVGVzdD5cbik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWEzOTM2ZjdkYzY0YmYwNjFjNzRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJSZXBlYXQiLCJwcm9wcyIsIml0ZW1zIiwiaSIsIm51bVRpbWVzIiwicHVzaCIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsIkxpc3RPZlRlblRoaW5ncyIsImluZGV4Iiwia2V5IiwiQ2hpbGRyZW5UZXN0IiwiY2hpbGQxIiwiY2hpbGQyIiwiY2hpbGQzIiwiUGFyZW50Q29tcG9uZW50IiwiQ2hpbGRDb21wb25lbnQiLCJHcmFuZENoaWxkQ29tcG9uZW50IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==