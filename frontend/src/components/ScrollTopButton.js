import React, { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 100);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className={`scroll-top-btn btn-round ${show ? "visible" : ""}`}
      onClick={scrollTop}
      aria-label="Scroll to top"
    >
      <span className="arrow-up">↑</span>
    </button>
  );
}
