import React from "react";

class AutoCounter extends React.Component {

    state = {
        count: 0
    }

    componentDidMount = () => {
        this.interval = setInterval(() => {
            console.log(`Updating Count:${this.state.count}`)
            this.setState({ count: this.state.count + 1 })
        }, 1000)
    }

    componentWillUnmount = () => {
        console.log('Clearing Interval')
        clearInterval(this.interval)
    }
    render() {
        return <>
            <h3>AutoCounter</h3>
            <h4>{this.state.count}</h4>
        </>
    }
}

export default AutoCounter;