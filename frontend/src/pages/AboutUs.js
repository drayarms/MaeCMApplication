/*import React from "react";

export default function AboutUs() {
  return (
    <div className="page-pane about-us container py-5">
      <h2>About Us</h2>
      <p>Placeholder about-us content. This page uses the same header and footer components.</p>
    </div>
  );
}*/


/*import React, { useEffect } from "react";
import { usePageTransition } from "../components/PageTransitionProvider";

export default function AboutUs() {
  const { finishTransition } = usePageTransition();

  useEffect(() => {
    // PAGE IS READY — stop transition
    finishTransition();
  }, [finishTransition]);

  //useEffect(() => {
    //async function loadData() {
      //await fetch("/api/data");
      //finishTransition(); // stop animation AFTER data is loaded
    //}
    //loadData();
  //}, []);  

  return (
    <div className="page-pane about-us container py-5">
      <h2>About Us</h2>
      {}//rest of the page
    </div>
  );
}*/


/*
import React from "react";
import Footer from "../sections/Footer";

export default function AboutUs() {
  return (
    <div className="page-pane about-us container py-5">
      <h2>About Us</h2>
      <p>Placeholder about-us content. This page uses the same header and footer components.</p>
    </div>
  );
}*/


import SEO from "../components/SEO";
import AboutHero from "../sections/AboutHero";
import CompanyIntro from "../sections/CompanyIntro";
import StaffSection from "../sections/StaffSection";
import GeneralConstruction from "../sections/GeneralConstruction";
import CTAWide from "../sections/CTAWide";
import Footer from "../sections/Footer";

export default function SoftStoryRetrofit() {
  return (
    <>
      <SEO
        title="About MAE CM Services"
        description="Learn more about MAE CM Services, a trusted construction and engineering firm with over 35 years of experience."
        keywords="construction company Los Angeles, MAE CM, engineering services"
        url="https://maecmservices.com"
      />    
      <AboutHero />
      <CompanyIntro />
      <StaffSection />
      <GeneralConstruction />
      <CTAWide />
      <Footer />
    </>
  );
}

