import React, { useState } from "react";
import { usePageTransition } from "../components/PageTransitionProvider";

export default function AboutFooter() {
  const { navigateWithTransition } = usePageTransition();

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
      const response = await fetch("/api/footer-contact-form", {
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

  const handleNav = (e, path) => {
    e.preventDefault();
    navigateWithTransition(path);
  };

  return (
    <footer style={{ background: "#262626" }} className="pt-5">
      <div className="container font-style">
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-4">
            <h4 className="white-section-heading">About the company</h4>
            <div className="little-thin-gold-line" />
            <p className="literature_light about-the-company-leterature">
              At MAE CM, we have over 35 years of experience in construction of
              residences, including new construction, remodel and restoration,
              additions, hardscape and landscape, and garage conversions. With
              our in house expertise we have the ability to complete the
              architectural and structural portion of your ADU.  We will 
              collaborate with our vast number of sub-contractors in order 
              to complete your project to your satisfaction with the highest 
              standard of construction and deliver your project on time and 
              within budget.
            </p>

            <p className="mini-white-section-heading">
              <i className="fa fa-phone footer-icon" />{" "}
              <a href="facetime:3105511500">(310)551-1500</a>
            </p>

            <p className="mini-white-section-heading">
              <i className="fa fa-envelope footer-icon" />{" "}
              <a href="mailto:info@maecmservices.com">
                info@maecmservices.com
              </a>
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4">
            <h4 className="white-section-heading">Additional links</h4>
            <div className="little-thin-gold-line" />

            <p className="mini-white-section-heading footer-additional-links">
              <a
                href="/services/soft-story-retrofit"
                onClick={(e) =>
                  handleNav(e, "/services/soft-story-retrofit")
                }
              >
                Soft Story Retrofit
              </a>
            </p>

            <p className="mini-white-section-heading footer-additional-links">
              <a
                href="/services/residential-remodel-renovations"
                onClick={(e) =>
                  handleNav(e, "/services/residential-remodel-renovations")
                }
              >
                Residential Remodel / Renovations
              </a>
            </p>

            <p className="mini-white-section-heading footer-additional-links">
              <a href="/services/adu" onClick={(e) => handleNav(e, "/services/adu")}>
                ADU (Accessory Dwelling Unit)
              </a>
            </p>

            <p className="mini-white-section-heading footer-additional-links">
              <a
                href="/services/sb721-sb362-balcony-deck-inspections"
                onClick={(e) =>
                  handleNav(e, "/services/sb721-sb362-balcony-deck-inspections")
                }
              >
                SB721/SB362 Balcony & Deck Inspections
              </a>
            </p>

            <p className="mini-white-section-heading footer-additional-links">
              <a
                href="/services/commercial-construction"
                onClick={(e) =>
                  handleNav(e, "/services/commercial-construction")
                }
              >
                Commercial Construction
              </a>
            </p>

            <p className="mini-white-section-heading footer-additional-links">
              <a
                href="/services/structural-concrete"
                onClick={(e) =>
                  handleNav(e, "/services/structural-concrete")
                }
              >
                Structural Concrete
              </a>
            </p>

            <p className="mini-white-section-heading footer-additional-links">
              <a
                href="/services/engineering-associated-services"
                onClick={(e) =>
                  handleNav(e, "/services/engineering-associated-services")
                }
              >
                Engineering & Associated Services
              </a>
            </p>
          </div>

          {/* Column 3 */}
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

              {error && <p className="text-danger mt-3">{error}</p>}
            </form>
          </div>

        </div>
      </div>

      <div
        className="bottom-bar d-flex align-items-center justify-content-end"
        style={{
          height: "40px",
          background: "#1a1a1a",
          color: "#737373",
          paddingRight: "100px"
        }}
      >
        <small>
          © 2001 - 2024 MC.com. License Number: 886471. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
