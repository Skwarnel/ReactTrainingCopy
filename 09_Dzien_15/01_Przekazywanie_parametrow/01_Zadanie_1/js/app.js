import React, { Component, useState } from "react";
import { createRoot } from "react-dom/client";
import Bulb from "./Bulb"


function App() {
    return <Bulb />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App  />);