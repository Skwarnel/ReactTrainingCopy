import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import ShopItem from "./ShopItem";

const Shop = function () {

    const [shopItemList, setShopItem] = useState([
        {id: 1, title: 'MacBook Pro'},
        {id: 2, title: 'Dell X5500'},
        {id: 3, title: 'Asus NT6000'},
        {id: 4, title: 'Dell Carmen'},
        {id: 5, title: 'Pontiac'}
    ]);

    const [cart, setCart] = useState([]);

    const productBuy = item => {
        console.log(item);
        setCart(prevCart => [...prevCart, item]);
        // console.log("Działam");
    }

    return (
        <div>
            <h1>Tutaj jest Shop a poniżej shop item</h1>
            <ul>
                {shopItemList.map(item => {
                        return <ShopItem key={item.id} item={item} onBuy={productBuy}/>
                    }
                )}
            </ul>
            <div>
                You have bought:
                <ul>
                    {cart.map(item => {
                            return <li key={item.id} item={item}>{item.title}</li>
                        }
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Shop;