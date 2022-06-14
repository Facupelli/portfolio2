import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import s from "./Project.module.scss";
import LinkComponent from "../../Link/Link";

export default function Project({
  title,
  subtitle,
  github,
  deploy,
  children,
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
            <LinkComponent href={github}>
              <FontAwesomeIcon icon={faGithub} />
            </LinkComponent>
            <LinkComponent href={deploy}>
              <FontAwesomeIcon icon={faExternalLink} />
            </LinkComponent>
          </div>
        </div>
        <div className={s.description}>{children}</div>
      </div>
      <div className={s.image_container}>
        <img src={img} alt="foto1" />
      </div>
      <div className={s.techs}>
        {techs && techs.map((tech) => <p key={tech}>{tech}</p>)}
      </div>
    </div>
  );
}
