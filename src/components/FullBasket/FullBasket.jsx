import React from 'react';
import { withRouter } from 'react-router-dom';

import { ContextConsumer } from '../../index.js';
import './FullBasket.scss';


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
                <>
                    <ul className="basket">
                        {context.basket.map((pizza, i) => (
                            <li key={i} className="basket__row">
                                <section className="basket__info">
                                    <h4 className="basket__name">
                                        {i + 1}# {pizza.name} 
                                    </h4>
                                    <p className="basket__size">{pizza.size}</p>
                                    <p className="basket__price">{(pizza.price / 100).toFixed(2)} zł</p>
                                    <button
                                        className="button button--delete"
                                        onClick={() => removePizza(context, i)}>
                                        &times;
                                    </button>
                                </section>
                                {pizza.ingredients !== undefined
                                    && <p
                                        className="basket__ingredients">
                                        {showIngredients(pizza)}
                                    </p>}
                            </li>
                        ))}
                    </ul>

                    <h4 className="full-price">Do zapłaty: {(fullPrice(context) / 100).toFixed(2)} zł</h4>

                    <div className="button-group">
                        <button
                            className="button button--back"
                            onClick={() => history.push("/mamma_mia/menu")}>
                            Wróć do menu
                        </button>
                        <button
                            className="button button--next"
                            onClick={() => history.push("/mamma_mia/order/delivery")}>
                            Dalej
                        </button>
                    </div>


                </>
            )}
        </ContextConsumer>
    )
}

export default withRouter(Basket);