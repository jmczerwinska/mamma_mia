import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
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
                            <div 
                                className={`ingredient__checkbox${ingredient.checked ? ' active' : ''}`}
                                onClick={() => ingredientChange(ingredient)}>
                                <FontAwesomeIcon icon={faCheck} className="icon-checked" />
                            </div>
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