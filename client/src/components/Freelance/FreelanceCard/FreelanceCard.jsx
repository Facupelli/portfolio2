import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import s from "./FreelanceCard.module.scss";
import LinkComponent from "../../Link/Link";

export default function FreelanceCard({
  img1,
  img2,
  children,
  techs,
  github,
  deploy,
}) {
  return (
    <div className={s.container}>
      <div className={s.links_mobile}>
        <LinkComponent href={github}>
          <FontAwesomeIcon icon={faGithub} className={s.icon} />
        </LinkComponent>
        <LinkComponent href={deploy}>
          <FontAwesomeIcon icon={faExternalLink} className={s.icon} />
        </LinkComponent>
      </div>
      <div className={s.img_container}>
        <img src={img1} alt="project" className={s.img1} />
        <img src={img2} alt="project" className={s.img2} />
      </div>
      <div className={s.description_container}>
        <div className={s.links}>
          <LinkComponent href={github}>
            <FontAwesomeIcon icon={faGithub} className={s.icon} />
          </LinkComponent>
          <LinkComponent href={deploy}>
            <FontAwesomeIcon icon={faExternalLink} className={s.icon} />
          </LinkComponent>
        </div>
        {children}
        <ul className={s.techs_list}>
          {techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
