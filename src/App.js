import React from "react";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import 'animate.css';
import Solutions from "./pages/Solutions";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import LaunchApp from "./pages/LaunchApp";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/solutions" element={<Solutions/>}/>
      <Route path="/vision" element={<Vision/>}/>
      <Route path="/launchapp" element={<LaunchApp/>}/>
    </Routes>
  );
}

export default App;

