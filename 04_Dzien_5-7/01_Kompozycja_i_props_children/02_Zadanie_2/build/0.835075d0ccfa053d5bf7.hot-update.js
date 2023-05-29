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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, {
    data: data
  }, " ", props.children, " ");
}
function ShopItem(props) {
  var title = props.title,
    description = props.description,
    image = props.image,
    price = props.price;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, title)

  // <section>
  //     <ShopItemHeader title={list.title} image={list.image} />
  //     <ShopItemDescription description={list.description} />
  //     <ShopItemPricing price={list.price} />
  // </section>
  ;
}

function ShopItemHeader(props) {
  var title = props.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: image,
    width: "350px"
  }));
}
function ShopItemDescription(props) {
  var description = props.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, description));
}
function ShopItemPricing(props) {
  var price = props.price;
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
/******/ 	__webpack_require__.h = () => ("54a4a2c8cd7c87df88a8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44MzUwNzVkMGNjZmEwNTNkNWJmNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsb0JBQU9ULDBEQUFBLENBQUNXLFFBQVE7SUFBQ0MsSUFBSSxFQUFFQTtFQUFLLEdBQUMsR0FBQyxFQUFDSCxLQUFLLENBQUNJLFFBQVEsRUFBQyxHQUFXLENBQUM7QUFDOUQ7QUFFQSxTQUFTRixRQUFRQSxDQUFDRixLQUFLLEVBQUU7RUFDckIsSUFBT0ssS0FBSyxHQUErQkwsS0FBSyxDQUF6Q0ssS0FBSztJQUFFQyxXQUFXLEdBQWtCTixLQUFLLENBQWxDTSxXQUFXO0lBQUVDLEtBQUssR0FBV1AsS0FBSyxDQUFyQk8sS0FBSztJQUFFQyxLQUFLLEdBQUlSLEtBQUssQ0FBZFEsS0FBSztFQUN2QyxvQkFDSWpCLDBEQUFBLFlBQUljLEtBQVM7O0VBRWI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUFBO0FBRVI7O0FBRUEsU0FBU0ksY0FBY0EsQ0FBQ1QsS0FBSyxFQUFFO0VBQzNCLElBQU9LLEtBQUssR0FBSUwsS0FBSyxDQUFkSyxLQUFLO0VBQ1osb0JBQ0lkLDBEQUFBLDhCQUNJQSwwREFBQSxhQUFLYyxLQUFVLENBQUMsZUFDaEJkLDBEQUFBO0lBQUttQixHQUFHLEVBQUVILEtBQU07SUFBQ0ksS0FBSyxFQUFDO0VBQU8sQ0FBQyxDQUMzQixDQUFDO0FBRWpCO0FBRUEsU0FBU0MsbUJBQW1CQSxDQUFDWixLQUFLLEVBQUU7RUFDaEMsSUFBT00sV0FBVyxHQUFJTixLQUFLLENBQXBCTSxXQUFXO0VBQ2xCLG9CQUNJZiwwREFBQSwrQkFDSUEsMERBQUEsWUFBSWUsV0FBZSxDQUNkLENBQUM7QUFFbEI7QUFFQSxTQUFTTyxlQUFlQSxDQUFDYixLQUFLLEVBQUU7RUFDNUIsSUFBT1EsS0FBSyxHQUFJUixLQUFLLENBQWRRLEtBQUs7RUFDWixvQkFDSWpCLDBEQUFBLGlCQUFRLFFBQ0UsRUFBQ2lCLEtBQUssRUFBQyxVQUNiLGVBQUFqQiwwREFBQSxpQkFBUSxNQUFZLENBQ2hCLENBQUM7QUFFakI7QUFFQSxJQUFNWSxJQUFJLEdBQUc7RUFDVEUsS0FBSyxFQUFFLGFBQWE7RUFDcEJFLEtBQUssRUFBRSwrR0FBK0c7RUFDdEhELFdBQVcsRUFBRSxzUUFBc1E7RUFDblJFLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRFYsSUFBSSxDQUFDZ0IsTUFBTSxlQUNQdkIsMERBQUEsQ0FBQ1EsR0FBRztFQUFDSSxJQUFJLEVBQUVBO0FBQUssQ0FBRSxDQUN0QixDQUFDOzs7Ozs7OztVQzdERCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIHJldHVybiA8U2hvcEl0ZW0gZGF0YT17ZGF0YX0+IHtwcm9wcy5jaGlsZHJlbn0gPC9TaG9wSXRlbT47XG59XG5cbmZ1bmN0aW9uIFNob3BJdGVtKHByb3BzKSB7XG4gICAgY29uc3Qge3RpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIHByaWNlfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxwPnt0aXRsZX08L3A+XG5cbiAgICAgICAgLy8gPHNlY3Rpb24+XG4gICAgICAgIC8vICAgICA8U2hvcEl0ZW1IZWFkZXIgdGl0bGU9e2xpc3QudGl0bGV9IGltYWdlPXtsaXN0LmltYWdlfSAvPlxuICAgICAgICAvLyAgICAgPFNob3BJdGVtRGVzY3JpcHRpb24gZGVzY3JpcHRpb249e2xpc3QuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIC8vICAgICA8U2hvcEl0ZW1QcmljaW5nIHByaWNlPXtsaXN0LnByaWNlfSAvPlxuICAgICAgICAvLyA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbUhlYWRlcihwcm9wcykge1xuICAgIGNvbnN0IHt0aXRsZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSB3aWR0aD0nMzUwcHgnLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbURlc2NyaXB0aW9uKHByb3BzKSB7XG4gICAgY29uc3Qge2Rlc2NyaXB0aW9ufSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvcEl0ZW1QcmljaW5nKHByb3BzKSB7XG4gICAgY29uc3Qge3ByaWNlfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICBDZW5hOiB7cHJpY2V9IHrFglxuICAgICAgICAgICAgPGJ1dHRvbj5LdXAhPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn1cblxuY29uc3QgZGF0YSA9IHtcbiAgICB0aXRsZTogXCJNYWNCb29rIFByb1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzMwMzM4My9wZXhlbHMtcGhvdG8tMzAzMzgzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2MgaSBtb2JpbG5vxZvEhyDigJMgTWFjQm9vayBQcm8gd3lyYcW6bmllIHBvZG5vc2kgdHUgcG9wcnplY3prxJkuIFRlcmF6IG1vxbxlc3ogamVzemN6ZSBzenliY2llaiByZWFsaXpvd2HEhyBzd29qZSBwb215c8WCeS4gUG9tb2fEhSBDaSB3IHR5bSB3eWRham5lIHByb2Nlc29yeSBpIHVrxYJhZHkgcGFtacSZY2ksIHphYXdhbnNvd2FuYSBncmFmaWthLCBixYJ5c2thd2ljem5pZSBkemlhxYJhasSFY2EgcGFtacSZxIcgbWFzb3dhIGkgaW5uZSBkb3Nrb25hxYJlIHJvendpxIV6YW5pYS5cIixcbiAgICBwcmljZTogOTk5OVxufTtcblxucm9vdC5yZW5kZXIoXG4gICAgPEFwcCBkYXRhPXtkYXRhfSAvPlxuKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1NGE0YTJjOGNkN2M4N2RmODhhOFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiU2hvcEl0ZW0iLCJkYXRhIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJwcmljZSIsIlNob3BJdGVtSGVhZGVyIiwic3JjIiwid2lkdGgiLCJTaG9wSXRlbURlc2NyaXB0aW9uIiwiU2hvcEl0ZW1QcmljaW5nIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==