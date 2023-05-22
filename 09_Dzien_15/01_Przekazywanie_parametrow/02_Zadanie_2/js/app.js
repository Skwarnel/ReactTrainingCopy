import React, { Component, useState } from "react";
import { createRoot } from "react-dom/client";
import Box from "./Box"


function App() {
    return <Box />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App  />);