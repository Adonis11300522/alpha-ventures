import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Section8 } from "../components/sections/Sections";
import { AppContainer } from "../components/tags/Tags";

function LaunchApp() {
  return (
    <AppContainer className="App">
        <AppContainer className="LaunchApp">
          <Header/>
          <Section8></Section8>
          <Footer/>
        </AppContainer>
    </AppContainer>
  );
}

export default LaunchApp;
