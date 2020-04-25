import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-reveal';

import HamburgerBtn from '../HamburgerBtn/HamburgerBtn';
import BasketBtn from '../BasketBtn/BasketBtn';
import Navigation from '../Navigation/Navigation';
import Logo from './logo-mini.png';

import './Navbar.scss';

function Navbar() {
    const links = [
        { name: 'Menu', path: '/menu' },
        { name: 'Skomponuj', path: '/compose' },
        { name: 'Komentarze', path: '/comments' },
        { name: 'Kontakt', path: '/contact' }
    ]

    const [isMobile, setIsMobile] = useState(false);
    const [showNavigation, setShowNavigation] = useState(false);
    const [scroll, setScroll] = useState(0);

    const onResize = () => {
        setIsMobile(window.innerWidth < 800);
        setShowNavigation(false);
    }

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const toggleNavigation = () => {
        !showNavigation ? setShowNavigation(true) : setShowNavigation(false);
    }

    useEffect(() => {
        showNavigation
            ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    }, [showNavigation, isMobile]);

    useEffect(() => {
        const scrollHandler = () => {
            const height = (window.innerHeight / 2) - 70;
            const scrollCheck = window.scrollY > height
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        }

        document.addEventListener('scroll', scrollHandler);

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        };

    }, [scroll, setScroll])

    return (
        <nav className={`navbar${scroll ? ' navbar--scroll' : ''}`}>
            <div className="navbar__logo">
                <NavLink className="navigation__link" to="/" >
                    <img src={Logo} alt="home link" />
                </NavLink>
            </div>

            <BasketBtn />

            {isMobile
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