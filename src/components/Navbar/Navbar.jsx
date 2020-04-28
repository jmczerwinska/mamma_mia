import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-reveal';
import { useScrollPosition, useWindowWidth } from '../../customHooks';

import HamburgerBtn from '../HamburgerBtn/HamburgerBtn';
import BasketBtn from '../BasketBtn/BasketBtn';
import Navigation from '../Navigation/Navigation';
import Logo from './logo-mini.png';

import './Navbar.scss';

function Navbar() {
    const links = [
        { name: 'Menu', path: '/menu' },
        { name: 'Skomponuj', path: '/compose' },
        { name: 'Opinie', path: '/comments' },
        { name: 'Kontakt', path: '/contact' }
    ]

    const headerHeight = (window.innerHeight / 2) - 70;
    const isScrolled = useScrollPosition() > headerHeight;
    
    const isMobile = useWindowWidth() < 800;

    const [showNavigation, setShowNavigation] = useState(false);

    useEffect(() => {
        setShowNavigation(false);
    }, [isMobile]);

    const toggleNavigation = () => {
        setShowNavigation(prevValue => !prevValue)
    }

    useEffect(() => {
        showNavigation
            ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    }, [showNavigation]);

    return (
        <nav className={`navbar${isScrolled ? ' navbar--scroll' : ''}`}>
            <div className="navbar__logo">
                <NavLink className="navigation__link" to="/" >
                    <img src={Logo} alt="home link" />
                </NavLink>
            </div>

            <BasketBtn />

            {!isMobile
                ? (
                    <Navigation
                        onLinkClick=''
                        mobile={isMobile}
                        links={links} />
                )
                : (
                    <>
                        <HamburgerBtn
                            toggleMenu={toggleNavigation}
                            active={showNavigation} />
                        <Slide down
                            when={showNavigation}
                            duration={500}
                            collapse>
                            <div className="navigation-wrapper">
                                <Navigation
                                    onLinkClick={toggleNavigation}
                                    mobile={isMobile}
                                    links={links} />
                            </div>
                        </Slide>
                    </>
                )
            }
        </nav>
    )
}

export default Navbar;