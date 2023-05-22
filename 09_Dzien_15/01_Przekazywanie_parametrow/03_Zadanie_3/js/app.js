import React, { Component, useState } from "react";
import { createRoot } from "react-dom/client";
import CrazyDiv from "./CrazyDiv"


function App() {
    return <CrazyDiv />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App  />);