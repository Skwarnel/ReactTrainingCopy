import React from "react";

function ButtonToClick({ onHandleCounter }) {

    const handleClick = () => {
        if (typeof onHandleCounter === 'function') {
            onHandleCounter();
        }
    }

    return <button onClick={handleClick}>Click</button>;
}

export default ButtonToClick;