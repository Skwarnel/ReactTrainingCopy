import React from "react";
import { createRoot } from "react-dom/client";

import animals from "./data/animals";

const container = document.getElementById("app");
const root = createRoot(container);


root.render(<div><h1>Mamy {animals.length} zwierząt.</h1>
<h2>{animals.join(", ")}</h2></div>);
