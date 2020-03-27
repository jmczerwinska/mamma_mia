import React from 'react';

function PizzaList ({ list, onSubmit }) {
   
    return (
        <ol>
        { list.map((pizza, i) => (
                <li key={i}>
                    <h4>{pizza.name}</h4>
                    <p>{pizza.ingredients.join(', ')}</p>
                    <select>
                        <option value='s'>
                            Mała {pizza.price.s} zł
                        </option>
                        <option value='m'>Średnia {pizza.price.m} zł</option>
                        <option value='l'>Duża {pizza.price.l} zł</option>
                    </select>
                    <button onClick={onSubmit}>Dodaj</button>
                </li>

            ))

        }
        </ol>
    )
}

export default PizzaList