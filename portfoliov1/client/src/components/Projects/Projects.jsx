import React from "react";
import Project from "./Project/Project";
import cuyo from "../../images/cuyo.png";
import Section from "../Section/Section";
import "./style.scss";

export default function Projects({ projectsRef, setSeeMore, seeMore }) {
  const handleSeeMore = () => {
    setSeeMore(true);
  };

  return (
    <Section title="Projects">
      <div
        id="projects-section"
        ref={projectsRef}
        style={{ scrollMargin: 100 }}
      >
        <Project
          title="SERVICE E-COMMERCE"
          subtitle="buy and offer services"
          techs={[
            "React",
            "Redux",
            "Node",
            "Express",
            "PostgreSQL",
            "Sequelize",
          ]}
          img="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785254/webservice_1_hs8uig.png"
          github="https://github.com/Facupelli/PF-WebService"
          deploy="https://pf-web-service.vercel.app/"
        >
          <ul>
            <li>Services e-commerce.</li>
            <li>We worked with the SCRUM methodology.</li>
            <li>Buy, comment and rate services.</li>
            <li>
              Designed the user panel. Both frontend and backend, among others.
            </li>
          </ul>
        </Project>

        <Project
          title="HOMEBREW RECIPE BUILDER"
          subtitle="share, rate and follow beer recipes"
          techs={[
            "React",
            "Redux",
            "Typescript",
            "Node",
            "Express",
            "MongoDB",
            "Mongoose",
          ]}
          img={cuyo}
          github="https://github.com/Facupelli/Cuyo-Brewers-Friends"
          deploy="https://cuyo-brewers-friends.vercel.app/"
        >
          <ul>
            <li>Programmed this web app for beer homebrewers.</li>
            <li>Share, comment and rate beer recipes.</li>
            <li>
              Recipe builder calculator. Parameters are calculated automatically
              according to the ingredients selected.
            </li>
            <li>
              Search recipe by users and parameters like OG, FG, IBU, etc.
            </li>
          </ul>
        </Project>

        <Project
          title="DOG APP (uses API)"
          subtitle="thedogapi.com"
          techs={[
            "React",
            "Redux",
            "Node",
            "Express",
            "PostgreSQL",
            "Sequelize",
          ]}
          img="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637709264/landing_pidogs_vqevm5.png"
          github="https://github.com/Facupelli/PI-Dogs"
          deploy="https://pi-dogs-definitive.vercel.app/"
        >
          <ul>
            <li>Single Page Application.</li>
            <li>Uses data from and API (thedogapi.com).</li>
            <li>Search dog breeds, by name.</li>
            <li>Filter and sort them by temperament and weight.</li>
            <li>Create your own dog breed.</li>
          </ul>
        </Project>
      </div>

      {!seeMore && (
        <div className="button-container">
          <button onClick={handleSeeMore}>SEE MORE</button>
        </div>
      )}
    </Section>
  );
}
