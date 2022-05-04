import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import s from "./Technologies.module.scss";
import Section from "../Section/Section";

export default function Technologies() {
  return (
    <Section title="Technologies">
      <div className={s.grid}>
        <div className={s.info}>
          <p>Here are few technologies I am familarized with:</p>
          <div className={s.list_container}>
            <ul>
              <li>
                Javascript <FontAwesomeIcon icon={faJs} />
              </li>
              <li>Typescript</li>
              <li>
                Node.js <FontAwesomeIcon icon={faNodeJs} />
              </li>
              <li>Express</li>
            </ul>
            <ul>
              <li>
                React <FontAwesomeIcon icon={faReact} />
              </li>
              <li>Redux</li>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>

        <div className={s.info}>
          <p>And here are few technologies I want to learn:</p>
          <div className={s.list_container}>
            <ul>
              <li>
                Python <FontAwesomeIcon icon={faPython} />
              </li>
              <li>Deno</li>
              <li>Django</li>
              <li>Web3</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
