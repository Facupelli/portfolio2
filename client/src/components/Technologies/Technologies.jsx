import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Section from "../Section/Section";
import "./style.scss";

export default function Technologies({ techsRef }) {
  return (
    <Section title="Technologies">
      <div id="grid" ref={techsRef} style={{ scrollMargin: 100 }}>
        <div className="info">
          <p>Here are few technologies I am familiarized with:</p>
          <div className="list-container">
            <ul>
              <li data-scroll className="js">
                Javascript <FontAwesomeIcon icon={faJs} />
              </li>
              <li data-scroll className="type">
                Typescript
              </li>
              <li data-scroll className="node">
                Node.js <FontAwesomeIcon icon={faNodeJs} />
              </li>
              <li data-scroll className="express">
                Express
              </li>
            </ul>
            <ul>
              <li data-scroll className="react">
                React <FontAwesomeIcon icon={faReact} />
              </li>
              <li data-scroll className="next">
                Next.js
              </li>
              <li data-scroll className="redux">
                Redux
              </li>
              <li data-scroll className="psql">
                PostgreSQL
              </li>
              <li data-scroll className="mongo">
                MongoDB
              </li>
            </ul>
          </div>
        </div>

        <div className="info">
          <p>And here are few technologies I want to learn:</p>
          <div className="list-container" data-scroll>
            <ul>
              <li data-scroll className="py">
                Python <FontAwesomeIcon icon={faPython} />
              </li>
              <li data-scroll className="deno">Deno</li>
              <li data-scroll className="dj">Django</li>
              <li data-scroll className="web3">Web3</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
