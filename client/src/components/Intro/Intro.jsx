import React from "react";
import s from "./Intro.module.scss";

export default function Intro() {
  return (
    <div className={s.container}>
      <p className={s.hi}>Hi, my name is</p>
      <p className={s.name}>Facundo Pellicer.</p>
      <p className={s.dev}>Full Stack Developer.</p>
      <p className={s.about}>
        I have both frontend and backend knowledge which helps me build complete
        websites and gives me flexibility and a wider view. Lately I'm enjoying
        React more.
      </p>
    </div>
  );
}
