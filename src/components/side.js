import React,{Component} from 'react';
import {Button, Card} from 'react-bootstrap'

class SideBar extends Component {
    render(){
        return(
            <div className="Sidebar">
                <div>
                <Button variant="outline-secondary">Capacity</Button>
                </div>
                <div>
                <Button variant="outline-secondary">Chargement</Button>
                </div>
                <div>
                <Button variant="outline-secondary">Chronology</Button>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn-weather"><i className="fa fa-sun" ></i></button>
                    <button type="button" className="btn-weather"><i className="fa fa-cloud-sun" ></i></button>
                    <button type="button" className="btn-weather"><i className="fa fa-cloud" ></i></button>
                </div>
            </div>
           
        )
    }
}
export default SideBar