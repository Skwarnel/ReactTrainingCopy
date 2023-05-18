import React, { Component } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

// function Search() {
//   return (
//     <div>
//       <input />
//       <button>Wyszukaj</button>
//     </div>
//   )
// }

class Search extends Component {
    render() {
        return (
            <div>
                <input />
                <button>Wyszukaj</button>
            </div>
        )
    }
}

root.render(
    <Search />
);