import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects-data";
import Footer from "../sections/Footer";

export default function ServicePageTemplate({
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
  /*const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const isValid =
    form.name &&
    form.email &&
    form.subject &&
    form.message;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    await fetch("/api/contact-us", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };*/

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const isValid =
    form.name &&
    form.email &&
    form.subject &&
    form.message;  

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });    

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setErrorMessage("Please fill out all required fields (*)");
      return;
    }

    setErrorMessage(""); // clear previous errors

    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      // Clear form on success
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      alert("Message sent successfully!");
    } catch (err) {
      setErrorMessage(err.message);
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
         PAGE BANNER
      ================================ */}
      <div
        className="page-banner-image"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="page-banner-overlay">
          <div className="big-bold-white-caption">
            {bannerText}
          </div>
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

            <form onSubmit={handleSubmit}>
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
                  value={form[name]}
                  onChange={handleChange}
                  className="form-control contact-form-text"
                />
              ))}

              <textarea
                name="message"
                placeholder="Your Message*"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="form-control contact-form-text"
              />


              {errorMessage && (
                <p className="text-danger" style={{ marginTop: "0.5rem" }}>
                  {errorMessage}
                </p>
              )}

              <button
                className="gold-button"
                disabled={!isValid}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===============================
         GALLERY
      ================================ */}
      <div className="gallery-caption-block">
        <div className="section-heading">{galleryCaption}</div>
        <div className="little-thin-gold-line" />
      </div>

      <section className="projects-grid">
        {projects.map(project => (
          <Link
            key={project.link}
            to={`/portfolio_page/${project.link}`}
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

      {/* ===============================
         FOOTER
      ================================ */}  
      <Footer />

    </>
  );
}
