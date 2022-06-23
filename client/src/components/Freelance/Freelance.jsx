import React from "react";
import alalaCampo from "../../images/alalaCasa1.png";
import alalaHome from "../../images/alalaHome.png";
import donutshomero from "../../images/donutshomero.png";
import donutshomerocart from "../../images/donutshomerCart.png";
import Section from "../Section/Section";
import FreelanceCard from "./FreelanceCard/FreelanceCard";
import "./style.scss";

export default function Freelance({ freelanceRef }) {
  return (
    <Section title="Freelance">
      <div
        id="freelance-section"
        ref={freelanceRef}
        style={{ scrollMargin: 100 }}
      >
        <FreelanceCard
          img1={alalaHome}
          img2={alalaCampo}
          title="Alala Campo"
          techs={["Next.js", "React", "Sass", "MongoDB", "Mongoose"]}
          github="https://github.com/Facupelli/AlalaCampo"
          deploy="https://www.alalacampo.com/"
        >
          <p className="children">
            Designed this website for Alala Campo. It is a place where there are
            three country houses for rent. Now customers can view the place
            before they go, check availability and have contact. The owner can
            access as admin and book dates on the calendar for each house.
            Responsive design.
          </p>
        </FreelanceCard>

        <FreelanceCard
          img1={donutshomero}
          img2={donutshomerocart}
          title="Donuts Homero"
          techs={[
            "Next.js",
            "Sass",
            "Redux-toolkit",
            "Prisma",
            "Supabase",
            "PostgreSQL",
          ]}
          github="https://github.com/Facupelli/donutshomero"
          deploy="https://donutshomero.vercel.app/"
        >
          <p className="children">
            This app is a donut <strong>e-commerce</strong>. It handles stock
            and users. Customers can now buy donuts online. The company owner
            has admin access where he can view and control the stock and the
            orders which are updated in real-time with each purchase made on the
            site. Mercadopago and Whatsapp API integration. Responsive design.
          </p>
        </FreelanceCard>
      </div>
    </Section>
  );
}
