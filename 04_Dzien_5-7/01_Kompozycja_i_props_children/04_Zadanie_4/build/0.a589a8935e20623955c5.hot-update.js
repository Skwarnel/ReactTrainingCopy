"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


function Chat(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "chat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChatHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChatMessage, {
    list: props
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
    }, messages);
  })));
};
var NewChatMessage = function NewChatMessage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Wy\u015Blij")));
};
var data = ["Wpis z chatu 1", "Wpis z chatu 2", "Wpis z chatu 3"];
function App(props) {
  var list = props.list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Chat, {
    list: list
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
/******/ 	__webpack_require__.h = () => ("c46d231b7d1280ce13c6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNTg5YTg5MzVlMjA2MjM5NTVjNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDSztBQUU5QyxTQUFTRyxJQUFJQSxDQUFDQyxLQUFLLEVBQUU7RUFDakIsb0JBQ0lKLDBEQUFBO0lBQVNNLFNBQVMsRUFBQztFQUFNLGdCQUNyQk4sMERBQUEsQ0FBQ08sVUFBVSxNQUFFLENBQUMsZUFDZFAsMERBQUEsQ0FBQ1EsV0FBVztJQUFDQyxJQUFJLEVBQUVMO0VBQU0sQ0FBQyxDQUFDLGVBQzNCSiwwREFBQSxDQUFDVSxjQUFjLE1BQUUsQ0FDWixDQUFDO0FBRWxCO0FBRUEsSUFBTUgsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztFQUNyQixvQkFDSVAsMERBQUEsOEJBQ0lBLDBEQUFBLGFBQUksZUFBaUIsQ0FDakIsQ0FBQztBQUVqQixDQUFDO0FBRUQsSUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlKLEtBQUssRUFBSztFQUMzQixJQUFPSyxJQUFJLEdBQUlMLEtBQUssQ0FBYkssSUFBSTtFQUNYLG9CQUNJVCwwREFBQSwyQkFDSUEsMERBQUEsYUFDS1MsSUFBSSxDQUFDRSxHQUFHLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUk7SUFDdEIsb0JBQ0liLDBEQUFBO01BQUljLEdBQUcsRUFBRUQ7SUFBTSxHQUNWRSxRQUNELENBQUM7RUFFYixDQUFDLENBQ0QsQ0FDSCxDQUFDO0FBRWQsQ0FBQztBQUVELElBQU1MLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0VBQ3pCLG9CQUNJViwwREFBQSw4QkFDSUEsMERBQUEsNEJBQ0lBLDBEQUFBO0lBQU9nQixJQUFJLEVBQUM7RUFBTSxDQUFFLENBQUMsZUFDckJoQiwwREFBQSxpQkFBUSxhQUFjLENBQ3BCLENBQ0YsQ0FBQztBQUVqQixDQUFDO0FBRUQsSUFBTWlCLElBQUksR0FBRyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO0FBRW5FLFNBQVNDLEdBQUdBLENBQUNkLEtBQUssRUFBRTtFQUNoQixJQUFPSyxJQUFJLEdBQUlMLEtBQUssQ0FBYkssSUFBSTtFQUNiLG9CQUFPVCwwREFBQSxDQUFDRyxJQUFJO0lBQUNNLElBQUksRUFBRUE7RUFBSyxDQUFDLENBQUM7QUFDNUI7QUFFQSxJQUFNVSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdwQiw0REFBVSxDQUFDaUIsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3ZCLDBEQUFBLENBQUNrQixHQUFHO0VBQUNILFFBQVEsRUFBRUU7QUFBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUMxRG5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX0tvbXBvenljamFfaV9wcm9wc19jaGlsZHJlbi8wNF9aYWRhbmllXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIENoYXQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGF0XCI+XG4gICAgICAgICAgICA8Q2hhdEhlYWRlciAvPlxuICAgICAgICAgICAgPENoYXRNZXNzYWdlIGxpc3Q9e3Byb3BzfS8+XG4gICAgICAgICAgICA8TmV3Q2hhdE1lc3NhZ2UgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG5cbmNvbnN0IENoYXRIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxoMT5DaGF0IHByeXdhdG55PC9oMT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5jb25zdCBDaGF0TWVzc2FnZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtsaXN0fSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2xpc3QubWFwKChpdGVtLCBpbmRleCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmNvbnN0IE5ld0NoYXRNZXNzYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24+V3nFm2xpajwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApXG59O1xuXG5jb25zdCBkYXRhID0gW1wiV3BpcyB6IGNoYXR1IDFcIiwgXCJXcGlzIHogY2hhdHUgMlwiLCBcIldwaXMgeiBjaGF0dSAzXCJdO1xuXG5mdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgICBjb25zdCB7bGlzdH0gPSBwcm9wcztcbiAgcmV0dXJuIDxDaGF0IGxpc3Q9e2xpc3R9Lz47XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgbWVzc2FnZXM9e2RhdGF9Lz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzQ2ZDIzMWI3ZDEyODBjZTEzYzZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiQ2hhdCIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkNoYXRIZWFkZXIiLCJDaGF0TWVzc2FnZSIsImxpc3QiLCJOZXdDaGF0TWVzc2FnZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImtleSIsIm1lc3NhZ2VzIiwidHlwZSIsImRhdGEiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=