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
function App(props) {
  var data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, {
    data: data
  });
}
function ShopItem(props) {
  var data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: data.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, data.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, "Cena: ", data.price, " z\u0142", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup!")));
}
function ShopItemHeader(_ref) {
  var title = _ref.title,
    image = _ref.image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: image,
    width: '100px',
    height: '100px'
  }));
}
function ShopItemDescription(_ref2) {
  var desc = _ref2.desc;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, desc));
}
function ShopItemPricing(_ref3) {
  var price = _ref3.price;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, "Cena: ", price, " z\u0142", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup!"));
}
var data = {
  title: "MacBook Pro",
  image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
  price: 9999
};
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, {
  data: data
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0347449c44aef9db7304")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yNGFkNzFhNjA5ZDhiMTZhMmM4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsSUFBT0MsSUFBSSxHQUFJRCxLQUFLLENBQWJDLElBQUk7RUFDWCxvQkFBT1YsMERBQUEsQ0FBQ1ksUUFBUTtJQUFDRixJQUFJLEVBQUVBO0VBQUssQ0FBQyxDQUFDO0FBQ2xDO0FBRUEsU0FBU0UsUUFBUUEsQ0FBQ0gsS0FBSyxFQUFFO0VBQ3JCLElBQU9DLElBQUksR0FBSUQsS0FBSyxDQUFiQyxJQUFJO0VBQ1gsb0JBQ0lWLDBEQUFBLCtCQUNJQSwwREFBQSw4QkFDSUEsMERBQUEsYUFBS1UsSUFBSSxDQUFDRyxLQUFVLENBQUMsZUFDckJiLDBEQUFBO0lBQUtjLEdBQUcsRUFBRUosSUFBSSxDQUFDSztFQUFNLENBQUMsQ0FDbEIsQ0FBQyxlQUNUZiwwREFBQSwrQkFDSUEsMERBQUEsWUFBSVUsSUFBSSxDQUFDTSxXQUFlLENBQ25CLENBQUMsZUFDVmhCLDBEQUFBLGlCQUFRLFFBQ0UsRUFBQ1UsSUFBSSxDQUFDTyxLQUFLLEVBQUMsVUFDbEIsZUFBQWpCLDBEQUFBLGlCQUFRLE1BQVksQ0FDaEIsQ0FDSCxDQUFDO0FBRWxCO0FBRUEsU0FBU2tCLGNBQWNBLENBQUFDLElBQUEsRUFBaUI7RUFBQSxJQUFmTixLQUFLLEdBQUFNLElBQUEsQ0FBTE4sS0FBSztJQUFFRSxLQUFLLEdBQUFJLElBQUEsQ0FBTEosS0FBSztFQUNqQyxvQkFDSWYsMERBQUEsOEJBQ0lBLDBEQUFBLGFBQUthLEtBQVUsQ0FBQyxlQUNoQmIsMERBQUE7SUFBS2MsR0FBRyxFQUFFQyxLQUFNO0lBQUNLLEtBQUssRUFBRSxPQUFRO0lBQUNDLE1BQU0sRUFBRTtFQUFRLENBQUUsQ0FDL0MsQ0FBQztBQUVqQjtBQUVBLFNBQVNDLG1CQUFtQkEsQ0FBQUMsS0FBQSxFQUFTO0VBQUEsSUFBUEMsSUFBSSxHQUFBRCxLQUFBLENBQUpDLElBQUk7RUFDOUIsb0JBQ0l4QiwwREFBQSwrQkFDSUEsMERBQUEsWUFBSXdCLElBQVEsQ0FDUCxDQUFDO0FBRWxCO0FBRUEsU0FBU0MsZUFBZUEsQ0FBQUMsS0FBQSxFQUFVO0VBQUEsSUFBUlQsS0FBSyxHQUFBUyxLQUFBLENBQUxULEtBQUs7RUFDM0Isb0JBQ0lqQiwwREFBQSxpQkFBUSxRQUNFLEVBQUNpQixLQUFLLEVBQUMsVUFDYixlQUFBakIsMERBQUEsaUJBQVEsTUFBWSxDQUNoQixDQUFDO0FBRWpCO0FBRUEsSUFBTVUsSUFBSSxHQUFHO0VBQ1RHLEtBQUssRUFBRSxhQUFhO0VBQ3BCRSxLQUFLLEVBQUUsK0dBQStHO0VBQ3RIQyxXQUFXLEVBQUUsc1FBQXNRO0VBQ25SQyxLQUFLLEVBQUU7QUFDWCxDQUFDO0FBRURWLElBQUksQ0FBQ29CLE1BQU0sZUFDUDNCLDBEQUFBLENBQUNRLEdBQUc7RUFBQ0UsSUFBSSxFQUFFQTtBQUFLLENBQUMsQ0FDckIsQ0FBQzs7Ozs7Ozs7VUNqRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfS29tcG96eWNqYV9pX3Byb3BzX2NoaWxkcmVuLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5mdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgICBjb25zdCB7ZGF0YX0gPSBwcm9wcztcbiAgICByZXR1cm4gPFNob3BJdGVtIGRhdGE9e2RhdGF9Lz47XG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtKHByb3BzKSB7XG4gICAgY29uc3Qge2RhdGF9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlfS8+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgIDxwPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgQ2VuYToge2RhdGEucHJpY2V9IHrFglxuICAgICAgICAgICAgICAgIDxidXR0b24+S3VwITwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtSGVhZGVyKHt0aXRsZSwgaW1hZ2V9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gd2lkdGg9eycxMDBweCd9IGhlaWdodD17JzEwMHB4J30gLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbURlc2NyaXB0aW9uKHtkZXNjfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPHA+e2Rlc2N9PC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbVByaWNpbmcoe3ByaWNlfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICBDZW5hOiB7cHJpY2V9IHrFglxuICAgICAgICAgICAgPGJ1dHRvbj5LdXAhPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn1cblxuY29uc3QgZGF0YSA9IHtcbiAgICB0aXRsZTogXCJNYWNCb29rIFByb1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzMwMzM4My9wZXhlbHMtcGhvdG8tMzAzMzgzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2MgaSBtb2JpbG5vxZvEhyDigJMgTWFjQm9vayBQcm8gd3lyYcW6bmllIHBvZG5vc2kgdHUgcG9wcnplY3prxJkuIFRlcmF6IG1vxbxlc3ogamVzemN6ZSBzenliY2llaiByZWFsaXpvd2HEhyBzd29qZSBwb215c8WCeS4gUG9tb2fEhSBDaSB3IHR5bSB3eWRham5lIHByb2Nlc29yeSBpIHVrxYJhZHkgcGFtacSZY2ksIHphYXdhbnNvd2FuYSBncmFmaWthLCBixYJ5c2thd2ljem5pZSBkemlhxYJhasSFY2EgcGFtacSZxIcgbWFzb3dhIGkgaW5uZSBkb3Nrb25hxYJlIHJvendpxIV6YW5pYS5cIixcbiAgICBwcmljZTogOTk5OVxufTtcblxucm9vdC5yZW5kZXIoXG4gICAgPEFwcCBkYXRhPXtkYXRhfS8+XG4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDM0NzQ0OWM0NGFlZjlkYjczMDRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsInByb3BzIiwiZGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJTaG9wSXRlbSIsInRpdGxlIiwic3JjIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiU2hvcEl0ZW1IZWFkZXIiLCJfcmVmIiwid2lkdGgiLCJoZWlnaHQiLCJTaG9wSXRlbURlc2NyaXB0aW9uIiwiX3JlZjIiLCJkZXNjIiwiU2hvcEl0ZW1QcmljaW5nIiwiX3JlZjMiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9