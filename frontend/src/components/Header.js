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

/*import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import { usePageTransition } from "../components/PageTransitionProvider";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { navigateWithTransition } = usePageTransition();


  return (
    <header className="site-header d-flex align-items-center px-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {// Logo //}
        <div className="d-flex align-items-center header-left">
          <span
            className="logo-link"
            style={{ cursor: "pointer" }}
            onClick={() => navigateWithTransition("/")}
          >
            <img src={logoImg} alt="logo" className="site-logo" />
          </span>
        </div>

        {// Desktop Nav //}
        <nav className={`main-nav ${isOpen ? "open" : ""}`}>
          <ul className="nav-list d-flex align-items-center mb-0">

            {// ABOUT US //}
            <li className="nav-item">
              


              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `nav-link custom-nav-link ${isActive ? "active" : ""}`
                }
                onClick={(e) => {
                  e.preventDefault();
                  navigateWithTransition("/about-us");
                }}
              >
                ABOUT US
              </NavLink>

            </li>

            {// SERVICES (no navigation) //}
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
                  <ul className="list-unstyled mb-0 services-list">
                    <li className="service-item">
                      <NavLink
                        to="/services/soft-story-retrofit"
                        className={({ isActive }) =>
                          `service-link ${isActive ? "active" : ""}`
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          navigateWithTransition("/services/soft-story-retrofit");
                        }}
                      >
                        SOFT STORY RETROFIT
                      </NavLink>
                    </li>

                    <li className="service-item">
                      <NavLink
                        to="/services/residential-remodels-renovations"
                        className={({ isActive }) =>
                          `service-link ${isActive ? "active" : ""}`
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          navigateWithTransition("/services/residential-remodels-renovations");
                        }}
                      >
                        RESIDENTIAL REMODELS / RENOVATIONS
                      </NavLink>
                    </li>

                    <li className="service-item">
                      <NavLink
                        to="/services/accessory-dwelling-unit"
                        className={({ isActive }) =>
                          `service-link ${isActive ? "active" : ""}`
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          navigateWithTransition("/services/accessory-dwelling-unit");
                        }}
                      >
                        ADU (ACCESSORY DWELLING UNIT)
                      </NavLink>
                    </li>

                    <li className="service-item">
                      <NavLink
                        to="/services/sb721-deck-balcony-inspections"
                        className={({ isActive }) =>
                          `service-link ${isActive ? "active" : ""}`
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          navigateWithTransition("/services/sb721-deck-balcony-inspections");
                        }}
                      >
                        SB721 DECK & BALCONY INSPECTIONS
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
                          navigateWithTransition("/services/engineering-associated-services");
                        }}
                      >
                        ENGINEERING & ASSOCIATED SERVICES
                      </NavLink>
                    </li>
                  </ul>
                </div>





            </li>

            {// CONTACT US //}
            <li className="nav-item">
              

              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `nav-link custom-nav-link ${isActive ? "active" : ""}`
                }
                onClick={(e) => {
                  e.preventDefault();
                  navigateWithTransition("/contact-us");
                }}
              >
                CONTACT US
              </NavLink>

            </li>
          </ul>
        </nav>

        {// Mobile Toggler //}
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
}*/


import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import { usePageTransition } from "../components/PageTransitionProvider";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { navigateWithTransition } = usePageTransition();
  const location = useLocation();

  // SERVICES is active when any descendant route is active
  const isServicesActive = location.pathname.startsWith("/services");

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
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `nav-link custom-nav-link ${isActive ? "active" : ""}`
                }
                onClick={(e) => {
                  e.preventDefault();
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

