import React, { useState, useEffect } from 'react';

import SelectIngredients from '../SelectIngredients/SelectIngredients';
import SelectSize from '../SelectSize/SelectSize';
import AddPizzaButton from '../AddPizzaButton/AddPizzaButton';

import Ingredients from '../../data/ingredients';
import ornament from '../PizzaList/ornament.png';
import './MakePizza.scss';

function MakePizza() {
  useEffect(() => window.scrollTo(0, 0), []);

  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState(0);
  const [base, setBase] = useState(800);
  
  useEffect(() => {
    Ingredients.map((ingredient) => {
      ingredient.checked = ingredient.price === 0 ? true : false;
      return ingredient;
    });
    setIngredients(Ingredients);
  }, [])

  useEffect(() => {
    setPrice(ingredients.reduce((sum, ingredient) => {
      return ingredient.checked ? sum + ingredient.price : sum;
    }, base));
  }, [base, ingredients, price])

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
    context.refresh([...context.basket, pizza]);

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
    <div className="container container--compose">
      <div className="title">
        <img
          className="title__ornament"
          src={ornament}
          alt="ornament" />
        <h3 className="title__name">Własna kompozycja</h3>
      </div>

      <SelectSize sizeSender={getSize} />
      <SelectIngredients ingredients={ingredients} ingredientsSender={getIngredients} />
      <div className="add-to-basket">
        <h4 className="price">Cena: {(price / 100).toFixed(2)} zł</h4>
        <AddPizzaButton onSubmit={addPizza} />
      </div>   
    </div>
  );
}

export default MakePizza;