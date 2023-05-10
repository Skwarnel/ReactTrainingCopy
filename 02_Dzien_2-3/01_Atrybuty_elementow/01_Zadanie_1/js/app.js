import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const imageUrl = "https://fer-api.coderslab.pl/assets/pexels-photo-4974914.jpeg";
const tag = <img src={imageUrl}/>;


root.render(<h1>Hello, {tag}</h1>);
