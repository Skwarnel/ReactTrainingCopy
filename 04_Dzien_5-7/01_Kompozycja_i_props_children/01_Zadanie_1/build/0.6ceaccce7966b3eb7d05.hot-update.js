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
/******/ 	__webpack_require__.h = () => ("caf4bb00548671192310")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42Y2VhY2NjZTc5NjZiM2ViN2QwNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDSztBQUU1QyxJQUFNRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQzs7QUFFbEM7QUFDQSxTQUFTSSxNQUFNQSxDQUFDQyxLQUFLLEVBQUU7RUFDbkI7RUFDQTtFQUNBO0VBQ0E7RUFDQSxvQkFBT1IsMERBQUEsY0FBSyxnQkFBYyxDQUFDO0FBQy9CO0FBRUEsU0FBU1UsZUFBZUEsQ0FBQSxFQUFHO0VBQ3ZCLG9CQUNJViwwREFBQSxDQUFDTyxNQUFNO0lBQUNJLFFBQVEsRUFBRTtFQUFHLEdBQ2hCLFVBQUNDLEtBQUs7SUFBQSxvQkFBS1osMERBQUE7TUFBS2EsR0FBRyxFQUFFRDtJQUFNLEdBQUMsZUFBYSxFQUFDQSxLQUFLLEVBQUMsY0FBaUIsQ0FBQztFQUFBLENBQy9ELENBQUM7QUFFakI7QUFFQSxJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlOLEtBQUssRUFBSztFQUMvQixvQkFBT1IsMERBQUEsQ0FBQ2UsY0FBYyxxQkFDbEJmLDBEQUFBLGFBQUtRLEtBQUssQ0FBQ1EsUUFBYSxDQUNaLENBQUM7QUFDckIsQ0FBQztBQUVELElBQU1ELGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSVAsS0FBSyxFQUFLO0VBQzlCLG9CQUFPUiwwREFBQSxDQUFDaUIsbUJBQW1CLHFCQUN2QmpCLDBEQUFBLGFBQUtRLEtBQUssQ0FBQ1EsUUFBYSxDQUNQLENBQUM7QUFDMUIsQ0FBQztBQUVELElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUlULEtBQUssRUFBSztFQUNuQyxvQkFBT1IsMERBQUEsYUFBS1EsS0FBSyxDQUFDUSxRQUFhLENBQUM7QUFDcEMsQ0FBQzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBVixJQUFJLENBQUNZLE1BQU0sZUFDUGxCLDBEQUFBLENBQUNPLE1BQU07RUFBQ0ksUUFBUSxFQUFFO0FBQUcsR0FDaEIsVUFBQ0MsS0FBSztFQUFBLG9CQUFLWiwwREFBQTtJQUFLYSxHQUFHLEVBQUVEO0VBQU0sR0FBQyxlQUFhLEVBQUNBLEtBQUssRUFBQyxjQUFpQixDQUFDO0FBQUEsQ0FDL0QsQ0FFWixDQUFDOzs7Ozs7OztVQ3JFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDFfWmFkYW5pZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuLy8gQ2FsbHMgdGhlIGNoaWxkcmVuIGNhbGxiYWNrIG51bVRpbWVzIHRvIHByb2R1Y2UgYSByZXBlYXRlZCBjb21wb25lbnRcbmZ1bmN0aW9uIFJlcGVhdChwcm9wcykge1xuICAgIC8vIGxldCBpdGVtcyA9IFtdO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubnVtVGltZXM7IGkrKykge1xuICAgIC8vICAgICBpdGVtcy5wdXNoKHByb3BzLmNoaWxkcmVuKGkpKTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIDxkaXY+Q2/FmyB0dXRhajwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gTGlzdE9mVGVuVGhpbmdzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZXBlYXQgbnVtVGltZXM9ezEwfT5cbiAgICAgICAgICAgIHsoaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0+VGhpcyBpcyBpdGVtIHtpbmRleH0gaW4gdGhlIGxpc3Q8L2Rpdj59XG4gICAgICAgIDwvUmVwZWF0PlxuICAgICk7XG59XG5cbmNvbnN0IFBhcmVudENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8Q2hpbGRDb21wb25lbnQ+XG4gICAgICAgIDxoMT57cHJvcHMuY2hpbGRyZW59PC9oMT5cbiAgICA8L0NoaWxkQ29tcG9uZW50PlxufVxuXG5jb25zdCBDaGlsZENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8R3JhbmRDaGlsZENvbXBvbmVudD5cbiAgICAgICAgPGgxPntwcm9wcy5jaGlsZHJlbn08L2gxPlxuICAgIDwvR3JhbmRDaGlsZENvbXBvbmVudD5cbn1cblxuY29uc3QgR3JhbmRDaGlsZENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8aDE+e3Byb3BzLmNoaWxkcmVufTwvaDE+XG59XG5cblxuLy8gY29uc3QgQXBwID0gKCkgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxXcmFwcGVyIHRpdGxlPVwiSSBhbSB0aGUgd3JhcHBlclwiPlxuLy8gICAgICAgICAgICAgPENoaWxkIGJvZHk9XCJDaGlsZCBjb21wb25lbnRcIiAvPlxuLy8gICAgICAgICA8L1dyYXBwZXI+XG4vLyAgICAgICAgIDxDaGlsZCBib2R5PVwiSSBhbSBub3Qgd3JhcHBlZFwiPjwvQ2hpbGQ+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IFdyYXBwZXIgPSAocHJvcHMpID0+IHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbi8vICAgICAgICAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cbi8vICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgQ2hpbGQgPSAocHJvcHMpID0+IHtcbi8vICAgICByZXR1cm4gPGg0Pntwcm9wcy5ib2R5fTwvaDQ+O1xuLy8gfTtcblxucm9vdC5yZW5kZXIoXG4gICAgPFJlcGVhdCBudW1UaW1lcz17MTB9PlxuICAgICAgICB7KGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9PlRoaXMgaXMgaXRlbSB7aW5kZXh9IGluIHRoZSBsaXN0PC9kaXY+fVxuICAgIDwvUmVwZWF0PlxuXG4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNhZjRiYjAwNTQ4NjcxMTkyMzEwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiUmVwZWF0IiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiTGlzdE9mVGVuVGhpbmdzIiwibnVtVGltZXMiLCJpbmRleCIsImtleSIsIlBhcmVudENvbXBvbmVudCIsIkNoaWxkQ29tcG9uZW50IiwiY2hpbGRyZW4iLCJHcmFuZENoaWxkQ29tcG9uZW50IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==