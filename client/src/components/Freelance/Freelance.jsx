import React from "react";
import Project from "../Projects/Project/Project";
import alalaCampo from "../../images/alalaCasa1.png";
import donutshomero from "../../images/donutshomero.png";
import s from "./Freelance.module.scss";
import Section from "../Section/Section";

export default function Freelance() {
  return (
    <Section title="Freelance">
      <div className={s.works}>
        <Project
          title="ALALA CAMPO"
          subtitle="info website"
          description="The idea was to show the place, the three houses with its amenities and services, and to have a way to reach the place owner. Each house has it's calendar whith available and booked dates. Admin can book dates and view info about reserved dates."
          techs={["Next.js","React", "Sass", "MongoDB", "Mongoose"]}
          img={alalaCampo}
          github="https://github.com/Facupelli/AlalaCampo"
          deploy="https://www.alalacampo.com/"
        />

        <Project
          title="DONUTS HOMERO"
          subtitle="info website"
          description="Donuts Homero produces and sell donuts. The idea was to show information about the business, promos, place and the menu. Next features: Online delivery, admin account to manage promos"
          techs={["Next.js", "React", "Sass"]}
          img={donutshomero}
          github="https://github.com/Facupelli/donutshomero"
          deploy="https://donutshomero.vercel.app/"
        />
      </div>
    </Section>
  );
}
