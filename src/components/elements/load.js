import React, { Component } from 'react'
import DateTimePicker from 'react-datetime-picker';

class Loading extends Component {
    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <div>
                   
                    <DateTimePicker
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>
                <p>Load</p>
            </div>
        )
    }
}
export default Loading;