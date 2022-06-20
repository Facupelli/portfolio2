import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import LinkComponent from "../../Link/Link";

import "./style.scss";

export default function FreelanceCard({
  img1,
  img2,
  title,
  children,
  techs,
  github,
  deploy,
}) {
  return (
    <article className="container">
      <div className="links_mobile">
        <LinkComponent href={github}>
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </LinkComponent>
        <LinkComponent href={deploy}>
          <FontAwesomeIcon icon={faExternalLink} className="icon" />
        </LinkComponent>
      </div>
      <div className="img_container" data-scroll>
        <img src={img1} alt="project" className="img1" />
        <img src={img2} alt="project" className="img2" />
      </div>
      <div className="description_container">
        <h1 className="title">{title}</h1>
        <div className="links">
          <LinkComponent href={github}>
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </LinkComponent>
          <LinkComponent href={deploy}>
            <FontAwesomeIcon icon={faExternalLink} className="icon" />
          </LinkComponent>
        </div>
        {children}
        <ul className="techs_list">
          {techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
