import React, { useState } from "react";

const images = [
  require("../assets/c5b69340-d7f1-4663-9b4f-c0ad92057ee4-min.jpg"),
  require("../assets/26b8fbe3-ab46-42b0-819c-c087bd34326f-min.jpg"),
  require("../assets/IMG_8244.jpeg"),
  require("../assets/IMG_8234.jpeg"),
  require("../assets/IMG_2087-min.jpeg"),
  require("../assets/IMG_1888-min.jpeg"),
  require("../assets/IMG_1815-min.jpeg"),
  require("../assets/IMG_6441-min-scaled.jpg")
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img key={i} src={img} alt="" className="carousel-image" />
        ))}
      </div>

      <button
        className="carousel-control left"
        onClick={() =>
          setIndex((i) => (i - 1 + images.length) % images.length)
        }
      >
        <i className="fa fa-chevron-left" />
      </button>

      <button
        className="carousel-control right"
        onClick={() =>
          setIndex((i) => (i + 1) % images.length)
        }
      >
        <i className="fa fa-chevron-right" />
      </button>
    </div>
  );
}


