import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import HamburgerBtn from '../HamburgerBtn/HamburgerBtn';
import BasketBtn from '../BasketBtn/BasketBtn';
import Logo from './logo-mini.png';

import './Navbar.scss';

function Navbar() {
    const [showNavigation, setShowNavigation] = useState(false);

    const toggleNavigation = () => {
        showNavigation === false ? setShowNavigation(true) : setShowNavigation(false);
    }

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <NavLink to="/" >
                    <img src={Logo} alt="home link" />
                </NavLink>
            </div>

            <BasketBtn />
            <HamburgerBtn toggleMenu={toggleNavigation} />
            {
                showNavigation === false
                    ? null
                    : (<div className="navigation">
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
                    </div>)
            }


        </nav>
    )
}

export default Navbar;