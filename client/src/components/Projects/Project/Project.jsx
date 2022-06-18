import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import LinkComponent from "../../Link/Link";

import "./style.scss";

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
    <div className="project" data-scroll>
      <div className="first_column">
        <div>
          <div className="project-title" data-scroll>
            <p>{title}</p>
            <p>{subtitle}</p>
          </div>
          <div className="links">
            <LinkComponent href={github}>
              <FontAwesomeIcon icon={faGithub} />
            </LinkComponent>
            <LinkComponent href={deploy}>
              <FontAwesomeIcon icon={faExternalLink} />
            </LinkComponent>
          </div>
        </div>
        <div className="description" data-scroll>
          {children}
        </div>
      </div>
      <div className="image_container">
        <img src={img} alt="foto1" data-scroll />
      </div>
      <div className="techs">
        {techs && techs.map((tech) => <p key={tech}>{tech}</p>)}
      </div>
    </div>
  );
}
