import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <HoverEvent />
    )
}

const HoverEvent = () => {
    const eventHandlerMouseEnter = () => {
        console.log("Mouse enetered the button. Code powered by GPS");
    }

    function eventHandlerMouseLeave() {
        console.log("Mouse leaved the button. Code powered by GPS");
    }

    return (
        <div>
            <button onMouseEnter={eventHandlerMouseEnter} onMouseLeave={eventHandlerMouseLeave}>Come here and leave it</button>
        </div>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
