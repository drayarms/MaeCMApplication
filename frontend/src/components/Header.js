/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { usePageTransition } from "../components/PageTransitionProvider";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="site-header d-flex align-items-center px-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center header-left">
          <Link to="/" className="logo-link">
            <img src={logoImg} alt="logo" className="site-logo" />
          </Link>
        </div>

        <nav className={`main-nav ${isOpen ? "open" : ""}`}>
          <ul className="nav-list d-flex align-items-center mb-0">
            <li className="nav-item">
              <Link to="/about-us" className="nav-link custom-nav-link">ABOUT US</Link>
            </li>

            <li
              className="nav-item position-relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span className="nav-link custom-nav-link" role="button">SERVICES</span>

              <div
                className={`services-panel p-3 ${servicesOpen ? "visible" : ""}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <ul className="list-unstyled mb-0">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <li key={i} className="service-item py-2">
                      <a className="service-link" href="#!">Service {i + 1}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/contact-us" className="nav-link custom-nav-link">CONTACT US</Link>
            </li>
          </ul>
        </nav>

        {}//mobile toggler 
        <button
          className="navbar-toggler d-md-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="toggler-lines" />
        </button>
      </div>
    </header>
  );
}

*/

import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import { usePageTransition } from "../components/PageTransitionProvider";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { navigateWithTransition } = usePageTransition();

  return (
    <header className="site-header d-flex align-items-center px-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo */}
        <div className="d-flex align-items-center header-left">
          <span
            className="logo-link"
            style={{ cursor: "pointer" }}
            onClick={() => navigateWithTransition("/")}
          >
            <img src={logoImg} alt="logo" className="site-logo" />
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className={`main-nav ${isOpen ? "open" : ""}`}>
          <ul className="nav-list d-flex align-items-center mb-0">

            {/* ABOUT US */}
            <li className="nav-item">
              <span
                className="nav-link custom-nav-link"
                onClick={() => navigateWithTransition("/about-us")}
                style={{ cursor: "pointer" }}
              >
                ABOUT US
              </span>
            </li>

            {/* SERVICES (no navigation) */}
            <li
              className="nav-item position-relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span className="nav-link custom-nav-link" role="button">
                SERVICES
              </span>

              <div
                className={`services-panel p-3 ${servicesOpen ? "visible" : ""}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <ul className="list-unstyled mb-0">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <li key={i} className="service-item py-2">
                      <a className="service-link" href="#!">Service {i + 1}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* CONTACT US */}
            <li className="nav-item">
              <span
                className="nav-link custom-nav-link"
                onClick={() => navigateWithTransition("/contact-us")}
                style={{ cursor: "pointer" }}
              >
                CONTACT US
              </span>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler d-md-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="toggler-lines" />
        </button>
      </div>
    </header>
  );
}

