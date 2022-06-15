import React from "react";
import Section from "../Section/Section";
import s from "./Contact.module.scss";

const Mailto = ({ email, children }) => {
  return (
    <a
      target="_blank"
      href={`mailto:${email}`}
      rel="noreferrer"
      className={s.button}
    >
      {children}
    </a>
  );
};

export default function Contact({ contactRef }) {
  return (
    <Section title="Get In Touch">
      <div className={s.info}>
        <p>
          I am currently looking for my first opportunity to contribute on
          challenging projects.
        </p>
        <p>I am available to work!</p>
        <div className={s.button_container}>
          <Mailto email="facundopellicer4@gmail.com">Mail me!</Mailto>
        </div>
      </div>
    </Section>
    // <div className={s.container} ref={contactRef} data-scroll-section>
    //   <div className={s.title}>
    //     <p>GET IN TOUCH</p>
    //   </div>
    // </div>
  );
}
