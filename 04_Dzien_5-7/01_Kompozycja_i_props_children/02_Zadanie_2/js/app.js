import React, {Component, Fragment} from "react";
import {createRoot} from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

function App(props) {
    const {product} = props;
    return <ShopItem product={product} />;
}

function ShopItem(props) {
    const {product} = props;
    return (
        <section>
            <ShopItemHeader title={product.title} image={product.image} />
            <ShopItemDescription desc={product.description} />
            <ShopItemPricing price={product.price} />
        </section>
    )
}

function ShopItemHeader(props) {
    const {title, image} = props;
    return (
        <header>
            <h1>{title}</h1>
            <img src={image} width='350px'/>
        </header>
    )
}

function ShopItemDescription(props) {
    const {desc} = props;
    return (
        <article>
            <p>{desc}</p>
        </article>
    )
}

function ShopItemPricing(props) {
    const {price} = props;
    return (
        <footer>
            <p>Cena: {price} zł</p>
            <button>Kup!</button>
        </footer>
    )
}

const data = {
    title: "MacBook Pro",
    image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999
};

root.render(
    <App product={data} />
);