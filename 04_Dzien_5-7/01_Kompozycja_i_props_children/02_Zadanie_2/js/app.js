// import React, {Component, Fragment} from "react";
// import {createRoot} from "react-dom/client";
//
// const container = document.getElementById("app");
// const root = createRoot(container);
//
// function ShopItem(props) {
//     return <section>
//         <ShoptItemHeader>
//             {props.title}
//         </ShoptItemHeader>
//         <ShopItemDescription>
//             {props.description}
//         </ShopItemDescription>a
//         <ShopItemPricing></ShopItemPricing>
//     </section>
// }
//
// function ShoptItemHeader(props) {
//     return <h1>{props.children.title}</h1>
//     // <img src={props.img}/>
// }
//
// function ShopItemDescription(props) {
//     return <article>
//         <p>{props.children.desc}</p>
//     </article>
// }
//
// function ShopItemPricing(data) {
//     return <footer>
//         Cena: {data.price} zł
//         <button>Kup!</button>
//     </footer>;
// }
//
// const data = {
//     title: "MacBook Pro",
//     image: "https://bit.ly/2EEtduD",
//     description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
//     price: 9999
// };
//
// root.render(<ShopItem />);
