class CurrentDate extends Component {

    state = {
        time: new Date().toString(),
    }

    updateDate = () => {
        this.setState({
            time: new Date().toString(),
        })
    }

    render() {
        return (
            <>
                <date>{ this.state.time }</date>
                <button onClick={this.updateDate}>Zaktualizuj datę</button>
            </>
        )
    }
}