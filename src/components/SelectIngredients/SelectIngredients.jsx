import React, { useState, useEffect } from 'react';

import Ingredients from '../../data/ingredients.json';
import './SelectIngredients.scss'


function IngredientsList(props) {

    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        Ingredients.map((ingredient) => {
            ingredient.checked = ingredient.price === 0 ? true : false;
            return ingredient;
        });
        setIngredients(Ingredients);
    }, [])

    const ingredientChange = (ingredient) => {
        setIngredients(ingredients.map(el => {
            if (el.name === ingredient.name) el.checked = !el.checked;
            return el;
        }));
        props.ingredientsSender(ingredients);
    }

    return (
        <div>
            <h4>Wybierz dodatki</h4>
            <div className="ingredients-list">
                {ingredients.map(
                    (ingredient, i) => (
                        <div className="ingredient" key={i}>
                            <input 
                                className="ingredient__checkbox"
                                type="checkbox" 
                                checked={ingredient.checked} 
                                onChange={() => ingredientChange(ingredient)} />
                            <p className="ingredient__name">
                                {ingredient.name}
                            </p>
                            <p className="ingredient__price">
                                {ingredient.price === 0 ? 'FREE' : (ingredient.price / 100).toFixed(2) + ' zł'}
                            </p>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default IngredientsList;