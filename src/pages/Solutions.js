import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Section6 } from "../components/sections/Sections";
import { AppContainer, LayoutTitle } from "../components/tags/Tags";

function Solutions() {
  return (
    <AppContainer className="App">
      <AppContainer className="Solutions">
      <Header/>
      <LayoutTitle slogan="integrate with the ecosystem" text="Our Services"/>
      <Section6/>
      <Footer/>
      </AppContainer>
    </AppContainer>
  );
}

export default Solutions;
