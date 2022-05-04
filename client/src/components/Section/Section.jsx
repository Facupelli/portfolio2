import React from "react";
import s from "./Section.module.scss";

export default function Section({ title, children }) {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
}
