/*import React from "react";
import heroImg from "../assets/about_us_backdrop.jpg";

export default function AboutHero() {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "25vh"
      }}
      className="d-flex flex-column justify-content-center"
    >
      <h1 className="large_bold_white">About Us</h1>
      <div className="large-thin-gold-line" />
    </div>
  );
}*/




import React from "react";
import heroImg from "../assets/about_us_backdrop.jpg";

export default function AboutHero() {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "25vh"
      }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="large_bold_white">About Us</h1>
      <div className="large-thin-gold-line" />
    </div>
  );
}

