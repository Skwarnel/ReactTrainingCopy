import React, {useState} from "react";

function Box() {
    const style0 = { width: '500px', height: '200px', background: 'green'};
    const style1 = {width: '200px', height: '300px', background: 'orange'};
    const style2 = {width: '100px', height: '700px', background: 'blue'};


    const [ boxStyle, setBoxStyle ] = useState(style0);

    // const handleClick = () => {
    //   setBulbState(prev => !prev);
    // }


    return (
        <div style={boxStyle}>
            <button onClick={() => setBoxStyle(style1)}>
                Orange
            </button>

            <button onClick={() => setBoxStyle(style2)}>
                Blue
            </button>

            <button onClick={() => setBoxStyle(style0)}>
                Green
            </button>
        </div>
    )
}

export default Box;