import React, { Component } from 'react'
import loc_icon from '../assets/location_icon.ico'
import siren_icon from '../assets/emergency.ico'
import gear_icon from '../assets/gear.ico'
import { DropdownButton, Dropdown, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap'


class Head extends Component {
    render() {
        return (
            <div className="Header">
                <Navbar expand="lg" bg="white" variant="white">
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#deets">
                                <div className="row">
                                    <img src={loc_icon} style={{ width: "7%" }} />
                                    <NavDropdown title="Choose Comany Building" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Factory</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Hotel</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Hospital</NavDropdown.Item>

                                    </NavDropdown>
                                </div>
                            </Nav.Link>
                            <Nav.Link>
                                John Doe
                            </Nav.Link>
                            <Nav.Link href="#">
                                <div className="row">
                                    <img src={gear_icon} style={{ width: "7%" }} />
                                    <img src={siren_icon} style={{ width: "7%" }} />
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div >
        )
    }
}
export default Head