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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChatHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChatMessage, {
    messages: props
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NewChatMessage, null));
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
  })));
};
var NewChatMessage = function NewChatMessage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Wy\u015Blij")));
};
var messages = ["Wpis z chatu 1", "Wpis z chatu 2", "Wpis z chatu 3"];
function App(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Chat, {
    messages: messages
  });
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0e9d9435b533f3610a5d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMWRlODVhODg0N2YzZTRkNDczZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDSzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0csSUFBSUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQ2pCLG9CQUNJSiwwREFBQTtJQUFTTSxTQUFTLEVBQUM7RUFBTSxnQkFDckJOLDBEQUFBLENBQUNPLFVBQVUsTUFBRSxDQUFDLGVBQ2RQLDBEQUFBLENBQUNRLFdBQVc7SUFBQ0MsUUFBUSxFQUFFTDtFQUFNLENBQUMsQ0FBQyxlQUMvQkosMERBQUEsQ0FBQ1UsY0FBYyxNQUFFLENBQ1osQ0FBQztBQUVsQjtBQUVBLElBQU1ILFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7RUFDckIsb0JBQ0lQLDBEQUFBLDhCQUNJQSwwREFBQSxhQUFJLGVBQWlCLENBQ2pCLENBQUM7QUFFakIsQ0FBQztBQUVELElBQU1RLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJSixLQUFLLEVBQUs7RUFDM0IsSUFBT0ssUUFBUSxHQUFJTCxLQUFLLENBQWpCSyxRQUFRO0VBQ2Ysb0JBQ0lULDBEQUFBLDJCQUNJQSwwREFBQSxhQUNLUyxRQUFRLENBQUNFLEdBQUcsQ0FBQyxVQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBSTtJQUMxQixvQkFDSWIsMERBQUE7TUFBSWMsR0FBRyxFQUFFRDtJQUFNLEdBQ1ZKLFFBQ0QsQ0FBQztFQUViLENBQUMsQ0FDRCxDQUNILENBQUM7QUFFZCxDQUFDO0FBRUQsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQVM7RUFDekIsb0JBQ0lWLDBEQUFBLDhCQUNJQSwwREFBQSw0QkFDSUEsMERBQUE7SUFBT2UsSUFBSSxFQUFDO0VBQU0sQ0FBRSxDQUFDLGVBQ3JCZiwwREFBQSxpQkFBUSxhQUFjLENBQ3BCLENBQ0YsQ0FBQztBQUVqQixDQUFDO0FBRUQsSUFBTVMsUUFBUSxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUM7QUFFdkUsU0FBU08sR0FBR0EsQ0FBQ1osS0FBSyxFQUFFO0VBQ2xCLG9CQUFPSiwwREFBQSxDQUFDRyxJQUFJO0lBQUNNLFFBQVEsRUFBRUE7RUFBUyxDQUFDLENBQUM7QUFDcEM7QUFFQSxJQUFNUSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdsQiw0REFBVSxDQUFDZSxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDckIsMERBQUEsQ0FBQ2dCLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7O1VDaEZwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDRfWmFkYW5pZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG4vLyBmdW5jdGlvbiBDaGF0KHByb3BzKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hhdFwiPlxuLy8gICAgICAgPGhlYWRlcj5cbi8vICAgICAgICAgPGgxPkNoYXQgcHJ5d2F0bnk8L2gxPlxuLy8gICAgICAgPC9oZWFkZXI+XG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgPGxpPldwaXMgeiBjaGF0dSAxPC9saT5cbi8vICAgICAgICAgICA8bGk+V3BpcyB6IGNoYXR1IDI8L2xpPlxuLy8gICAgICAgICAgIDxsaT5XcGlzIHogY2hhdHUgMzwvbGk+XG4vLyAgICAgICAgIDwvdWw+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIDxmb290ZXI+XG4vLyAgICAgICAgIDxmb3JtPlxuLy8gICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XG4vLyAgICAgICAgICAgPGJ1dHRvbj5XecWbbGlqPC9idXR0b24+XG4vLyAgICAgICAgIDwvZm9ybT5cbi8vICAgICAgIDwvZm9vdGVyPlxuLy8gICAgIDwvc2VjdGlvbj5cbi8vICAgKTtcbi8vIH1cblxuZnVuY3Rpb24gQ2hhdChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYXRcIj5cbiAgICAgICAgICAgIDxDaGF0SGVhZGVyIC8+XG4gICAgICAgICAgICA8Q2hhdE1lc3NhZ2UgbWVzc2FnZXM9e3Byb3BzfS8+XG4gICAgICAgICAgICA8TmV3Q2hhdE1lc3NhZ2UgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG5cbmNvbnN0IENoYXRIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxoMT5DaGF0IHByeXdhdG55PC9oMT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5jb25zdCBDaGF0TWVzc2FnZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHttZXNzYWdlc30gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKGl0ZW0sIGluZGV4KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuY29uc3QgTmV3Q2hhdE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5XecWbbGlqPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn07XG5cbmNvbnN0IG1lc3NhZ2VzID0gW1wiV3BpcyB6IGNoYXR1IDFcIiwgXCJXcGlzIHogY2hhdHUgMlwiLCBcIldwaXMgeiBjaGF0dSAzXCJdO1xuXG5mdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgcmV0dXJuIDxDaGF0IG1lc3NhZ2VzPXttZXNzYWdlc30vPjtcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZTlkOTQzNWI1MzNmMzYxMGE1ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJDaGF0IiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQ2hhdEhlYWRlciIsIkNoYXRNZXNzYWdlIiwibWVzc2FnZXMiLCJOZXdDaGF0TWVzc2FnZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImtleSIsInR5cGUiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=