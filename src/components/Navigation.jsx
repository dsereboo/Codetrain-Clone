import React from "react"
import cd from "./assets/cd.png"
import{BrowserRouter as AppRouter, Link, Route} from "react-router-dom"
import {Navbar, NavDropdown, Nav, Button} from "react-bootstrap"
import Homepage from "./HomePage"
import SuccessStories from "./SuccessStories"
import Program from "./Program"
import Courses from "./Courses"




const Navigation=()=>{
    return(
        <AppRouter>
        <Navbar expand="lg" className="sticky-top">
            <Navbar.Brand ><img src={cd} alt="codetrain logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home"><Button variant="danger" size="lg">Apply Now</Button></Nav.Link>
                    <NavDropdown title="Our courses" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/program">Program Structure</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/courses">Courses</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><Link to="/success">Success Stories</Link></NavDropdown.Item>
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


            <Route exact path="/" component={Homepage} />
            <Route path="/program" component={Program} />
            <Route path="/courses" component={Courses} />
            <Route path="/success" component={SuccessStories} />
        </AppRouter>

    )
}
export default Navigation