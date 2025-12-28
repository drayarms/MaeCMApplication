/*import React from "react";
import { Link } from "react-router-dom";

export default function CTAWide() {
  return (
    <div style={{ background: "#262626" }} className="py-5">
      <div className="container d-flex flex-column align-items-start">
        <h3 className="light-white-section-heading">
          Contact us now for a free quote on your project
        </h3>




          <button className="gold-button mt-3">
            CONTACT OUR TEAM
          </button>



      </div>
    </div>
  );
}
*/


/*import React from "react";
import { Link } from "react-router-dom";

export default function CTAWide() {
  return (

    <div style={{ background: "#262626" }} className="py-5">
      <div  className="container d-flex justify-content-between align-items-center">
        <h3 className="light-white-section-heading mb-0">
          Contact us now for a free quote on your project
        </h3>

        <a href="contact">
          <button className="gold-button">
            Contact Our Team
          </button>
        </a>
      </div>
    </div>

  );
}
*/


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

              <a href="contact">
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




