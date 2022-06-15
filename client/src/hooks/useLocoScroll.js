import { useEffect } from "react";
import imagesLoaded from "imagesloaded";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) {
      return;
    }

    const scrollEl = document.querySelector("#main-column");

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      reloadOnContextChange: true,
      smartphone: {
        smooth: true,
        direction: "vertical",
      },
      // tablet: {
      //   smooth: true,
      //   breakpoint: 0,
      // },
      // lerp: 0.1,
      //   class: "is-reveal",
    });

    console.log("new");

    imagesLoaded(scrollEl, { background: true }, function () {
      locoScroll.update();
    });
  }, [start]);
}
