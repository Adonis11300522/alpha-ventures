import React, { useState } from "react";
import {Navbar, Nav, Container, Modal, ListGroup} from "react-bootstrap";
import { AppContainer } from "../tags/Tags";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Metamask from "../../assets/icons/metamask.png";
import Binance from "../../assets/icons/binance.jpg";
import Clover from "../../assets/icons/clover.png";

function Header() {

  const ConnectWallet = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
  
      let userAddress = await signer.getAddress();
      console.log(userAddress.length)
      document.getElementById("wallet").innerText = userAddress.substring(0,5) + "..." + userAddress.substring(42, 37);

      
      
  }
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
                <Nav.Link className="outline-btn" id="wallet" onClick={()=>{ConnectWallet();}}>Connect Wallet</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container>
          {/* <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/> */}
        </Container>        
    </AppContainer>
  );
}

export default Header;
