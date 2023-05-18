import React, { Component } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

// function Hello(props) {
//   return <h1>Hello, { props.name } { props.surname }</h1>;
// }

class Hello extends Component {
    render() {
        return <h1>Hello, { this.props.name } { this.props.surname }</h1>;
    }
}


root.render(
    <Hello name="Jan" surname="Kowalski" />
);