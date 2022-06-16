import React, { useEffect, useRef, useState } from "react";
import useLocoScroll from "./hooks/useLocoScroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

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
  const [seeMore, setSeeMore] = useState(false);
  const locoScroll = useRef(null);

  useLocoScroll(true, locoScroll);

  useEffect(() => {
    if (locoScroll) {
      locoScroll.current.update();
    }
  }, [locoScroll, seeMore]);

  console.log(locoScroll);

  return (
    <main className="app" data-scroll-container>
      <div className="nav-column">
        <NavBar locoScroll={locoScroll && locoScroll} />
      </div>
      <div id="main-column">
        <Networks />
        <Intro />
        <About />
        <Technologies />
        <Projects setSeeMore={setSeeMore} seeMore={seeMore} />
        {seeMore && <MoreProjects />}
        <Freelance />
        <Contact />
      </div>
    </main>
  );
}

export default App;
