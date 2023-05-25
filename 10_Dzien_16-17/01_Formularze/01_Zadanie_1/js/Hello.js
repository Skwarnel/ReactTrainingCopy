import React, {Component} from 'react';

class Hello extends Component {
    state = {
        name: "You"
    }

    handleNameChange = e => {
        this.setState({
            [e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(`your name is ${this.state.name}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>Imię i nazwisko:
                <h1>Hello {this.state.name}</h1>
                <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
            </label>
            <input type="submit" value="Wyślij"/>
        </form>
        )
    }
}

export default Hello;
