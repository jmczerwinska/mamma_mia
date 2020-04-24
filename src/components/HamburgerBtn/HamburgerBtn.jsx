import React from 'react';

import './HamburgerBtn.scss';

function HamburgerBtn({ toggleMenu, activeClass }) {

    return (
        <button className={`hamburger${activeClass}`} onClick={toggleMenu}>
            <span className="hamburger__box">
                <span className="hamburger__line"></span>
            </span>
        </button>
    )
}

export default HamburgerBtn;