import React, { useState } from 'react';
import './ListElement.scss';

import AddPizzaButton from '../AddPizzaButton/AddPizzaButton';



function ListElement({ pizza, i }) {
    const [selected, setSelected] = useState('średnia');

    const addPizza = context => {
        const newPizza = {
            name: pizza.name,
            size: selected,
            price: findPrice()
        };
        context.refresh([...context.basket, newPizza]);

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
            <section className="info">
                <h4 className="info__name">{pizza.name}</h4>
                <p className="info__ingredients">{pizza.ingredients.join(', ')}</p>
            </section>

            <div className="select-pizza">
                <div className="custom-select" >
                    <select
                        className="custom-select__select-size"
                        value={selected}
                        onChange={e => setSelected(e.target.value)}>
                        <option value='mała'>
                            Mała | &#8960; 21cm | {(pizza.price.s / 100).toFixed(2)} zł
                    </option>
                        <option value='średnia'>
                            Średnia | &#8960; 30cm | {(pizza.price.m / 100).toFixed(2)} zł
                    </option>
                        <option value='duża'>
                            Duża | &#8960; 42cm | {(pizza.price.l / 100).toFixed(2)} zł
                    </option>
                    </select>
                </div>

                <AddPizzaButton onSubmit={addPizza} />
            </div>



        </li>
    )
}

export default ListElement;