import React, {Component, Fragment} from "react";
import {createRoot} from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

function App(props) {
    return <ShopItem title={data.title}></ShopItem>;
}

function ShopItem(props) {
    return <section>
        <header>
            <h1>{props.title}</h1>
            <img src="{image z props}"/>
        </header>
        <article>
            <p>description z props</p>
        </article>
        <footer>
            Cena: price z props zł
            <button>Kup!</button>
        </footer>
    </section>

}

// function ShopItem(props) {
//     return <section>
//         <ShopItemHeader>
//             {props.title}
//         </ShopItemHeader>
//         <ShopItemDescription>
//             {props.description}
//         </ShopItemDescription>a
//         <ShopItemPricing></ShopItemPricing>
//     </section>
// }
//
function ShopItemHeader(props) {
    return <h1>{props.children.title}</h1>
    // <img src={props.img}/>
}
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

const data = {
    title: "MacBook Pro",
    image: "https://bit.ly/2EEtduD",
    description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999
};

root.render(<App title={data.title} />);
