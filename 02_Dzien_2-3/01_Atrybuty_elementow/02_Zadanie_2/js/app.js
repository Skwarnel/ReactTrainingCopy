import React from "react";
import { createRoot } from "react-dom/client";

function genNumber() {
  return Math.round(Math.random() * 9 + 1);
}

const container = document.getElementById("app");
const root = createRoot(container);

const numberA = genNumber();
const numberB = genNumber();
const sum = numberA + numberB;

const result = Number(prompt("Jaki jest wynik dodawania tych dwóch liczb?" +
    numberA + "oraz " + numberB));

function checkResult(num) {
  if (result === sum) {
    root.render(<div style={{backgroundColor: 'green'}}>
      <h1>Pierwsza liczba to: {numberA}</h1>
      <h1>A druga liczba to: {numberB}</h1>
      <h3>Udzieliłeś poprawnej odpowiedzi</h3>
    </div>);

  } else {
    root.render(<div style={{backgroundColor: 'red'}}>
      <h1>Pierwsza liczba to: {numberA}</h1>
      <h1>A druga liczba to: {numberB}</h1>
      <h3>Twoja odpowiedź jest niestety niepoprawna</h3>
    </div>);

  }
}

checkResult(result);


