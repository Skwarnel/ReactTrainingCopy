import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const birthYear = Number(prompt('Jestem Wróżką Zębuszką, przepowiadam przyszłość. Podaj rok urodzenia a ja Ci powiem ile lat będziesz miał w przyszłym roku'))


root.render(<h1>Za rok będziesz miał/miała { new Date().getFullYear() - birthYear + 1} lat</h1>);
