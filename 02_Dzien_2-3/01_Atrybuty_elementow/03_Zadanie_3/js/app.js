import React from "react";
import { createRoot } from "react-dom/client";

const redDivStyle = {height: "100px", backgroundColor: 'red'};
const greenDivStyle = {height: '100px', backgroundColor: 'green'};
const blueDivStyle = {height: '100px', backgroundColor: 'blue'};

const redDiv = <div style={redDivStyle} />;
const greenDiv = <div style={greenDivStyle} />;
const blueDiv = <div style={blueDivStyle} />;

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <>
    {redDiv}
    {greenDiv}
    {blueDiv}
  </>
);
