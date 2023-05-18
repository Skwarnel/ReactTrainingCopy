import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);


function Buttons() {

    const handleFirstClick = () => 

    return (
        <>
            <button onClick={handleFirstClick}>Klik!</button>
            <button>Klik!</button>
            <button>Klik!</button>
        </>
    )
}