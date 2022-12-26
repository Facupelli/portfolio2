import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCodeBranch,
  faCodeCommit,
  faTerminal,
  faCodeFork,
  faCodeMerge,
  faCodePullRequest,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./style.scss";

export default function MyName() {
  return (
    <section id="container" data-scroll-section>
      <div id="icons-wrapper">
        <div className="code" data-scroll data-scroll-speed="2">
          <FontAwesomeIcon icon={faCode} className="code-icon" />
        </div>
        <div className="branch" data-scroll data-scroll-speed="6">
          <FontAwesomeIcon icon={faCodeBranch} className="code-icon " />
        </div>
        <div className="commit" data-scroll data-scroll-speed="4">
          <FontAwesomeIcon
            icon={faCodeCommit}
            className="code-icon rotate-minus-30"
          />
        </div>
        <div className="terminal" data-scroll data-scroll-speed="9">
          <FontAwesomeIcon icon={faTerminal} className="code-icon " />
        </div>
        <div className="fork " data-scroll data-scroll-speed="3.5">
          <FontAwesomeIcon icon={faCodeFork} className="code-icon rotate-30" />
        </div>
        <div className="merge" data-scroll data-scroll-speed="7">
          <FontAwesomeIcon icon={faCodeMerge} className="code-icon " />
        </div>
        <div className="pull-request" data-scroll data-scroll-speed="5.5">
          <FontAwesomeIcon
            icon={faCodePullRequest}
            className="code-icon rotate-30"
          />
        </div>

        <div id="intro-wrapper">
          <p className="hi">Hi, I'm</p>
          <h1 className="name">FACUNDO PELLICER.</h1>
          <p
            className="dev"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#icons-wrapper"
          >
            FULL STACK DEVELOPER.
          </p>
          <p className="about">
            I have both frontend and backend knowledge which helps me build
            complete websites, gives me flexibility and a wider view. In love
            with React.js.
          </p>
        </div>
      </div>
    </section>
  );
}
