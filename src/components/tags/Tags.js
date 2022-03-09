import React from "react";
import { Card, Nav, Container } from "react-bootstrap";
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
        <Card className="mb-5 animate__animated animate__fadeInUp animate__delay-2s" style={{ width: '15rem' }}>
            <Card.Body>
                {children}
            </Card.Body>
            <Card.Body className="animate__animated animate__fadeInLeft animate__delay-6s">
                <Card.Title>{card_title}</Card.Title>
                <Card.Text>{card_text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export function LayoutTitle({slogan, text}) {
    return (
      <AppContainer className="LayoutTitle mb-5">
          <Container>
              <Slogan>{slogan}</Slogan>
              <h3 className="mt-5 mb-5">{text}</h3>
          </Container>
      </AppContainer>
    );
  }


