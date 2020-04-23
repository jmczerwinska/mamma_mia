import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-reveal';

import HamburgerBtn from '../HamburgerBtn/HamburgerBtn';
import BasketBtn from '../BasketBtn/BasketBtn';
import Logo from './logo-mini.png';

import './Navbar.scss';

function Navbar() {
    const [showNavigation, setShowNavigation] = useState(false);

    const toggleNavigation = () => {
        !showNavigation ? setShowNavigation(true) : setShowNavigation(false);
    }

    useEffect(() => {
        showNavigation 
        ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    }, [showNavigation]);

    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const height = (window.innerHeight / 2) - 70;
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > height
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    return (
        <nav className={`navbar${scroll ? ' scroll': ''}`}>
            <div className="navbar__logo">
                <NavLink className="navigation__link" to="/" >
                    <img src={Logo} alt="home link" />
                </NavLink>
            </div>

            <BasketBtn />
            <HamburgerBtn toggleMenu={toggleNavigation} />
            <Slide down
                when={showNavigation}
                duration={500}
                collapse>
                <div className="navigation">
                    <NavLink
                        className="navigation__link"
                        activeClassName="navigation__link--active"
                        to="/menu"
                        aria-current="page"
                        onClick={toggleNavigation}>
                        Menu
                    </NavLink>
                    <NavLink
                        className="navigation__link" activeClassName="navigation__link--active"
                        to="/compose"
                        aria-current="page"
                        onClick={toggleNavigation}>
                        Skomponuj
                    </NavLink>
                    <NavLink
                        className="navigation__link"
                        activeClassName="navigation__link--active"
                        to="/contact"
                        aria-current="page"
                        onClick={toggleNavigation}>
                        Kontakt
                    </NavLink>
                </div>
            </Slide>
        </nav>
    )
}

export default Navbar;