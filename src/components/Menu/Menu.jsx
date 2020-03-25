import React from 'react';
import './Menu.css';
import menuCart from '../../data/menu';
import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList'


function Menu() {
    const bianca = [];
    const rossa = [];
    menuCart.map(el => el.category === 'rossa' ? rossa.push(el) : bianca.push(el));

    

    return (
        <div className="container">
            <Header />
            <h2>Menu</h2>
            <h3>Pizza Rossa</h3>
            <PizzaList list={rossa} />
            <h3>Pizza Bianca</h3>
            <PizzaList list={bianca} />

            
        </div>

    )
}

export default Menu;