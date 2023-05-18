import React, { Component } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

// function AddNumbers(props) {
//     const {numberA, numberB} = props;
//   return <h1>{numberA + numberB}</h1>;
// }

class AddNumbers extends Component {
    render() {
        const {numberA, numberB} = this.props;
        return <h1>{numberA + numberB * 2}</h1>;
    }
}


root.render(
    <AddNumbers numberA={5.6} numberB={9.4} />
);