import React from 'react';
import './HamburgerBtn.scss';

function HamburgerBtn() {
    return (
        <button className="hamburger">
            <span className="hamburger__box">
                <span className="hamburger__line first"></span>
                <span className="hamburger__line"></span>
                <span className="hamburger__line last"></span>
            </span>
        </button>
    )
}

export default HamburgerBtn;