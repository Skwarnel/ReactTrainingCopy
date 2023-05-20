import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <HoverEvent />
    )
}

const HoverEvent = () => {
    const eventHandler = () => {
        console.log("Mouse enetered the button. Code powered by GPS");
    }

    return (
        <div>
            <button onMouseEnter={eventHandler}>Come here</button>
        </div>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
