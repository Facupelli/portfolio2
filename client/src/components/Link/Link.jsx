import React from "react";
import s from "./Link.module.scss";

export default function LinkComponent({ children, href, color }) {
  return (
    <>
      {color === "celeste" ? (
        <a
          className={s.link_celeste}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <a
          className={s.link_font_color}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )}
    </>
  );
}
