import React, { Component } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

function CurrencyConverter({ from, to, value, rate }) {
    return (
        <div>
            <strong>{ value.toFixed(2) }</strong> { from } {'=>'} <strong>{ (value * rate).toFixed(2) }</strong> { to }
        </div>
    )
}

function App() {
    return (
        <>
            <CurrencyConverter from="PLN" to="EUR" value={100} rate={1.12275} />
            <CurrencyConverter from="NOK" to="EUR" value={200} rate={0.12275} />
            <CurrencyConverter from="USD" to="EUR" value={300} rate={3.12275} />
        </>
    )
}

root.render(
    <App />
);