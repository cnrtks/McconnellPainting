import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Brush from '../assets/servicesImages/brush.png';
import Can from '../assets/servicesImages/can.png';
import Wheel from '../assets/servicesImages/wheel.png';
import Aura from '../assets/servicesImages/aura.png';


function Services() {
    return (
        <section id="services" className="container-fluid padding">
            <hr className="my-4" />
            <figure>
                <div className="fixed-bg-wrap">
                    <div className="fixed-bg-inner paintbrush">
                    </div>
                </div>

                <Container fluid className="padding over-fixed">
                    <Row>
                        <Col sm="12" md="6" lg="6" xl="3"><img src={Brush} alt="Paint Brush" /></Col>
                        <Col sm="12" md="6" lg="6" xl="3">
                            <h2>Piece of mind</h2>
                            <p>McConnell Painting & Decorating is an Oakville based professional painting contractor. We will save you both time and money, as well as give you piece of mind. We use only high quality paint from Benjamin Moore, including Aura and Natura paint, to ensure your house painting project stays beautiful for years. Let our top-quality paint job refresh your living space and increase value of your property. We take pride in our work and our success is measured one satisfied customer at a time</p>
                        </Col>
                        <Col sm="12" md="6" lg="6" xl="3"><img src={Can} alt="Paint Brush" /></Col>
                        <Col sm="12" md="6" lg="6" xl="3">
                            <h2>Interiors</h2>
                            <p>At McConnell Painting & Decorating we take special care of your property and possess the necessary skills required for surface preparation, understanding the broad range of coating varieties, as well as the ability to diagnose and solve the unique challenges of every project. Services provided include drywall & plastering, carpentry, wallpapering, and staining & painting of all surfaces (including stairs, wainscoting, fireplaces, etc.)</p>
                        </Col>
                        <Col sm="12" md="6" lg="6" xl="3"><img src={Aura} alt="Paint Brush" /></Col>
                        <Col sm="12" md="6" lg="6" xl="3">
                            <h2>Exteriors</h2>
                            <p>We offer a complete line of exterior services. All painted surfaces will be properly prepared before receiving any finishes. Services include exterior painting of all surfaces and staining of natural wood surfaces</p>
                        </Col>
                        <Col sm="12" md="6" lg="6" xl="3"><img src={Wheel} alt="Paint Brush" /></Col>
                        <Col sm="12" md="6" lg="6" xl="3">
                            <h2>Colour Decisions</h2>
                            <p>If you are struggling to find the perfect colours for your home, let McConnell Painting & Decorating help you! We will send our experienced colour consultant to your home, free of charge to help you choose colours. That way you can have peace of mind with your colour choices.</p>
                        </Col>
                    </Row>
                </Container>

            </figure>
        </section>
    );
}

export default Services;