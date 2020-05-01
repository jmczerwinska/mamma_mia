import React from 'react';
import { withRouter } from 'react-router-dom';

import { ContextConsumer } from '../../index.js';
import './Basket.scss';


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
                <div className="basket">
                    {context.basket.map((pizza, i) => (
                        <div key={i} className="basket__row">
                            <h4 className="basket__info">
                                {i + 1}# {pizza.name} - {pizza.size} pizza
                                        &nbsp; | &nbsp;
                                    {(pizza.price / 100).toFixed(2)} zł
                            </h4>
                            {pizza.ingredients !== undefined
                                ? <p className="basket__info empty-basket__info--ingredients">
                                    Dodatki: {showIngredients(pizza)}
                                </p>
                                : null}
                            <button
                                className="basket__button basket__button--delete"
                                onClick={() => removePizza(context, i)}>
                                &times;
                            </button>
                        </div>
                    ))}
                    <h3 className="price">Do zapłaty: {(fullPrice(context) / 100).toFixed(2)}</h3>

                    <button 
                        className="basket__button basket__button--back"
                        onClick={() => history.push("/menu")}>
                        Wróć do menu
                    </button>

                    <button 
                        className="basket__button basket__button--next"
                        onClick={() => history.push("/order/delivery")}>
                        Dalej
                    </button>
                </div>
            )}
        </ContextConsumer>
    )
}

export default withRouter(Basket);