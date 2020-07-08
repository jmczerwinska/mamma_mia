import React from 'react';
import './SelectIngredients.scss'


function IngredientsList({ ingredients, ingredientsSender}) {

    const ingredientChange = (ingredient) => {
        const newIngredients = ingredients.map(el => {
            if (el.name === ingredient.name) el.checked = !el.checked;
            return el;
        });
        ingredientsSender(newIngredients);
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