import React from "react"

import {Navbar, NavDropdown, Nav, Button} from "react-bootstrap"




const Navigation=()=>{
    return(
        <Navbar expand="lg" className="sticky-top">
            <Navbar.Brand href="#home">Birthday</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home"><Button variant="danger" size="lg">Apply Now</Button></Nav.Link>
                    <NavDropdown title="Our courses" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Program Structure</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Courses</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Success Stories</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="About" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Careers</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Hire Our Graduates</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}
export default Navigation