import React from "react";
import ImageCarousel from "./ImageCarousel";

export default function CompanyIntro() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <h3 className="section-heading company_intro_heading">Get to Know Our Company</h3>
          <div className="little-thin-gold-line" />
          <p className="literature company_intro_literature">
            After 35 years of dedicated service in the field of engineering and construction, we have established ourselves as a proficient general contractor. With our expertise and dedicated staff, we are equipped to guide your project seamlessly from inception to fruition. Our capabilities span a wide spectrum of services, including Structural Reinforcement of Existing Structures; New Construction; ADU Conversions; Regulatory Compliance Projects; as well as a variety of Commercial and Residential Projects; as well as a variety of Commercial and Residential Projects.
          </p>
          <div className="little-thin-gold-line" />
          <h4 className="literature-heading state_license">Contractors State License #886471</h4>
          <p className="literature">
            MAE offers a wide range of construction services to our clients. We believe that our clients’ needs vary from project to project but the necessity for consistent quality, trust, and professionalism does not.
          </p>
        </div>

        <div className="col-md-6">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}
