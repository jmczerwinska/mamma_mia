import React, { useState } from 'react';
import './HamburgerBtn.scss';

function HamburgerBtn({ toggleMenu }) {
    const [additionalClass, setAdditionalClass] = useState('');

    const onClick = () => {
        toggleMenu();
        setAdditionalClass(additionalClass==='' ? ' hamburger--active' : '');
    }

    return (
        <button className={`hamburger${additionalClass}`} onClick={onClick}>
            <span className="hamburger__box">
                <span className="hamburger__line"></span>
            </span>
        </button>
    )
}

export default HamburgerBtn;