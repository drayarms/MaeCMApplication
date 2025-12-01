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
