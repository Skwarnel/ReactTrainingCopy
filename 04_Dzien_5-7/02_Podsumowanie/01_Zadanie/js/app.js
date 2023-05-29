import React from "react";
import {createRoot} from "react-dom/client";
import products from './data/products';

const App = () => {
    return <Receipt table={products}/>;
}

const Receipt = (props) => {
    const {table} = props;
    return (
        <div>
            <table className="table">
                <tr>
                    <th>Nazwa</th>
                    <th>Cena</th>
                    <th>Ilość</th>
                    <th>Łączna cena</th>
                </tr>
                <td>{table.map((item, index) => {
                    return (
                        <tr>{item.name}</tr>
                    )
                })}
                    <tr>RAZEM</tr>
                </td>

                <td>{table.map((item, index) => {
                    return (
                        <tr>{item.single_price}</tr>
                    )
                })}
                    <tr>RAZEM</tr>
                </td>
                <td>{table.map((item, index) => {
                    return (
                        <tr>{item.qty}</tr>
                    )
                })}
                    <tr>RAZEM</tr>
                </td>
                <td>{table.map((item, index) => {
                    return (
                        <tr>{item.single_price * item.qty}</tr>
                    )
                })}
                    <tr>RAZEM</tr>
                </td>
            </table>

        </div>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
