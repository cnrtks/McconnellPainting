import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import van from '../assets/van.png';
import bmLogo from '../assets/BMLogoWhite.png'


function Contact() {
    return (
        <section id="contact">
            <Container className="container-fluid padding">
                <Row rowPadding>
                    <Col sm="12" md="6" lg="6" xl="6">
                        <h2>Contact Information</h2>
                        <p>For your free, no obligation quote contact Dave McConnell</p>
                        <ul>
                            <li>Phone: (416) 827-6186</li>
                            <li>Email: mcconnellpainting@sympatico.ca</li>
                        </ul>
                    </Col>
                    <Col sm="12" md="6">
                        <img className="img-fluid" src={van} alt="Work van in front of store" />
                    </Col>
                </Row>
                <Row rowPadding>
                    <Col sm="12">
                        <img className="img-fluid" src={bmLogo} alt="Benjamin Moore logo" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Contact;