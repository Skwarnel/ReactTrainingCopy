import React from 'react';
import {createRoot} from "react-dom/client";

const ShopItem = function (props) {
    const {item, onBuy} = props;

    const handleBuy = (item) => {
        if (typeof onBuy === 'function') {
            onBuy(item);
        }
    }

    return (
        <li>
            <h3>{item.title}</h3>
            <button onClick={() => {handleBuy(item)}}>Kup natychmiast</button>
        </li>
    );
}

export default ShopItem;