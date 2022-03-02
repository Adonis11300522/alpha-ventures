import React from "react";
import {Container, Row, Col, Navbar, Nav, Form, Button} from "react-bootstrap";
import { AppContainer, FooterColTitle, SocialLink } from "../tags/Tags";

function Footer() {
  return (
    <AppContainer className="Footer">
        <Container>
            <Row>
                <Col className="logo-col">
                    <Navbar.Brand href="#home">alpha ventures</Navbar.Brand>
                </Col>
                <Col className="route-col">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link >Solutions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link >Vision</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="fill-btn">LaunchApp</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col className="contact-col">
                    <FooterColTitle>Request Allocation</FooterColTitle>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Button variant="primary outline-btn" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col className="social-col">
                    <FooterColTitle>Follow Us on:</FooterColTitle>
                    <SocialLink/>
                </Col>
            </Row>
        </Container>
    </AppContainer>
  );
}

export default Footer;
