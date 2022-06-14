import React from "react";
import s from "./Section.module.scss";

export default function Section({ title, children }) {
  return (
    <section className={s.container}>
      <div className={s.title}>
        <p>{title.toUpperCase()}</p>
      </div>
      {children}
    </section>
  );
}
