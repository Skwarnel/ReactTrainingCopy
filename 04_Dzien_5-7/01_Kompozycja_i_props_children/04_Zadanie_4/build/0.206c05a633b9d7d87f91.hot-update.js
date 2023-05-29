"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);



// function Chat(props) {
//   return (
//     <section className="chat">
//       <header>
//         <h1>Chat prywatny</h1>
//       </header>
//       <div>
//         <ul>
//           <li>Wpis z chatu 1</li>
//           <li>Wpis z chatu 2</li>
//           <li>Wpis z chatu 3</li>
//         </ul>
//       </div>
//       <footer>
//         <form>
//           <input type="text" />
//           <button>Wyślij</button>
//         </form>
//       </footer>
//     </section>
//   );
// }

function Chat(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "chat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChatHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChatMessage, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NewChatMessage, null));
}
var ChatHeader = function ChatHeader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Chat prywatny"));
};
var ChatMessage = function ChatMessage(props) {
  var messages = props.messages;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, messages.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, messages);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Wpis z chatu 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Wpis z chatu 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Wpis z chatu 3")));
};
var NewChatMessage = function NewChatMessage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Wy\u015Blij")));
};
function App(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Chat, null);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1abe24865312d52c5555")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yMDZjMDVhNjMzYjlkN2Q4N2Y5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDSzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0csSUFBSUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQ2pCLG9CQUNJSiwwREFBQTtJQUFTTSxTQUFTLEVBQUM7RUFBTSxnQkFDckJOLDBEQUFBLENBQUNPLFVBQVUsTUFBRSxDQUFDLGVBQ2RQLDBEQUFBLENBQUNRLFdBQVcsTUFBRSxDQUFDLGVBQ2ZSLDBEQUFBLENBQUNTLGNBQWMsTUFBRSxDQUNaLENBQUM7QUFFbEI7QUFFQSxJQUFNRixVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBQ3JCLG9CQUNJUCwwREFBQSw4QkFDSUEsMERBQUEsYUFBSSxlQUFpQixDQUNqQixDQUFDO0FBRWpCLENBQUM7QUFFRCxJQUFNUSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUosS0FBSyxFQUFLO0VBQzNCLElBQU9NLFFBQVEsR0FBSU4sS0FBSyxDQUFqQk0sUUFBUTtFQUNmLG9CQUNJViwwREFBQSwyQkFDSUEsMERBQUEsYUFDS1UsUUFBUSxDQUFDQyxHQUFHLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUk7SUFDMUIsb0JBQ0liLDBEQUFBO01BQUljLEdBQUcsRUFBRUQ7SUFBTSxHQUNWSCxRQUNELENBQUM7RUFFYixDQUFDLENBQUMsZUFDRlYsMERBQUEsYUFBSSxnQkFBa0IsQ0FBQyxlQUN2QkEsMERBQUEsYUFBSSxnQkFBa0IsQ0FBQyxlQUN2QkEsMERBQUEsYUFBSSxnQkFBa0IsQ0FDdEIsQ0FDSCxDQUFDO0FBRWQsQ0FBQztBQUVELElBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0VBQ3pCLG9CQUNJVCwwREFBQSw4QkFDSUEsMERBQUEsNEJBQ0lBLDBEQUFBO0lBQU9lLElBQUksRUFBQztFQUFNLENBQUUsQ0FBQyxlQUNyQmYsMERBQUEsaUJBQVEsYUFBYyxDQUNwQixDQUNGLENBQUM7QUFFakIsQ0FBQztBQUVELFNBQVNnQixHQUFHQSxDQUFDWixLQUFLLEVBQUU7RUFDbEIsb0JBQU9KLDBEQUFBLENBQUNHLElBQUksTUFBRSxDQUFDO0FBQ2pCO0FBRUEsSUFBTWMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHbEIsNERBQVUsQ0FBQ2UsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3JCLDBEQUFBLENBQUNnQixHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7OztVQ2pGcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfS29tcG96eWNqYV9pX3Byb3BzX2NoaWxkcmVuLzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuLy8gZnVuY3Rpb24gQ2hhdChwcm9wcykge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYXRcIj5cbi8vICAgICAgIDxoZWFkZXI+XG4vLyAgICAgICAgIDxoMT5DaGF0IHByeXdhdG55PC9oMT5cbi8vICAgICAgIDwvaGVhZGVyPlxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgIDxsaT5XcGlzIHogY2hhdHUgMTwvbGk+XG4vLyAgICAgICAgICAgPGxpPldwaXMgeiBjaGF0dSAyPC9saT5cbi8vICAgICAgICAgICA8bGk+V3BpcyB6IGNoYXR1IDM8L2xpPlxuLy8gICAgICAgICA8L3VsPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICA8Zm9vdGVyPlxuLy8gICAgICAgICA8Zm9ybT5cbi8vICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxuLy8gICAgICAgICAgIDxidXR0b24+V3nFm2xpajwvYnV0dG9uPlxuLy8gICAgICAgICA8L2Zvcm0+XG4vLyAgICAgICA8L2Zvb3Rlcj5cbi8vICAgICA8L3NlY3Rpb24+XG4vLyAgICk7XG4vLyB9XG5cbmZ1bmN0aW9uIENoYXQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGF0XCI+XG4gICAgICAgICAgICA8Q2hhdEhlYWRlciAvPlxuICAgICAgICAgICAgPENoYXRNZXNzYWdlIC8+XG4gICAgICAgICAgICA8TmV3Q2hhdE1lc3NhZ2UgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG5cbmNvbnN0IENoYXRIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxoMT5DaGF0IHByeXdhdG55PC9oMT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5jb25zdCBDaGF0TWVzc2FnZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHttZXNzYWdlc30gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKGl0ZW0sIGluZGV4KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDxsaT5XcGlzIHogY2hhdHUgMTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPldwaXMgeiBjaGF0dSAyPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+V3BpcyB6IGNoYXR1IDM8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuY29uc3QgTmV3Q2hhdE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5XecWbbGlqPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn07XG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICByZXR1cm4gPENoYXQgLz47XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWFiZTI0ODY1MzEyZDUyYzU1NTVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiQ2hhdCIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkNoYXRIZWFkZXIiLCJDaGF0TWVzc2FnZSIsIk5ld0NoYXRNZXNzYWdlIiwibWVzc2FnZXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJrZXkiLCJ0eXBlIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9