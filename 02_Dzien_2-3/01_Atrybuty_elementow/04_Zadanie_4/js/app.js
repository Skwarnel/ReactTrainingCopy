import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const answer = String(prompt('Jaki kolor ramki chcesz zobaczyć?'));
const allowedAnswers = ['red', 'green', 'blue'];
let color;
let result = false;

for (let i = 0; i < allowedAnswers.length; i++) {
    if (allowedAnswers[i] === answer) {
        result = true;
        color = allowedAnswers[i];
    }
}

const style = {width: '100px', height: '100px', borderWidth: '5px', borderStyle: 'solid',
borderColor: color};

if (result) {
    root.render(<h1 style={style}>Udzieliłaś poprawnej odpowiedzi</h1>);
} else {
    root.render(<h1>Przykro nam :( nie mamy takiego koloru w ofercie</h1>);
}


