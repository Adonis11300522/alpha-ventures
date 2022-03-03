import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Section7 } from "../components/sections/Sections";
import { AppContainer, LayoutTitle } from "../components/tags/Tags";

function Vision() {
  return (
    <AppContainer className="App">
      <AppContainer className="Vision">
        <Header/>
        <LayoutTitle slogan="Our Vision" text="Alpha Ventures aims to integrate everyday investors in the growing artificial intelligence and blockchain industries by funding start-up companies with breakthrough technological innovation"/>
        <Section7/>
        <Footer/>
      </AppContainer>
    </AppContainer>
  );
}

export default Vision;
