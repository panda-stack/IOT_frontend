import React, { Component } from 'react'

import { connect } from 'react-redux'


class CustomDatePicker extends Component {
    state = {
        currentTime: '',
        maxDate: '',
        disable:false,
    }
    componentDidMount() {
        this.setState({
            maxDate: this.props.maxDate,
            currentTime: this.props.maxDate
        })
    }
    decreaseTime = (originTime) => {
        var timeStamp = new Date(originTime).getTime() - 3600000 * 24
        var a = new Date(timeStamp)
        var year = a.getFullYear()
        var month = a.getMonth() + 1;
        var day = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();

        var time = year + '-' + month + '-' + day + ' ' + hour + ':' + min

        this.setState({
            currentTime: time
        })
    }
    increaseTime = (originTime) => {
        if (new Date(originTime) >= new Date(this.state.maxDate)) {
            alert("Not available Date");
            this.setState({
                currentTime:this.props.maxDate,
                disable:true
            })
        }
        else {
            var timeStamp = new Date(originTime).getTime() + 3600000 * 24
            var a = new Date(timeStamp)
            var year = a.getFullYear()
            var month = a.getMonth() + 1;
            var day = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();

            var time = year + '-' + month + '-' + day + ' ' + hour + ':' + min

            this.setState({
                currentTime: time
            })
        }

    }
    onClickHandleLeft = (e) => {
        this.decreaseTime(this.state.currentTime)
    }
    onClickHandleRight = (e) => {
        this.increaseTime(this.state.currentTime)
    }
    render() {
        return (
            <div className="DatePicker">

                <i class="fas fa-caret-left" style={{ fontSize: "2vw" }} onClick={this.onClickHandleLeft}></i>
                <input type="text" name="time" className="date-input" value={this.state.currentTime}></input>
                <i class="fas fa-caret-right" disabled = {this.state.disable}   style={{ fontSize: "2vw" }} onClick={this.onClickHandleRight}></i>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    debugger
    return {
        maxDate: state.maxDate
    }
}
export default connect(mapStateToProps, null)(CustomDatePicker);