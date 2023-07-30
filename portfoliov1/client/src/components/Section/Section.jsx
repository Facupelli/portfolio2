import React from "react";
import "./style.scss";

export default function Section({ title, children }) {
  return (
    <section
      id="section-container"
      className="section-container"
      data-scroll-section
    >
      <div
        className={
          title === "Technologies" || title === "Freelance"
            ? "title-wrapper-1"
            : "title-wrapper"
        }
      >
        <h1
          className={
            title === "Technologies" || title === "Freelance"
              ? "title-left"
              : "title-right"
          }
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={
            title === "Technologies" || title === "Freelance" ? "-10" : "10"
          }
          data-scroll-taget="#section-container"
        >
          .{title}
        </h1>
      </div>
      {children}
    </section>
  );
}
