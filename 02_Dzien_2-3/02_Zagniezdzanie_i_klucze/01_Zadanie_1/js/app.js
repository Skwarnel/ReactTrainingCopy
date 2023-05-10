import React from "react";
import { createRoot } from "react-dom/client";

import people from "./data/people";

const container = document.getElementById("app");
const root = createRoot(container);
const list2 = (
    <ul>
        {
            people.map(element => {
                return <li key={element.id}>{element.title + " " + element.name + " " + element.surname}</li>
            })
        }
    </ul>
);

root.render(<h1>{list2}</h1>);
