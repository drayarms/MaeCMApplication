/*import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer-panel" style={{minHeight:"400px", background:"#262626", color:"#fff"}}>
        <div className="container py-5">
          <h4>MC</h4>
          <p>Footer content placeholder</p>
        </div>
      </footer>
      <div className="bottom-bar d-flex align-items-center justify-content-end" style={{height:"40px", background:"#000", color:"#fff", paddingRight:"20px"}}>
        <small>© 2001 - 2024 MC.com. License Number: 886471. All rights reserved.</small>
      </div>
    </>
  );
}*/


/*
import React from "react";

export default function AboutFooter() {
  return (
    <footer style={{ background: "#262626" }} className="pt-5">
      <div className="container font-style">
        <div className="row">
          {}//Column 1
          <div className="col-md-4">
            <h4 className="white-section-heading">About the company</h4>
            <div className="little-thin-gold-line" />
            <p className="literature_light">
              At MAE CM, we have over 35 years of experience in construction of residences, including new construction, remodel and restoration, additions, hardscape and landscape, and garage conversions. With our in house expertise we have the ability to complete the architectural and structural portion of your ADU. We will collaborate with our vast number of sub-contractors in order to complete your project to your satisfaction with the highest standard of construction and deliver your project on time and within budget.
            </p>

            

            <p className="mini-white-section-heading">
              <i className="fa fa-phone footer-icon" />{" "}
              <a href="facetime:3105511500">(310)551-1500</a>
            </p>

            <p className="mini-white-section-heading">
              <i className="fa fa-envelope footer-icon" />{" "}
              <a href="mailto:info@maecmservices.com">info@maecmservices.com</a>
            </p>




          </div>

          {} //Column 2
          <div className="col-md-4">
            <h4 className="white-section-heading">Additional links</h4>
            <div className="little-thin-gold-line" />
            {[
              "Soft Story Retrofit",
              "Residential Remodel / Renovations",
              "ADU (Accessory Dwelling Unit)",
              "SB721 Deck & Balcony Inspections",
              "Commercial Construction",
              "Structural Concrete",
              "Engineering & Associated Services"
            ].map((t, i) => (
              <p key={i} className="mini-white-section-heading">
                <a href="/services/soft-story-retrofit">{t}</a>
              </p>
            ))}
          </div>

          {} //Column 3
          <div className="col-md-4">
            <h4 className="white-section-heading">Contact our team</h4>
            <div className="little-thin-gold-line" />
            <form method="POST" action="/api/contact">
              <div className="d-flex gap-2 mb-2">
                <input className="form-control contact-form-text" defaultValue="FULL NAME" />
                <input className="form-control contact-form-text" defaultValue="E-MAIL" />
              </div>
              <textarea
                className="form-control contact-form-text mb-3"
                defaultValue="WRITE YOUR MESSAGE HERE..."
              />
              <button className="gold-button">CONTACT US</button>
            </form>
          </div>
        </div>
      </div>

      <div
        className="bottom-bar d-flex align-items-center justify-content-end"
        style={{ height: "40px", background: "#000", color: "#f2f2f2", paddingRight: "20px" }}
      >
        <small>© 2001 - 2024 MC.com. License Number: 886471. All rights reserved.</small>
      </div>
    </footer>
  );
}*/


  import React, { useState } from "react";

  export default function AboutFooter() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponseMessage(null);

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setResponseMessage(data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };



  return (
    <footer style={{ background: "#262626" }} className="pt-5">
      <div className="container font-style">
        <div className="row">
          { /* Column 1 */ }
          <div className="col-md-4">
            <h4 className="white-section-heading">About the company</h4>
            <div className="little-thin-gold-line" />
            <p className="literature_light about-the-company-leterature">
              At MAE CM, we have over 35 years of experience in construction of residences, including new construction, remodel and restoration, additions, hardscape and landscape, and garage conversions. With our in house expertise we have the ability to complete the architectural and structural portion of your ADU. We will collaborate with our vast number of sub-contractors in order to complete your project to your satisfaction with the highest standard of construction and deliver your project on time and within budget.
            </p>

            

            <p className="mini-white-section-heading">
              <i className="fa fa-phone footer-icon" />{" "}
              <a href="facetime:3105511500">(310)551-1500</a>
            </p>

            <p className="mini-white-section-heading">
              <i className="fa fa-envelope footer-icon" />{" "}
              <a href="mailto:info@maecmservices.com">info@maecmservices.com</a>
            </p>




          </div>

          { /* Column 2 */ } 
          <div className="col-md-4">
            <h4 className="white-section-heading">Additional links</h4>
            <div className="little-thin-gold-line" />
            {[
              "Soft Story Retrofit",
              "Residential Remodel / Renovations",
              "ADU (Accessory Dwelling Unit)",
              "SB721 Deck & Balcony Inspections",
              "Commercial Construction",
              "Structural Concrete",
              "Engineering & Associated Services"
            ].map((t, i) => (
              <p key={i} className="mini-white-section-heading footer-additional-links">
                <a href="/services/soft-story-retrofit">{t}</a>
              </p>
            ))}
          </div>

          { /* Column 3 */ } 
          <div className="col-md-4">
            <h4 className="white-section-heading">Contact our team</h4>
            <div className="little-thin-gold-line" />
            <form onSubmit={handleSubmit} noValidate>
              <div className="d-flex gap-2 mb-2">
                <input
                  className="form-control contact-form-text"
                  placeholder="FULL NAME"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  className="form-control contact-form-text"
                  placeholder="E-MAIL"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                className="form-control contact-form-text mb-3"
                placeholder="WRITE YOUR MESSAGE HERE..."
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button className="gold-button" disabled={loading}>
                {loading ? "SENDING..." : "CONTACT US"}
              </button>

              {responseMessage && (
                <p className="text-success mt-3">{responseMessage}</p>
              )}

              {error && (
                <p className="text-danger mt-3">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div
        className="bottom-bar d-flex align-items-center justify-content-end"
        style={{ height: "40px", background: "#1a1a1a", color: "#737373", paddingRight: "100px" }}
      >
        <small>© 2001 - 2024 MC.com. License Number: 886471. All rights reserved.</small>
      </div>
    </footer>
  );
}

