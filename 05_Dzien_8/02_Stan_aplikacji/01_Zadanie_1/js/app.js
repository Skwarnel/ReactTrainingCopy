import React, { Component } from "react";
import { createRoot } from "react-dom/client";

class TextTyper extends Component {

    state = {
        text: this.props.text[0],
        counter: 1,
    }

    handleNext = () => {

        this.setState(prev => {
            if (this.state.counter < this.props.text.length) {
                return {
                    counter: prev.counter + 1,
                }
            }
        }, () => {
            this.setState({
                text: this.props.text.slice(0, this.state.counter),
            });
        });

        // this.setState(prev => {
        //   return {
        //     counter: prev.counter + 1,
        //     text: this.props.text.slice(0, prev.counter + 1),
        //   }
        // });
    }

    handlePrev = () => {

        this.setState(prev => {
            if (this.state.counter > 0) {
                return {
                    counter: prev.counter - 1,
                }
            }
        }, () => {
            this.setState({
                text: this.props.text.slice(0, this.state.counter),
            });
        });

    }

    render() {
        return (
            <>
                <h1>{this.state.text}</h1>
                <button onClick={this.handleNext}>+</button>
                <button onClick={this.handlePrev}>-</button>
            </>
        )
    }

}

function App() {
    return <TextTyper text="Witaj!" />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);