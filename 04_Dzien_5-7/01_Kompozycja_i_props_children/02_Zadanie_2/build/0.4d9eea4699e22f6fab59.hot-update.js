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
    style: {
      width: '10px',
      height: '10px'
    },
    src: image
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
/******/ 	__webpack_require__.h = () => ("5cd32d7844cb4231cffb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40ZDllZWE0Njk5ZTIyZjZmYWI1OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdKLDREQUFVLENBQUNDLFNBQVMsQ0FBQztBQUVsQyxTQUFTSSxHQUFHQSxDQUFDQyxLQUFLLEVBQUU7RUFDaEIsSUFBT0MsSUFBSSxHQUFJRCxLQUFLLENBQWJDLElBQUk7RUFDWCxvQkFBT1YsMERBQUEsQ0FBQ1ksUUFBUTtJQUFDRixJQUFJLEVBQUVBO0VBQUssQ0FBQyxDQUFDO0FBQ2xDO0FBRUEsU0FBU0UsUUFBUUEsQ0FBQ0gsS0FBSyxFQUFFO0VBQ3JCLElBQU9DLElBQUksR0FBSUQsS0FBSyxDQUFiQyxJQUFJO0VBQ1gsb0JBQ0lWLDBEQUFBLCtCQUNJQSwwREFBQSw4QkFDSUEsMERBQUEsYUFBS1UsSUFBSSxDQUFDRyxLQUFVLENBQUMsZUFDckJiLDBEQUFBO0lBQUtjLEdBQUcsRUFBRUosSUFBSSxDQUFDSztFQUFNLENBQUMsQ0FDbEIsQ0FBQyxlQUNUZiwwREFBQSwrQkFDSUEsMERBQUEsWUFBSVUsSUFBSSxDQUFDTSxXQUFlLENBQ25CLENBQUMsZUFDVmhCLDBEQUFBLGlCQUFRLFFBQ0UsRUFBQ1UsSUFBSSxDQUFDTyxLQUFLLEVBQUMsVUFDbEIsZUFBQWpCLDBEQUFBLGlCQUFRLE1BQVksQ0FDaEIsQ0FDSCxDQUFDO0FBRWxCO0FBRUEsU0FBU2tCLGNBQWNBLENBQUFDLElBQUEsRUFBaUI7RUFBQSxJQUFmTixLQUFLLEdBQUFNLElBQUEsQ0FBTE4sS0FBSztJQUFFRSxLQUFLLEdBQUFJLElBQUEsQ0FBTEosS0FBSztFQUNqQyxvQkFDSWYsMERBQUEsOEJBQ0lBLDBEQUFBLGFBQUthLEtBQVUsQ0FBQyxlQUNoQmIsMERBQUE7SUFBS29CLEtBQUssRUFBRTtNQUFDQyxLQUFLLEVBQUUsTUFBTTtNQUFFQyxNQUFNLEVBQUU7SUFBTSxDQUFFO0lBQUNSLEdBQUcsRUFBRUM7RUFBTSxDQUFHLENBQ3ZELENBQUM7QUFFakI7QUFFQSxTQUFTUSxtQkFBbUJBLENBQUFDLEtBQUEsRUFBUztFQUFBLElBQVBDLElBQUksR0FBQUQsS0FBQSxDQUFKQyxJQUFJO0VBQzlCLG9CQUNJekIsMERBQUEsK0JBQ0lBLDBEQUFBLFlBQUl5QixJQUFRLENBQ1AsQ0FBQztBQUVsQjtBQUVBLFNBQVNDLGVBQWVBLENBQUFDLEtBQUEsRUFBVTtFQUFBLElBQVJWLEtBQUssR0FBQVUsS0FBQSxDQUFMVixLQUFLO0VBQzNCLG9CQUNJakIsMERBQUEsaUJBQVEsUUFDRSxFQUFDaUIsS0FBSyxFQUFDLFVBQ2IsZUFBQWpCLDBEQUFBLGlCQUFRLE1BQVksQ0FDaEIsQ0FBQztBQUVqQjtBQUVBLElBQU1VLElBQUksR0FBRztFQUNURyxLQUFLLEVBQUUsYUFBYTtFQUNwQkUsS0FBSyxFQUFFLCtHQUErRztFQUN0SEMsV0FBVyxFQUFFLHNRQUFzUTtFQUNuUkMsS0FBSyxFQUFFO0FBQ1gsQ0FBQztBQUVEVixJQUFJLENBQUNxQixNQUFNLGVBQ1A1QiwwREFBQSxDQUFDUSxHQUFHO0VBQUNFLElBQUksRUFBRUE7QUFBSyxDQUFDLENBQ3JCLENBQUM7Ozs7Ozs7O1VDakVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX0tvbXBvenljamFfaV9wcm9wc19jaGlsZHJlbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuZnVuY3Rpb24gQXBwKHByb3BzKSB7XG4gICAgY29uc3Qge2RhdGF9ID0gcHJvcHM7XG4gICAgcmV0dXJuIDxTaG9wSXRlbSBkYXRhPXtkYXRhfS8+O1xufVxuXG5mdW5jdGlvbiBTaG9wSXRlbShwcm9wcykge1xuICAgIGNvbnN0IHtkYXRhfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aDE+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWFnZX0vPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8cD57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgIENlbmE6IHtkYXRhLnByaWNlfSB6xYJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPkt1cCE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbUhlYWRlcih7dGl0bGUsIGltYWdlfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ICcxMHB4JywgaGVpZ2h0OiAnMTBweCd9fSBzcmM9e2ltYWdlfSAgLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbURlc2NyaXB0aW9uKHtkZXNjfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPHA+e2Rlc2N9PC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbVByaWNpbmcoe3ByaWNlfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICBDZW5hOiB7cHJpY2V9IHrFglxuICAgICAgICAgICAgPGJ1dHRvbj5LdXAhPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn1cblxuY29uc3QgZGF0YSA9IHtcbiAgICB0aXRsZTogXCJNYWNCb29rIFByb1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzMwMzM4My9wZXhlbHMtcGhvdG8tMzAzMzgzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNb2MgaSBtb2JpbG5vxZvEhyDigJMgTWFjQm9vayBQcm8gd3lyYcW6bmllIHBvZG5vc2kgdHUgcG9wcnplY3prxJkuIFRlcmF6IG1vxbxlc3ogamVzemN6ZSBzenliY2llaiByZWFsaXpvd2HEhyBzd29qZSBwb215c8WCeS4gUG9tb2fEhSBDaSB3IHR5bSB3eWRham5lIHByb2Nlc29yeSBpIHVrxYJhZHkgcGFtacSZY2ksIHphYXdhbnNvd2FuYSBncmFmaWthLCBixYJ5c2thd2ljem5pZSBkemlhxYJhasSFY2EgcGFtacSZxIcgbWFzb3dhIGkgaW5uZSBkb3Nrb25hxYJlIHJvendpxIV6YW5pYS5cIixcbiAgICBwcmljZTogOTk5OVxufTtcblxucm9vdC5yZW5kZXIoXG4gICAgPEFwcCBkYXRhPXtkYXRhfS8+XG4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWNkMzJkNzg0NGNiNDIzMWNmZmJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsInByb3BzIiwiZGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJTaG9wSXRlbSIsInRpdGxlIiwic3JjIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiU2hvcEl0ZW1IZWFkZXIiLCJfcmVmIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIlNob3BJdGVtRGVzY3JpcHRpb24iLCJfcmVmMiIsImRlc2MiLCJTaG9wSXRlbVByaWNpbmciLCJfcmVmMyIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=