/*import React from "react";
import "./FlipTransitionOverlay.css";

export default function FlipTransitionOverlay() {
  return (
    <div className="transition-overlay">
      <div className="flip-square"></div>
    </div>
  );
}*/

/*import React, { useEffect, useState } from "react";
import "./FlipTransitionOverlay.css";

export default function FlipTransitionOverlay({ onFadeComplete }) {
  const [fading, setFading] = useState(false);

  // Trigger fade when parent tells us
  const startFade = () => setFading(true);

  useEffect(() => {
    if (fading) {
      const timer = setTimeout(() => {
        onFadeComplete(); // notify parent to remove overlay
      }, 500); // duration of fade-out in CSS
      return () => clearTimeout(timer);
    }
  }, [fading, onFadeComplete]);

  return (
    <div
      className={`transition-overlay ${fading ? "fade-out" : ""}`}
    >
      <div className="flip-square"></div>
    </div>
  );
}*/

/*import React, { useEffect, useState } from "react";
import "./FlipTransitionOverlay.css";

export default function FlipTransitionOverlay({ fading, onFadeComplete }) {
  const [showSquare, setShowSquare] = useState(true);

  // Handle fade completion
  useEffect(() => {
    if (fading) {
      // Wait for a short fade-out transition (optional)
      const timer = setTimeout(() => {
        setShowSquare(false);
        if (onFadeComplete) onFadeComplete();
      }, 300); // fade-out duration in ms
      return () => clearTimeout(timer);
    }
  }, [fading, onFadeComplete]);

  return (
    <>
      { Background overlay, only visible before fade }
      {!fading && <div className="transition-overlay" />}

      { Gold spinner square }
      {showSquare && <div className="flip-square" />}
    </>
  );
}*/


/*import React, { useEffect, useState } from "react";
import "./FlipTransitionOverlay.css";

export default function FlipTransitionOverlay({ fading, onFadeComplete }) {
  const [showSquare, setShowSquare] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  // Fade the white overlay
  useEffect(() => {
    if (fading) {
      const overlayTimer = setTimeout(() => setShowOverlay(false), 300);
      return () => clearTimeout(overlayTimer);
    }
  }, [fading]);

  // Hide gold square after overlay fade + buffer
  useEffect(() => {
    if (fading) {
      const squareTimer = setTimeout(() => {
        setShowSquare(false);
        if (onFadeComplete) onFadeComplete();
      }, 500); // 500ms buffer after fade
      return () => clearTimeout(squareTimer);
    }
  }, [fading, onFadeComplete]);

  return (
    <>
      {showOverlay && <div className="transition-overlay" />}
      {showSquare && <div className="flip-square" />}
    </>
  );
}*/


import React, { useEffect, useState } from "react";
import "./FlipTransitionOverlay.css";

export default function FlipTransitionOverlay({ fading, onComplete }) {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [squareVisible, setSquareVisible] = useState(true);
  const [squareFading, setSquareFading] = useState(false);

  useEffect(() => {
    if (!fading) return;

    const overlayTimer = setTimeout(() => {
      setOverlayVisible(false);
    }, 300);

    const squareFadeTimer = setTimeout(() => {
      setSquareFading(true);
    }, 600);

    const cleanupTimer = setTimeout(() => {
      setSquareVisible(false);
      onComplete?.();
    }, 900);

    return () => {
      clearTimeout(overlayTimer);
      clearTimeout(squareFadeTimer);
      clearTimeout(cleanupTimer);
    };
  }, [fading, onComplete]);

  return (
    <>
      {overlayVisible && (
        <div className={`transition-overlay ${fading ? "overlay-fade-out" : ""}`} />
      )}

      {squareVisible && (
        <div className={`flip-square ${squareFading ? "square-fade-out" : ""}`} />
      )}
    </>
  );
}



