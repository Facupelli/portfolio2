import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import s from "./NavBar.module.scss";

export default function NavBar({ locoScroll }) {
  const handleScroll = (id) => {
    locoScroll.current.scrollTo(document.querySelector(id), {
      offset: -200,
      duration: 2000,
      easing: [0.77, 0, 0.175, 1],
    });
    // locoScroll.update()
  };
  return (
    <nav className={s.container} data-scroll-section>
      <div className={s.logo}>
        <p className={s.pelli}>
          P<span>elli</span>
        </p>
        <p className={s.dev}>dev</p>
      </div>
      <input type="checkbox" name="click" className={s.click} id="click" />
      <label htmlFor="click" className={s.icon_container}>
        <FontAwesomeIcon icon={faBars} className={s.bars_icon} />
      </label>
      {locoScroll && (
        <ul className={s.ul}>
          <li onClick={() => handleScroll("#about-section")} data-scroll-to>
            About
          </li>
          <li onClick={() => handleScroll("#techs-section")}>Technologies</li>
          <li onClick={() => handleScroll("#projects-section")}>Projects</li>
          <li onClick={() => handleScroll("#freelance-section")}>Freelance</li>
          <li onClick={() => handleScroll("#contact-section")}>Contact</li>
        </ul>
      )}
    </nav>
  );
}
