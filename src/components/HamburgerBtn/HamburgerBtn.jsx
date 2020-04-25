import React from 'react';

import './HamburgerBtn.scss';

function HamburgerBtn({ toggleMenu, active }) {

    return (
        <button 
            className={`hamburger${active ? ' hamburger--active' : ''}`}
            onClick={toggleMenu}>
            <span className="hamburger__box">
                <span className="hamburger__line"></span>
            </span>
        </button>
    )
}

export default HamburgerBtn;