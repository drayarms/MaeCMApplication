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


/*import React from "react";
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

//Restore animated page transition container
export default function Projects() {
  return (
    <div className="page-transition fade-in">   {}//Add your transition class here 
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
};*/

/*
import React, { useState, useMemo } from "react";


import img1 from "../assets/IMG_0343-1000x1000.jpg";
import img2 from "../assets/2-Shoring-1000x1000.jpg";
import img3 from "../assets/P1000462-1000x1000.jpg";
import img4 from "../assets/IMG_0763-1000x1000.jpg";
import img5 from "../assets/3-1000x1000.jpg";
import img6 from "../assets/7-1000x1000.jpg";
import img7 from "../assets/7-1-1000x1000.jpg";
import img8 from "../assets/1-2-1000x1000.jpg";
import img9 from "../assets/1-4-1000x1000.jpg";
import img10 from "../assets/IMG_0112-1-1000x1000.jpg";
import img11 from "../assets/20200413_171434700_iOS-1000x1000.jpg";
import img12 from "../assets/Allenford-1-1000x1000.jpg";
import img13 from "../assets/1-5-1000x1000.jpg";
import img14 from "../assets/20180601_182137680_iOS-1000x1000.jpg";
import img15 from "../assets/1-6-1000x1000.jpg";
import img16 from "../assets/1-8-1000x1000.jpg";
import img17 from "../assets/IMG_0124-min-min-1000x1000.jpg";
import img18 from "../assets/IMG_0277-min-1000x1000.jpeg";
import img19 from "../assets/IMG_0267-min-1000x1000.jpg";
import img20 from "../assets/IMG_6441-min-1000x1000.jpg";
import img21 from "../assets/IMG_8946-min-1000x1000.jpeg";
import img22 from "../assets/cc0fb517-afa0-4609-a63e-70fb4dd07c4c-min-1000x1000.jpg";
import img23 from "../assets/2a0386fc-a5dc-4e56-b163-8691d4293ad2-min-1000x1000.jpg";
import img24 from "../assets/384ad846-e699-42f0-8717-407d90379331-min-570x570.jpg";


const PROJECTS = [
  { img: img1, location: "N. Manhattan", link: "n-manhattan", types: ["Concrete/Structural", "Engineering & Associated Services", "Soft Story Retrofit"] },
  { img: img2, location: "Chochran", link: "chochran", types: ["Concrete/Structural", "Engineering & Associated Services", "Soft Story Retrofit"] },
  { img: img3, location: "Holt", link: "holt", types: ["Concrete/Structural", "Engineering & Associated Services", "Soft Story Retrofit"] },
  { img: img4, location: "S. Manhattan", link: "s-manhattan", types: ["Concrete/Structural", "Engineering & Associated Services", "Soft Story Retrofit"] },
  { img: img5, location: "Robertson", link: "robertson", types: ["Commercial Construction", "Concrete/Structural", "Engineering & Associated Services"] },
  { img: img6, location: "N. Westmoreland 1", link: "n-westmoreland1", types: ["ADU (Accessory Dwelling Unit)", "Engineering & Associated Services"] },
  { img: img7, location: "N. Westmoreland 2", link: "n-westmoreland2", types: ["ADU (Accessory Dwelling Unit)", "Engineering & Associated Services"] },
  { img: img8, location: "Poinsettia Pl", link: "poinsettia-pl", types: ["ADU (Accessory Dwelling Unit)"] },
  { img: img9, location: "Imperial Hwy", link: "imperial-hwy", types: ["Commercial Construction"] },
  { img: img10, location: "Sawyer", link: "sawyer", types: ["Concrete/Structural", "Residential Construction"] },
  { img: img11, location: "Delano", link: "delano", types: ["Concrete/Structural", "Engineering & Associated Services"] },
  { img: img12, location: "Allenford", link: "allenford", types: ["Concrete/Structural", "Residential Construction"] },
  { img: img13, location: "Car Wash", link: "car-wash", types: ["Commercial Construction", "Concrete/Structural"] },
  { img: img14, location: "Linda Flora", link: "linda-flora", types: ["Concrete/Structural", "Residential Construction"] },
  { img: img15, location: "Mulberry", link: "mulberry", types: ["Concrete/Structural", "Residential Construction"] },
  { img: img16, location: "Rising Glen", link: "rising-glen", types: ["Concrete/Structural", "Residential Construction"] },
  { img: img17, location: "210 N. Kenmore Ave", link: "210-n-kenmore-avenue", types: ["SB721 Inspections"] },
  { img: img18, location: "15436 Milbank", link: "15436-milbank", types: ["ADU (Accessory Dwelling Unit)", "Residential Construction"] },
  { img: img19, location: "515 N. Mariposa Ave", link: "515-n-mariposa-avenue", types: ["SB721 Inspections"] },
  { img: img20, location: "Arco Convenience Store", link: "arco-convenient-store", types: ["Commercial Construction"] },
  { img: img21, location: "Clinton", link: "clinton", types: [] },
  { img: img22, location: "Genesee", link: "genesee", types: ["Engineering & Associated Services", "Soft Story Retrofit"] },
  { img: img23, location: "Rosewood", link: "rosewood", types: ["Engineering & Associated Services", "Soft Story Retrofit"] },
  { img: img24, location: "128 Palm", link: "128-palm", types: ["Soft Story Retrofit"] }
];

const FILTERS = [
  "All",
  "ADU (Accessory Dwelling Unit)",
  "Commercial Construction",
  "Concrete/Structural",
  "Engineering & Associated Services",
  "Residential Construction",
  "SB721 Inspections",
  "Soft Story Retrofit"
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [rowsShown, setRowsShown] = useState(2);
  const [loading, setLoading] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter(p => p.types.includes(activeFilter));
  }, [activeFilter]);

  const visibleProjects = filteredProjects.slice(0, rowsShown * 4);

  const handleSeeMore = () => {
    setLoading(true);
    setTimeout(() => {
      setRowsShown(r => r + 2);
      setLoading(false);
    }, 600);
  };

  return (
    <>
      {} //FILTER BAR 
      <div className="projects-filter-bar">
        {FILTERS.map(item => (
          <span
            key={item}
            className={`mini-white-section-heading filter-item ${activeFilter === item ? "active" : ""}`}
            onClick={() => {
              setActiveFilter(item);
              setRowsShown(2);
            }}
          >
            {item}
          </span>
        ))}
      </div>

      {}//GRID 
      <div className="projects-grid">
        {visibleProjects.map((p, i) => (
          <div key={i} className="project-tile" title={p.location}>
            <img src={p.img} alt={p.location} />
            <div className="project-overlay">
              <div className="overlay-title">{p.location}</div>
              <div className="overlay-sub">{p.types.join(" / ")}</div>
            </div>
          </div>
        ))}
      </div>

      {}//SEE MORE 
      {visibleProjects.length < filteredProjects.length && (
        <div className="text-center">
          <button
            className="gold-button mt-5"
            onClick={handleSeeMore}
            disabled={loading}
          >
            {loading ? "loading..." : "SEE MORE OF OUR PROJECTS"}
          </button>
        </div>
      )}
    </>
  );
}*/


/*
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";


import p1 from "../assets/IMG_0343-1000x1000.jpg";
import p2 from "../assets/2-Shoring-1000x1000.jpg";
import p3 from "../assets/P1000462-1000x1000.jpg";
import p4 from "../assets/IMG_0763-1000x1000.jpg";
import p5 from "../assets/3-1000x1000.jpg";
import p6 from "../assets/7-1000x1000.jpg";
import p7 from "../assets/7-1-1000x1000.jpg";
import p8 from "../assets/1-2-1000x1000.jpg";
import p9 from "../assets/1-4-1000x1000.jpg";
import p10 from "../assets/IMG_0112-1-1000x1000.jpg";
import p11 from "../assets/20200413_171434700_iOS-1000x1000.jpg";
import p12 from "../assets/Allenford-1-1000x1000.jpg";
import p13 from "../assets/1-5-1000x1000.jpg";
import p14 from "../assets/20180601_182137680_iOS-1000x1000.jpg";
import p15 from "../assets/1-6-1000x1000.jpg";
import p16 from "../assets/1-8-1000x1000.jpg";
import p17 from "../assets/IMG_0124-min-min-1000x1000.jpg";
import p18 from "../assets/IMG_0277-min-1000x1000.jpeg";
import p19 from "../assets/IMG_0267-min-1000x1000.jpg";
import p20 from "../assets/IMG_6441-min-1000x1000.jpg";
import p21 from "../assets/IMG_8946-min-1000x1000.jpeg";
import p22 from "../assets/cc0fb517-afa0-4609-a63e-70fb4dd07c4c-min-1000x1000.jpg";
import p23 from "../assets/2a0386fc-a5dc-4e56-b163-8691d4293ad2-min-1000x1000.jpg";
import p24 from "../assets/384ad846-e699-42f0-8717-407d90379331-min-570x570.jpg";

const PROJECTS = [
  { image: p1, location: "N. Manhattan", link: "n-manhattan", types: ["Concrete/Structural", "Engineering & Associated Services", "Soft Story Retrofit"] },
  { image: p2, location: "Chochran", link: "chochran", types: ["Concrete/Structural", "Engineering & Associated Services", "Soft Story Retrofit"] },
  { image: p3, location: "Holt", link: "holt", types: ["Concrete/Structural", "Engineering & Associated Services", "Soft Story Retrofit"] },
  { image: p4, location: "S. Manhattan", link: "s-manhattan", types: ["Concrete/Structural", "Engineering & Associated Services", "Soft Story Retrofit"] },
  { image: p5, location: "Robertson", link: "robertson", types: ["Commercial Construction", "Concrete/Structural", "Engineering & Associated Services"] },
  { image: p6, location: "N. Westmoreland 1", link: "n-westmoreland1", types: ["ADU (Accessory Dwelling Unit)", "Engineering & Associated Services"] },
  { image: p7, location: "N. Westmoreland 2", link: "n-westmoreland2", types: ["ADU (Accessory Dwelling Unit)", "Engineering & Associated Services"] },
  { image: p8, location: "Poinsettia Pl", link: "poinsettia-pl", types: ["ADU (Accessory Dwelling Unit)"] },
  { image: p9, location: "Imperial Hwy", link: "imperial-hwy", types: ["Commercial Construction"] },
  { image: p10, location: "Sawyer", link: "sawyer", types: ["Concrete/Structural", "Residential Construction"] },
  { image: p11, location: "Delano", link: "delano", types: ["Concrete/Structural", "Engineering & Associated Services"] },
  { image: p12, location: "Allenford", link: "allenford", types: ["Concrete/Structural", "Residential Construction"] },
  { image: p13, location: "Car Wash", link: "car-wash", types: ["Commercial Construction", "Concrete/Structural"] },
  { image: p14, location: "Linda Flora", link: "linda-flora", types: ["Concrete/Structural", "Residential Construction"] },
  { image: p15, location: "Mulberry", link: "mulberry", types: ["Concrete/Structural", "Residential Construction"] },
  { image: p16, location: "Rising Glen", link: "rising-glen", types: ["Concrete/Structural", "Residential Construction"] },
  { image: p17, location: "210 N. Kenmore", link: "210-n-kenmore-avenue", types: ["SB721 Inspections"] },
  { image: p18, location: "15436 Milbank", link: "15436-milbank", types: ["ADU (Accessory Dwelling Unit)", "Residential Construction"] },
  { image: p19, location: "515 N. Mariposa", link: "515-n-mariposa-avenue", types: ["SB721 Inspections"] },
  { image: p20, location: "Arco Convenience Store", link: "arco-convenient-store", types: ["Commercial Construction"] },
  { image: p21, location: "Clinton", link: "clinton", types: [] },
  { image: p22, location: "Genesee", link: "genesee", types: ["Engineering & Associated Services", "Soft Story Retrofit"] },
  { image: p23, location: "Rosewood", link: "rosewood", types: ["Engineering & Associated Services", "Soft Story Retrofit"] },
  { image: p24, location: "128 Palm", link: "128-palm", types: ["Soft Story Retrofit"] }
];

const FILTERS = [
  "All",
  "ADU (Accessory Dwelling Unit)",
  "Commercial Construction",
  "Concrete/Structural",
  "Engineering & Associated Services",
  "Residential Construction",
  "SB721 Inspections",
  "Soft Story Retrofit"
];


export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter(p => p.types.includes(activeFilter));
  }, [activeFilter]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(v => v + 8);
      setLoading(false);
    }, 600);
  };

  const changeFilter = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(8);
  };

  return (
    <section className="projects-section">
      {}//FILTER BAR 
      <div className="projects-filter-bar">
        {FILTERS.map(f => (
          <span
            key={f}
            className={`mini-white-section-heading filter-item ${activeFilter === f ? "active" : ""}`}
            onClick={() => changeFilter(f)}
          >
            {f}
          </span>
        ))}
      </div>

      {}//GRID 
      <div className="projects-grid">
        {visibleProjects.map(project => (
          <Link
            key={project.link}
            to={`/portfolio_page/${project.link}`}
            className="project-tile"
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
              title={project.location}
            >
              <div className="project-overlay">
                <div className="overlay-title">{project.location}</div>
                <div className="overlay-sub">
                  {project.types.join(" / ")}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {}//LOAD MORE 
      {hasMore && (
        <div className="projects-load-more">
          <button className="gold-button" onClick={loadMore}>
            {loading ? "loading..." : "SEE MORE OF OUR PROJECTS"}
          </button>
        </div>
      )}
    </section>
  );
}*/


import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

/* ===============================
   PROJECT DATA
================================ */
import { PROJECTS, FILTERS } from "../data/projects-data";

/* ===============================
   COMPONENT
================================ */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter(p => p.types.includes(activeFilter));
  }, [activeFilter]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(v => v + 8);
      setLoading(false);
    }, 600);
  };

  const changeFilter = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(8);
  };

  return (
    <section className="projects-section">
      {/* FILTER BAR */}
      <div className="projects-filter-bar">
        {FILTERS.map(f => (
          <span
            key={f}
            className={`mini-white-section-heading filter-item ${activeFilter === f ? "active" : ""}`}
            onClick={() => changeFilter(f)}
          >
            {f}
          </span>
        ))}
      </div>

      {/* IMAGE GRID */}
      <div className="projects-grid">
        {visibleProjects.map(project => (
          <Link
            key={project.link}
            to={`/portfolio_page/${project.link}`}
            className="project-tile"
            title={project.location}
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-overlay">
                <div className="overlay-title">{project.location}</div>
                <div className="overlay-sub">
                  {project.types.join(" / ")}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* LOAD MORE */}
      {hasMore && (
        <div className="projects-load-more">
          <button className="light-background gold-button" onClick={loadMore}>
            {loading ? "loading..." : "SEE MORE OF OUR PROJECTS"}
          </button>
        </div>
      )}
    </section>
  );
}


