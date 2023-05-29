import React from "react";
import { createRoot } from "react-dom/client";

function PokemonData() {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect( () => {
        fetchPokemonData = async() => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');

        }
    })
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>Hello World!</h1>);
