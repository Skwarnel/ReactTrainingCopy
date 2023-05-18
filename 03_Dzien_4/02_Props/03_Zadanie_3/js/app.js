import React, { Component } from "react";
import ReactDOM from "react-dom";

const Sum = (props) => {
    return <h1>{props.numbers.reduce((prev, next) =>
    prev + next) }</h1>

}

const tab = [3, 5, 7, 8, 2, 1, 4, 98];

ReactDOM.render(
    <Sum numbers={tab}/>,
    document.getElementById("app")
);