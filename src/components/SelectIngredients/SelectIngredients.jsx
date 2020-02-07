import React, { useState, useEffect } from 'react';
import Ingredients from '../../data.json';

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
            {ingredients.map((ingredient, i) => {
                return (
                    <div className="ingredient-row" key={i}>
                        <input type="checkbox" checked={ingredient.checked} onChange={() => ingredientChange(ingredient)} />
                        <p>{ingredient.name}</p>
                        {ingredient.price === 0 ? <p>FREE</p> : <p>{(ingredient.price / 100).toFixed(2)} zł</p>}
                    </div>
                )
            })}
        </div>
    )
}

export default IngredientsList;