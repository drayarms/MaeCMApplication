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
          </Routes>
        </PageWrapper>
      </main>
      <ScrollTopButton />
    </PageTransitionProvider>
  );
}

export default App;


