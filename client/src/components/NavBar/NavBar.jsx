import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import s from "./NavBar.module.scss";

export default function NavBar({
  aboutRef,
  techsRef,
  projectsRef,
  freelanceRef,
  contactRef,
}) {
  const [showPhoneNav, setShowPhoneNav] = useState(false);

  const handleClickMenu = () => {
    setShowPhoneNav(!showPhoneNav);
  };

  const handleScroll = (ref) => {
    console.log(ref)
    ref.current.scrollIntoView({ top: 100, behavior: "smooth" });
  };

  return (
    <nav className={s.container}>
      <div className={s.logo}>
        <span>Pelli</span>
        <p>dev</p>
      </div>
      <input type="checkbox" name="click" className={s.click} id="click" />
      <label htmlFor="click" className={s.icon_container}>
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleClickMenu}
          className={s.bars_icon}
        />
      </label>
      {/* <div className={s.pages}> */}
      <ul className={s.ul}>
        <li onClick={() => handleScroll(aboutRef)}>About</li>
        <li onClick={() => handleScroll(techsRef)}>Technologies</li>
        <li onClick={() => handleScroll(projectsRef)}>Projects</li>
        <li onClick={() => handleScroll(freelanceRef)}>Freelance</li>
        <li onClick={() => handleScroll(contactRef)}>Contact</li>
      </ul>
      {/* </div> */}
    </nav>
  );
}
