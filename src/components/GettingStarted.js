import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Can from '../assets/gettingStartedImages/can.png';
import Tools from '../assets/gettingStartedImages/tools.png';
import Tarp from '../assets/gettingStartedImages/tarp.png';
import Regal from '../assets/gettingStartedImages/regal.png';



function GettingStarted() {
    return (
        <section id="gettingStarted" className="container-fluid padding">
            <Container fluid className="padding over-fixed">{/* remove over fixed */}
                <Row>
                    <Col sm="12" md="6"><img src={Can} alt="Can of paint" /></Col>
                    <Col sm="12" md="6">
                        <h2>Paint is only part</h2>
                        <p>Paint is only part of the impression made by any room decor. The invisible ingredient in obtaining the Wow Factor in any area repainting begins with complete surface preparation.</p>
                    </Col>
                    <Col sm="12" md="6">
                        <h2>Cut no corners</h2>
                        <p>At McConnell Painting & Decorating we cut no corners on the journey to an exceptional finish. A perfect finish begins with a close examination and repair of the existing wear in each area. As your home ages, it settles and shifts. A seamless final look depends on the application of chalking to gaps and cracks around windows, doors and moldings. Once the edges of the walls have been readied any wall surface dents or marks are then filled, sanded and primed. This process is repeated until your walls are ready for the finishing touches. McConnell Painting & Decorating takes the time to go beyond simply cutting in around room fixtures in order to ensure a crisp final look. All electrical cover plates are removed and ceiling fixtures dropped to permit paintwork to flow under and behind them. This also that any future updates or changes to fixtures can be simply made without further paint touch-up</p>
                    </Col>
                    <Col sm="12" md="6"><img src={Tools} alt="Paint tools" /></Col>
                    <Col sm="12" md="6"><img src={Tarp} alt="Dropsheet over furniture" /></Col>
                    <Col sm="12" md="6">
                        <h2>Finishing Up</h2>
                        <p>The final step in the journey to a perfect outcome is the expert selection of the appropriate paint finish for the particular area use. With the area thoroughly prepared, McConnell Painting & Decorating achieves the lasting impression with the application of two coats of top line Benjamin Moore paint.</p>
                    </Col>
                    <Col sm="12" md="6">
                        <h2>REGAL Select Interior Paint</h2>
                        <p>Mcconnel Painting & Decorating primarily uses REGAL Select Interior. It is a trusted brand that comes in a wide variety of sheens.</p>
                    </Col>
                    <Col sm="12" md="6"><img src={Regal} alt="Regal paint" /></Col>
                </Row>
            </Container>
        </section>
    );
}

export default GettingStarted;