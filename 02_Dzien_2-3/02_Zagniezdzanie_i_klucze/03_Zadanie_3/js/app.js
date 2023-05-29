import React, {Fragment} from "react";
import {createRoot} from "react-dom/client";

import people from "./data/people";


const container = document.getElementById("app");
const root = createRoot(container);

const list = (
    <>
        <ul>
        {
            people.map(elem => {
                return <li className="person" key={elem.id}>
                    <img src={elem.avatar}/>
                    <div className="info">
                        <h1>{elem.title} {elem.name} {elem.surname}</h1>
                        <p>{elem.bio}</p>
                    </div>
                </li>
            })
        }
        </ul>
    </>
);


root.render(<h1>{list}</h1>);