import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {ReactComponent as Logo} from '../assets/brushCut.svg';

function Navigation() {
  return (
    <Navbar id="navigation" className="container-fluid fixed-top navbar-dark">
      <Navbar.Brand href="#">
        <Logo />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarResponsive" >
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarResponsive">
        <Nav className="ml-auto">
          <Nav.Item ><Nav.Link href="#home">Home</Nav.Link></Nav.Item>
          <Nav.Item ><Nav.Link href="#services">Services</Nav.Link></Nav.Item>
          <Nav.Item ><Nav.Link href="#gettingStarted">Getting Started</Nav.Link></Nav.Item>
          <Nav.Item ><Nav.Link href="#testimonials">Testimonials</Nav.Link></Nav.Item>
          <Nav.Item ><Nav.Link href="#contact">Contact</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  );
}
export default Navigation;