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




/*import React, { useState } from "react";

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
    <section className="contact-panel container py-5 font-style" style={{ background: "#fff" }}>
      {}//Reusable heading 
      <p> <h2 className="section-heading">Contact Us</h2> </p>

      {}//Center form 
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form noValidate onSubmit={handleSubmit}>
            {}//Name 
            <label className="form-label fw-bold">
              Name <span className="required">*</span>
            </label>
            <div className="d-flex gap-2 mb-3">
              <input
                className="form-control home-contact-form"
                placeholder="First"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="form-control home-contact-form"
                placeholder="Last"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            {}//Email 
            <label className="form-label fw-bold">
              Email <span className="required">*</span>
            </label>
            <input
              className="form-control mb-3 home-contact-form"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {}//Phone 
            <label className="form-label fw-bold">
              Phone <span className="required">*</span>
            </label>
            <input
              className="form-control mb-4 home-contact-form"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            {}//Button 
            <div className="text-center">
              <button
                type="submit"
                className="btn px-5 home-contact-form-btn"
                disabled={loading}
                style={{
                  backgroundColor: "#80bfff",
                  color: "#fff"
                }}
              >
                {loading ? "Submitting..." : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {}//Responses 
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
}*/



import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponseMessage(null);
    setLoading(true);

    try {
      const response = await fetch("/api/home-contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    <section className="contact-panel container py-5 font-style" style={{ background: "#fff" }}>
      <h2 className="section-heading text-center mb-4">Contact Us</h2>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form noValidate onSubmit={handleSubmit}>
            {/* Name */}
            <label className="form-label fw-bold">
              Name <span className="required">*</span>
            </label>
            <div className="d-flex gap-2 mb-3">
              <input
                className="form-control home-contact-form"
                placeholder="First"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="form-control home-contact-form"
                placeholder="Last"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <label className="form-label fw-bold">
              Email <span className="required">*</span>
            </label>
            <input
              className="form-control mb-3 home-contact-form"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Phone */}
            <label className="form-label fw-bold">
              Phone <span className="required">*</span>
            </label>
            <PhoneInput
              country={"us"}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputClass="form-control home-contact-form"
              containerClass="mb-4"
              enableSearch
              inputStyle={{
                width: "100%",
                height: "38px"
              }}
            />

            {/* Button */}
            <div>
              <button
                type="submit"
                className="home-contact-form-btn"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>

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









