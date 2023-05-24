self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/09_Dzien_15/02_Przekazywanie_zdarzen/02_Zadanie_2/js/Shop.js: Unexpected token (27:16)\n\n\u001b[0m \u001b[90m 25 |\u001b[39m                         \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mShopItem\u001b[39m key\u001b[33m=\u001b[39m{item\u001b[33m.\u001b[39mid} item\u001b[33m=\u001b[39m{item} onBuy\u001b[33m=\u001b[39m{productBuy}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m                     productBuy\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 27 |\u001b[39m                 )}\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mul\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 29 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 30 |\u001b[39m                 \u001b[33mYou\u001b[39m have bought\u001b[33m:\u001b[39m\u001b[0m\n    at instantiate (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:946:12)\n    at JSXParserMixin.raise (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:3270:19)\n    at JSXParserMixin.unexpected (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:3300:16)\n    at JSXParserMixin.parseExprAtom (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:11261:16)\n    at JSXParserMixin.parseExprAtom (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:7007:20)\n    at JSXParserMixin.parseExprSubscripts (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:10872:23)\n    at JSXParserMixin.parseUpdate (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:10855:21)\n    at JSXParserMixin.parseMaybeUnary (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:10831:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/home/griegoriens/WebstormProjects/ONL_FSB_E_24_React/node_modules/@babel/parser/lib/index.js:10669:61)");

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
// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<App/>);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4bd9707a49cf0effdceb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lYzI1NDY1MWI5NmZlOTNmYzFmNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUNuQjtBQUN6QixJQUFNSSxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFlO0VBQ3BCLG9CQUFPSiwwREFBQSxDQUFDRyw4Q0FBSSxNQUFFLENBQUM7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzVHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1ByemVrYXp5d2FuaWVfemRhcnplbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFNob3AgZnJvbSAnLi9TaG9wJ1xuY29uc3QgQXBwID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiA8U2hvcCAvPjtcbn1cblxuLy8gY29uc3QgQXBwID0gKCkgPT4ge1xuLy8gICAgIHJldHVybiA8VG9Eb0xpc3QvPlxuLy8gfVxuLy9cbi8vIGNvbnN0IFRvRG9MaXN0ID0gKCkgPT4ge1xuLy9cbi8vICAgICBjb25zdCBbdGFza3NMaXN0LCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXG4vLyAgICAgICAgIHtpZDogMSwgdGl0bGU6IFwiWnJvYmnEhyB6YWt1cHlcIn0sXG4vLyAgICAgICAgIHtpZDogMiwgdGl0bGU6IFwiT2JlanJ6ZcSHIG5vd3kgc2V6b24gR3J5IG8gVHJvblwifSxcbi8vICAgICAgICAge2lkOiAzLCB0aXRsZTogXCJacm9iacSHIHphZGFuaWEgZG9tb3dlXCJ9XG4vLyAgICAgXSk7XG4vL1xuLy8gICAgIGNvbnN0IGhhbmRsZVRhc2tEb25lID0gaWQgPT4ge1xuLy8gICAgICAgICBzZXRUYXNrcyhwcmV2U3RhdGUgPT4ge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZS5maWx0ZXIodGFzayA9PiB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2suaWQgIT09IGlkO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH07XG4vL1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgIHt0YXNrc0xpc3QubWFwKHRhc2sgPT4gPFRvRG9JdGVtIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gb25Eb25lPXtoYW5kbGVUYXNrRG9uZX0vPil9XG4vLyAgICAgICAgIDwvdWw+XG4vLyAgICAgKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgVG9Eb0l0ZW0gPSAocHJvcHMpID0+IHtcbi8vICAgICBjb25zdCB7dGFzaywgb25Eb25lfSA9IHByb3BzO1xuLy8gICAgIGNvbnN0IGhhbmRsZURvbmVDbGljayA9ICgpID0+IHt6XG4vLyAgICAgICAgIGlmICh0eXBlb2Ygb25Eb25lID09PSAnZnVuY3Rpb24nKSB7XG4vLyAgICAgICAgICAgICBvbkRvbmUodGFzay5pZCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgICAgPGg0PlRoaXMgaXMgbXkgdGFzazoge3Rhc2sudGl0bGV9PC9oND5cbi8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRG9uZUNsaWNrfT5UYXNrIGRvbmU8L2J1dHRvbj5cbi8vICAgICAgICAgPC9saT5cbi8vICAgICApO1xuLy8gfTtcblxuLy8gYXBwLmpzXG5cbi8vIGltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuLy9cbi8vIGltcG9ydCBTaG9wIGZyb20gJy4vU2hvcCc7XG4vL1xuLy8gZnVuY3Rpb24gQXBwKCkge1xuLy8gICAgIHJldHVybiA8U2hvcCAvPjtcbi8vIH1cbi8vXG4vLyBSZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4vL1xuLy8gLy8gU2hvcC5qc1xuLy9cbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vXG4vLyBpbXBvcnQgU2hvcEl0ZW0gZnJvbSAnLi9TaG9wSXRlbSc7XG4vL1xuLy8gZnVuY3Rpb24gU2hvcCgpIHtcbi8vXG4vLyAgICAgY29uc3QgWyBjYXJ0LCBzZXRDYXJ0IF0gPSB1c2VTdGF0ZShbXSk7XG4vL1xuLy8gICAgIGNvbnN0IGFkZFRvQ2FydCA9IChpdGVtKSA9PiB7XG4vLyAgICAgICAgIHNldENhcnQocHJldkNhcnQgPT4gWy4uLnByZXZDYXJ0LCBpdGVtXSk7XG4vLyAgICAgfVxuLy9cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8PlxuLy8gICAgICAgICAgICAgPFNob3BJdGVtIHRpdGxlPVwiTWFjQm9vayBQcm9cIiBvbkJ1eT17YWRkVG9DYXJ0fSAvPlxuLy8gICAgICAgICAgICAgPFNob3BJdGVtIHRpdGxlPVwiRGVsbFwiIG9uQnV5PXthZGRUb0NhcnR9IC8+XG4vLyAgICAgICAgICAgICA8U2hvcEl0ZW0gdGl0bGU9XCJBc3VzXCIgb25CdXk9e2FkZFRvQ2FydH0gLz5cbi8vICAgICAgICAgICAgIDxoMT5Lb3N6eWs8L2gxPlxuLy8gICAgICAgICAgICAgeyBjYXJ0Lm1hcChpdGVtID0+IDxsaSBrZXk9e2l0ZW19PnsgaXRlbSB9PC9saT4pIH1cbi8vICAgICAgICAgPC8+XG4vLyAgICAgKVxuLy9cbi8vIH1cbi8vXG4vLyBleHBvcnQgZGVmYXVsdCBTaG9wO1xuLy9cbi8vIC8vIFNob3BJdGVtLmpzXG4vL1xuLy8gZnVuY3Rpb24gU2hvcEl0ZW0oKSB7XG4vL1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDw+XG4vLyAgICAgICAgICAgICA8aDE+eyBwcm9wcy50aXRsZSB9PC9oMT5cbi8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMub25CdXkocHJvcHMudGl0bGUpfT5LdXA8L2J1dHRvbj5cbi8vICAgICAgICAgPC8+XG4vLyAgICAgKVxuLy9cbi8vIH1cbi8vXG4vLyBleHBvcnQgZGVmYXVsdCBTaG9wO1xuLy9cbi8vXG4vLyBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbi8vIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG4vLyByb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRiZDk3MDdhNDljZjBlZmZkY2ViXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiU2hvcCIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9