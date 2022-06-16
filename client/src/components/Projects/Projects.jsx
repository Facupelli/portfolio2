import React from "react";
import Project from "./Project/Project";
import cuyo from "../../images/cuyo.png";
import Section from "../Section/Section";
import"./style.scss";

export default function Projects({ projectsRef, setSeeMore, seeMore }) {
  const handleSeeMore = () => {
    setSeeMore(true);
  };

  return (
    <Section title="Projects">
      <div id="projects-section" ref={projectsRef} style={{ scrollMargin: 100 }}>
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
          <p>
            In my last project at Henry Bootcamp, I worked with 7 teammates both
            in the Frontend and Backend. Post a service, add it to favorites,
            buy a service and rate it among other functions. As the Admin, you
            can view all kinds of statistics related to users and the services.
          </p>
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
          <p>
            This project is like a social network for beer homebrewers. Share
            your recipes and get feedback with a score and a comment. Post a
            recipe, where the OG, FG, ABV, and SRM are calculated automatically,
            add it to favorites, comment, and rate it. Search recipes by name,
            style among others.
          </p>
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
          <p>
            This was my first full-stack experience at Henry Bootcamp. The Dogg
            App is a SPA (Single Page Application) that consumes data of an API.
            Find all dog breeds, search breeds by name, filter breeds by
            temperament and sort them by weight or alphabetically.
          </p>
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
