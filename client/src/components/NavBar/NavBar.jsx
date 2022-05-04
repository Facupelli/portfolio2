import React from "react";
import s from "./NavBar.module.scss";

export default function NavBar({
  aboutRef,
  techsRef,
  projectsRef,
  freelanceRef,
  contactRef,
}) {
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ top: 100, behavior: "smooth" });
  };

  return (
    <nav className={s.container}>
      <div className={s.logo}>
        <span>Pelli</span>
        <p>dev</p>
      </div>
      <div className={s.pages}>
        <div className={s.page}>
          <span onClick={() => handleScroll(aboutRef)}>About Me</span>
        </div>
        <div className={s.page}>
          <span onClick={() => handleScroll(techsRef)}>Technologies</span>
        </div>
        <div className={s.page}>
          <span onClick={() => handleScroll(projectsRef)}>Projects</span>
        </div>
        <div className={s.page}>
          <span onClick={() => handleScroll(freelanceRef)}>Freelance</span>
        </div>
        <div className={s.page}>
          <span onClick={() => handleScroll(contactRef)}>Contact</span>
        </div>
      </div>
    </nav>
  );
}
