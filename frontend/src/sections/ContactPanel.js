/*
import React from "react";

export default function ContactPanel() {
  return (
    <section className="contact-panel container py-5" style={{background:"#fff", minHeight:"400px"}}>
      <h3>Contact Us</h3>
      <form className="needs-validation" noValidate>
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Name <span className="required">*</span></label>
            <div className="d-flex gap-2">
              <input className="form-control" placeholder="First" required />
              <input className="form-control" placeholder="Last" />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Email <span className="required">*</span></label>
            <input className="form-control" type="email" required />
            <label className="form-label mt-3">Phone <span className="required">*</span></label>
            <input className="form-control" type="tel" required />
          </div>
        </div>

        <div className="mt-4 text-center">
          <button type="submit" className="btn btn-lightblue px-5">Next</button>
        </div>
      </form>
    </section>
  );
}
*/




import React, { useState } from "react";

export default function ContactPanel() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponseMessage(null);
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setResponseMessage(data.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="contact-panel container py-5"
      style={{ background: "#fff", minHeight: "400px" }}
    >
      <h3>Contact Us</h3>

      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">
              Name <span className="required">*</span>
            </label>
            <div className="d-flex gap-2">
              <input
                className="form-control"
                placeholder="First"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="form-control"
                placeholder="Last"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Email <span className="required">*</span>
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="form-label mt-3">
              Phone <span className="required">*</span>
            </label>
            <input
              className="form-control"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mt-4 text-center">
          <button
            type="submit"
            className="btn btn-lightblue px-5"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Next"}
          </button>
        </div>
      </form>

      {/* Flask response */}
      {responseMessage && (
        <div className="alert alert-success mt-4 text-center">
          {responseMessage}
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-4 text-center">
          {error}
        </div>
      )}
    </section>
  );
}











