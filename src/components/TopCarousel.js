import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/homeCarouselImages/img01.png';
import img2 from '../assets/homeCarouselImages/img02.png';
import img3 from '../assets/homeCarouselImages/img03.png';
import img4 from '../assets/homeCarouselImages/img04.png';
import img5 from '../assets/homeCarouselImages/img05.png';

function TopCarousel() {
    return (
        <section id="home" className='container-fluid'>
            <Carousel>
                <Carousel.Item >
                    <img className="d-block w-100"
                        src={img1} alt="Kitchen counter" />
                    <Carousel.Caption><h3>Interior</h3></Carousel.Caption>
                    <p>Your quality painting service contractor. Residential and commercial painting and decorating services</p>
                </Carousel.Item  >
                <Carousel.Item >
                    <img className="d-block w-100"
                        src={img2} alt="Wall being painted" />
                    <Carousel.Caption><h3>Interior in progress</h3></Carousel.Caption>
                    <p>McConnell Painting & Decorating has been providing outstanding painting service to Oakville, Burlington, Mississauga and the surrounding communities for over 20 years. We are professional painters serving both residential and commercial clients. McConnell Painting & Decorating is proud to have earned a solid reputation for providing high-quality interior and exterior contracting services at competitive prices. Many of our clients have been with us for over a decade.</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src={img3} alt="unfinished stairs" />
                    <Carousel.Caption><h3>Unfinished stairs</h3></Carousel.Caption>
                    <p>We keep you satisfied with prompt and courteous service, quality craftsmanship, and excellent follow-up. At McConnell Painting & Decorating we cut no corners on the journey to an exceptional finish. We take pride in our work, and so will you! If a facelift to your home or property is in the future, please give us a call for a free consultation and estimate. We carry all mandatory Worplace Safety and Insurance Board (WSIB) coverage to protect you!</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img4} alt="Painted wall" />
                    <Carousel.Caption><h3>Painted wall</h3></Carousel.Caption>
                    <p>McConnell Painting & Decorating is qualified under the Benjamin Moore Painting & Decorating Services program. As such we meet highest professional standards, including being highly-reputable, experienced professionals. As well as being fully covered by liability insurance and using Benjamin Moore premium quality paints exclusively</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img5} alt="Unfinished stairs" />
                    <Carousel.Caption><h3>Unfinished Stairs</h3></Carousel.Caption>
                    <p>McConnell Painting & Decorating is an environmentally responsible firm. We use the greenest paints on the market: Benjamin Moore's "Natura" Paint (zero VOC) and "Aura" Paint (low VOC).</p>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default TopCarousel;