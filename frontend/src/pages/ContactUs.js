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
import ContactPanel from "../sections/ContactPanel";

export default function ContactUs() {
  return (
    <div>
      <ContactPanel />
    </div>
  );
}

