import React, { Component } from 'react'
import CustomDatePicker from './customedatepicker'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/show_actions'

class Loading extends Component {
    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })
    handleClick = () =>{
        this.props.onShow(this.props.show_item,this.state.date)
    }
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <div>
                   
                    <CustomDatePicker />
                </div>
                <p>Load</p>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onShow: (show_item, date) => dispatch(actions.show_heatmap(show_item, date))
    }
}
const mapStateToProps = (state) => {
    return {
        show_item: state.show_item,
        maxDate:state.maxDate
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Loading);
