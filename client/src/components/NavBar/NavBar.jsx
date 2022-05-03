import React from "react";
import s from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={s.container}>
      <div className={s.logo}>
        <span>Pelli</span>
      </div>
      <div className={s.pages}>
        <div className={s.page}>
          <span>About Me</span>
        </div>
        <div className={s.page}>
          <span>Technologies</span>
        </div>
        <div className={s.page}>
          <span>Projects</span>
        </div>
        <div className={s.page}>
          <span>Freelance</span>
        </div>
        <div className={s.page}>
          <span>Contact</span>
        </div>
      </div>
    </nav>
  );
}
