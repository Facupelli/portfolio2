import React from "react";
import s from "./Intro.module.scss";

export default function Intro() {
  return (
    <div className={s.container}>
      <p className={s.hi}>Hi, I'm</p>
      <p className={s.name}>FACUNDO PELLICER.</p>
      <p className={s.dev}>FULL STACK DEVELOPER.</p>
      <p className={s.about}>
        I have both frontend and backend knowledge which helps me build complete
        websites, gives me flexibility and a wider view. In love with React.js.
      </p>
    </div>
  );
}
