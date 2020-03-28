import React, { Component, useState } from 'react'
import loc_icon from '../assets/location_icon.ico'
import siren_icon from '../assets/emergency.ico'
import gear_icon from '../assets/gear.ico'
import { DropdownButton, Dropdown, Navbar, Nav, NavDropdown, Form, Modal, ModalBody, ModalFooter, Button } from 'react-bootstrap'


function Head() {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const fileUpload = () => {

    }
    return (
        <div className="Header">
            <Navbar expand="lg" bg="white" variant="white">
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">
                            <div className="row">
                                <img src={loc_icon} style={{ width: "30px" }} />
                                <NavDropdown title="Choose Comany Building" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#">Factory</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Hotel</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Hospital</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="#">
                            John Doe
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
                <Modal.Body>Name: <input type="text"></input></Modal.Body>
                <Modal.Footer>
                    <div>
                        <input id="fileButton" type="file" hidden />
                        <Button variant="secondary" onClick={fileUpload}>
                         <i class="fa fa-upload" aria-hidden="true"></i>
                        </Button>
                        
                    </div>

                </Modal.Footer>
            </Modal>
        </div >

    )

}
export default Head