import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import menuCart from '../../data/menu';
import PizzaList from '../PizzaList/PizzaList';

import './Menu.scss';

function Menu({ history }) {
    useEffect(() => window.scrollTo(0,0), []);

    const bianca = [];
    const rossa = [];
    menuCart.map(el => el.category === 'rossa' ? rossa.push(el) : bianca.push(el));

    return (
        <div className="container">
            <PizzaList list={rossa} title="Pizza Rossa" />
            <PizzaList list={bianca} title="Pizza Bianca" />
            <div className="redirection">
                <p className="redirection__description" >Nie zanalazłeś pizzy na jaką masz ochotę?</p>
                <button className="redirection__button"onClick={() => history.push('/compose')}>
                    Skomponuj własną!
                </button>
            </div>

        </div>

    )
}

export default withRouter(Menu);