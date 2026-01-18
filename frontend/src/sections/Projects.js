import React, { useState, useMemo } from "react";
//import { Link } from "react-router-dom";
import TransitionLink from "../components/TransitionLink";

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

          /*<Link
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
          </Link>*/

          <TransitionLink
            key={project.link}
            to={`/portfolio/${project.link}`}
            className="project-tile"
            title={project.location}
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-overlay">
                <div className="overlay-title">{project.location}</div>
                <div className="overlay-sub">{project.types.join(" / ")}</div>
              </div>
            </div>
          </TransitionLink>

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


