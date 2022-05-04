import React, { useRef, useState } from "react";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";
import Networks from "./components/Networks/Networks";
import About from "./components/About/About";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Freelance from "./components/Freelance/Freelance";
import Contact from "./components/Contact/Contact";
import MoreProjects from "./components/Projects/MoreProjects/MoreProjects";

function App() {
  const aboutRef = useRef(null);
  const techsRef = useRef(null);
  const projectsRef = useRef(null);
  const freelanceRef = useRef(null);
  const contactRef = useRef(null);

  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="app">
      <div className="nav_column">
        <NavBar
          aboutRef={aboutRef}
          techsRef={techsRef}
          projectsRef={projectsRef}
          freelanceRef={freelanceRef}
          contactRef={contactRef}
        />
      </div>
      <div className="main_column">
        <Networks />
        <Intro />
        <div ref={aboutRef} style={{ scrollMargin: 100 }}>
          <About />
        </div>
        <div ref={techsRef} style={{ scrollMargin: 100 }}>
          <Technologies />
        </div>
        <div ref={projectsRef} style={{ scrollMargin: 100 }}>
          <Projects setSeeMore={setSeeMore} seeMore={seeMore} />
        </div>
        {seeMore && <MoreProjects />}
        <div ref={freelanceRef} style={{ scrollMargin: 100 }}>
          <Freelance />
        </div>
        <div ref={contactRef} style={{ scrollMargin: 100 }}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
