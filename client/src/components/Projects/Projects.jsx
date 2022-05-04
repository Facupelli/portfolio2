import React from "react";
import Project from "./Project/Project";
import cuyo from "../../images/cuyo.png";
import s from "./Projects.module.scss";
import Section from "../Section/Section";

export default function Projects({ setSeeMore, seeMore }) {
  const handleSeeMore = () => {
    setSeeMore(true);
  };

  return (
    <Section title="Projects">
      <div className={s.projects_container}>
        <Project
          title="SERVICE E-COMMERCE"
          subtitle="buy and offer services"
          description="My last project at Henry Bootcamp, I worked with 7 teammates both in the Frontend and Backend. Post a service, add a it to favourites, buy a service and rate it among other functions. As the Admin you can view all kind of statistics related to users and to the services."
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
        />

        <Project
          title="HOMEBREW RECIPE BUILDER"
          subtitle="share, rate and follow beer recipes"
          description="This project is like a social-network for beer homebrewers. Share your recipes and get feedback with a score and a comment. Post a recipe, where the OG, FG, ABV and SRM are calculated automatically, add it to favourites, comment and rate it. Search recipes by name, stlye among others."
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
        />

        <Project
          title="DOG APP (uses API)"
          subtitle="thedogapi.com"
          description="This was my first full stack experience at Henry Bootcamp. The Dogg App is a SPA (Single Page Application) that consumes data of an API. Find all dogs breeds, search breeds by name, filter breeds by temperament and sort them by weight or alphabetically."
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
        />
      </div>

      {!seeMore && (
        <div className={s.button_container}>
          <button onClick={handleSeeMore}>SEE MORE</button>
        </div>
      )}
    </Section>
  );
}
