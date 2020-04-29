import React from 'react';
import { useLocation } from 'react-router-dom';

import './ProgressBar.scss';

function ProgressBar() {
    const location = useLocation();
    const addClass = (path) => location.pathname === path
        ? ' progress__step--active'
        : '';

    return (
        <ul className="progress">
            <li className={"progress__step" + addClass('/order/basket')}>
                Koszyk
            </li>
            <li className={"progress__step" + addClass('/order/delivery')}>
                Dostawa
            </li>
            <li className={"progress__step" + addClass('/order/summary')}>
                Podsumowanie
            </li>
        </ul>
    )
}

export default ProgressBar;