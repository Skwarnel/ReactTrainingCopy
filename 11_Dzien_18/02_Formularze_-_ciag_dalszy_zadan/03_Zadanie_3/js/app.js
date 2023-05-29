import React, {useState} from "react";
import {createRoot} from "react-dom";

const App = () => {
    return <DynamicLego/>;
}

const DynamicLego = () => {
    const [bricks, setBricks] = useState(0);

    return (
        <>
            <form>
                <input type="number" value={bricks} onChange={e => setBricks(e.target.value)}/>
            </form>
            <ul>
                {
                    [...Array(Number(bricks)).keys()].map(lego => {
                      return <li key={lego} style={{background: 'red', height: '50px', width:`${(lego + 1) * 50}px`}}></li>
                    })
                }
            </ul>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
