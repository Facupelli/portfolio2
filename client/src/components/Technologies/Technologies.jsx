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
      <div id="techs-section" ref={techsRef} style={{ scrollMargin: 100 }}>
        <div className="info">
          <p>Here are few technologies I am familiarized with:</p>
          <div className="list-container">
            <ul>
              <li className="react" data-scroll>
                React <FontAwesomeIcon icon={faReact} />
              </li>
              <li className="next" data-scroll>
                Next.js
              </li>
              <li className="redux" data-scroll>
                Redux
              </li>
              <li className="type" data-scroll>
                Typescript
              </li>
            </ul>
            <ul>
              <li className="node" data-scroll>
                Node.js <FontAwesomeIcon icon={faNodeJs} />
              </li>
              {/* <li className="js" data-scroll>
                Javascript <FontAwesomeIcon icon={faJs} />
              </li> */}
              <li className="express" data-scroll>
                Express
              </li>
              <li className="psql" data-scroll>
                PostgreSQL
              </li>
              <li className="mongo" data-scroll>
                MongoDB
              </li>
            </ul>
          </div>
        </div>

        <div className="info">
          <p>And here are few technologies I want to learn:</p>
          <div className="list-container">
            <ul>
              <li className="py" data-scroll>
                Python <FontAwesomeIcon icon={faPython} />
              </li>
              <li className="deno" data-scroll>
                Deno
              </li>
              <li className="dj" data-scroll>
                Django
              </li>
              <li className="web3" data-scroll>
                Web3
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
