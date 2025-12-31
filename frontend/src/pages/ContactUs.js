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
import ContactHero from "../sections/ContactHero";
import ContactPanel2 from "../sections/ContactPanel2";
import Footer from "../sections/Footer";

export default function ContactUs() {
  return (
    <div>
      <ContactHero />
      <ContactPanel2 />
      <Footer />
    </div>
  );
}

