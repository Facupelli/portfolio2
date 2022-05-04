import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import todo from "../../../images/to-do.png";
import alkemy from "../../../images/alkemy.png";
import cognizant from "../../../images/cognizant.png";
import virtual from "../../../images/virtual.png";

import s from "./MoreProjects.module.scss";
import LinkComponent from "../../Link/Link";

const ProjectMore = ({ title, description, github, deploy, img }) => {
  return (
    <div className={s.relative}>
      <div className={s.card}>
        <div className={s.img_container}>
          <img src={img} alt="foto" />
        </div>
        <div className={s.info}>
          <p>{description}</p>
          <div className={s.links}>
            <LinkComponent href={github}>
              <FontAwesomeIcon icon={faGithub} />
            </LinkComponent>
            <LinkComponent href={deploy}>
              <FontAwesomeIcon icon={faExternalLink} />
            </LinkComponent>
          </div>
        </div>
      </div>
      <p className={s.app_title}>{title}</p>
    </div>
  );
};

export default function MoreProjects() {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <p>OTHER PROJECTS</p>
      </div>
      <div className={s.projects_container}>
        <ProjectMore
          title="TO-DO APP"
          description="Create folders, post to-do, mark them as complete"
          img={todo}
          deploy="https://to-do-challenge-facupelli.vercel.app/"
          github="https://github.com/Facupelli/TO-DO-Challenge"
        />

        <ProjectMore
          title="HOTEL MENU APP"
          description="Create the menu where 2 plates have to be vegan"
          img={alkemy}
          deploy="#"
          github="https://github.com/Facupelli/Frontend-Alkemy-Challenge"
        />

        <ProjectMore
          title="CHALLENGE"
          description="Interview process app "
          img={cognizant}
          deploy="https://cognizant-challenge-delta.vercel.app/"
          github="https://github.com/Facupelli/Cognizant-Challenge"
        />

        <ProjectMore
          title="VIRTUAL 360 TOUR"
          description="Create a 360 photo tour"
          img={virtual}
          deploy="https://virtual360-tour.vercel.app/"
          github="https://github.com/Facupelli/Virtual360Tour"
        />
      </div>
    </div>
  );
}
