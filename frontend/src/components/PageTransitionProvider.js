//Spin once
/*import React, {
  createContext,
  useContext,
  useState,
  useCallback
} from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import FlipTransitionOverlay from "./FlipTransitionOverlay";

// ---- CREATE CONTEXT ----
const TransitionContext = createContext();

// ---- CUSTOM HOOK ----
export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isTransitioning, setIsTransitioning] = useState(false);

  // Enhanced: prevent infinite-spin when clicking the link to the *current* page
  const navigateWithTransition = useCallback(
    (to) => {
      if (to === location.pathname) {
        // do NOT start animation again
        return;
      }

      setIsTransitioning(true);
      navigate(to);
    },
    [navigate, location.pathname]
  );

  const finishTransition = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  return (
    <TransitionContext.Provider
      value={{ navigateWithTransition, finishTransition }}
    >
      {children}

      {isTransitioning && <FlipTransitionOverlay />}
    </TransitionContext.Provider>
  );
}*/


//Spin till page loads
/*import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FlipTransitionOverlay from "./FlipTransitionOverlay";

// ---- CREATE CONTEXT ----
const TransitionContext = createContext();

// ---- CUSTOM HOOK ----
export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Enhanced: prevent infinite-spin when clicking the link to the *current* page
  const navigateWithTransition = useCallback(
    (to) => {
      if (to === location.pathname) return;

      setIsTransitioning(true); // show overlay
      navigate(to);
    },
    [navigate, location.pathname]
  );

  const finishTransition = useCallback(() => {
    setIsTransitioning(false); // hide overlay
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
  }, []);

  // Automatically finish transition after navigation + "page ready"
  useEffect(() => {
    if (isTransitioning) {
      // Wait for a tick so page can render fully
      const timer = setTimeout(() => {
        finishTransition();
      }, 100); // you can adjust 100ms if needed

      return () => clearTimeout(timer);
    }
  }, [location.pathname, isTransitioning, finishTransition]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, finishTransition }}>
      {children}
      {isTransitioning && <FlipTransitionOverlay />}
    </TransitionContext.Provider>
  );
}*/

//Spin once or till page loads, whichever happens last
/*import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FlipTransitionOverlay from "./FlipTransitionOverlay";

// ---- CREATE CONTEXT ----
const TransitionContext = createContext();

// ---- CUSTOM HOOK ----
export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cycleCompletedRef = useRef(false); // has one animation cycle completed?
  const pageReadyRef = useRef(false);      // has page rendered?

  const ANIMATION_DURATION = 1700; // 1.7s per CSS flip cycle

  const navigateWithTransition = useCallback(
    (to) => {
      if (to === location.pathname) return;

      setIsTransitioning(true);
      cycleCompletedRef.current = false;
      pageReadyRef.current = false;

      // Ensure at least one animation cycle completes
      setTimeout(() => {
        cycleCompletedRef.current = true;
        if (pageReadyRef.current) finishTransition();
      }, ANIMATION_DURATION);

      navigate(to);
    },
    [navigate, location.pathname]
  );

  const finishTransition = useCallback(() => {
    setIsTransitioning(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Track page render / navigation completion
  useEffect(() => {
    if (isTransitioning) {
      // Tick ensures the page actually renders before finishing
      const timer = setTimeout(() => {
        pageReadyRef.current = true;
        if (cycleCompletedRef.current) finishTransition();
      }, 50); // tiny delay for DOM render
      return () => clearTimeout(timer);
    }
  }, [location.pathname, isTransitioning, finishTransition]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, finishTransition }}>
      {children}
      {isTransitioning && <FlipTransitionOverlay />}
    </TransitionContext.Provider>
  );
}*/

//Spin once or till page loads, whichever happens last. Smoother fade.
/*import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FlipTransitionOverlay from "./FlipTransitionOverlay";

const TransitionContext = createContext();
export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeOverlay, setFadeOverlay] = useState(false);

  const cycleCompletedRef = useRef(false);
  const pageReadyRef = useRef(false);

  const ANIMATION_DURATION = 1700; // 1.7s

  const navigateWithTransition = useCallback(
    (to) => {
      if (to === location.pathname) return;

      setIsTransitioning(true);
      setFadeOverlay(false);
      cycleCompletedRef.current = false;
      pageReadyRef.current = false;

      // Wait at least one full animation cycle
      setTimeout(() => {
        cycleCompletedRef.current = true;
        if (pageReadyRef.current) setFadeOverlay(true);
      }, ANIMATION_DURATION);

      navigate(to);
    },
    [navigate, location.pathname]
  );

  const finishTransition = useCallback(() => {
    setIsTransitioning(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // When the page finishes rendering
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        pageReadyRef.current = true;
        if (cycleCompletedRef.current) setFadeOverlay(true);
      }, 50); // tiny tick for DOM render
      return () => clearTimeout(timer);
    }
  }, [location.pathname, isTransitioning]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, finishTransition }}>
      {children}

      {isTransitioning && (
        <FlipTransitionOverlay onFadeComplete={finishTransition} fading={fadeOverlay} />
      )}
    </TransitionContext.Provider>
  );
}*/


//Spin once or till a few hundred ms after page loads whichever comes later. Smoother fade
/*import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FlipTransitionOverlay from "./FlipTransitionOverlay";

const TransitionContext = createContext();
export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeOverlay, setFadeOverlay] = useState(false);

  // Refs to track conditions
  const cycleCompletedRef = useRef(false);
  const pageReadyRef = useRef(false);

  const ANIMATION_DURATION = 1700; // 1 full cycle in ms
  const POST_LOAD_DELAY = 300;     // wait after page load before fading

  const navigateWithTransition = useCallback(
    (to) => {
      if (to === location.pathname) return;

      setIsTransitioning(true);
      setFadeOverlay(false);
      cycleCompletedRef.current = false;
      pageReadyRef.current = false;

      // Start the animation cycle timer
      setTimeout(() => {
        cycleCompletedRef.current = true;
        // if page is ready and cycle done, start fade
        if (pageReadyRef.current) setFadeOverlay(true);
      }, ANIMATION_DURATION);

      navigate(to);
    },
    [navigate, location.pathname]
  );

  const finishTransition = useCallback(() => {
    setIsTransitioning(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Detect when page is "ready" (a tick after render)
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        pageReadyRef.current = true;

        // wait POST_LOAD_DELAY after page ready
        setTimeout(() => {
          if (cycleCompletedRef.current) setFadeOverlay(true);
        }, POST_LOAD_DELAY);

      }, 50); // tiny tick for DOM render
      return () => clearTimeout(timer);
    }
  }, [location.pathname, isTransitioning]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, finishTransition }}>
      {children}

      {isTransitioning && (
        <FlipTransitionOverlay onFadeComplete={finishTransition} fading={fadeOverlay} />
      )}
    </TransitionContext.Provider>
  );
}*/


//Spin once or till a few hundred ms after page loads whichever comes later. Smoother fade. White bg decoupled from gold square
/*import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FlipTransitionOverlay from "./FlipTransitionOverlay";

// ---- CREATE CONTEXT ----
const TransitionContext = createContext();

// ---- CUSTOM HOOK ----
export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  // --- State ---
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeOverlay, setFadeOverlay] = useState(false);

  // --- Navigate with transition ---
  const navigateWithTransition = useCallback(
    (to) => {
      if (to === location.pathname) return; // prevent infinite spin on same page

      setIsTransitioning(true);  // show overlay + square
      setFadeOverlay(false);     // reset fade
      navigate(to);              // navigate immediately
    },
    [navigate, location.pathname]
  );

  // --- Finish transition ---
  const finishTransition = useCallback(() => {
    setIsTransitioning(false);  // hide everything
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
  }, []);

  // --- Manage fade + spin timing ---
  useEffect(() => {
    if (isTransitioning) {
      // Minimum spin duration (1 full cycle of 1.7s)
      const minSpinDuration = 1700; 
      // Short buffer after page loads
      const pageLoadBuffer = 300; 
      const totalMinDuration = Math.max(minSpinDuration, pageLoadBuffer);

      const timer = setTimeout(() => {
        setFadeOverlay(true);  // fade white background
      }, totalMinDuration);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning, location.pathname]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, finishTransition }}>
      {children}

      {isTransitioning && (
        <FlipTransitionOverlay
          fading={fadeOverlay}
          onFadeComplete={finishTransition}
        />
      )}
    </TransitionContext.Provider>
  );
}*/

//Spin once or till a few hundred ms after page loads whichever comes later. Old page fades out, new page fades in. White bg decoupled from gold square
/*import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FlipTransitionOverlay from "./FlipTransitionOverlay";

// ---- CONTEXT & CUSTOM HOOK ----
const TransitionContext = createContext();
export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  // --- States ---
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeOverlay, setFadeOverlay] = useState(false);

  // --- Navigate with transition ---
  const navigateWithTransition = useCallback(
    (to) => {
      if (to === location.pathname) return; // skip if same page

      setIsTransitioning(true);   // show overlay + square
      setFadeOverlay(false);      // reset fade
      navigate(to);               // navigate immediately
    },
    [navigate, location.pathname]
  );

  // --- Called when gold square completes fade + buffer ---
  const handleFadeComplete = useCallback(() => {
    setIsTransitioning(false);   // hide overlay + square
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // --- Trigger overlay fade + timing ---
  useEffect(() => {
    if (!isTransitioning) return;

    // Minimum spin duration (fraction of 1 full rotation) See duratioin in FlipTransitionOverlay.js
    const minSpinDuration = 1700;
    // Extra buffer after page loads
    const pageLoadBuffer = 350;
    // Total duration before starting fade
    const totalMinDuration = minSpinDuration + pageLoadBuffer;

    const timer = setTimeout(() => {
      setFadeOverlay(true); // trigger white overlay fade
    }, totalMinDuration);

    return () => clearTimeout(timer);
  }, [isTransitioning, location.pathname]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}

      {isTransitioning && (
        <FlipTransitionOverlay
          fading={fadeOverlay}
          onFadeComplete={handleFadeComplete}
        />
      )}
    </TransitionContext.Provider>
  );
}*/


//Spin once or till a few hundred ms after page loads whichever comes later. Old page fades out, new page fades in. White bg decoupled from gold square
/*import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FlipTransitionOverlay from "./FlipTransitionOverlay";

// ---- CONTEXT ----
const TransitionContext = createContext();

// ---- CUSTOM HOOK (THIS WAS MISSING) ----
export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeOverlay, setFadeOverlay] = useState(false);

  // Trigger transition + navigation
  const navigateWithTransition = useCallback(
    (to) => {
      if (to === location.pathname) return;

      setIsTransitioning(true);
      setFadeOverlay(false);
      navigate(to);
    },
    [navigate, location.pathname]
  );

  // Called AFTER square finishes fading
  const handleTransitionComplete = useCallback(() => {
    setIsTransitioning(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Timing: allow at least one full spin + buffer
  useEffect(() => {
    if (!isTransitioning) return;

    const minSpin = 100; // one full flip cycle (See duratioin in FlipTransitionOverlay.js)
    const buffer = 100;

    const timer = setTimeout(() => {
      setFadeOverlay(true); // trigger white overlay fade
    }, minSpin + buffer);

    return () => clearTimeout(timer);
  }, [isTransitioning, location.pathname]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}

      {isTransitioning && (
        <FlipTransitionOverlay
          fading={fadeOverlay}
          onComplete={handleTransitionComplete}
        />
      )}
    </TransitionContext.Provider>
  );
}*/


//Spin once or till a few hundred ms after page loads whichever comes later. Old page fades out, new page fades in. White bg decoupled from gold square
//Included in page refresh and browser back button
/*import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FlipTransitionOverlay from "./FlipTransitionOverlay";

// ---- CONTEXT ----
const TransitionContext = createContext();

// ---- CUSTOM HOOK ----
export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeOverlay, setFadeOverlay] = useState(false);

  // Track previous location
  const prevPathRef = useRef(location.pathname);
  const manualNavRef = useRef(false);

  // ---- PROGRAMMATIC NAVIGATION ----
  const navigateWithTransition = useCallback(
    (to) => {
      if (to === location.pathname) return;

      manualNavRef.current = true;
      setIsTransitioning(true);
      setFadeOverlay(false);
      navigate(to);
    },
    [navigate, location.pathname]
  );

  // ---- TRANSITION COMPLETE ----
  const handleTransitionComplete = useCallback(() => {
    setIsTransitioning(false);
    manualNavRef.current = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // ---- DETECT BACK / FORWARD / REFRESH ----
  useEffect(() => {
    if (prevPathRef.current === location.pathname) return;

    // Trigger transition if navigation was NOT manual
    if (!manualNavRef.current) {
      setIsTransitioning(true);
      setFadeOverlay(false);
    }

    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  // ---- TIMING CONTROL ----
  useEffect(() => {
    if (!isTransitioning) return;

    const minSpin = 100; // must match FlipTransitionOverlay timing
    const buffer = 100;

    const timer = setTimeout(() => {
      setFadeOverlay(true);
    }, minSpin + buffer);

    return () => clearTimeout(timer);
  }, [isTransitioning]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}

      {isTransitioning && (
        <FlipTransitionOverlay
          fading={fadeOverlay}
          onComplete={handleTransitionComplete}
        />
      )}
    </TransitionContext.Provider>
  );
}*/


//Spin once or till a few hundred ms after page loads whichever comes later. Old page fades out, new page fades in. White bg decoupled from gold square
//Included in page refresh and browser back button
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FlipTransitionOverlay from "./FlipTransitionOverlay";

// ---- CONTEXT ----
const TransitionContext = createContext();

// ---- CUSTOM HOOK ----
export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeOverlay, setFadeOverlay] = useState(false);

  const prevPathRef = useRef(location.pathname);
  const manualNavRef = useRef(false);
  const hasMountedRef = useRef(false);

  // ---- PROGRAMMATIC NAVIGATION ----
  const navigateWithTransition = useCallback(
    (to) => {
      if (to === location.pathname) return;

      manualNavRef.current = true;
      setIsTransitioning(true);
      setFadeOverlay(false);
      navigate(to);
    },
    [navigate, location.pathname]
  );

  // ---- TRANSITION COMPLETE ----
  const handleTransitionComplete = useCallback(() => {
    setIsTransitioning(false);
    manualNavRef.current = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // ---- INITIAL LOAD (REFRESH / DIRECT ENTRY) ----
  useEffect(() => {
    if (hasMountedRef.current) return;

    hasMountedRef.current = true;
    setIsTransitioning(true);
    setFadeOverlay(false);
  }, []);

  // ---- BACK / FORWARD NAVIGATION ----
  useEffect(() => {
    if (prevPathRef.current === location.pathname) return;

    if (!manualNavRef.current) {
      setIsTransitioning(true);
      setFadeOverlay(false);
    }

    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  // ---- TIMING CONTROL ----
  useEffect(() => {
    if (!isTransitioning) return;

    const minSpin = 100;
    const buffer = 100;

    const timer = setTimeout(() => {
      setFadeOverlay(true);
    }, minSpin + buffer);

    return () => clearTimeout(timer);
  }, [isTransitioning]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}

      {isTransitioning && (
        <FlipTransitionOverlay
          fading={fadeOverlay}
          onComplete={handleTransitionComplete}
        />
      )}
    </TransitionContext.Provider>
  );
}

