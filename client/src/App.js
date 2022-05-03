import React from "react";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";
import Networks from "./components/Networks/Networks";
import About from "./components/About/About";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Freelance from "./components/Freelance/Freelance";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <div className="nav_column">
        <NavBar />
      </div>
      <div className="main_column">
        <Networks />
        <Intro />
        <About />
        <Technologies />
        <Projects />
        <Freelance />
        <Contact />
      </div>
    </div>
  );
}

export default App;
