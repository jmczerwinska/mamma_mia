import React from 'react';
import './Menu.scss';
import menuCart from '../../data/menu';
import PizzaList from '../PizzaList/PizzaList'
import { Link } from 'react-router-dom';


function Menu() {
    const bianca = [];
    const rossa = [];
    menuCart.map(el => el.category === 'rossa' ? rossa.push(el) : bianca.push(el));

    //TODO dodawanie pizzy do koszyka
    

    return (
        <div className="container">
            <h2>Menu</h2>
            <PizzaList list={rossa} title="Pizza Rossa" />
            <PizzaList list={bianca} title="Pizza Bianca"/>
            <p>Nie zanalazłeś pizzy na jaka masz ochotę? <Link to="/compose">Skomponuj własną!</Link></p>  
        </div>

    )
}

export default Menu;