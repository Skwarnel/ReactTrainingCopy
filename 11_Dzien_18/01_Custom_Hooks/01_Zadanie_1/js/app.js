// app.js

import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import useInput from "./hooks/useInput";

function InteractiveDiv() {

    const [ elWidth, elInputOptions ] = useInput(0);

    return (
        <div>
            <input type="number" {...elInputOptions} />
            <div style={{ height: '100px', width: `${Number(elWidth)}px`, background: 'red' }}></div>
        </div>
    )
}

function App() {
    return <InteractiveDiv />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);