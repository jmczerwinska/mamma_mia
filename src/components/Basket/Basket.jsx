import React, { useState, useEffect } from 'react';

function Basket(props) {

    const [ order, setOrder ] = useState([]);
    useEffect(() => {
        if(props.newPizza) setOrder(order => [...order, props.newPizza]);

    }, [props.newPizza])

    const showIngredients = (pizza) => {
        let nameArr = [];
        pizza.ingredients.forEach(el => nameArr.push(el.name));
        const ingredientsList = nameArr.join(', ')
        return ingredientsList;
    }

    return (
        <div className="order">
            <h1>Zamówienie</h1>
                {order.map((pizza, i) => {
                    return (
            <div key={i}>
                <h4>
                    {i+1}# {pizza.size} pizza
                </h4>
                <p>Dodatki: {showIngredients(pizza)}</p>
            </div>)})}
        </div>
    );
}

export default Basket;