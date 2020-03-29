import React, { Component } from 'react'
import {
    Modal,
    Button
}
    from 'react-bootstrap'


class Chronology extends Component {
    state = {
        show: false
    }
    handleClick = (e) => {
        this.setState({
            show: !this.state.show
        })
    }
    handleClose = (e) => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div style={{ height: "100%" }}>
                
                <i class="fas fa-filter" style={{ position: "relative", top: "96%", left: "98%" }} onClick={this.handleClick}></i>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Select the sensors</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input type="checkbox" />C01</span>
                            </div>     
                            <div className="col-sm-6">
                                <span><input type="checkbox" />P01</span>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input type="checkbox" />C02</span>
                            </div>     
                            <div className="col-sm-6">
                                <span><input type="checkbox" />P02</span>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input type="checkbox" />C03</span>
                            </div>     
                            <div className="col-sm-6">
                                <span><input type="checkbox" />P03</span>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input type="checkbox" />C04</span>
                            </div>     
                            <div className="col-sm-6">
                                <span><input type="checkbox" />P04</span>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input type="checkbox" />C05</span>
                            </div>     
                            <div className="col-sm-6">
                                <span><input type="checkbox" />P05</span>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input type="checkbox" />C06</span>
                            </div>     
                            <div className="col-sm-6">
                                <span><input type="checkbox" />P06</span>
                            </div>
                        </div>                    
                    </Modal.Body>
                </Modal>
            </div>

        )
    }
}
export default Chronology;