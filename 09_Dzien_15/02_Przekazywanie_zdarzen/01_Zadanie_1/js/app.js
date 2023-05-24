import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import ButtonCounter from "./ButtonCounter";
function App() {
    return <ButtonCounter />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);