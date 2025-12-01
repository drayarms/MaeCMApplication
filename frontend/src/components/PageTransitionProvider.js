/*
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const TransitionContext = createContext();

export function usePageTransition() {
  return useContext(TransitionContext);
}

export default function PageTransitionProvider({ children }) {
  const [animating, setAnimating] = useState(false);
  const navigate = useNavigate();

  function transitionTo(path) {
    // start animation
    setAnimating(true);
    // wait 700ms (animation visible) then go
    setTimeout(() => {
      navigate(path);
      // keep animation briefly while new page mounts, then stop
      setTimeout(() => setAnimating(false), 350);
    }, 700);
  }

  return (
    <TransitionContext.Provider value={{ transitionTo }}>
      {children}
      {animating && <FlipAnimationOverlay />}
    </TransitionContext.Provider>
  );
}

function FlipAnimationOverlay() {
  return (
    <div className="transition-overlay">
      <div className="flip-square" />
    </div>
  );
}
*/


/*TIMED import React, { createContext, useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FlipTransitionOverlay from "./FlipTransitionOverlay";

const TransitionContext = createContext();
export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateWithTransition = useCallback(
    (to) => {
      setIsTransitioning(true);

      // Run animation for 900ms before navigating
      setTimeout(() => {
        navigate(to);

        // Keep overlay visible another 700ms after route change
        setTimeout(() => {
          setIsTransitioning(false);
        }, 700);
      }, 900);
    },
    [navigate]
  );

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      {isTransitioning && <FlipTransitionOverlay />}
    </TransitionContext.Provider>
  );
}*/

/*INDEFINITE SPIN IF SAME PAGE
import React, { createContext, useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FlipTransitionOverlay from "./FlipTransitionOverlay";

const TransitionContext = createContext();
export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateWithTransition = useCallback(
    (to) => {
      // Show overlay immediately
      setIsTransitioning(true);

      // Navigate
      navigate(to);
      // We no longer hide it automatically
      // The new page should call finishTransition()
    },
    [navigate]
  );

  // To be called by the page when it has finished rendering/loading
  const finishTransition = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, finishTransition }}>
      {children}
      {isTransitioning && <FlipTransitionOverlay />}
    </TransitionContext.Provider>
  );
}*/



import React, {
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
}


