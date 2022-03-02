import React from "react";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { AppContainer } from "./components/tags/Tags";
import { Section1, Section2, Section3, Section4, Section5 } from "./components/sections/Sections";

function App() {
  return (
    <AppContainer className="App">
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
