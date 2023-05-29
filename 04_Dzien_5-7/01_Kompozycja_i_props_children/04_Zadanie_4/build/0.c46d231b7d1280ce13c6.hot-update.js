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
/******/ 	__webpack_require__.h = () => ("6545779705fc36f2d51c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jNDZkMjMxYjdkMTI4MGNlMTNjNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDSztBQUU5QyxTQUFTRyxJQUFJQSxDQUFDQyxLQUFLLEVBQUU7RUFDakIsb0JBQ0lKLDBEQUFBO0lBQVNNLFNBQVMsRUFBQztFQUFNLGdCQUNyQk4sMERBQUEsQ0FBQ08sVUFBVSxNQUFFLENBQUMsZUFDZFAsMERBQUEsQ0FBQ1EsV0FBVztJQUFDQyxJQUFJLEVBQUVMO0VBQU0sQ0FBQyxDQUFDLGVBQzNCSiwwREFBQSxDQUFDVSxjQUFjLE1BQUUsQ0FDWixDQUFDO0FBRWxCO0FBRUEsSUFBTUgsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztFQUNyQixvQkFDSVAsMERBQUEsOEJBQ0lBLDBEQUFBLGFBQUksZUFBaUIsQ0FDakIsQ0FBQztBQUVqQixDQUFDO0FBRUQsSUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlKLEtBQUssRUFBSztFQUMzQixJQUFPSyxJQUFJLEdBQUlMLEtBQUssQ0FBYkssSUFBSTtFQUNYLG9CQUNJVCwwREFBQSwyQkFDSUEsMERBQUEsYUFDS1MsSUFBSSxDQUFDRSxHQUFHLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUk7SUFDdEIsb0JBQ0liLDBEQUFBO01BQUljLEdBQUcsRUFBRUQ7SUFBTSxHQUNWRSxRQUNELENBQUM7RUFFYixDQUFDLENBQ0QsQ0FDSCxDQUFDO0FBRWQsQ0FBQztBQUVELElBQU1MLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0VBQ3pCLG9CQUNJViwwREFBQSw4QkFDSUEsMERBQUEsNEJBQ0lBLDBEQUFBO0lBQU9nQixJQUFJLEVBQUM7RUFBTSxDQUFFLENBQUMsZUFDckJoQiwwREFBQSxpQkFBUSxhQUFjLENBQ3BCLENBQ0YsQ0FBQztBQUVqQixDQUFDO0FBRUQsSUFBTWlCLElBQUksR0FBRyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO0FBRW5FLFNBQVNDLEdBQUdBLENBQUNkLEtBQUssRUFBRTtFQUNoQixJQUFPVyxRQUFRLEdBQUlYLEtBQUssQ0FBakJXLFFBQVE7RUFDakIsb0JBQU9mLDBEQUFBLENBQUNHLElBQUk7SUFBQ00sSUFBSSxFQUFFTTtFQUFTLENBQUMsQ0FBQztBQUNoQztBQUVBLElBQU1JLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3BCLDREQUFVLENBQUNpQixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDdkIsMERBQUEsQ0FBQ2tCLEdBQUc7RUFBQ0gsUUFBUSxFQUFFRTtBQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQzFEbkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfS29tcG96eWNqYV9pX3Byb3BzX2NoaWxkcmVuLzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gQ2hhdChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYXRcIj5cbiAgICAgICAgICAgIDxDaGF0SGVhZGVyIC8+XG4gICAgICAgICAgICA8Q2hhdE1lc3NhZ2UgbGlzdD17cHJvcHN9Lz5cbiAgICAgICAgICAgIDxOZXdDaGF0TWVzc2FnZSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cblxuY29uc3QgQ2hhdEhlYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPkNoYXQgcHJ5d2F0bnk8L2gxPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmNvbnN0IENoYXRNZXNzYWdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge2xpc3R9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGluZGV4KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuY29uc3QgTmV3Q2hhdE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5XecWbbGlqPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn07XG5cbmNvbnN0IGRhdGEgPSBbXCJXcGlzIHogY2hhdHUgMVwiLCBcIldwaXMgeiBjaGF0dSAyXCIsIFwiV3BpcyB6IGNoYXR1IDNcIl07XG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIGNvbnN0IHttZXNzYWdlc30gPSBwcm9wcztcbiAgcmV0dXJuIDxDaGF0IGxpc3Q9e21lc3NhZ2VzfS8+O1xufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIG1lc3NhZ2VzPXtkYXRhfS8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY1NDU3Nzk3MDVmYzM2ZjJkNTFjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlUm9vdCIsIkNoYXQiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJDaGF0SGVhZGVyIiwiQ2hhdE1lc3NhZ2UiLCJsaXN0IiwiTmV3Q2hhdE1lc3NhZ2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJrZXkiLCJtZXNzYWdlcyIsInR5cGUiLCJkYXRhIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9