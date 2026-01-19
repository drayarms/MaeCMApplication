import React from "react";
import SEO from "../components/SEO";
import Hero from "../sections/Hero";
import WhitePanel from "../sections/WhitePanel";
import Projects from "../sections/Projects";
import Consultation from "../sections/Consultation";
import ContactPanel from "../sections/ContactPanel";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <SEO
        title="Home - MaeCMServices Construction Management"
        description="MAE CM Services is a licensed California general contractor with over 35 years of experience in engineering and construction. We specialize in structural concrete, soft story retrofits, ADUs, inspections, and commercial and residential construction—delivering safe, compliant, and high-quality projects statewide."
        keywords="general contractor California, engineering and construction services, structural concrete, soft story retrofit, ADU construction, SB 721 inspection, commercial construction, residential construction, seismic retrofit California, licensed contractor, construction management, MAE CM Services"
        url="https://maecmservices.com"
      />
      <Hero />
      <WhitePanel />
      <Projects />
      <Consultation />
      <ContactPanel />
      <Footer />
    </>
  );
}

