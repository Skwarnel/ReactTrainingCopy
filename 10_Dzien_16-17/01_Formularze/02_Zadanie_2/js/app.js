import React from "react";
import { createRoot } from "react-dom/client";
import FakeAPI from "./data/fakeAPI";
import Form from './Form'

const App = () => {
    return <Form />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);