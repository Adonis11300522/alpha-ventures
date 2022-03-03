import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { AppContainer } from "../components/tags/Tags";
import { Section1, Section2, Section3, Section4, Section5 } from "../components/sections/Sections";

function Home() {
  return (
    <AppContainer className="App">
      <AppContainer className="Home">
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
      </AppContainer>      
    </AppContainer>
  );
}

export default Home;
