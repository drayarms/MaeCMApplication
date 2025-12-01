/*import React, { useEffect } from "react";
import { usePageTransition } from "./PageTransitionProvider";
import { useLocation } from "react-router-dom";

export default function PageWrapper({ children }) {
  const { finishTransition } = usePageTransition();
  const location = useLocation();

  useEffect(() => {
    // Finish the transition automatically whenever the route changes
    finishTransition();
  }, [location.pathname, finishTransition]);

  return <>{children}</>;
}
*/

/* NO PAGE FADE
import React, { useEffect } from "react";
import { usePageTransition } from "./PageTransitionProvider";
import { useLocation } from "react-router-dom";

const MIN_ANIMATION_TIME = 500; // 0.4s in milliseconds

export default function PageWrapper({ children }) {
  const { finishTransition } = usePageTransition();
  const location = useLocation();

  useEffect(() => {
    // Ensure the overlay spins at least one full cycle
    const timer = setTimeout(() => {
      finishTransition();
    }, MIN_ANIMATION_TIME);

    return () => clearTimeout(timer);
  }, [location.pathname, finishTransition]);

  return <>{children}</>;
}
*/

/*FADE IN BUT NO FADE OUT
import React, { useEffect, useState } from "react";
import { usePageTransition } from "./PageTransitionProvider";
import { useLocation } from "react-router-dom";
import "./PageFade.css";

const MIN_ANIMATION_TIME = 500;

export default function PageWrapper({ children }) {
  const { finishTransition } = usePageTransition();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. When route changes, start hidden
    setIsVisible(false);

    // 2. Allow flip animation to show for minimum time
    const timer = setTimeout(() => {
      finishTransition();
      // After overlay disappears, fade content in
      setIsVisible(true);
    }, MIN_ANIMATION_TIME);

    return () => clearTimeout(timer);
  }, [location.pathname, finishTransition]);

  return (
    <div className={`page-fade ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
}*/

/*FADE-IN FADE-OUT
import React, { useEffect, useState } from "react";
import { usePageTransition } from "./PageTransitionProvider";
import { useLocation } from "react-router-dom";
import "./PageFade.css";

const FADE_DURATION = 350;
const FLIP_MIN_TIME = 500;

export default function PageWrapper({ children }) {
  const { finishTransition } = usePageTransition();
  const location = useLocation();

  const [fadeState, setFadeState] = useState("fade-in"); 
  // fade-in | fade-out

  useEffect(() => {
    // 1. When the route changes → start fading OUT
    setFadeState("fade-out");

    // 2. Wait for fade-out to complete, then show flip overlay
    const fadeTimer = setTimeout(() => {
      finishTransition(); // hides overlay (after flip runs)
      
      // 3. After flip finishes, fade new page IN
      setTimeout(() => {
        setFadeState("fade-in");
      }, FLIP_MIN_TIME);
    }, FADE_DURATION);

    return () => clearTimeout(fadeTimer);
  }, [location.pathname, finishTransition]);

  return (
    <div className={`page-fade ${fadeState}`}>
      {children}
    </div>
  );
}
*/

import React, { useEffect, useState } from "react";
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
}


