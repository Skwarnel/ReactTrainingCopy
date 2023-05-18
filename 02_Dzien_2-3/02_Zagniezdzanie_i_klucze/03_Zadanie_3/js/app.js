import React, {Fragment} from "react";
import {createRoot} from "react-dom/client";

import people from "./data/people";


const container = document.getElementById("app");
const root = createRoot(container);

root.render(
    <div className="person">
        <img src={people.avatar}/>
        <div className="info">
            <h1>{people.id} {people.title} {people.name} {people.surname}</h1>
            <p>{people.bio}</p>
        </div>
    </div>
);

