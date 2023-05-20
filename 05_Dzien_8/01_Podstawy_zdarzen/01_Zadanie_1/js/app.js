import React from "react";
import { createRoot } from "react-dom/client";

function Buttons() {

    const handleFirstClick = () => {
        console.log('Pierwszy przycisk kliknięty');
    }

    const handleSecondClick = () => {
        const numberA = Number(prompt('Podaj liczbę A:'));
        const numberB = Number(prompt('Podaj liczbę B:'));

        console.log(numberA ** numberB); // Math.pow
    }

    const handleThirdClick = () => {
        console.log(window.innerWidth, window.innerHeight);
    }

    return (
        <>
            <button onClick={handleFirstClick}>Klik!</button>
            <button onClick={handleSecondClick}>Klik!</button>
            <button onClick={handleThirdClick}>Klik!</button>
        </>
    )

}

function App() {
    return <Buttons />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);