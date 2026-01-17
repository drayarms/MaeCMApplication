import React, { useEffect, useRef } from "react";
import { usePageTransition } from "../components/PageTransitionProvider";
import bg from "../assets/background.jpg";

export default function Hero() {
  const { navigateWithTransition } = usePageTransition();
  const heroRef = useRef();
  const contentRef = useRef();

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




  /*useEffect(() => {
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
  }, []);*/


  /*useEffect(() => {
    const hero = heroRef.current;
    const items = hero.querySelectorAll(".hero-item");

    // ---- SEQUENTIAL LOAD ----
    items.forEach((item) => {
      const delay = Number(item.dataset.delay || 0);
      setTimeout(() => item.classList.add("visible"), delay);
    });

    // ---- PARALLAX (RELATIVE TO HERO) ----
    const speed = 0.35;
    const maxOffset = 120;
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = hero.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Hero is visible
          if (rect.bottom > 0 && rect.top < viewportHeight) {
            const progress =
              (viewportHeight - rect.top) / (viewportHeight + rect.height);

            const offset = Math.min(progress * maxOffset * speed, maxOffset);
            hero.style.setProperty("--bg-offset", `${offset}px`);
          }

          // ---- CONTENT FADE ----
          const fadePoint = 200;
          const scrolled = Math.max(0, -rect.top);
          const opacity = Math.max(0, 1 - scrolled / fadePoint);

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
    onScroll(); // run once on load

    return () => window.removeEventListener("scroll", onScroll);
  }, []);*/


    useEffect(() => {
    const hero = heroRef.current;
    const items = hero.querySelectorAll(".hero-item");

    // ---LET ENTRANCE ANIMATION FINISH---
    const timeout = setTimeout(() => {
      items.forEach((item) => {
        item.style.transition = "none";
      });
    }, 700); //Slightly longer than 0.6s CSS transition

    // ---- SEQUENTIAL LOAD ----
    items.forEach((item) => {
      const delay = Number(item.dataset.delay || 0);
      setTimeout(() => item.classList.add("visible"), delay);
    });

    // ---- PARALLAX ----
    const speed = 0.35;
    const maxOffset = 560;
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = hero.getBoundingClientRect();
          const vh = window.innerHeight;

          if (rect.bottom > 0 && rect.top < vh) {
            const progress = Math.min(
              Math.max(-rect.top / rect.height, 0),
              1
            );

            //Background parallax
            const bgOffset = progress * maxOffset;
            hero.style.setProperty("--bg-offset", `${bgOffset}px`);

            
            //Content parallax (slower and synced)
            //const contentOffset = progress //* 60; //smaller = slower
            const contentOffset = -progress * (maxOffset * -1.01)
            contentRef.current.style.transform = `translateY(${contentOffset}px)`
            //const isMobile = window.innerWidth <= 768;
            //contentRef.current.style.transform = isMobile
              //? `translate(-50%, ${contentOffset}px)`
              //: `translateY(${contentOffset}px)`


            //Content fade
            //const opacity = 1 - progress
            const fadeSpeed = 1.4 //The larger, the faster elements fade
            const opacity = Math.max(0, 1 - progress * fadeSpeed);
            //Content FADE + DRIFT
            //const opacity = 1 - progress;
            //const drift = progress * 30; //px downward drift

            items.forEach((item) => {
              item.style.opacity = opacity;
              //item.style.transform = `translateY(${drift}px)`;

            });
          }

          ticking = false;
        });
        ticking = true;
      }
    }

    // ---- PARALLAX ----
    /*const speed = 0.35;
    const maxOffset = 360;
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = hero.getBoundingClientRect();
          const vh = window.innerHeight;

          if (rect.bottom > 0 && rect.top < vh) {
            const progress = Math.min(
              Math.max(-rect.top / rect.height, 0),
              1
            );

            const offset = progress * maxOffset;
            hero.style.setProperty("--bg-offset", `${offset}px`);





            //Content parallax (slower and synced)
            const contentOffset = progress //* 60; //smaller = slower
            contentRef.current.style.transform = `translateY(${contentOffset}px)`

            //Content fade
            const opacity = 1 - progress

            //Content FADE + DRIFT
            //const opacity = 1 - progress;
            //const drift = progress * 30; //px downward drift

            items.forEach((item) => {
              item.style.opacity = opacity;
              //item.style.transform = `translateY(${drift}px)`;

            });





          }

          ticking = false;
        });
        ticking = true;
      }
    }*/


    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const handleNav = (e, path) => {
    e.preventDefault();
    navigateWithTransition(path);
  };

  return (
    <section
      ref={heroRef}
      className="hero-panel d-flex align-items-center justify-content-center font-style"
      
      style={{
        "--hero-bg": `url(${bg})`,
      }}
    >

      <div ref={contentRef} className="hero-overlay hero-content">
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
          <a
            href="/services" className = "gold-button"
              onClick={(e) =>
              handleNav(e, "/services")
            }
          >
            OUR SERVICES
          </a>
        </div>
      </div>


    </section>
  );
}
