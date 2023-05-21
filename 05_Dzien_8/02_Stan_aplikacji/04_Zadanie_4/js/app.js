import React from "react";
import { createRoot } from "react-dom/client";
import MagicBox from "./MagicBox";

const container = document.getElementById("app");
const root = createRoot(container);

function App() {
    return <MagicBox />
}

root.render(<App />);
