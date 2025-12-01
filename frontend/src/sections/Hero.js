import React, { useEffect, useRef } from "react";
import bg from "../assets/background.jpg";

export default function Hero() {
  const heroRef = useRef();

  useEffect(() => {
    const el = heroRef.current;
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          // move background at ~half the rate
          el.style.backgroundPositionY = `${-scrolled * -0.5}px`;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-panel d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${bg})`,
        height: "600px",
      }}
    >
      <div className="hero-overlay text-center">
        <h1 className="display-4">Welcome to MC</h1>
        <p className="lead">We build amazing things</p>
      </div>
    </section>
  );
}
