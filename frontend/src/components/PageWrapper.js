/*import React, { useEffect, useState } from "react";
import { usePageTransition } from "./PageTransitionProvider";
import { useLocation } from "react-router-dom";
//import "./PageParallax.css";
import "./PageFade.css";

const EXIT_DURATION = 550;
const ENTER_DURATION = 800;
const FLIP_MIN_TIME = 500;

export default function PageWrapper({ children }) {
  const { finishTransition } = usePageTransition();
  const location = useLocation();

  const [animState, setAnimState] = useState("page-enter-active");

  useEffect(() => {
    // Phase 1: Old page exits with parallax + blur
    setAnimState("page-exit");

    const exitTimer = setTimeout(() => {
      // Begin flip overlay (your existing animation)
      finishTransition();

      // Phase 2: New page enters from back
      setAnimState("page-enter");

      const enterTimer = setTimeout(() => {
        setAnimState("page-enter-active");
      }, ENTER_DURATION);

      return () => clearTimeout(enterTimer);
    }, EXIT_DURATION);

    return () => clearTimeout(exitTimer);
  }, [location.pathname, finishTransition]);

  return (
    <div className="page-parallax-wrapper">
      <div className={`page-parallax ${animState}`}>
        {children}
      </div>
    </div>
  );
}*/

import React, { useEffect, useState } from "react";
import { usePageTransition } from "./PageTransitionProvider";
import { useLocation } from "react-router-dom";
import "./PageFade.css";

const EXIT_DURATION = 550;
const ENTER_DURATION = 800;

export default function PageWrapper({ children }) {
  const { navigateWithTransition } = usePageTransition(); // <-- no finishTransition
  const location = useLocation();

  const [animState, setAnimState] = useState("page-enter-active");

  useEffect(() => {
    // Phase 1: Old page exits
    setAnimState("page-exit");

    const exitTimer = setTimeout(() => {
      // Phase 2: New page enters
      setAnimState("page-enter");

      const enterTimer = setTimeout(() => {
        setAnimState("page-enter-active");
      }, ENTER_DURATION);

      return () => clearTimeout(enterTimer);
    }, EXIT_DURATION);

    return () => clearTimeout(exitTimer);
  }, [location.pathname]);

  return (
    <div className="page-parallax-wrapper">
      <div className={`page-parallax ${animState}`}>
        {children}
      </div>
    </div>
  );
}



