import React from "react";
import { createRoot } from "react-dom/client";

function ShowUserFunc({ name, surname }) {

    const handleClick = () => {
        console.log(name, surname);
    }

    return <button onClick={handleClick}>Dane użytkownika</button>;

}

class ShowUserClass extends React.Component {

    handleClick = () => {
        const { name, surname } = this.props;
        console.log(name, surname);
    }

    render() {
        return <button onClick={this.handleClick}>Dane użytkownika</button>;
    }

}

function App() {
    return (
        <>
            <ShowUserFunc name="John" surname="Smith" />
            <ShowUserClass name="John" surname="Smith" />
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);