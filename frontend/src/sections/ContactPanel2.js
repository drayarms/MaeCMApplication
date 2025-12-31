import React, { useState } from "react";

export default function ContactPanel2() {
  /* ===============================
     FORM STATE
  ================================ */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      const response = await fetch("/api/contact-us2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setResponseMessage(data.message || "Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="contact-panel-2"
      style={{ margin: "55px 0" }}
    >
      <div className="container">
        <div className="row">

          {/* ===============================
              LEFT COLUMN
          ================================ */}
          <div className="col-md-6">
            <div className="tiny-section-heading text-start">
              Call Us Today: (310)551-1500
            </div>

            <div className="tiny-section-heading text-start">
              Complete the form below to get in touch with our professional team.
            </div>

            {/* FORCE LEFT ALIGN */}
            <div className="little-thin-gold-line" style={{ marginLeft: 0 }} />

            <form
              onSubmit={handleSubmit}
              className="mt-4"
              noValidate
            >
              {/* Name + Email */}
              <div className="d-flex gap-3 mb-3">
                <input
                  className="form-control footerless-form contact-form-text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  className="form-control footerless-form contact-form-text"
                  type="email"
                  name="email"
                  placeholder="Your E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                className="form-control footerless-form contact-form-text mb-3"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <textarea
                className="form-control footerless-form contact-form-text mb-3"
                name="message"
                rows="4"
                placeholder="Write Your Message Here..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                className="footerless-form gold-button"
                disabled={loading}
              >
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

          {/* ===============================
              RIGHT COLUMN
          ================================ */}
          <div className="col-md-6">
            <div className="tiny-section-heading text-start">
              6137 Wilshire Blvd, Los Angeles, CA 90048, USA
            </div>

            {/* FORCE LEFT ALIGN */}
            <div className="little-thin-gold-line" style={{ marginLeft: 0 }} />

            <div className="mt-4" style={{ width: "100%", height: "350px" }}>
              <iframe
                title="MAE CM Location"
                src="https://www.google.com/maps?q=6137+Wilshire+Blvd,+Los+Angeles,+CA+90048&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

