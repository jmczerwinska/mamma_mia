import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

function Navigation({ onLinkClick, mobile, links }) {

    return (
        <ul className={`navigation${mobile ? ' navigation--mobile' : ''}`}>
            {
                links.map((el, i) => (
                    <li key={i}>
                        <NavLink
                            className="navigation__link"
                            activeClassName="navigation__link--active"
                            to={el.path}
                            aria-current="page"
                            onClick={onLinkClick !== '' ? onLinkClick : null}>
                            {el.name}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    )
}

export default Navigation;