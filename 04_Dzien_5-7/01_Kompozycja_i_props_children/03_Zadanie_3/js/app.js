import React, {Component, Fragment} from "react";
import {createRoot} from "react-dom/client";
import people from "../../../../02_Dzien_2-3/02_Zagniezdzanie_i_klucze/01_Zadanie_1/js/data/people";

const container = document.getElementById("app");
const root = createRoot(container);

function App(props) {
    return <ShopList data={data} />;
}

function ShopList(props) {
    const {data} = props;
    return (
        <ul>
            {
                data.map(element => {
                    return <li key={element.title}>{element.title}
                    <img src={element.image} />
                    </li>
                })
            }
        </ul>
    )
}

// function ShopItemHeader() {
//     return (
//         <header>
//             <h1>{data.title}</h1>
//             <img src={data.image} width='350px'/>
//         </header>
//     )
// }
//
// function ShopItemDescription() {
//     return (
//         <article>
//             <p>{data.description}</p>
//         </article>
//     )
// }
//
// function ShopItemPricing() {
//     return (
//         <footer>
//             Cena: {data.price} zł
//             <button>Kup!</button>
//         </footer>
//     )
// }

const data = [
        {
            title: "Mysz komputerowa",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
        },
        {
            title: "Klawiatura",
            image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
        },
        {
            title: "Laptop programisty",
            image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
        }
    ]
;

root.render(
    <App data={data}/>
);
