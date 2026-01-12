import React from "react";
import SEO from "../components/SEO";
import ContactHero from "../sections/ContactHero";
import ContactPanel2 from "../sections/ContactPanel2";
import Footer from "../sections/Footer";

export default function ContactUs() {
  return (
    <div>
      <SEO
        title="Contact MAE CM Services"
        description="Learn more about MAE CM Services, a trusted construction and engineering firm with over 35 years of experience."
        keywords="construction company Los Angeles, MAE CM, engineering services"
        url="https://maecmservices.com"
      />    
      <ContactHero />
      <ContactPanel2 />
      <Footer />
    </div>
  );
}

