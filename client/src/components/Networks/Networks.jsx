import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import s from "./Networks.module.scss";
import LinkComponent from "../Link/Link";

export default function Networks() {
  return (
    <div className={s.container}>
      <div>
        <LinkComponent href="https://www.instagram.com/facu_pellicer/" color="celeste">
          <FontAwesomeIcon icon={faInstagram} />
        </LinkComponent>
        <p>-</p>
        <LinkComponent href="https://twitter.com/Pelliscame" color="celeste">
          <FontAwesomeIcon icon={faTwitter} />
        </LinkComponent>
        <p>-</p>
        <LinkComponent href="https://www.linkedin.com/in/facundo-pellicer-full-stack-developer/" color="celeste">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </LinkComponent>
        <p>-</p>
        <LinkComponent href="https://github.com/Facupelli" color="celeste">
          <FontAwesomeIcon icon={faGithub} />
        </LinkComponent>
      </div>
    </div>
  );
}
