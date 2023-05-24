self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/09_Dzien_15/02_Przekazywanie_zdarzen/02_Zadanie_2/js/Shop.js: Unexpected token (26:85)\n\n\u001b[0m \u001b[90m 24 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mul\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 25 |\u001b[39m                 {shopItemList\u001b[33m.\u001b[39mmap(item \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 26 |\u001b[39m                         \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mShopItem\u001b[39m key\u001b[33m=\u001b[39m{item\u001b[33m.\u001b[39mid} item\u001b[33m=\u001b[39m{item} onBuy\u001b[33m=\u001b[39m{productBuy\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                                                      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 27 |\u001b[39m                     }\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m                 )}\u001b[0m\n\u001b[0m \u001b[90m 29 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mul\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at instantiate (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:946:12)\n    at JSXParserMixin.raise (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:3270:19)\n    at JSXParserMixin.unexpected (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:3300:16)\n    at JSXParserMixin.parseExprAtom (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:11261:16)\n    at JSXParserMixin.parseExprAtom (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:7007:20)\n    at JSXParserMixin.parseExprSubscripts (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:10872:23)\n    at JSXParserMixin.parseUpdate (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:10855:21)\n    at JSXParserMixin.parseMaybeUnary (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:10831:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:10669:61)");

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

// app.js

// import React, {Component} from "react";
// import ReactDOM from "react-dom";
//
// import Shop from './Shop';
//
// function App() {
//     return <Shop />;
// }
//
// ReactDOM.render(<App/>, document.getElementById("app"));
//
// // Shop.js
//
// import React, { useState } from 'react';
//
// import ShopItem from './ShopItem';
//
// function Shop() {
//
//     const [ cart, setCart ] = useState([]);
//
//     const addToCart = (item) => {
//         setCart(prevCart => [...prevCart, item]);
//     }
//
//     return (
//         <>
//             <ShopItem title="MacBook Pro" onBuy={addToCart} />
//             <ShopItem title="Dell" onBuy={addToCart} />
//             <ShopItem title="Asus" onBuy={addToCart} />
//             <h1>Koszyk</h1>
//             { cart.map(item => <li key={item}>{ item }</li>) }
//         </>
//     )
//
// }
//
// export default Shop;
//
// // ShopItem.js
//
// function ShopItem() {
//
//     return (
//         <>
//             <h1>{ props.title }</h1>
//             <button onClick={() => props.onBuy(props.title)}>Kup</button>
//         </>
//     )
//
// }
//
// export default Shop;
//
//
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4de9ec91d1c5353363a7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42NjlhZDc0ZWIwZmIwMWUxNjNiNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUNuQjtBQUN6QixJQUFNSSxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFlO0VBQ3BCLG9CQUFPSiwwREFBQSxDQUFDRyw4Q0FBSSxNQUFFLENBQUM7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUcsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHUCw0REFBVSxDQUFDSSxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDViwwREFBQSxDQUFDSSxHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQzVHbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9Qcnpla2F6eXdhbmllX3pkYXJ6ZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBTaG9wIGZyb20gJy4vU2hvcCdcbmNvbnN0IEFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gPFNob3AgLz47XG59XG5cbi8vIGNvbnN0IEFwcCA9ICgpID0+IHtcbi8vICAgICByZXR1cm4gPFRvRG9MaXN0Lz5cbi8vIH1cbi8vXG4vLyBjb25zdCBUb0RvTGlzdCA9ICgpID0+IHtcbi8vXG4vLyAgICAgY29uc3QgW3Rhc2tzTGlzdCwgc2V0VGFza3NdID0gdXNlU3RhdGUoW1xuLy8gICAgICAgICB7aWQ6IDEsIHRpdGxlOiBcIlpyb2JpxIcgemFrdXB5XCJ9LFxuLy8gICAgICAgICB7aWQ6IDIsIHRpdGxlOiBcIk9iZWpyemXEhyBub3d5IHNlem9uIEdyeSBvIFRyb25cIn0sXG4vLyAgICAgICAgIHtpZDogMywgdGl0bGU6IFwiWnJvYmnEhyB6YWRhbmlhIGRvbW93ZVwifVxuLy8gICAgIF0pO1xuLy9cbi8vICAgICBjb25zdCBoYW5kbGVUYXNrRG9uZSA9IGlkID0+IHtcbi8vICAgICAgICAgc2V0VGFza3MocHJldlN0YXRlID0+IHtcbi8vICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGUuZmlsdGVyKHRhc2sgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLmlkICE9PSBpZDtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9O1xuLy9cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICB7dGFza3NMaXN0Lm1hcCh0YXNrID0+IDxUb0RvSXRlbSBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IG9uRG9uZT17aGFuZGxlVGFza0RvbmV9Lz4pfVxuLy8gICAgICAgICA8L3VsPlxuLy8gICAgICk7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IFRvRG9JdGVtID0gKHByb3BzKSA9PiB7XG4vLyAgICAgY29uc3Qge3Rhc2ssIG9uRG9uZX0gPSBwcm9wcztcbi8vICAgICBjb25zdCBoYW5kbGVEb25lQ2xpY2sgPSAoKSA9PiB7elxuLy8gICAgICAgICBpZiAodHlwZW9mIG9uRG9uZSA9PT0gJ2Z1bmN0aW9uJykge1xuLy8gICAgICAgICAgICAgb25Eb25lKHRhc2suaWQpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxsaT5cbi8vICAgICAgICAgICAgIDxoND5UaGlzIGlzIG15IHRhc2s6IHt0YXNrLnRpdGxlfTwvaDQ+XG4vLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURvbmVDbGlja30+VGFzayBkb25lPC9idXR0b24+XG4vLyAgICAgICAgIDwvbGk+XG4vLyAgICAgKTtcbi8vIH07XG5cbi8vIGFwcC5qc1xuXG4vLyBpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbi8vXG4vLyBpbXBvcnQgU2hvcCBmcm9tICcuL1Nob3AnO1xuLy9cbi8vIGZ1bmN0aW9uIEFwcCgpIHtcbi8vICAgICByZXR1cm4gPFNob3AgLz47XG4vLyB9XG4vL1xuLy8gUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuLy9cbi8vIC8vIFNob3AuanNcbi8vXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vL1xuLy8gaW1wb3J0IFNob3BJdGVtIGZyb20gJy4vU2hvcEl0ZW0nO1xuLy9cbi8vIGZ1bmN0aW9uIFNob3AoKSB7XG4vL1xuLy8gICAgIGNvbnN0IFsgY2FydCwgc2V0Q2FydCBdID0gdXNlU3RhdGUoW10pO1xuLy9cbi8vICAgICBjb25zdCBhZGRUb0NhcnQgPSAoaXRlbSkgPT4ge1xuLy8gICAgICAgICBzZXRDYXJ0KHByZXZDYXJ0ID0+IFsuLi5wcmV2Q2FydCwgaXRlbV0pO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPD5cbi8vICAgICAgICAgICAgIDxTaG9wSXRlbSB0aXRsZT1cIk1hY0Jvb2sgUHJvXCIgb25CdXk9e2FkZFRvQ2FydH0gLz5cbi8vICAgICAgICAgICAgIDxTaG9wSXRlbSB0aXRsZT1cIkRlbGxcIiBvbkJ1eT17YWRkVG9DYXJ0fSAvPlxuLy8gICAgICAgICAgICAgPFNob3BJdGVtIHRpdGxlPVwiQXN1c1wiIG9uQnV5PXthZGRUb0NhcnR9IC8+XG4vLyAgICAgICAgICAgICA8aDE+S29zenlrPC9oMT5cbi8vICAgICAgICAgICAgIHsgY2FydC5tYXAoaXRlbSA9PiA8bGkga2V5PXtpdGVtfT57IGl0ZW0gfTwvbGk+KSB9XG4vLyAgICAgICAgIDwvPlxuLy8gICAgIClcbi8vXG4vLyB9XG4vL1xuLy8gZXhwb3J0IGRlZmF1bHQgU2hvcDtcbi8vXG4vLyAvLyBTaG9wSXRlbS5qc1xuLy9cbi8vIGZ1bmN0aW9uIFNob3BJdGVtKCkge1xuLy9cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8PlxuLy8gICAgICAgICAgICAgPGgxPnsgcHJvcHMudGl0bGUgfTwvaDE+XG4vLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQnV5KHByb3BzLnRpdGxlKX0+S3VwPC9idXR0b24+XG4vLyAgICAgICAgIDwvPlxuLy8gICAgIClcbi8vXG4vLyB9XG4vL1xuLy8gZXhwb3J0IGRlZmF1bHQgU2hvcDtcbi8vXG4vL1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0ZGU5ZWM5MWQxYzUzNTMzNjNhN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlNob3AiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9