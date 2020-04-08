import React, { useState, useEffect } from 'react';

import SelectIngredients from '../SelectIngredients/SelectIngredients';
import SelectSize from '../SelectSize/SelectSize';
import AddPizzaButton from '../AddPizzaButton/AddPizzaButton';
import Price from '../Price/Price';


import Ingredients from '../../data/ingredients';

function MakePizza(props) {

  const [ingredients, setIngredients] = useState(Ingredients);
  const [price, setPrice] = useState(0);
  const [base, setBase] = useState(800);

  useEffect(() => {
    setPrice(ingredients.reduce((sum, ingredient) => {
      return ingredient.checked ? sum + ingredient.price : sum;
    }, base))
  }, [base, ingredients])

  const getSize = base => setBase(base);

  const getIngredients = ingredients => setIngredients(ingredients);

  const addPizza = (context) => {
    const pizza = {
      name: 'Kompozycja własna',
      size: findSize(),
      price: price,
      ingredients: []
    }

    ingredients.forEach((el) => { if (el.checked) pizza.ingredients.push(el) });
    context.basket.push(pizza);
    console.log(context.basket);

    resetPizza();
  }

  const findSize = () => {
    let size;
    switch (base) {
      case 600:
        size = "mała"
        break;
      case 1000:
        size = "duża"
        break;
      default:
        size = "średnia"
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
      <h4>Cena: <Price price={price} /></h4>

      <SelectSize sizeSender={getSize} />
      <div>
      <AddPizzaButton onSubmit={addPizza} />
      </div>

      <SelectIngredients ingredientsSender={getIngredients} />

    </div>
  );
}

export default MakePizza;