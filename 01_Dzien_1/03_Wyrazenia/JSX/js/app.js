import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const myAge = 45;
const myName = 'Maryann';
const student = {};
const fruits = [];

let myJSX = <strong id="abc">Hello</strong>;

    if (myAge > 100) {
        myJSX = 'You are old';
    } else {
        myJSX = "You are young";
    }

root.render(<h2>{ myJSX }</h2>);
