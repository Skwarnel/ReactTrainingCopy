import React, {Fragment} from "react";
import {createRoot} from "react-dom/client";

import people from "./data/people";


const container = document.getElementById("app");
const root = createRoot(container);

const list = (
    <div>
        {
            people.map(elem => {
                return <div className="person" key={elem.id}>
                    <img src={elem.avatar}/>
                    <div className="info">
                        <h1>{elem.title} {elem.name} {elem.surname}</h1>
                        <p>{elem.bio}</p>
                    </div>
                </div>
            })
        }
    </div>
);


root.render(<h1>{list}</h1>);