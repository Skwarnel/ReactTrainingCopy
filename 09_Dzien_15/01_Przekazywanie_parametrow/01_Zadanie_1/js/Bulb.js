import React, {useState} from "react";

function Bulb() {

    const [ bulbState, setBulbState ] = useState(false);

    // const handleClick = () => {
    //   setBulbState(prev => !prev);
    // }

    return (
        <div style={{ width: '100px', height: '100px', background: bulbState ? 'yellow' : 'white' }}>
            {/* <button onClick={handleClick}> */}
            <button onClick={() => setBulbState(!bulbState)}>
                {
                    bulbState ? 'Off' : 'On'
                }
            </button>
        </div>
    )
}

export default Bulb;