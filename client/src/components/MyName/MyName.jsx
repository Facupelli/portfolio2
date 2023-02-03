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
import s from "./MyName.module.scss";

export default function MyName() {
  return (
    <section id="container" className={s.container} data-scroll-section>
      <div id="icons-wrapper" className={s.icons_wrapper}>
        <div className={s.code} data-scroll data-scroll-speed="2">
          <FontAwesomeIcon icon={faCode} className={s.code_icon} />
        </div>
        <div className={s.branch} data-scroll data-scroll-speed="6">
          <FontAwesomeIcon icon={faCodeBranch} className={s.code_icon} />
        </div>
        <div className={s.commit} data-scroll data-scroll-speed="4">
          <FontAwesomeIcon
            icon={faCodeCommit}
            className={`${s.code_icon} ${s.rotate_minus_30}`}
          />
        </div>
        <div className={s.terminal} data-scroll data-scroll-speed="9">
          <FontAwesomeIcon icon={faTerminal} className={s.code_icon} />
        </div>
        <div className={s.fork} data-scroll data-scroll-speed="3.5">
          <FontAwesomeIcon
            icon={faCodeFork}
            className={`${s.code_icon} ${s.rotete_30}`}
          />
        </div>
        <div className={s.merge} data-scroll data-scroll-speed="7">
          <FontAwesomeIcon icon={faCodeMerge} className={s.code_icon} />
        </div>
        <div className={s.pull_request} data-scroll data-scroll-speed="5.5">
          <FontAwesomeIcon
            icon={faCodePullRequest}
            className={`${s.code_icon} ${s.rotate_minus_30}`}
          />
        </div>

        <div id="fixed_target" className={s.p_fixed_target}></div>

        <div id="intro-wrapper" className={s.intro_wrapper}>
          <p className={s.hi}>Hi, I'm</p>
          <h1 className={s.name}>FACUNDO PELLICER.</h1>
          <p
            className={s.dev}
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed_target"
          >
            FULL STACK DEVELOPER.
          </p>
          <p className={s.about}>
            I have both frontend and backend knowledge which helps me build
            complete websites, gives me flexibility and a wider view. In love
            with React.js.
          </p>
        </div>
      </div>
    </section>
  );
}
