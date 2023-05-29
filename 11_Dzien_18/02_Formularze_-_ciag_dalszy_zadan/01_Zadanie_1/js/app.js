// app.js

import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import useInput from "./hooks/useInput";

function PESELInput() {

    const [ pesel, setPesel ] = useInput(0);

    return (
        <div>
            <input type="number" {...setPesel} />
            <div style={{ height: '100px', width: `200px`, background: 'red' }}></div>
        </div>
    )
}

function App() {
    return <PESELInput />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);