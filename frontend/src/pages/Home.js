/*import React from "react";
import Hero from "../sections/Hero";
import WhitePanel from "../sections/WhitePanel";
import Projects from "../sections/Projects";
import CTA from "../sections/CTA";
import Consultation from "../sections/Consultation";
import ContactPanel from "../sections/ContactPanel";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhitePanel />
      <Projects />
      <div className="image-grids">
        <Projects.ImageGridBlock start={0} />
        <Projects.ImageGridBlock start={4} />
      </div>
      <CTA />
      <Consultation />
      <ContactPanel />
      <Footer />
    </>
  );
}*/


/*
import React, { useEffect } from "react";
import { usePageTransition } from "../components/PageTransitionProvider";
import Hero from "../sections/Hero";
import WhitePanel from "../sections/WhitePanel";
import Projects from "../sections/Projects";
import CTA from "../sections/CTA";
import Consultation from "../sections/Consultation";
import ContactPanel from "../sections/ContactPanel";
import Footer from "../sections/Footer";

export default function Home() {
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
    <>
      <Hero />
      <WhitePanel />
      <Projects />
      <div className="image-grids">
        <Projects.ImageGridBlock start={0} />
        <Projects.ImageGridBlock start={4} />
      </div>
      <CTA />
      <Consultation />
      <ContactPanel />
      <Footer />
    </>
  );
}
*/



/*import React, { useEffect } from "react";
import { usePageTransition } from "../components/PageTransitionProvider";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero";
import WhitePanel from "../sections/WhitePanel";
import Projects from "../sections/Projects";
import CTA from "../sections/CTA";
import Consultation from "../sections/Consultation";
import ContactPanel from "../sections/ContactPanel";
import Footer from "../sections/Footer";

export default function AboutUs() {
  const { finishTransition } = usePageTransition();
  const location = useLocation();

  useEffect(() => {
    // Finish the transition automatically whenever the route changes
    finishTransition();
  }, [location.pathname, finishTransition]);

  return (
    <>
      <Hero />
      <WhitePanel />
      <Projects />
      <div className="image-grids">
        <Projects.ImageGridBlock start={0} />
        <Projects.ImageGridBlock start={4} />
      </div>
      <CTA />
      <Consultation />
      <ContactPanel />
      <Footer />
    </>
  );
}*/

/*
DATA PAGE
import React, { useEffect, useState } from "react";
import { usePageTransition } from "../components/PageTransitionProvider";

export default function Dashboard() {
  const { finishTransition } = usePageTransition();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/api/data");
      const json = await res.json();
      setData(json);
      finishTransition(); // Stop overlay after data loads
    }
    loadData();
  }, [finishTransition]);

  //?if (!data) return null; // or a skeleton UI

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

*/

/*import React from "react";
import Hero from "../sections/Hero";
import WhitePanel from "../sections/WhitePanel";
import Projects from "../sections/Projects";
import CTA from "../sections/CTA";
import Consultation from "../sections/Consultation";
import ContactPanel from "../sections/ContactPanel";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhitePanel />
      <Projects />
      <div className="image-grids">
        <Projects.ImageGridBlock start={0} />
        <Projects.ImageGridBlock start={4} />
      </div>
      <CTA />
      <Consultation />
      <ContactPanel />
      <Footer />
    </>
  );
}*/



import React from "react";
import Hero from "../sections/Hero";
import WhitePanel from "../sections/WhitePanel";
import Projects from "../sections/Projects";
import Consultation from "../sections/Consultation";
import ContactPanel from "../sections/ContactPanel";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhitePanel />
      <Projects />
      <Consultation />
      <ContactPanel />
      <Footer />
    </>
  );
}

