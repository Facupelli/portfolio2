import React from "react";
import Project from "../Projects/Project/Project";
import alalaCampo from "../../images/alalaCasa1.png";
import s from "./Freelance.module.scss";
import Section from "../Section/Section";

export default function Freelance() {
  return (
    <Section title="Freelance">
      <div className={s.works}>
        <Project
          title="ALALA CAMPO"
          subtitle="info website"
          description="This is a freelance work. The idea was to show the place, the three houses with its amenities and services, and to have a way to reach the place owner. Next features: have a calendar with availables dates to reserve the house trough the website with Mercado Pago"
          techs={["React", "Sass", "React-hook-form"]}
          img={alalaCampo}
          github="https://github.com/Facupelli/Alala-Campo"
          deploy="https://www.alalacampo.com/"
        />
      </div>
    </Section>
  );
}
