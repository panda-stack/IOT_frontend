import React,{Component} from 'react'
import DateTimePicker from 'react-datetime-picker';


class Capacity extends Component{
    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })
    render(){
        return(
            <div style={{ textAlign: "center" }}>
                <div>
                   
                    <DateTimePicker
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>
                <p>Capacity</p>
            </div>
        )
    }
}
export default Capacity;