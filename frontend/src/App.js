import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SoftStoryRetrofit from "./pages/services/SoftStoryRetrofit"; 
import ResidentialRemodelRenovations from "./pages/services/ResidentialRemodelRenovations"; 
import ADU from "./pages/services/ADU"; 
import SB721SB362BalconyDeckInspections from "./pages/services/SB721SB362BalconyDeckInspections"; 
import CommercialConstruction from "./pages/services/CommercialConstruction"; 
import StructuralConcrete from "./pages/services/StructuralConcrete"; 
import EngineeringAssociatedServices from "./pages/services/EngineeringAssociatedServices"; 
import PortfolioPage from "./pages/PortfolioPage";
import { PROJECTS } from "./data/projects-data";

import Header from "./components/Header";
import ScrollTopButton from "./components/ScrollTopButton";
import PageTransitionProvider from "./components/PageTransitionProvider";
import PageWrapper from "./components/PageWrapper"; // <- import the wrapper
import NotFound from "./pages/NotFound";



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
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services/soft-story-retrofit" element={<SoftStoryRetrofit />} />
            <Route path="/services/residential-remodel-renovations" element={<ResidentialRemodelRenovations />} />
            <Route path="/services/adu" element={<ADU />} />
            <Route path="/services/sb721-sb362-balcony-deck-inspections" element={<SB721SB362BalconyDeckInspections />} /> 
            <Route path="/services/commercial-construction" element={<CommercialConstruction />} /> 
            <Route path="/services/structural-concrete" element={<StructuralConcrete />} /> 
            <Route path="/services/engineering-associated-services" element={<EngineeringAssociatedServices />} /> 
            
            {/* Portfolio */}
            <Route path="/portfolio/:slug" element={<PortfolioPage />} />
            <Route
              path="/portfolio"
              element={
                PROJECTS?.length ? (
                  <Navigate to={`/portfolio/${PROJECTS[0].link}`} replace />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />

            <Route path="*" element={<NotFound />} />


          </Routes>
        </PageWrapper>
      </main>
      <ScrollTopButton />
    </PageTransitionProvider>
  );
}

export default App;

