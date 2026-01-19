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

