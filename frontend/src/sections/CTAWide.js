import React from "react";

export default function CTAWide() {
  return (
    <div style={{ background: "#333333" }} className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          {/* 
            col-lg-6  → ~50% width on large screens
            col-12    → full width on small screens
          */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3">
              <h3 className="light-white-section-heading mb-0 text-center text-lg-start">
                Contact us now for a free quote on your project
              </h3>

              <a href="contact-us">
                <button className="gold-button">
                  CONTACT OUT TEAM
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




