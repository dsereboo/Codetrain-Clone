import { Button, Col, Container, Row } from "react-bootstrap"
import image5 from "./assets/4.png"
import image6 from "./assets/5.jpg"


const Program=()=>{
    return(
        <Container>
            <h1 className="text-center header">No background in IT required</h1>
            <p className="text-justify">At Codetrain, we teach everything from scratch starting from the fundamentals.
                 Our teachers are very friendly and they will assist you to understand everything that you learn.</p>
            <h1 className="text-center header">Professional Career Training In Coding</h1>     
            <Row>
                <Col md="6"><p>Codetrain is a three-phase program - the 12 month training program, Magic program and our Fellowship program.<br/><br/>
                Our 12 month training program is an intensive bootcamp during which we provide world-class teaching and mentoring to transform anybody (with even no prior programming experience) 
                into a professional software developer and start a successful career.<br/><br/>
                Students get one-on-one teaching, career advice, job interview training, individual and team projects experience in mobile and web technologies.<br/><br/>
                After the 12 month training, hardworking students get the opportunity to be selected for next program called Magic.</p>
                <Button variant="primary special" size="lg">View our Courses</Button>
                <Button variant="danger" size="lg">Apply here</Button>
                </Col>
                <Col md="4">
                    <img src={image5} alt="faces"/>
                </Col>
            </Row>
            <hr></hr>
            <h1 className="text-center header">Codetrain Advantage</h1>
            <Row>
                <Col md="6">
                    <p><h4>Real life experience on projects</h4>
                    We will teach you how to code apps and interactive websites from scratch using industry based simulated projects.
                    <br/><br/>
                    <h4>Assistance with job interviews</h4>
                    We will help you land job interviews with top companies and then coach you on how to nail them.
                    <br/><br/>
                    <h4>Entrepreneural opportunities to use the skills</h4>
                    If your dream is to become an entreprenuer using the skills you've learned, we'll help you achieve that.
                    <br/><br/>
                    <h4>Mentorship from top CEOs and Developers</h4>
                    You will get mentorship from our global network of top CEOs and software developers.</p>
                </Col>
                <Col md="3">
                    <img src={image6} alt="faces"/>
                </Col>
            </Row>
            <hr></hr>
            <h1 className="text-center header">What To Expext From Our Program</h1>
        </Container>
    )
}

export default Program