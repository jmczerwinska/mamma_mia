import React, { useState, useEffect } from 'react';

function Basket(props) {

    const [ basket, setBasket ] = useState([]);
    
    useEffect(() => {
        if(props.newPizza) setBasket(basket => [...basket, props.newPizza]);

    }, [props.newPizza])

    const [ fullPrice, setFullPrice ] = useState(0);

    useEffect(() => {
        setFullPrice(basket.reduce((sum, pizza) => sum + pizza.price, 0))
    }, [basket])


    const showIngredients = (pizza) => {
        let nameArr = [];
        pizza.ingredients.forEach(el => nameArr.push(el.name));
        const ingredientsList = nameArr.join(', ')
        return ingredientsList;
    }

    const removePizza = (i) => {
        const updateBasket = basket.filter((pizza, index) => index !== i);
        setBasket(updateBasket);
    }

    return (
        <div className="basket">
            <h2>Zamówienie</h2>
            {basket.map((pizza, i) => {
                return (
                    <div key={i} className="basket-row">
                        <div className="basket-head">
                            <h4>
                                {i+1}# {pizza.size} pizza - kompozycja własna
                                &nbsp; | &nbsp;
                                {(pizza.price/100).toFixed(2)} zł 
                            </h4>
                            <button onClick={() => removePizza(i)}>&times;</button> 
                        </div>
                        <p className="basket-info">Dodatki: {showIngredients(pizza)}</p>
                    
                </div>)
                })
            }
            <h3>Do zapłaty: {(fullPrice/100).toFixed(2)} zł</h3>
            <button>Zamów i zapłać</button>
        </div>
    );
}

export default Basket;