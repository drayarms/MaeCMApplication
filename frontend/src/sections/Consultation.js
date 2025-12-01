import React from "react";
import bg from "../assets/background.jpg"; // reuse or another image

export default function Consultation() {
  return (
    <section className="consult-panel d-flex align-items-center justify-content-center" style={{
      height: "100px",
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="consult-overlay d-flex align-items-center justify-content-center">
        <h3>Schedule a Free Consultation</h3>
      </div>
    </section>
  );
}
