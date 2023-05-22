import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function ButtonCounter() {
    const [ counter, setCounter ] = useState(0);

    const handleCounter = () => {
        setCounter(prev => prev + 1);
    }

    return (
        <>
            <h1>{ counter }</h1>
            <ButtonToClick onHandleCounter={handleCounter} />
            <ButtonToClick onHandleCounter={handleCounter} />
        </>
    )
}

function ButtonToClick({ onHandleCounter }) {

    const handleClick = () => {
        if (typeof onHandleCounter === 'function') {
            onHandleCounter();
        }
    }

    return <button onClick={handleClick}>Click</button>;
}

function App() {
    return <ButtonCounter />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);