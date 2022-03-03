import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import { AppContainer } from "../tags/Tags";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppContainer className="Header">
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
            <Navbar.Brand href="#home">alpha ventures</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">                
                <Nav>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/solutions">Solutions</Nav.Link>
                <Nav.Link as={Link} to="/vision">Vision</Nav.Link>
                <Nav.Link as={Link} to="/launchapp" className="outline-btn">LaunchApp</Nav.Link>
                <Nav.Link className="outline-btn">Connect Wallet</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </AppContainer>
  );
}

export default Header;
