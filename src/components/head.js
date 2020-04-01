import React, { Component, useState } from 'react'
import loc_icon from '../assets/location_icon.ico'
import siren_icon from '../assets/emergency.ico'
import gear_icon from '../assets/gear.ico'
import { Navbar, Nav, NavDropdown, Form, Modal, ModalBody, ModalFooter, Button } from 'react-bootstrap'
import {connect} from 'react-redux'
import * as actions from './../store/actions/show_actions'


function Head(props) {

    const [file,setFile] = useState(null);
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [buildingName,setbuildingName] = useState('Select Building');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const onChangeHandler = (e) => {
        setUsername(e.target.value)
    }
    const onDropdownChange =(e) =>{
        setbuildingName(e.target.text)
    }
    const onFileChoose = (e) => {
        let file;
        file = e.target.files[0]
        setFile(file)
    }
    console.log(file)
    const fileUpload = () => {
        
        let formData = new FormData()
        formData.append('file',file)
        console.log(formData.get('file'))
        props.onFileUpload(formData)
    }
    return (
        <div className="Header">
            <Navbar expand="lg" bg="white" variant="white" style={{display:"block  !important"}}>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">
                            <div className="row">
                                <img src={loc_icon} style={{ width: "30px" }} />
                                <NavDropdown title={buildingName} >
                                    <NavDropdown.Item onClick={onDropdownChange}>Quebec Warehouse</NavDropdown.Item>
                                    <NavDropdown.Item onClick={onDropdownChange}>Levis Distribution Center</NavDropdown.Item>
                                    <NavDropdown.Item onClick={onDropdownChange}>Beauce Factory</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="#">
                            User: {username}
                            </Nav.Link>
                        <Nav.Link href="#">
                            <img src={gear_icon} style={{ width: "30px" }} onClick={handleShow} />
                        </Nav.Link>
                        <Nav.Link href="#">
                            <img src={siren_icon} style={{ width: "30px" }} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>Name: <input type="text" onChange={onChangeHandler} value={username} ></input></Modal.Body>
                <Modal.Footer>
                    <div>
                        <input id="fileButton" type="file" onChange={onFileChoose}/>
                        <Button variant="secondary" onClick={fileUpload}>
                         <i class="fa fa-upload" aria-hidden="true"></i>
                        </Button>
                        
                    </div>

                </Modal.Footer>
            </Modal>
        </div >

    )
}

const mapDispatchToProps = dispatch => {
    return {
        onFileUpload:(formData) => dispatch(actions.file_upload(formData))
    }
}
export default connect(null,mapDispatchToProps)(Head)