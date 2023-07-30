import React from "react";
import Section from "../Section/Section";
import "./style.scss";

const Mailto = ({ email, children }) => {
  return (
    <a
      target="_blank"
      href={`mailto:${email}`}
      rel="noreferrer"
      className="button"
    >
      {children}
    </a>
  );
};

export default function Contact({ contactRef }) {
  return (
    <Section title="Get In Touch">
      <div id="contact-section" className="contact-section">
        <p data-scroll data-scroll-delay="0.04" data-scroll-speed="2">
          I am currently looking for my first opportunity to contribute on
          challenging projects.
        </p>
        <p data-scroll data-scroll-delay="0.06" data-scroll-speed="2">
          I am available to work!
        </p>
        <div
          className="button-container"
          data-scroll
          data-scroll-delay="0.1"
          data-scroll-speed="2"
        >
          <Mailto email="facundopellicer4@gmail.com">Mail me!</Mailto>
        </div>
      </div>
    </Section>
  );
}
