import React, { useState, useEffect } from 'react';
import Ingredients from '/home/asia/Documents/git/mamma_mia/src/data-ingredients.json';
import Price from '../UI/Price';


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
        <div className="ingredients">
            <h4>Wybierz dodatki</h4>
            {ingredients.map((ingredient, i) => {
                return (
                    <div className="ingredient-row" key={i}>
                        <input type="checkbox" checked={ingredient.checked} onChange={() => ingredientChange(ingredient)} />
                        <p>{ingredient.name}</p>
                        {ingredient.price === 0 ? <p>FREE</p> : <Price price={ingredient.price} />}
                    </div>
                )
            })}
        </div>
    )
}

export default IngredientsList;