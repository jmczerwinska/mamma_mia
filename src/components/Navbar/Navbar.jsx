import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-reveal';

import HamburgerBtn from '../HamburgerBtn/HamburgerBtn';
import BasketBtn from '../BasketBtn/BasketBtn';
import Logo from './logo-mini.png';

import './Navbar.scss';

function Navbar() {
    const [showNavigation, setShowNavigation] = useState(false);
    const [additionalClass, setAdditionalClass] = useState('');

    const toggleNavigation = () => {
        !showNavigation ? setShowNavigation(true) : setShowNavigation(false);
        setAdditionalClass(additionalClass === '' ? ' hamburger--active' : '');
    }

    useEffect(() => {
        showNavigation
            ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    }, [showNavigation]);

    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const scrollHandler = () => {
            const height = (window.innerHeight / 2) - 70; const scrollCheck = window.scrollY > height
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

            <HamburgerBtn 
                toggleMenu={toggleNavigation} 
                activeClass={additionalClass} />

            <Slide down
                when={showNavigation}
                duration={500}
                collapse>
                <div className="navigation">
                    <ul className="navigation__list">
                        <li>
                            <NavLink
                                className="navigation__link"
                                activeClassName="navigation__link--active"
                                to="/menu"
                                aria-current="page"
                                onClick={toggleNavigation}>
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="navigation__link" activeClassName="navigation__link--active"
                                to="/compose"
                                aria-current="page"
                                onClick={toggleNavigation}>
                                Skomponuj
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="navigation__link"
                                activeClassName="navigation__link--active"
                                to="/contact"
                                aria-current="page"
                                onClick={toggleNavigation}>
                                Kontakt
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </Slide>
        </nav>
    )
}

export default Navbar;