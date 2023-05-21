import React, {Component} from "react";
import {createRoot} from "react-dom/client";

// class MagicBox extends Component {
//     state = {
//         color: '#000',
//     }
//
//     newColor = () => {
//         const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//         this.setState({
//             color: newColor,
//         });
//     }
//
//
//     styles = {width:"200px", height: "200px", backgroundColor: this.state.color};
//
//     colorChange = () => {
//         const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//         this.setState({
//             color: newColor,
//         });
//         console.log("Zmieniam kolory");
//     }
//     render() {
//
//         return <div style={this.styles}>
//             <h1 onMouseEnter={this.colorChange} style={this.styles}>Jestem i działam</h1>
//         </div>
//     }
// }

class MagicBox extends Component {
    state = {
        color: '#000',
    }

    generateColor = () => {
        this.setState({
            color: '#' + Math.floor(Math.random()*16777215).toString(16),
        })
    }

    render() {
        return <div onMouseEnter={this.generateColor} style={{ width: '200px', height: '200px', background: this.state.color }}></div>
    }
}

// const MagicBox = () =>  {
//     return <div>
//         <h1>jestem</h1>
//     </div>
// };

export default MagicBox;