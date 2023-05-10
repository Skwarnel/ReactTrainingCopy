import React, {Fragment} from "react";
import { createRoot } from "react-dom/client";

import person from "./data/person"

const container = document.getElementById("app");
const root = createRoot(container);


root.render(<Fragment>
    <span>{person.title}</span>
    <span>{person.firstName}</span>
    <span>{person.lastName}</span>
    <span>{person.age}</span>
    </Fragment>);