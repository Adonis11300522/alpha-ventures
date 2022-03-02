import React from "react";
import { Card, Nav } from "react-bootstrap";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

export function AppContainer({children, className}) {
    return (
        <div className={className}>{children}</div>
    );
}

export function FooterColTitle({children}) {
  return (
    <AppContainer className="footer-col-title">
       {children}
    </AppContainer>
  );
}

export function SocialLink () {
    return (
        <AppContainer className="social-link">
            <Nav as="ul">
                <Nav.Item as="li">
                    <Nav.Link ><FaLinkedinIn/></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link ><FaFacebookF/></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link ><FaTwitter/></Nav.Link>
                </Nav.Item>
            </Nav>
        </AppContainer>
    );
}

export function Slogan({children}) {
    return (
        <AppContainer className="slogan mt-5 mb-5">{children}</AppContainer>
    );
}

export function BlackCard({children, card_title, card_text}){
    return (
        <Card className="mb-5" style={{ width: '15rem' }}>
            <Card.Body>
                {children}
            </Card.Body>
            <Card.Body>
                <Card.Title>{card_title}</Card.Title>
                <Card.Text>{card_text}</Card.Text>
            </Card.Body>
        </Card>
    );
}



