import React from 'react';

function PizzaList ({ list }) {
    const addPizza = () => { };
   
    return (
        <>
        { list.map((pizza, i) => (
                <div key={i}>
                    <h4>{pizza.name}</h4>
                    <p>{pizza.ingredients.join(', ')}</p>
                    <select>
                        <option value='s'>
                            Mała {pizza.price.s} zł
                        </option>
                        <option value='m'>Średnia {pizza.price.m} zł</option>
                        <option value='l'>Duża {pizza.price.l} zł</option>
                    </select>
                    <button onClick={addPizza}>Dodaj</button>
                </div>

            ))

        }
        </>
    )
}

export default PizzaList