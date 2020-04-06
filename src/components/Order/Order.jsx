import React from 'react';
import { withRouter } from 'react-router-dom';
import { ContextConsumer } from '../../index.js';
import Price from '../UI/Price';



function Order(props) {
    const fullPrice = (context) => context.basket.reduce((sum, pizza) => sum + pizza.price, 0);




    const showIngredients = (pizza) => {
        let nameArr = [];
        pizza.ingredients.forEach(el => nameArr.push(el.name));
        const ingredientsList = nameArr.join(', ')
        return ingredientsList;
    }

    const removePizza = (context, i) => {
        const updateBasket = context.basket.filter((pizza, index) => index !== i);
        context.refresh(updateBasket);
    }

    const backToMenu = () => {
        props.history.push("/menu");
    }

    const nextStep = () => {props.history.push("/order/delivery")};

    return (
        <ContextConsumer>

            {context => (
                <div>
                    <h2>Zamówienie:</h2>
                    {
                        context.basket.map((pizza, i) => {
                            return (
                                <div key={i} className="basket-row">
                                    <div className="basket-head">
                                        <h4>
                                            {i + 1}# {pizza.name} - {pizza.size} pizza
                                        &nbsp; | &nbsp;
                                        <Price price={pizza.price} />
                                        </h4>
                                        <button onClick={() => removePizza(context, i)}>&times;</button>
                                    </div>
                                    { pizza.ingredients!== undefined ?
                                        <p className="basket-info">Dodatki: {showIngredients(pizza)}</p> : null
                                    }
                                    
                                </div>
                            )
                        })
                    }
                    <h3>Do zapłaty: <Price price={fullPrice(context)} /></h3>
                    <button onClick={backToMenu}>Wróć do menu</button>
                    <button onClick={nextStep}>Zamów</button>
                    
                </div>

            )}

        </ContextConsumer>

    )
}

export default withRouter(Order);