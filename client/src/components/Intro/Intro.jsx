import React from "react";
import s from "./Intro.module.scss";

export default function Intro() {
  return (
    <div className={s.container}>
      <p className={s.hi}>Hi, my name is</p>
      <p className={s.name}>Facundo Pellicer.</p>
      <p className={s.dev}>Full Stack Developer.</p>
      <p className={s.about}>
        Im a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, Im focused on
        building accessible, human-centered products at Upstatement.
      </p>
    </div>
  );
}
