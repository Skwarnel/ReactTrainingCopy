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
  })));
};
var NewChatMessage = function NewChatMessage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Wy\u015Blij")));
};
var messages = ["Wpis z chatu 1", "Wpis z chatu 2", "Wpis z chatu 3"];
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
/******/ 	__webpack_require__.h = () => ("5b848436d9122edda1ac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xYWJlMjQ4NjUzMTJkNTJjNTU1NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDSzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0csSUFBSUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQ2pCLG9CQUNJSiwwREFBQTtJQUFTTSxTQUFTLEVBQUM7RUFBTSxnQkFDckJOLDBEQUFBLENBQUNPLFVBQVUsTUFBRSxDQUFDLGVBQ2RQLDBEQUFBLENBQUNRLFdBQVcsTUFBRSxDQUFDLGVBQ2ZSLDBEQUFBLENBQUNTLGNBQWMsTUFBRSxDQUNaLENBQUM7QUFFbEI7QUFFQSxJQUFNRixVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBQ3JCLG9CQUNJUCwwREFBQSw4QkFDSUEsMERBQUEsYUFBSSxlQUFpQixDQUNqQixDQUFDO0FBRWpCLENBQUM7QUFFRCxJQUFNUSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUosS0FBSyxFQUFLO0VBQzNCLElBQU9NLFFBQVEsR0FBSU4sS0FBSyxDQUFqQk0sUUFBUTtFQUNmLG9CQUNJViwwREFBQSwyQkFDSUEsMERBQUEsYUFDS1UsUUFBUSxDQUFDQyxHQUFHLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUk7SUFDMUIsb0JBQ0liLDBEQUFBO01BQUljLEdBQUcsRUFBRUQ7SUFBTSxHQUNWSCxRQUNELENBQUM7RUFFYixDQUFDLENBQ0QsQ0FDSCxDQUFDO0FBRWQsQ0FBQztBQUVELElBQU1ELGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0VBQ3pCLG9CQUNJVCwwREFBQSw4QkFDSUEsMERBQUEsNEJBQ0lBLDBEQUFBO0lBQU9lLElBQUksRUFBQztFQUFNLENBQUUsQ0FBQyxlQUNyQmYsMERBQUEsaUJBQVEsYUFBYyxDQUNwQixDQUNGLENBQUM7QUFFakIsQ0FBQztBQUVELElBQU1VLFFBQVEsR0FBRyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO0FBRXZFLFNBQVNNLEdBQUdBLENBQUNaLEtBQUssRUFBRTtFQUNsQixvQkFBT0osMERBQUEsQ0FBQ0csSUFBSSxNQUFFLENBQUM7QUFDakI7QUFFQSxJQUFNYyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdsQiw0REFBVSxDQUFDZSxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDckIsMERBQUEsQ0FBQ2dCLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7O1VDaEZwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9Lb21wb3p5Y2phX2lfcHJvcHNfY2hpbGRyZW4vMDRfWmFkYW5pZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG4vLyBmdW5jdGlvbiBDaGF0KHByb3BzKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hhdFwiPlxuLy8gICAgICAgPGhlYWRlcj5cbi8vICAgICAgICAgPGgxPkNoYXQgcHJ5d2F0bnk8L2gxPlxuLy8gICAgICAgPC9oZWFkZXI+XG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgPGxpPldwaXMgeiBjaGF0dSAxPC9saT5cbi8vICAgICAgICAgICA8bGk+V3BpcyB6IGNoYXR1IDI8L2xpPlxuLy8gICAgICAgICAgIDxsaT5XcGlzIHogY2hhdHUgMzwvbGk+XG4vLyAgICAgICAgIDwvdWw+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIDxmb290ZXI+XG4vLyAgICAgICAgIDxmb3JtPlxuLy8gICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XG4vLyAgICAgICAgICAgPGJ1dHRvbj5XecWbbGlqPC9idXR0b24+XG4vLyAgICAgICAgIDwvZm9ybT5cbi8vICAgICAgIDwvZm9vdGVyPlxuLy8gICAgIDwvc2VjdGlvbj5cbi8vICAgKTtcbi8vIH1cblxuZnVuY3Rpb24gQ2hhdChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYXRcIj5cbiAgICAgICAgICAgIDxDaGF0SGVhZGVyIC8+XG4gICAgICAgICAgICA8Q2hhdE1lc3NhZ2UgLz5cbiAgICAgICAgICAgIDxOZXdDaGF0TWVzc2FnZSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cblxuY29uc3QgQ2hhdEhlYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPkNoYXQgcHJ5d2F0bnk8L2gxPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmNvbnN0IENoYXRNZXNzYWdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge21lc3NhZ2VzfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgoaXRlbSwgaW5kZXgpPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5jb25zdCBOZXdDaGF0TWVzc2FnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPld5xZtsaWo8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKVxufTtcblxuY29uc3QgbWVzc2FnZXMgPSBbXCJXcGlzIHogY2hhdHUgMVwiLCBcIldwaXMgeiBjaGF0dSAyXCIsIFwiV3BpcyB6IGNoYXR1IDNcIl1cblxuZnVuY3Rpb24gQXBwKHByb3BzKSB7XG4gIHJldHVybiA8Q2hhdCAvPjtcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1Yjg0ODQzNmQ5MTIyZWRkYTFhY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJDaGF0IiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQ2hhdEhlYWRlciIsIkNoYXRNZXNzYWdlIiwiTmV3Q2hhdE1lc3NhZ2UiLCJtZXNzYWdlcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImtleSIsInR5cGUiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=