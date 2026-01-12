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
        title="MAE CM Home"
        description="Learn more about MAE CM Services, a trusted construction and engineering firm with over 35 years of experience."
        keywords="construction company Los Angeles, MAE CM, engineering services"
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

