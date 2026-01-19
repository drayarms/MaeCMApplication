import React from "react";
import SEO from "../components/SEO";
import ContactHero from "../sections/ContactHero";
import ContactPanel2 from "../sections/ContactPanel2";
import Footer from "../sections/Footer";

export default function ContactUs() {
  return (
    <div>
      <SEO
        title="Contact Us - MaeCMServices Construction Management"
        description="Contact MAE CM Services to discuss your construction or engineering project. Our experienced team is ready to assist with general contracting, structural work, ADUs, retrofits, inspections, and commercial or residential construction throughout California."
        keywords="contact MAE CM Services, construction company contact, general contractor California, construction consultation, engineering services contact, ADU contractor contact, structural construction services, commercial construction contact, residential construction contact, licensed contractor California"
        url="https://maecmservices.com"
      />    
      <ContactHero />
      <ContactPanel2 />
      <Footer />
    </div>
  );
}

