"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


function Chat(props) {
  var list = props.list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "chat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChatHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChatMessage, {
    list: list
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NewChatMessage, null));
}
var ChatHeader = function ChatHeader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Chat prywatny"));
};
var ChatMessage = function ChatMessage(props) {
  var list = props.list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, list.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, item);
  })));
};
var NewChatMessage = function NewChatMessage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Wy\u015Blij")));
};
var data = ["Wpis z chatu 1", "Wpis z chatu 2", "Wpis z chatu 3"];
function App(props) {
  var messages = props.messages;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Chat, {
    list: messages
  });
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, {
  messages: data
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("70ed26f74625813e4a95")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42NTQ1Nzc5NzA1ZmMzNmYyZDUxYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDSztBQUU5QyxTQUFTRyxJQUFJQSxDQUFDQyxLQUFLLEVBQUU7RUFDakIsSUFBT0MsSUFBSSxHQUFJRCxLQUFLLENBQWJDLElBQUk7RUFDWCxvQkFDSUwsMERBQUE7SUFBU08sU0FBUyxFQUFDO0VBQU0sZ0JBQ3JCUCwwREFBQSxDQUFDUSxVQUFVLE1BQUUsQ0FBQyxlQUNkUiwwREFBQSxDQUFDUyxXQUFXO0lBQUNKLElBQUksRUFBRUE7RUFBSyxDQUFDLENBQUMsZUFDMUJMLDBEQUFBLENBQUNVLGNBQWMsTUFBRSxDQUNaLENBQUM7QUFFbEI7QUFFQSxJQUFNRixVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBQ3JCLG9CQUNJUiwwREFBQSw4QkFDSUEsMERBQUEsYUFBSSxlQUFpQixDQUNqQixDQUFDO0FBRWpCLENBQUM7QUFFRCxJQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUwsS0FBSyxFQUFLO0VBQzNCLElBQU9DLElBQUksR0FBSUQsS0FBSyxDQUFiQyxJQUFJO0VBQ1gsb0JBQ0lMLDBEQUFBLDJCQUNJQSwwREFBQSxhQUNLSyxJQUFJLENBQUNNLEdBQUcsQ0FBQyxVQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBSTtJQUN0QixvQkFDSWIsMERBQUE7TUFBSWMsR0FBRyxFQUFFRDtJQUFNLEdBQ1ZELElBQ0QsQ0FBQztFQUViLENBQUMsQ0FDRCxDQUNILENBQUM7QUFFZCxDQUFDO0FBRUQsSUFBTUYsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQVM7RUFDekIsb0JBQ0lWLDBEQUFBLDhCQUNJQSwwREFBQSw0QkFDSUEsMERBQUE7SUFBT2UsSUFBSSxFQUFDO0VBQU0sQ0FBRSxDQUFDLGVBQ3JCZiwwREFBQSxpQkFBUSxhQUFjLENBQ3BCLENBQ0YsQ0FBQztBQUVqQixDQUFDO0FBRUQsSUFBTWdCLElBQUksR0FBRyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO0FBRW5FLFNBQVNDLEdBQUdBLENBQUNiLEtBQUssRUFBRTtFQUNoQixJQUFPYyxRQUFRLEdBQUlkLEtBQUssQ0FBakJjLFFBQVE7RUFDakIsb0JBQU9sQiwwREFBQSxDQUFDRyxJQUFJO0lBQUNFLElBQUksRUFBRWE7RUFBUyxDQUFDLENBQUM7QUFDaEM7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdwQiw0REFBVSxDQUFDaUIsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3ZCLDBEQUFBLENBQUNpQixHQUFHO0VBQUNDLFFBQVEsRUFBRUY7QUFBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUMzRG5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX0tvbXBvenljamFfaV9wcm9wc19jaGlsZHJlbi8wNF9aYWRhbmllXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIENoYXQocHJvcHMpIHtcbiAgICBjb25zdCB7bGlzdH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGF0XCI+XG4gICAgICAgICAgICA8Q2hhdEhlYWRlciAvPlxuICAgICAgICAgICAgPENoYXRNZXNzYWdlIGxpc3Q9e2xpc3R9Lz5cbiAgICAgICAgICAgIDxOZXdDaGF0TWVzc2FnZSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cblxuY29uc3QgQ2hhdEhlYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPkNoYXQgcHJ5d2F0bnk8L2gxPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmNvbnN0IENoYXRNZXNzYWdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge2xpc3R9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGluZGV4KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5jb25zdCBOZXdDaGF0TWVzc2FnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPld5xZtsaWo8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKVxufTtcblxuY29uc3QgZGF0YSA9IFtcIldwaXMgeiBjaGF0dSAxXCIsIFwiV3BpcyB6IGNoYXR1IDJcIiwgXCJXcGlzIHogY2hhdHUgM1wiXTtcblxuZnVuY3Rpb24gQXBwKHByb3BzKSB7XG4gICAgY29uc3Qge21lc3NhZ2VzfSA9IHByb3BzO1xuICByZXR1cm4gPENoYXQgbGlzdD17bWVzc2FnZXN9Lz47XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgbWVzc2FnZXM9e2RhdGF9Lz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzBlZDI2Zjc0NjI1ODEzZTRhOTVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiQ2hhdCIsInByb3BzIiwibGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJDaGF0SGVhZGVyIiwiQ2hhdE1lc3NhZ2UiLCJOZXdDaGF0TWVzc2FnZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImtleSIsInR5cGUiLCJkYXRhIiwiQXBwIiwibWVzc2FnZXMiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=