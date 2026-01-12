import React, { useMemo } from "react";

/* ===============================
   HERO IMAGE POOL
================================ */
import img1 from "../assets/Mae-CM-Services-Main-Soft-Story-Retrofit.jpg";
import img2 from "../assets/Mae-CM-Services-MainADU-Accessory-Dwelling-Unit.jpg";
import img3 from "../assets/Mae-CM-Services-Home-Remodel-Renovations.jpg";
import img4 from "../assets/Mae-CM-Services-Main-SB721-Deck-Balcony2-Inspections2.jpg";
import img5 from "../assets/Mae-CM-Service-Commercial-Construction.jpg";
import img6 from "../assets/title_image.jpg";
import img7 from "../assets/slide-2.jpg";

const HERO_IMAGES = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7
];

export default function PageHeroTemplate({ backgroundImage, caption }) {
  /* ===============================
     RANDOM IMAGE (ONCE PER MOUNT)
  ================================ */
  const heroImage = useMemo(() => {
    if (backgroundImage) return backgroundImage;

    const randomIndex = Math.floor(Math.random() * HERO_IMAGES.length);
    return HERO_IMAGES[randomIndex];
  }, [backgroundImage]);

  return (
    <div
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "25vh"
      }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="large_bold_white">{caption}</h1>
      <div className="large-thin-gold-line" />
    </div>
  );
}





