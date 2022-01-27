import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { BasketContext } from '../../context/BasketContext/BasketContext';

import './FullBasket.scss';


function Basket({ history }) {
    const { basket, removeFromBasket } = useContext(BasketContext);

    const fullPrice = basket.reduce((sum, pizza) => sum + pizza.price, 0);

    const showIngredients = (pizza) => {
        let nameArr = [];
        pizza.ingredients.forEach(el => nameArr.push(el.name));
        const ingredientsList = nameArr.join(', ')
        return ingredientsList;
    }

    return (
        <>
            <ul className="basket">
                {basket.map((pizza, i) => (
                    <li key={i} className="basket__row">
                        <section className="basket__info">
                            <h4 className="basket__name">
                                {i + 1}# {pizza.name}
                            </h4>
                            <p className="basket__size">{pizza.size}</p>
                            <p className="basket__price">{(pizza.price / 100).toFixed(2)} zł</p>
                            <button
                                className="button button--delete"
                                onClick={() => removeFromBasket(i)}>
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

            <h4 className="full-price">Do zapłaty: {(fullPrice / 100).toFixed(2)} zł</h4>

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
    )
}

export default withRouter(Basket);