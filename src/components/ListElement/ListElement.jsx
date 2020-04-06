import React, { useState } from 'react';
import Price from '../UI/Price';
import AddPizzaButton from '../UI/AddPizzaButton';

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
        <li>
            <h4>{pizza.name}</h4>
            <p>{pizza.ingredients.join(', ')}</p>
            <select value={selected} onChange={e => setSelected(e.target.value)}>
                <option value='mała'> Mała </option>
                <option value='średnia'>Średnia</option>
                <option value='duża'>Duża</option>
            </select>
            <p>Cena: <Price price={findPrice()} /></p>
            <AddPizzaButton onSubmit={addPizza} />
        </li>
    )
}

export default ListElement;