import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import s from "./Project.module.scss";

export default function Project({
  title,
  subtitle,
  github,
  deploy,
  description,
  techs,
  img,
}) {
  return (
    <div className={s.project}>
      <div className={s.first_column}>
        <div>
          <div className={s.project_title}>
            <p>{title}</p>
            <p>{subtitle}</p>
          </div>
          <div className={s.links}>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={deploy} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faExternalLink} />
            </a>
          </div>
        </div>
        <div className={s.description}>
          <p>{description}</p>
        </div>
        <div className={s.techs}>
          {techs && techs.map((tech) => <p key={tech}>{tech}</p>)}
        </div>
      </div>
      <div className={s.image_container}>
        <img src={img} alt="foto1" />
      </div>
    </div>
  );
}
