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



