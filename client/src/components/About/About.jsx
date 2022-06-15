import React from "react";
import portrait from "../../images/yo.png";
import Section from "../Section/Section";

import "./style.scss";

export default function About({ aboutRef }) {
  return (
    <Section title="About Me">
      <div className="info" ref={aboutRef} style={{ scrollMargin: 100 }}>
        <div>
          <p>
            Hello, my name is Facundo and I enjoy creating things since I was a
            child. I have always been passionate about technology and creating
            things.
          </p>
          <p>
            I am a very curious person, always willing to learn more. I like
            challenges and solving problems. I don't like giving up. I am always
            looking forward to improving, learning from everybody, and sharing
            what I know.
          </p>
          <p>
            I am currently looking for my first opportunity to contribute to
            challenging projects in the IT world with everything I have learned
            and still learning every day.
          </p>
        </div>
        <div className="img-container" data-scroll>
          <img src={portrait} alt="me" data-scroll />
        </div>
      </div>
    </Section>
  );
}
