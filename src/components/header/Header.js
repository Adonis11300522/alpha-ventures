import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import { AppContainer } from "../tags/Tags";

function Header() {
  return (
    <AppContainer className="Header">
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
            <Navbar.Brand href="#home">alpha ventures</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">                
                <Nav>
                <Nav.Link >Home</Nav.Link>
                <Nav.Link >Solutions</Nav.Link>
                <Nav.Link >Vision</Nav.Link>
                <Nav.Link className="outline-btn">LaunchApp</Nav.Link>
                <Nav.Link className="outline-btn">Connect Wallet</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </AppContainer>
  );
}

export default Header;
