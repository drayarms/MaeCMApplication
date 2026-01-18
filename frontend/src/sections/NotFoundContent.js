import React from "react";
import TransitionLink from "../components/TransitionLink";

export default function NotFoundContent() {
  return (
    <div style={{ padding: "7rem 1rem", textAlign: "center" }}>
      <h2 className="section-heading">404 — Page not found</h2>

      <p className="literature" style={{ marginTop: "1rem" }}>
        The page you are looking for does not exist. It may have been moved, or removed altogether. Perhaps you can return back to the site’s homepage and see if you can find what you are looking for.
      </p>

      <div style={{ marginTop: "1.5rem", display: "inline-block" }}>
        <TransitionLink to="/" className="gold-button not-found-gold-button">
          Back Home
        </TransitionLink>
      </div>
    </div>
  );
}
