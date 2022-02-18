import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useScrollPosition, useWindowWidth } from "../../customHooks";

import HamburgerBtn from "../HamburgerBtn/HamburgerBtn";
import BasketBtn from "../BasketBtn/BasketBtn";
import Navigation from "../Navigation/Navigation";
import Logo from "./logo-mini.png";
import LogButton from "../LogBtn/LogBtn";

import "./Navbar.scss";
import { UserContext } from "../../context/UserContext/UserContext";

function Navbar() {
  const { user } = useContext(UserContext);
  
  const links = [
    { name: "Menu", path: "/mamma_mia/menu" },
    { name: "Skomponuj", path: "/mamma_mia/compose" },
    { name: "Opinie", path: "/mamma_mia/comments" },
    { name: "Kontakt", path: "/mamma_mia/contact" },
  ];

  if (user) {
    links.push({ name: "Moje konto", path: "/mamma_mia/useraccount" });
  }

  const headerHeight = window.innerHeight / 2 - 70;
  const isScrolled = useScrollPosition() > headerHeight;

  const isMobile = useWindowWidth() < 800;

  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    setShowNavigation(false);
  }, [isMobile]);

  const toggleNavigation = () => {
    setShowNavigation((prevValue) => !prevValue);
  };

  useEffect(() => {
    showNavigation
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [showNavigation]);

  return (
    <nav className={`navbar${isScrolled ? " navbar--scroll" : ""}`}>
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <NavLink className="navigation__link" to="/mamma_mia">
            <img src={Logo} alt="home link" />
          </NavLink>
        </div>

        {!isMobile ? (
          <Navigation onLinkClick="" mobile={isMobile} links={links} />
        ) : (
          <>
            <HamburgerBtn
              toggleMenu={toggleNavigation}
              active={showNavigation}
            />
            <div
              className={`navigation-wrapper${
                showNavigation ? " navigation-wrapper--active" : ""
              }`}
            >
              <Navigation
                onLinkClick={toggleNavigation}
                mobile={isMobile}
                links={links}
              />
            </div>
          </>
        )}

        <BasketBtn toggleMenu={() => setShowNavigation(false)} />

        <LogButton toggleMenu={() => setShowNavigation(false)} />
      </div>
    </nav>
  );
}

export default Navbar;
