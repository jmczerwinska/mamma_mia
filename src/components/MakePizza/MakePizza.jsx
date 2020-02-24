import React, { useState, useEffect } from 'react';

import SelectIngredients from '../SelectIngredients/SelectIngredients';
import SelectSize from '../SelectSize/SelectSize';
import Button from '../UI/Button';

import Ingredients from '../../data.json';

function MakePizza(props) {

  const [ ingredients, setIngredients ] = useState(Ingredients);
  const [ price, setPrice ] = useState(0);
  const [ base, setBase ] = useState(800);

  useEffect(() => {
    setPrice(ingredients.reduce((sum, ingredient) => {
      return ingredient.checked ? sum + ingredient.price : sum;
    }, base))
  }, [base, ingredients])

  const getSize = base => setBase(base);
  
  const getIngredients = ingredients => setIngredients(ingredients); 
  
  const addPizza = () => {
    const pizza = {
      size: findSize(),
      price: price,
      ingredients: []
    }

    ingredients.forEach((el) => {if (el.checked) pizza.ingredients.push(el);});

    props.pizzaSender(pizza);
    resetPizza();
  }

  const findSize = () => {
    let size;
    switch (base) {
      case 600:
        size = "Mała"
        break;
      case 1000:
        size = "Duża"
        break;
      default:
        size = "Średnia"
        break;
    }
    return size;
  }

  const resetPizza = () => {
    ingredients.forEach(el => el.price === 0 ? el.checked = true : el.checked = false);
    setBase(800);
  }

	return (
		<div className="pizza-maker">
			<h2>Skomponuj własną pizzę</h2>
			<h4>Cena: {(price / 100).toFixed(2)} zł</h4>
			
      <SelectSize sizeSender={getSize} />
      <div>
        <Button onSubmit={()=> addPizza()} title="Dodaj" /> 
      </div>
			
    	<SelectIngredients ingredientsSender={getIngredients} />

		</div>
    );
}

export default MakePizza;