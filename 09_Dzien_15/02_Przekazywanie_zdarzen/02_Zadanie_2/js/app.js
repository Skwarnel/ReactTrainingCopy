import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import Shop from './Shop'
const App = function () {
    return <Shop />;
}

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
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);