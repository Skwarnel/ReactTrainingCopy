// CurrentDate.js

import React, {Component} from 'react';


class CurrentDate extends Component {

    state = {
        time: new Date().toString(),
    }

    updateTime = () => {
        this.setState({
            time: new Date().toString(),
        })
    }

    render() {
        return (
            <>
                <h1>Aktualny czas to:</h1>
                <p>{this.state.time}</p>
                <button onClick={this.updateTime}>Zaktualizuj czas</button>
            </>
        )
    }
}

export default CurrentDate;