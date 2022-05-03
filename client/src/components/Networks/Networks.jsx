import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import s from "./Networks.module.scss";

export default function Networks() {
  return (
    <div className={s.container}>
      <div>
        <FontAwesomeIcon icon={faInstagram} />
        <p>-</p>
        <FontAwesomeIcon icon={faTwitter} />
        <p>-</p>
        <FontAwesomeIcon icon={faLinkedinIn} />
        <p>-</p>
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  );
}
