import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {


    return (
        <nav className='navbar'>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/compose">Skomponuj</NavLink>
            <NavLink to="/contact">Kontakt</NavLink>
            <NavLink to="/order">Koszyk</NavLink>
        </nav>
    )
}

export default Navbar;