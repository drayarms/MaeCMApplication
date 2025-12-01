/*import React from "react";
import ImageGridBlock from "./ImageGridBlock";

export default function Projects() {
  // placeholder container, actual blocks are exported below
  return null;
}

// attach a reusable block
Projects.ImageGridBlock = function ImageGridBlock({ start = 0 }) {
  const images = [
    "1-2-570x570.jpg",
    "2-Shoring-570x570.jpg",
    "3-570x570.jpg",
    "7-1-570x570.jpg",
    "7-570x570.jpg",
    "IMG_0343-570x570.jpg",
    "P1000462-570x570.jpg",
    "IMG_0763-570x570.jpg",
  ];

  // pick 4 starting at 'start'
  const slice = images.slice(start, start + 4);

  return (
    <section className="image-grid-row d-flex w-100">
      {slice.map((img) => (
        <a key={img} href="#!" className="image-tile">
          <div className="tile-img" style={{ backgroundImage: `url(${require(`../assets/${img}`)})` }}>
            <div className="tile-overlay">
              <div className="tile-overlay-inner">
                <div className="overlay-title">Project Title</div>
                <div className="overlay-sub">Short subtitle</div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};*/

/*
import React from "react";
import ImageGridBlock from "./ImageGridBlock";

// Preload images statically so webpack can bundle them
import img1 from "../assets/1-2-570x570.jpg";
import img2 from "../assets/2-Shoring-570x570.jpg";
import img3 from "../assets/3-570x570.jpg";
import img4 from "../assets/7-1-570x570.jpg";
import img5 from "../assets/7-570x570.jpg";
import img6 from "../assets/IMG_0343-570x570.jpg";
import img7 from "../assets/P1000462-570x570.jpg";
import img8 from "../assets/IMG_0763-570x570.jpg";

export default function Projects() {
  return null;
}

Projects.ImageGridBlock = function ImageGridBlock({ start = 0 }) {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ];

  const slice = images.slice(start, start + 4);

  return (
    <section className="image-grid-row d-flex w-100">
      {slice.map((src, i) => (
        <a key={i} href="#!" className="image-tile">
          <div
            className="tile-img"
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className="tile-overlay">
              <div className="tile-overlay-inner">
                <div className="overlay-title">Project Title</div>
                <div className="overlay-sub">Short subtitle</div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};

*/


import React from "react";
import ImageGridBlock from "./ImageGridBlock";

// --- STATIC IMAGE IMPORTS ---
import img1 from "../assets/1-2-570x570.jpg";
import img2 from "../assets/2-Shoring-570x570.jpg";
import img3 from "../assets/3-570x570.jpg";
import img4 from "../assets/7-1-570x570.jpg";
import img5 from "../assets/7-570x570.jpg";
import img6 from "../assets/IMG_0343-570x570.jpg";
import img7 from "../assets/P1000462-570x570.jpg";
import img8 from "../assets/IMG_0763-570x570.jpg";

// ✨ Restore animated page transition container
export default function Projects() {
  return (
    <div className="page-transition fade-in">   {/* Add your transition class here */}
      <h2 className="page-title">Our Projects</h2>

      <Projects.ImageGridBlock start={0} />
      <Projects.ImageGridBlock start={4} />
    </div>
  );
}

// --- Reusable Image Block ---
Projects.ImageGridBlock = function ImageGridBlock({ start = 0 }) {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const slice = images.slice(start, start + 4);

  return (
    <section className="image-grid-row d-flex w-100">
      {slice.map((src, i) => (
        <a key={i} href="#!" className="image-tile">
          <div
            className="tile-img"
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className="tile-overlay">
              <div className="tile-overlay-inner">
                <div className="overlay-title">Project Title</div>
                <div className="overlay-sub">Short subtitle</div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};

