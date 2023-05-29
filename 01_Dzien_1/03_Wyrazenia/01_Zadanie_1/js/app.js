import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const numberA = Number(prompt('Podaj liczbę A:'));
const numberB = Number(prompt('Podaj liczbę B:'));

root.render(<h2>Suma tych dwóch liczb to: { numberA + numberB }</h2>);
