import React from "react";
import ReactDOM from "react-dom";

const LikeBox = (props) => {
    return (
        <div>
            <span>Licznik: {props.counter}</span>
            <button>Lubię to</button>
        </div>
    )
}

// class LikeBox extends React.Component {
//     render() {
//         return (
//             <div>
//                 <span>Licznik: 100</span>
//                 <button>Lubię to</button>
//             </div>
//         )
//     }
// }

ReactDOM.render(
    <LikeBox counter={123.5} />,
    document.getElementById("app")
);