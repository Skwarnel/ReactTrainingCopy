import React, {useState} from "react";

function CrazyDiv() {
    const style0 = { width: '100px', height: '100px', background: 'red', position: 'absolute'};
    // const style1 = { width: '200px', height: '200px', background: 'green', top: 1000, left: 600};


    const [ crazyDivStyle, setStyle ] = useState(style0);


    const handleHover = () => {
        const topValue = Math.floor(Math.random() * (600 - 300) + 301);
        const leftValue = Math.floor(Math.random() * 1000 + 1);
        console.log(topValue);
        console.log(leftValue);
        setStyle({...style0, width: '200px', height: '200px', background: 'green', top: topValue, left: leftValue});
    }
    // const handleClick = () => {
    //   setBulbState(prev => !prev);
    // }
    // () => handleHover(0, 1000); // przedział 0 - 1000
    // () => handleHover(300, 600); // przedział 300 - 600
    // onMouseLeave={() => setStyle(style0)}

    return (
        <div style={crazyDivStyle} onMouseEnter={handleHover} >
            My style changes on mouse enter
        </div>
    )
}

export default CrazyDiv;