/*import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import ScrollTopButton from "./components/ScrollTopButton";
import PageTransitionProvider from "./components/PageTransitionProvider";

function App() {
  return (
    <PageTransitionProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <ScrollTopButton />
    </PageTransitionProvider>
  );
}

export default App;*/


import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SoftStoryRetrofit from "./pages/services/SoftStoryRetrofit"; 
import ResidentialRemodelRenovations from "./pages/services/ResidentialRemodelRenovations"; 
import ADU from "./pages/services/ADU"; 
import SB721DeckBalconyInspections from "./pages/services/SB721DeckBalconyInspections"; 
import CommercialConstruction from "./pages/services/CommercialConstruction"; 
import StructuralConcrete from "./pages/services/StructuralConcrete"; 
import EngineeringAssociatedServices from "./pages/services/EngineeringAssociatedServices"; 

import Header from "./components/Header";
import ScrollTopButton from "./components/ScrollTopButton";
import PageTransitionProvider from "./components/PageTransitionProvider";
import PageWrapper from "./components/PageWrapper"; // <- import the wrapper


import "./App.css";

function App() {
  return (
    <PageTransitionProvider>
      <Header />
      <main>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services/soft-story-retrofit" element={<SoftStoryRetrofit />} />
            <Route path="/services/residential-remodel-renovations" element={<ResidentialRemodelRenovations />} />
            <Route path="/services/adu" element={<ADU />} />
            <Route path="/services/sb721-deck-balcony-inspections" element={<SB721DeckBalconyInspections />} /> 
            <Route path="/services/commercial-construction" element={<CommercialConstruction />} /> 
            <Route path="/services/structural-concrete" element={<StructuralConcrete />} /> 
            <Route path="/services/engineering-associated-services" element={<EngineeringAssociatedServices />} /> 
          </Routes>
        </PageWrapper>
      </main>
      <ScrollTopButton />
    </PageTransitionProvider>
  );
}

export default App;


