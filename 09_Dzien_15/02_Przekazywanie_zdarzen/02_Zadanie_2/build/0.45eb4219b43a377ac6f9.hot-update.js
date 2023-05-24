self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/09_Dzien_15/02_Przekazywanie_zdarzen/02_Zadanie_2/js/Shop.js: 'return' outside of function. (16:4)\n\n\u001b[0m \u001b[90m 14 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 16 |\u001b[39m     \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 18 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mh1\u001b[39m\u001b[33m>\u001b[39m\u001b[33mTutaj\u001b[39m jest \u001b[33mShop\u001b[39m a poniżej shop item\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mh1\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mShopItem\u001b[39m title\u001b[33m=\u001b[39m\u001b[32m\"tytuł 1\"\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at instantiate (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:946:12)\n    at JSXParserMixin.raise (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:3270:19)\n    at JSXParserMixin.parseReturnStatement (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:12927:12)\n    at JSXParserMixin.parseStatementContent (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:12582:21)\n    at JSXParserMixin.parseStatementLike (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:12549:17)\n    at JSXParserMixin.parseModuleItem (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:12526:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:13121:36)\n    at JSXParserMixin.parseBlockBody (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:13114:10)\n    at JSXParserMixin.parseProgram (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:12437:10)");

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _Shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Shop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Shop__WEBPACK_IMPORTED_MODULE_2__);



var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Shop__WEBPACK_IMPORTED_MODULE_2___default()), null);
};

// const App = () => {
//     return <ToDoList/>
// }
//
// const ToDoList = () => {
//
//     const [tasksList, setTasks] = useState([
//         {id: 1, title: "Zrobić zakupy"},
//         {id: 2, title: "Obejrzeć nowy sezon Gry o Tron"},
//         {id: 3, title: "Zrobić zadania domowe"}
//     ]);
//
//     const handleTaskDone = id => {
//         setTasks(prevState => {
//             return prevState.filter(task => {
//                 return task.id !== id;
//             });
//         });
//     };
//
//     return (
//         <ul>
//             {tasksList.map(task => <ToDoItem key={task.id} task={task} onDone={handleTaskDone}/>)}
//         </ul>
//     );
// };
//
// const ToDoItem = (props) => {
//     const {task, onDone} = props;
//     const handleDoneClick = () => {z
//         if (typeof onDone === 'function') {
//             onDone(task.id);
//         }
//     }
//     return (
//         <li>
//             <h4>This is my task: {task.title}</h4>
//             <button onClick={handleDoneClick}>Task done</button>
//         </li>
//     );
// };

var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bb10d7d417445a33260e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40NWViNDIxOWI0M2EzNzdhYzZmOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUNuQjtBQUN6QixJQUFNSSxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFlO0VBQ3BCLG9CQUFPSiwwREFBQSxDQUFDRyw4Q0FBSSxNQUFFLENBQUM7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1HLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1AsNERBQVUsQ0FBQ0ksU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ1YsMERBQUEsQ0FBQ0ksR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNwRG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUHJ6ZWthenl3YW5pZV96ZGFyemVuLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgU2hvcCBmcm9tICcuL1Nob3AnXG5jb25zdCBBcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIDxTaG9wIC8+O1xufVxuXG4vLyBjb25zdCBBcHAgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIDxUb0RvTGlzdC8+XG4vLyB9XG4vL1xuLy8gY29uc3QgVG9Eb0xpc3QgPSAoKSA9PiB7XG4vL1xuLy8gICAgIGNvbnN0IFt0YXNrc0xpc3QsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtcbi8vICAgICAgICAge2lkOiAxLCB0aXRsZTogXCJacm9iacSHIHpha3VweVwifSxcbi8vICAgICAgICAge2lkOiAyLCB0aXRsZTogXCJPYmVqcnplxIcgbm93eSBzZXpvbiBHcnkgbyBUcm9uXCJ9LFxuLy8gICAgICAgICB7aWQ6IDMsIHRpdGxlOiBcIlpyb2JpxIcgemFkYW5pYSBkb21vd2VcIn1cbi8vICAgICBdKTtcbi8vXG4vLyAgICAgY29uc3QgaGFuZGxlVGFza0RvbmUgPSBpZCA9PiB7XG4vLyAgICAgICAgIHNldFRhc2tzKHByZXZTdGF0ZSA9PiB7XG4vLyAgICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlLmZpbHRlcih0YXNrID0+IHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5pZCAhPT0gaWQ7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfTtcbi8vXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAge3Rhc2tzTGlzdC5tYXAodGFzayA9PiA8VG9Eb0l0ZW0ga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkRvbmU9e2hhbmRsZVRhc2tEb25lfS8+KX1cbi8vICAgICAgICAgPC91bD5cbi8vICAgICApO1xuLy8gfTtcbi8vXG4vLyBjb25zdCBUb0RvSXRlbSA9IChwcm9wcykgPT4ge1xuLy8gICAgIGNvbnN0IHt0YXNrLCBvbkRvbmV9ID0gcHJvcHM7XG4vLyAgICAgY29uc3QgaGFuZGxlRG9uZUNsaWNrID0gKCkgPT4ge3pcbi8vICAgICAgICAgaWYgKHR5cGVvZiBvbkRvbmUgPT09ICdmdW5jdGlvbicpIHtcbi8vICAgICAgICAgICAgIG9uRG9uZSh0YXNrLmlkKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICA8aDQ+VGhpcyBpcyBteSB0YXNrOiB7dGFzay50aXRsZX08L2g0PlxuLy8gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEb25lQ2xpY2t9PlRhc2sgZG9uZTwvYnV0dG9uPlxuLy8gICAgICAgICA8L2xpPlxuLy8gICAgICk7XG4vLyB9O1xuXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmIxMGQ3ZDQxNzQ0NWEzMzI2MGVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJTaG9wIiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==