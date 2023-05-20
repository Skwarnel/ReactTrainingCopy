import React from "react";

class ShowUserClass extends React.Component {

    handleClick = () => {
        const { name, surname } = this.props;
        console.log(name, surname);
    }

    render() {
        return <button onClick={this.handleClick}>Dane użytkownika</button>;
    }

}