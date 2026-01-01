/*import React from "react";
import ContactPanel from "../sections/ContactPanel";

export default function ContactUs() {
  return (
    <div>
      <ContactPanel />
    </div>
  );
}*/


/*
import React, { useEffect } from "react";
import { usePageTransition } from "../components/PageTransitionProvider";
import ContactPanel from "../sections/ContactPanel";

export default function AboutUs() {
  const { finishTransition } = usePageTransition();

  //useEffect(() => {
    // PAGE IS READY — stop transition
    //finishTransition();
  //}, [finishTransition]);

  //useEffect(() => {
    //async function loadData() {
      //await fetch("/api/data");
      //finishTransition(); // stop animation AFTER data is loaded
    //}
    //loadData();
  //}, []);    

  return (
    <div>
      <ContactPanel />
    </div>
  );
}
*/

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

