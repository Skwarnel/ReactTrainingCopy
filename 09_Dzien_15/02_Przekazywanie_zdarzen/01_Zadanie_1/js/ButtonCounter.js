import React, {useState} from "react";
import ButtonToClick from "./ButtonToClick";
function ButtonCounter() {
    const [ counter, setCounter ] = useState(0);

    const handleCounter = () => {
        setCounter(prev => prev + 1);
    }

    return (
        <>
            <h1>{ counter }</h1>
            <ButtonToClick onHandleCounter={handleCounter} />
            <ButtonToClick onHandleCounter={handleCounter} />
        </>
    )
}

export default ButtonCounter;