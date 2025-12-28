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



import AboutHero from "../sections/AboutHero";
import CompanyIntro from "../sections/CompanyIntro";
import StaffSection from "../sections/StaffSection";
import GeneralConstruction from "../sections/GeneralConstruction";
import CTAWide from "../sections/CTAWide";
import AboutFooter from "../sections/Footer";

export default function AboutUs() {
  return (
    <>
      <AboutHero />
      <CompanyIntro />
      <StaffSection />
      <GeneralConstruction />
      <CTAWide />
      <AboutFooter />
    </>
  );
}

