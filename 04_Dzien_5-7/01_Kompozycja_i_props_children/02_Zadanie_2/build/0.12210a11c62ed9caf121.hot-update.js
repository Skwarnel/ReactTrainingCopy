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
  var title = props.title,
    image = props.image,
    description = props.description,
    price = props.price;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemDescription, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItemPricing, null));
}
function ShopItemHeader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: data.image,
    width: "350px"
  }));
}
function ShopItemDescription() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, data.description));
}
function ShopItemPricing() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, "Cena: ", data.price, " z\u0142", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup!"));
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
/******/ 	__webpack_require__.h = () => ("a905996bfcc15b76aa5b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMjIxMGExMWM2MmVkOWNhZjEyMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsSUFBT0MsSUFBSSxHQUFJRCxLQUFLLENBQWJDLElBQUk7RUFDWCxvQkFBT1YsMERBQUEsQ0FBQ1ksUUFBUTtJQUFDRixJQUFJLEVBQUVBO0VBQUssQ0FBQyxDQUFDO0FBQ2xDO0FBRUEsU0FBU0UsUUFBUUEsQ0FBQ0gsS0FBSyxFQUFFO0VBQ3JCLElBQU9JLEtBQUssR0FBK0JKLEtBQUssQ0FBekNJLEtBQUs7SUFBRUMsS0FBSyxHQUF3QkwsS0FBSyxDQUFsQ0ssS0FBSztJQUFFQyxXQUFXLEdBQVdOLEtBQUssQ0FBM0JNLFdBQVc7SUFBRUMsS0FBSyxHQUFJUCxLQUFLLENBQWRPLEtBQUs7RUFDdkMsb0JBQ0loQiwwREFBQSwrQkFDSUEsMERBQUEsQ0FBQ2lCLGNBQWMsTUFBQyxDQUFDLGVBQ2pCakIsMERBQUEsQ0FBQ2tCLG1CQUFtQixNQUFFLENBQUMsZUFDdkJsQiwwREFBQSxDQUFDbUIsZUFBZSxNQUFFLENBQ2IsQ0FBQztBQUVsQjtBQUVBLFNBQVNGLGNBQWNBLENBQUEsRUFBRztFQUN0QixvQkFDSWpCLDBEQUFBLDhCQUNJQSwwREFBQSxhQUFLVSxJQUFJLENBQUNHLEtBQVUsQ0FBQyxlQUNyQmIsMERBQUE7SUFBS29CLEdBQUcsRUFBRVYsSUFBSSxDQUFDSSxLQUFNO0lBQUNPLEtBQUssRUFBQztFQUFPLENBQUMsQ0FDaEMsQ0FBQztBQUVqQjtBQUVBLFNBQVNILG1CQUFtQkEsQ0FBQSxFQUFHO0VBQzNCLG9CQUNJbEIsMERBQUEsK0JBQ0lBLDBEQUFBLFlBQUlVLElBQUksQ0FBQ0ssV0FBZSxDQUNuQixDQUFDO0FBRWxCO0FBRUEsU0FBU0ksZUFBZUEsQ0FBQSxFQUFHO0VBQ3ZCLG9CQUNJbkIsMERBQUEsaUJBQVEsUUFDRSxFQUFDVSxJQUFJLENBQUNNLEtBQUssRUFBQyxVQUNsQixlQUFBaEIsMERBQUEsaUJBQVEsTUFBWSxDQUNoQixDQUFDO0FBRWpCO0FBRUEsSUFBTVUsSUFBSSxHQUFHO0VBQ1RHLEtBQUssRUFBRSxhQUFhO0VBQ3BCQyxLQUFLLEVBQUUsK0dBQStHO0VBQ3RIQyxXQUFXLEVBQUUsc1FBQXNRO0VBQ25SQyxLQUFLLEVBQUU7QUFDWCxDQUFDO0FBRURULElBQUksQ0FBQ2UsTUFBTSxlQUNQdEIsMERBQUEsQ0FBQ1EsR0FBRztFQUFDRSxJQUFJLEVBQUVBO0FBQUssQ0FBQyxDQUNyQixDQUFDOzs7Ozs7OztVQ3pERCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIGNvbnN0IHtkYXRhfSA9IHByb3BzO1xuICAgIHJldHVybiA8U2hvcEl0ZW0gZGF0YT17ZGF0YX0vPjtcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW0ocHJvcHMpIHtcbiAgICBjb25zdCB7dGl0bGUsIGltYWdlLCBkZXNjcmlwdGlvbiwgcHJpY2V9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8U2hvcEl0ZW1IZWFkZXIvPlxuICAgICAgICAgICAgPFNob3BJdGVtRGVzY3JpcHRpb24gLz5cbiAgICAgICAgICAgIDxTaG9wSXRlbVByaWNpbmcgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1IZWFkZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2V9IHdpZHRoPSczNTBweCcvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8cD57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtUHJpY2luZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgQ2VuYToge2RhdGEucHJpY2V9IHrFglxuICAgICAgICAgICAgPGJ1dHRvbj5LdXAhPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn1cblxuY29uc3QgZGF0YSA9IHtcbiAgICB0aXRsZTogXCJNYWNCb29rIFByb1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzMwMzM4My9wZXhlbHMtcGhvdG8tMzAzMzgzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2MgaSBtb2JpbG5vxZvEhyDigJMgTWFjQm9vayBQcm8gd3lyYcW6bmllIHBvZG5vc2kgdHUgcG9wcnplY3prxJkuIFRlcmF6IG1vxbxlc3ogamVzemN6ZSBzenliY2llaiByZWFsaXpvd2HEhyBzd29qZSBwb215c8WCeS4gUG9tb2fEhSBDaSB3IHR5bSB3eWRham5lIHByb2Nlc29yeSBpIHVrxYJhZHkgcGFtacSZY2ksIHphYXdhbnNvd2FuYSBncmFmaWthLCBixYJ5c2thd2ljem5pZSBkemlhxYJhasSFY2EgcGFtacSZxIcgbWFzb3dhIGkgaW5uZSBkb3Nrb25hxYJlIHJvendpxIV6YW5pYS5cIixcbiAgICBwcmljZTogOTk5OVxufTtcblxucm9vdC5yZW5kZXIoXG4gICAgPEFwcCBkYXRhPXtkYXRhfS8+XG4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTkwNTk5NmJmY2MxNWI3NmFhNWJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsInByb3BzIiwiZGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJTaG9wSXRlbSIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiU2hvcEl0ZW1IZWFkZXIiLCJTaG9wSXRlbURlc2NyaXB0aW9uIiwiU2hvcEl0ZW1QcmljaW5nIiwic3JjIiwid2lkdGgiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9