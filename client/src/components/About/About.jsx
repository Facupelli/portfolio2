import React from "react";
import portrait from "../../images/yo.png";
import s from "./About.module.scss";

export default function About() {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <p>About Me</p>
      </div>
      <div className={s.info}>
        <div>
          <p>
            Hello, my name is Facundo and I enjoy creating things since I was a
            child. I had always been passionate about technology and creating
            things. My interest in web development started back in 2015 when I
            win a scolarship for a HTML, CSS and JS course, but when I stop with
            Javascript I thougth it was too difficult for me. Five years later
            with COVID pandemic I give it one more chance and finally discover
            what I want to do with my life.
          </p>
          <p>
            I am currently looking for my first opportunity to contribute on
            challenging projects in the IT world with everything I have learned
            and still learning everyday.
          </p>
          <p>
            I am a very curious person, always willing to learn more. I like
            challenges and solve problems. I don't like going to bed with
            unfinished works, I don't like giving up. I am always looking
            forward to improve, to learn from everybody and to share what I
            know.
          </p>
        </div>
        <div className={s.img_container}>
          <img src={portrait} alt="me" />
        </div>
      </div>
    </div>
  );
}
