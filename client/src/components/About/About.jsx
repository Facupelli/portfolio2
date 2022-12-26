import React from "react";
import portrait from "../../images/yo.png";
import Section from "../Section/Section";

import "./style.scss";

export default function About({ aboutRef }) {
  return (
    <Section title="About Me">
      <div id="about-section" ref={aboutRef} style={{ scrollMargin: 100 }}>
        <div className="description" data-scroll>
          <p>
            Hello, my name is Facundo and I enjoy creating things since I was a
            child. I have always been passionate about technology and building
            things.
          </p>

          <p>
            I am currently looking for my first opportunity to contribute to
            challenging projects in the IT world with everything I have learned
            and still learning every day.
          </p>
        </div>
        <div className="img-container" data-scroll>
          <img src={portrait} alt="me" data-scroll data-scroll-repeat />
        </div>
      </div>
    </Section>
  );
}
