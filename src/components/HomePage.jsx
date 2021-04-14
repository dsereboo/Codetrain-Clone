import React from "react"
import { Container,Carousel,Row, Button, Col } from "react-bootstrap"
import image1 from "./assets/1.jpg"
import image2 from "./assets/2.jpg"
import image3 from "./assets/3.jpg"
import image4 from "./assets/4.jpg"
import image6 from "./assets/6.jpg"
import image7 from "./assets/7.jpg"
import image8 from "./assets/8.jpg"


const Homepage=()=>{
    return(
            <>
            <Carousel controls={false} indicators={false} keyboard={true} fade >
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                        <div className="carousel-caption">
                            <h1>Register for the April 2021 Cohort</h1>
                            <p> We make dreams come true by providing world class training </p>
                            <Button variant="danger" size="lg" >Apply Now</Button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                        />
                        <div  className="carousel-caption">
                            <h1>Register for the April 2021 Cohort</h1>
                            <p> We make dreams come true by providing world class training </p>
                            <Button variant="danger" size="lg" >Apply Now</Button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                        />
                       <div  className="carousel-caption">
                            <h1>Register for the April 2021 Cohort</h1>
                            <p> We make dreams come true by providing world class training </p>
                            <Button variant="danger" size="lg" >Apply Now</Button>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <h1 className="text-center header">New Course Alert: Ethical Digital Entreprenuer</h1>
                    <Row>
                        <Container className="custom">
                         <Row>
                            <Col md="6 custom">
                                <h4>Transform your business idea into a money maker in 4 weeks.</h4>
                                <p>The Ethical Digital Entrepreneur program is a four-week class aimed
                                at teaching entrepreneurs or aspiring entrepreneurs what it takes to run a sustainable
                                and profitable business in this current digital economy.
                                </p>
                                <Button size="lg" className="custom">Learn more</Button>
                            </Col>
                            <Col md="4 custom" >
                                <img src="https://codetraingh.com/static/yaa-ede-787d6fc51c86bf15d4e2fa8e18855de6.jpg" width="391" height="259" alt="yaa"/>
                            </Col>
                        </Row>   
                        </Container>
                    </Row>
                </Container>
                <hr></hr>
                <Container>
                    <Row>
                         <Carousel>
                             <Carousel.Item>
                                 <Row>
                                     <Col md="1"></Col>
                                     <Col md="5 item-description">
                                         <p className="colored-header">CODETRAIN IS IMPACTING LIVES AND COMMUNITIES</p>
                                         <h3>Taking On The World, Starting From Home</h3>
                                         <p className="text-muted">My dream is to build an online classifieds and e-commerce website for Liberia. Studying at Codetrain has not only taught me 
                                         the technical skills required to achieve my dream but the right values and mentality to succeed globally"
                                         <br/><br/>
                                         -- Titus, Software Developer</p>
                                     </Col>
                                     <Col md="5 item-image"><img src={image8} alt="8"/></Col>
                                     <Col md="1"></Col>
                                 </Row>
                             </Carousel.Item>
                             <Carousel.Item>
                                 <Row>
                                     <Col md="1"></Col>
                                     <Col md="5 item-description">
                                         <p className="colored-header">CODETRAIN IS IMPACTING LIVES AND COMMUNITIES</p>
                                         <h3>Transforming African Cinema</h3>
                                         <p className="text-muted">"After my Codetrain education, I started Kuumba, a Video on Demand streaming service for
                                          African cinema. Africa has a lot of unique and amazing stories that we can share with the rest of the world."
                                         <br/><br/>
                                         -- Afia, CEO of Kuumba</p>
                                     </Col>
                                     <Col md="5 item-image"><img src={image7} alt="7"/></Col>
                                     <Col md="1"></Col>
                                 </Row>
                             </Carousel.Item>
                             <Carousel.Item>
                                 <Row>
                                     <Col md="1"></Col>
                                     <Col md="5 item-description">
                                         <p className="colored-header">CODETRAIN IS IMPACTING LIVES AND COMMUNITIES</p>
                                         <h3>Fulfilling a childhood dream</h3>
                                         <p className="text-muted">"I flew in to Ghana, where I studied at Codetrain to fulfill my 
                                         childhood dream of becoming a software developer. Now I run my own tech team in my home country Gambia."
                                         <br/><br/>
                                         -- Micah, Software Developer</p>
                                     </Col>
                                     <Col md="5 item-image"><img src={image6} alt="6"/></Col>
                                     <Col md="1"></Col>
                                 </Row>
                             </Carousel.Item>
                        </Carousel> 
                    </Row>  
                </Container>
               
                    
                </>
    )
}
export default Homepage