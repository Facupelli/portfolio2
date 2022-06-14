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
          techs={["Next.js", "React", "Sass", "MongoDB", "Mongoose"]}
          img={alalaCampo}
          github="https://github.com/Facupelli/AlalaCampo"
          deploy="https://www.alalacampo.com/"
        >
          <p>
            Designed this site for Alala Campo. It is a place were there are
            three country houses for rent. Now customers can view the place
            before they go, check availability and have contact. The owner can
            access as admin and book dates on the calendar for each house.
            Responsive design.
          </p>
        </Project>

        <Project
          title="DONUTS HOMERO"
          subtitle="info website"
          techs={[
            "Next.js",
            "Sass",
            "Redux-toolkit",
            "Prisma",
            "Supabase",
            "PostgreSQL",
          ]}
          img={donutshomero}
          github="https://github.com/Facupelli/donutshomero"
          deploy="https://donutshomero.vercel.app/"
        >
          <p>
            This app is a donut e-commerce. It handles stock and users.
            Customers can now buy donuts online. The company owner has admin
            access where he can view and control the stock and the orders which
            are updated in real-time with each purchase made on the site.
            Responsive design.
          </p>
        </Project>
      </div>
    </Section>
  );
}
