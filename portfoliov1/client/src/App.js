import React, { useEffect, useRef, useState } from "react";
import useLocoScroll from "./hooks/useLocoScroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

//COMPONENTS
import MyName from "./components/MyName/MyName";
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
    <div className="app" data-scroll-container>
      {/* <header className="nav-column">
        <NavBar locoScroll={locoScroll && locoScroll} />
      </header> */}
      <main id="main-column" className="main-column">
        <div className="max-width">
          <Networks />
          <MyName />
          <About />
          <Technologies />
          <Projects setSeeMore={setSeeMore} seeMore={seeMore} />
          {seeMore && <MoreProjects />}
          <Freelance />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
