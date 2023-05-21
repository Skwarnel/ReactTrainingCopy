import React, {Component} from "react";

function genNumber() {
    // return Math.round(Math.random() * 9 + 1);
    return Math.floor(Math.random() * 900 + 100);
}

class RandomNumbers extends Component {
    state = {
        tab: [],
    }

    randomHandler = () => {
        const number = genNumber();
        const tab = [...this.state.tab]
        tab.push(number);
        this.setState({
            tab,
        });
        console.log(this.state);
    }

    render() {
        return (

            <div>
                <button onClick={this.randomHandler}>Wylosuj liczbę</button>
                {this.state.tab.map( (element, index) => {
                    return <li key={index}>{element}</li>
                })}
            </div>
        )
    }
}

export default RandomNumbers;
