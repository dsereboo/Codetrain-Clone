import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import c1 from "./assets/c1.png"
import c2 from "./assets/c2.png"
import c3 from "./assets/c3.png"
import mobile from "./assets/mobile.png"
import web from "./assets/web.png"

const Courses=()=>{
    return(
        <>
        <Container>
            <h2 className="text-center header">Become a Full-stack Web & Mobile App Developer</h2>
            <p>
                Codetrain's curriculum is designed based on the skills that are in high demand glabally.
                Our courses focus on practical skills and includes interactive
                learning activities that makes it easy for our students to build real world projects in no time.
            </p>
            <Row>
                <Col md="3">
                    <img src={c1} alt="studentprofile"/>
                </Col>
                <Col md="6">
                    <img src={c2} alt="studentprofile"/>
                </Col>
                <Col md="3">
                    <img src={c3} alt="studentprofile"/>
                </Col>
            </Row>
            <Row>
                    <Col md="4 offset-5 ">
                        <Button size="lg" variant="danger">Apply to Codetrain</Button>
                    </Col>
            </Row>
            </Container>  
            <Row className="greyBack">       
                <Col md="6 offset-1"><img src={web} alt="fullstack"/></Col>
                <Col md="4">
                    <h2>Full-stack Web<br/> Development</h2>
                    <p>
                        As a web developer, you get to be the person who builds everything that the world sees and
                         interacts with on the internet. Web developers use a variety of programming languages and 
                         frameworks to build solutions to real-world problems.
                        <br/><br/>
                        Job opportunities include, but not limited to web designer, frontend developer, backend developer, 
                        software engineer.
                        <br/><br/>
                        Technologies: JavaScript, React, Node, Express, SQL, Bootstrap, HTML, CSS, etc.
                    </p>
                    <Button size="lg" variant="danger">Apply here</Button> 
                </Col>
            </Row>
            <Row className="mobile" >      
                <Col md="4 offset-1">
                    <h2>Mobile App<br /> Development</h2>
                    <p>
                        As a mobile developer, you get to build a wide range of applications for bilions of Android and iOS mobile 
                        phone users.
                         Because the number of use cases for mobile apps is virtually limitles, 
                         so are the job opportunities.
                        <br /><br />
                        Job opportunities include, but not limited to Android developer,
                         iOS developer, Quality Assurance engineer, software engineer.
                        <br /><br />
                        Technologies: Android, iOS, React Native, UI, data persisitence, JavaScript, etc.
                    </p>
                    <Button size="lg" variant="danger">Apply here</Button>
                    </Col>
                <Col md="6">
                    <img src={mobile} alt="fullstack"/>
                </Col>
            </Row>
        </>
    )
}
export default Courses