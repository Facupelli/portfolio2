import React from "react";
import s from "./Contact.module.scss";

const Mailto = ({ email, children }) => {
  return (
    <a target="_blank" href={`mailto:${email}`} className={s.button}>
      {children}
    </a>
  );
};

export default function Contact() {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <p>GET IN TOUCH</p>
      </div>
      <div className={s.info}>
        <p>
          I am currently looking for my first opportunity to contribute on
          challenging projects.
        </p>
        <p>I have lot of energy!</p>
        <div className={s.button_container}>
          <Mailto email="facundopellicer4@gmail.com">Mail me!</Mailto>
        </div>
      </div>
    </div>
  );
}
