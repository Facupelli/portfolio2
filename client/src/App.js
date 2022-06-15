import React, { useRef, useState } from "react";
import useLocoScroll from "./hooks/useLocoScroll";

//COMPONENTS
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import Networks from "./components/Networks/Networks";
import About from "./components/About/About";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Freelance from "./components/Freelance/Freelance";
import Contact from "./components/Contact/Contact";
import MoreProjects from "./components/Projects/MoreProjects/MoreProjects";

import "./App.scss";

function App() {
  const aboutRef = useRef(null);
  const techsRef = useRef(null);
  const projectsRef = useRef(null);
  const freelanceRef = useRef(null);
  const contactRef = useRef(null);

  const [seeMore, setSeeMore] = useState(false);

  useLocoScroll(true);

  return (
    <main className="app">
      <div className="nav-column">
        <NavBar
          aboutRef={aboutRef}
          techsRef={techsRef}
          projectsRef={projectsRef}
          freelanceRef={freelanceRef}
          contactRef={contactRef}
        />
      </div>
      <div id="main-column" data-scroll-container>
        <Networks />
        {/* <Empty /> */}
        <Intro />
        <About aboutRef={aboutRef} />
        <Technologies techsRef={techsRef} />
        <Projects
          projectsRef={projectsRef}
          setSeeMore={setSeeMore}
          seeMore={seeMore}
        />
        {seeMore && <MoreProjects />}
        <Freelance freelanceRef={freelanceRef} />
        <Contact contactRef={contactRef} />
      </div>
    </main>
  );
}

export default App;
