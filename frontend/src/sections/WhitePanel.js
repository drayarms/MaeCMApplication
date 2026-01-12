import React from "react";
import { usePageTransition } from "../components/PageTransitionProvider";

// --- ICONS ---
import Apartment from "../assets/Apartment.png";
import Garage from "../assets/Garag.png";
import Home from "../assets/Home.png";
import Steps from "../assets/Steps.png";

const COLUMNS = [
  {
    image: Apartment,
    heading: "Soft Story Retrofit",
    page: "soft-story-retrofit",
    text:
      "Building resilience, one retrofit at a time. We specialize in comprehensive Soft Story Retrofit solutions, safeguarding structures for a safer tomorrow. Trust us to enhance structural integrity and bring your building up to code with precision and expertise. Your safety is our top priority.",
  },
  {
    image: Garage,
    heading: "ADU (Accessory Dwelling Unit)",
    page: "adu",
    text:
      "MAE specializes in ADU conversions, from the planning stages to full-service construction. We offer competitive pricing, professional design and ADU expertise. Benefits of having an ADU are increasing property value, creating income opportunities, having more usable space and adding a business office.",
  },
  {
    image: Home,
    heading: "Home Remodel / Renovations",
    page: "residential-remodel-renovations",
    text:
      "Transform your living spaces with our expert Home Remodels/Repairs services, where craftsmanship meets comfort to elevate your home.",
  },
  {
    image: Steps,
    heading: "SB721/SB362 Balcony & Deck Inspections",
    page: "sb721-sb362-balcony-deck-inspections",
    text:
      "We specialize in providing comprehensive SB721 Balcony Law inspections, ensuring property owners compliance with safety regulations and the peace of mind that their balconies meet the required standards.",
  },
];

export default function WhitePanel() {
  const { navigateWithTransition } = usePageTransition();

  const handleNav = (e, page) => {
    e.preventDefault();
    navigateWithTransition(`/services/${page}`);
  };

  return (
    <section className="white-panel py-5">
      {/* ================= FIRST SECTION ================= */}
      <div className="container">
        <div className="row gy-5">
          {COLUMNS.map((col, idx) => (
            <div key={idx} className="col-12 col-lg-6">
              <div className="d-flex gap-4 align-items-start">
                {/* Narrow column */}
                <div style={{ flex: "0 0 10%" }}>
                  <img
                    src={col.image}
                    alt={col.heading}
                    style={{
                      width: "100%",
                      maxWidth: "80px",
                    }}
                  />
                </div>

                {/* Wide column */}
                <div style={{ flex: "0 0 90%" }}>
                  <h4
                    className="column-heading"
                    style={{ textAlign: "left" }}
                  >
                    <a
                      href={`/services/${col.page}`}
                      onClick={(e) => handleNav(e, col.page)}
                      className="my-service-link"
                    >
                      {col.heading}
                    </a>
                  </h4>

                  <div
                    className="short-little-thin-gold-line"
                    style={{
                      height: "1.8px",
                      width: "40px",
                      background: "#ffd11a",
                      marginTop: "10px",
                    }}
                  />

                  <p
                    className="literature"
                    style={{
                      marginTop: "40px",
                      textAlign: "left",
                    }}
                  >
                    {col.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SECOND SECTION ================= */}
      <div className="container text-center" style={{ marginTop: "80px" }}>
        <h2 className="section-heading">Our Projects</h2>
        <div className="little-thin-gold-line mx-auto mt-2" />
      </div>
    </section>
  );
}


