import React, { useState, useMemo } from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects-data";
import Footer from "../sections/Footer";

export default function ServicePageTemplate({
  seo,
  bannerImage,
  bannerText,
  heading,
  content,
  bullets,
  projectType,
  galleryCaption
}) {

  /* ===============================
     FORM STATE
  ================================ */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [error, setError] = useState(null);

  const isValid =
    formData.name &&
    formData.email &&
    formData.subject &&
    formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);
    setError(null);
    setResponseMessage(null);

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      let data = {};
      try {
        data = await response.json(); // may fail if no JSON
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setResponseMessage(
        data.message || "Message sent successfully!"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  /* ===============================
     FILTERED PROJECTS
  ================================ */
  const projects = useMemo(
    () => PROJECTS.filter(p => p.types.includes(projectType)),
    [projectType]
  );

  return (
    <>
      {/* ===============================
         SEO
      ================================ */}
      {seo && <SEO {...seo} />}
       

      {/* ===============================
         PAGE BANNER
      ================================ */}
      <div
        className="page-banner-image"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="page-banner-overlay">
          <div className="big-bold-white-caption service-page-caption">{bannerText}</div>
          <div className="large-thin-gold-line" />
        </div>
      </div>

      {/* ===============================
         TWO COLUMN SECTION
      ================================ */}
      <section className="service-content">
        <div className="service-columns">

          {/* LEFT COLUMN */}
          <div className="service-left">
            <div className="section-heading">{heading}</div>
            <div className="little-thin-gold-line" />

            <div
              className="literature left-align"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <ul className="literature-list left-align">
              {bullets.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN */}
          <div className="service-right">
            <div className="small-section-heading">
              Call Us Today: +1(310)551-1500
            </div>

            <div className="tiny-section-heading">
              Complete the form below to get in touch with our professional team.
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {[
                ["name", "Your Name*"],
                ["email", "Your Email*"],
                ["phone", "Phone"],
                ["subject", "Subject*"]
              ].map(([name, placeholder]) => (
                <input
                  key={name}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  className="form-control footerless-form contact-form-text"
                  required={name !== "phone"}
                />
              ))}

              <textarea
                name="message"
                placeholder="Your Message*"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="form-control footerless-form contact-form-text"
                required
              />

              <button
                className="footerless-form gold-button"
                disabled={loading || !isValid}
              >
                {loading ? "SENDING..." : "SUBMIT"}
              </button>

              {responseMessage && (
                <p className="text-success mt-2">{responseMessage}</p>
              )}

              {error && (
                <p className="text-danger mt-2">{error}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ===============================
         GALLERY
      ================================ */}
      <div className="service-gallery">
        <div className="gallery-caption-block">
          <div className="section-heading">{galleryCaption}</div>
          <div className="little-thin-gold-line" />
        </div>

        <section className="projects-grid">
          {projects.map(project => (
            <Link
              key={project.link}
              to={`/portfolio/${project.link}`}
              className="project-tile"
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
        </section>
      </div>

      {/* ===============================
         FOOTER
      ================================ */}
      <Footer />
    </>
  );
}

