import React from 'react';
import { NavLink } from 'react-router-dom';

import HamburgerBtn from '../HamburgerBtn/HamburgerBtn';
import BasketBtn from '../BasketBtn/BasketBtn';
import Logo from './logo-mini.png';

import './Navbar.scss';

function Navbar() {

    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar__logo">
                <img src={Logo} alt="home link" />
            </NavLink>
            <BasketBtn />
            <HamburgerBtn />
            <div className="navbar__menu">
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/compose">Skomponuj</NavLink>
                <NavLink to="/contact">Kontakt</NavLink>
            </div>
            
        </nav>
    )
}

export default Navbar;