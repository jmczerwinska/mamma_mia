import React from 'react';
import { withRouter } from 'react-router-dom';

import { ContextConsumer } from '../../index.js';


function Basket({ history }) {

    const fullPrice = (context) => context.basket.reduce((sum, pizza) => sum + pizza.price, 0);

    const showIngredients = (pizza) => {
        let nameArr = [];
        pizza.ingredients.forEach(el => nameArr.push(el.name));
        const ingredientsList = nameArr.join(', ')
        return ingredientsList;
    }

    const removePizza = (context, i) => {
        const { basket, refresh } = context;
        const updateBasket = basket.filter((pizza, index) => index !== i);
        refresh(updateBasket);
    }

    return (
        <ContextConsumer>
            {context => (
                <div>
                    {context.basket.map((pizza, i) => {
                        return (
                            <div key={i} className="basket-row">
                                <div className="basket-head">
                                    <h4>
                                        {i + 1}# {pizza.name} - {pizza.size} pizza
                                        &nbsp; | &nbsp;
                                    <p>{(pizza.price / 100).toFixed(2)}</p>
                                    </h4>
                                    <button onClick={() => removePizza(context, i)}>&times;</button>
                                </div>
                                {pizza.ingredients !== undefined ?
                                    <p className="basket-info">Dodatki: {showIngredients(pizza)}</p> : null
                                }
                            </div>
                        )
                    })
                    }
                    <h3>Do zapłaty: {(fullPrice(context) / 100).toFixed(2)}</h3>

                    <button onClick={() => history.push("/menu")}>
                        Wróć do menu
                    </button>
                    <button onClick={() => history.push("/order/delivery")}>
                        Dalej
                    </button>
                </div>)
            }
        </ContextConsumer>
    )
}

export default withRouter(Basket);