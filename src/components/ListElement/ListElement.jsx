import React, { useState } from 'react';
import './ListElement.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Price from '../Price/Price';
import AddPizzaButton from '../AddPizzaButton/AddPizzaButton';


function ListElement({ pizza, i }) {
    const [selected, setSelected] = useState('średnia');

    const addPizza = context => {
        const newPizza = {
            name: pizza.name,
            size: selected,
            price: findPrice()
        };
        context.basket.push(newPizza);
        console.log(context.basket);
        setSelected('średnia');
    }
    const findPrice = () => {
        switch (selected) {
            case 'mała':
                return pizza.price.s;
            case 'duża':
                return pizza.price.l;
            default:
                return pizza.price.m;
        }
    }

    return (
        <li className="menu-el">
            <h4 className="menu-el__name">{pizza.name}</h4>
            <p className="menu-el__ingredients">{pizza.ingredients.join(', ')}</p>
            <div className="custom-select">
                <div className="custom-select__box">
                    <select
                        className="custom-select__select-size"
                        value={selected}
                        onChange={e => setSelected(e.target.value)}>
                        <option value='mała'> Mała </option>
                        <option value='średnia'>Średnia</option>
                        <option value='duża'>Duża</option>
                    </select>
                </div>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className="custom-select__arrow" />
            </div>


            <p className="menu-el__price">Cena: <Price price={findPrice()} /></p>
            <AddPizzaButton onSubmit={addPizza} />
        </li>
    )
}

export default ListElement;