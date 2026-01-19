import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import { usePageTransition } from "../components/PageTransitionProvider";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { navigateWithTransition } = usePageTransition();
  const location = useLocation();

  // SERVICES is active when any descendant route is active
  const isServicesActive = location.pathname.startsWith("/services");

  const closeMobileMenus = () => { //Ensures menu closes immediately when menu item is clicked
    setIsOpen(false);
    setServicesOpen(false);
  };  

  useEffect(() => { //optional but recommended. Prevent background scroll on iOS
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);


  return (
    <header className="site-header d-flex align-items-center px-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo */}
        <div className="d-flex align-items-center header-left">
          <span
            className="logo-link"
            style={{ cursor: "pointer" }}
            //onClick={() => navigateWithTransition("/")}
            onClick={() => {
              closeMobileMenus();
              navigateWithTransition("/");
            }}
          >
            <img src={logoImg} alt="logo" className="site-logo" />
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className={`main-nav ${isOpen ? "open" : ""}`}>
          <ul className="nav-list d-flex align-items-center mb-0">

            {/* ABOUT US */}
            <li className="nav-item">
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `nav-link custom-nav-link ${isActive ? "active" : ""}`
                }
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenus();
                  navigateWithTransition("/about-us");
                }}
              >
                ABOUT US
              </NavLink>
            </li>

            {/* SERVICES */}
            <li
              className="nav-item position-relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span
                className={`nav-link custom-nav-link ${isServicesActive ? "active" : ""}`}
                role="button"
              >
                SERVICES
              </span>

              <div
                className={`services-panel p-3 ${servicesOpen ? "visible" : ""}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <ul className="list-unstyled mb-0 services-list">
                  <li className="service-item">
                    <NavLink
                      to="/services/soft-story-retrofit"
                      className={({ isActive }) =>
                        `service-link ${isActive ? "active" : ""}`
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        closeMobileMenus();
                        navigateWithTransition("/services/soft-story-retrofit");
                      }}
                    >
                      SOFT STORY RETROFIT
                    </NavLink>
                  </li>

                  <li className="service-item">
                    <NavLink
                      to="/services/residential-remodel-renovations"
                      className={({ isActive }) =>
                        `service-link ${isActive ? "active" : ""}`
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        closeMobileMenus();
                        navigateWithTransition("/services/residential-remodel-renovations");
                      }}
                    >
                      RESIDENTIAL REMODEL / RENOVATIONS
                    </NavLink>
                  </li>

                  <li className="service-item">
                    <NavLink
                      to="/services/adu"
                      className={({ isActive }) =>
                        `service-link ${isActive ? "active" : ""}`
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        closeMobileMenus();
                        navigateWithTransition("/services/adu");
                      }}
                    >
                      ADU (ACCESSORY DWELLING UNIT)
                    </NavLink>
                  </li>

                  <li className="service-item">
                    <NavLink
                      to="/services/sb721-sb362-balcony-deck-inspections"
                      className={({ isActive }) =>
                        `service-link ${isActive ? "active" : ""}`
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        closeMobileMenus();
                        navigateWithTransition("/services/sb721-sb362-balcony-deck-inspections");
                      }}
                    >
                      SB721/SB362 BALCONY & DECK INSPECTIONS
                    </NavLink>
                  </li>

                  <li className="service-item">
                    <NavLink
                      to="/services/commercial-construction"
                      className={({ isActive }) =>
                        `service-link ${isActive ? "active" : ""}`
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        closeMobileMenus();
                        navigateWithTransition("/services/commercial-construction");
                      }}
                    >
                      COMMERCIAL CONSTRUCTION
                    </NavLink>
                  </li>

                  <li className="service-item">
                    <NavLink
                      to="/services/structural-concrete"
                      className={({ isActive }) =>
                        `service-link ${isActive ? "active" : ""}`
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        closeMobileMenus();
                        navigateWithTransition("/services/structural-concrete");
                      }}
                    >
                      STRUCTURAL CONCRETE
                    </NavLink>
                  </li>

                  <li className="service-item">
                    <NavLink
                      to="/services/engineering-associated-services"
                      className={({ isActive }) =>
                        `service-link ${isActive ? "active" : ""}`
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        closeMobileMenus();
                        navigateWithTransition("/services/engineering-associated-services");
                      }}
                    >
                      ENGINEERING & ASSOCIATED SERVICES
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            {/* CONTACT US */}
            <li className="nav-item">
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `nav-link custom-nav-link ${isActive ? "active" : ""}`
                }
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenus();
                  navigateWithTransition("/contact-us");
                }}
              >
                CONTACT US
              </NavLink>
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

