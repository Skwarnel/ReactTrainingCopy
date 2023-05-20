import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return <EventsTest />
}

function EventsTest() {
    const styles = {
        width: '500px',
        height: '100px',
        borderStyle: 'solid',
        backgroundColor: 'red'
    }
    const mouseClick = () => {
        console.log("Clicked! Did you hear that?");
        console.log(styles);
        // styles.backgroundColor = 'green';
    }

    const mouseEnter = () => {
        console.log("Have you seen that? Mouse entered the room");
    }

    const mouseLeave = () => {
        console.log("Mouse hit the road");
    }

    return (
        <div>
            <p style={styles} onClick={mouseClick} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                That's me
            </p>
        </div>
    )
}

root.render(<App />);
