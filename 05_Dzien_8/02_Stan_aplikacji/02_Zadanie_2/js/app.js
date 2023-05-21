// app.js

import React, {Component} from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

import CurrentDate from './CurrentDate';

function App() {
    return <CurrentDate />;
}

root.render(<App/>);