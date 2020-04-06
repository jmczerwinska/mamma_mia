import React from 'react';

// import Logo from './Logo.png';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Logo from './logo-mini.png';
import './Header.scss';

function Header() {

    return (
        <header className="header">
            <Link to="/">
                <img src={Logo} alt="home link" />
            </Link>


            <Navbar />
        </header>
    )
}


export default Header;