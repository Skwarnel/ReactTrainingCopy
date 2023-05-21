import React, {Component} from "react";

class MagicBox extends Component {
    state = {
        color: '#000',
    }
    generateColor = () => {
        const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.setState({
            color: newColor,
        });
    }

    render() {
        return (
            <div  onMouseEnter={this.generateColor} style={{ width: '200px', height: '200px', background: this.state.color}}>
        <h1>Jestem i działam</h1>
        </div>
        )
    }
}



// const MagicBox = () =>  {
//     return <div>
//         <h1>jestem</h1>
//     </div>
// };

export default MagicBox;