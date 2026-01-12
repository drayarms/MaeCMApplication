import React, { useEffect, useRef } from "react";
import bg from "../assets/background.jpg";

export default function Hero() {
  const heroRef = useRef();

  /*useEffect(() => {
    const hero = heroRef.current;
    const items = hero.querySelectorAll(".hero-item");

    // ----- SEQUENTIAL LOAD ANIMATION -----
    items.forEach((item) => {
      const delay = Number(item.dataset.delay || 0);
      setTimeout(() => {
        item.classList.add("visible");
      }, delay);
    });

    // ----- SCROLL PARALLAX + FADE -----
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          //Background parallax (slower than page)
          const parallaxSpeed = 0.3;
          hero.style.backgroundPositionY = `${scrollY * parallaxSpeed}px`;

          //Content fade out
          const fadePoint = 200;
          const opacity = Math.max(0, 1 - scrollY / fadePoint);

          items.forEach((item) => {
            item.style.opacity = opacity;
            item.style.transform = `translateY(${20 * (1 - opacity)}px)`;
          });

          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);*/




  useEffect(() => {
    const hero = heroRef.current;
    const items = hero.querySelectorAll(".hero-item");

    // ---- SEQUENTIAL LOAD ----
    items.forEach((item) => {
      const delay = Number(item.dataset.delay || 0);
      setTimeout(() => item.classList.add("visible"), delay);
    });

    // ---- PARALLAX ----
    const speed = 0.5;
    const maxOffset = 120; // hard clamp (px)
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Clamp parallax movement
          const offset = Math.min(scrollY * speed, maxOffset);
          hero.style.setProperty("--bg-offset", `${offset}px`);

          // Fade content only
          const fadePoint = 200;
          const opacity = Math.max(0, 1 - scrollY / fadePoint);

          items.forEach((item) => {
            item.style.opacity = opacity;
            item.style.transform = `translateY(${20 * (1 - opacity)}px)`;
          });

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
      className="hero-panel d-flex align-items-center justify-content-center font-style"
      
      style={{
        "--hero-bg": `url(${bg})`,
      }}
    >

      <div className="hero-overlay hero-content">
        <div className="hero-item gold-caption" data-delay="1600">
          What We Do
        </div>

        <div className="hero-item big-bold-white-caption" data-delay="1750">
          Innovative Construction
        </div>

        <div className="hero-item gracefull-white-caption" data-delay="1900">
          We are constantly improving to keep up with technology and our industry.
        </div>

        <div className="hero-item" data-delay="450">
          <a href="/services" className="gold-button">
            OUR SERVICES
          </a>
        </div>
      </div>


    </section>
  );
}
