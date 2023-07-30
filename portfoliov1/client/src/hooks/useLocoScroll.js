import { useEffect } from "react";
import imagesLoaded from "imagesloaded";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(start, locoScroll) {
  useEffect(() => {
    if (!start) {
      return;
    }

    const scrollEl = document.querySelector("#main-column");

    locoScroll.current = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      reloadOnContextChange: true,
      smartphone: {
        smooth: true,
        direction: "vertical",
      },
      tablet: {
        smooth: true,
      },
    });

    imagesLoaded(scrollEl, { background: true }, function () {
      locoScroll.current.update();
    });

    return () => {
      locoScroll.current?.destroy();
    };
  }, [start, locoScroll]);
}
