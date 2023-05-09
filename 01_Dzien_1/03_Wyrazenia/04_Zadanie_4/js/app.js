import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const numberA = Number(prompt('Podaj pierwszą liczbę: '));
const numberB = Number(prompt('Podaj drugą liczbę: '));
const algebraicOperation = String(prompt('Wybierz matematyczne działanie do wykonania (+ - * : )'));

if (algebraicOperation === "+") {
    root.render(<h1>Wynik to: {numberA + numberB}</h1>);
} else if (algebraicOperation === "-") {
    root.render(<h2>Wynik to: {numberA - numberB}</h2>);
} else if (algebraicOperation === "*") {
    root.render(<h3>Wynik to: {numberA * numberB}</h3>);
} else if (algebraicOperation === ":") {
    root.render(<h4>Wynik to: {numberA / numberB}</h4>);
} else {
    root.render(<h5>Wprowadziłeś błędne dane</h5>);
}
