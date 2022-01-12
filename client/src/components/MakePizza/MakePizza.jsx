import React, { useState, useEffect, useContext } from 'react';
import { toast } from "react-toastify";
import { BasketContext } from '../../context/BasketContext';

import SelectIngredients from '../SelectIngredients/SelectIngredients';
import SelectSize from '../SelectSize/SelectSize';
import AddPizzaButton from '../AddPizzaButton/AddPizzaButton';

// import Ingredients from '../../data/ingredients';
import ornament from '../PizzaList/ornament.png';
import './MakePizza.scss';


function MakePizza() {
  useEffect(() => window.scrollTo(0, 0), []);

  const { addToBasket } = useContext(BasketContext)
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState(0);
  const [base, setBase] = useState(800);

  const fetchIngredients = async () => {
    try {
      const data = await fetch('http://localhost:5000/api/v1/ingredients?sort=price', {
        method: 'GET',
      });

      const parseData = await data.json();

      const list = parseData.data.map((ingredient) => {
        ingredient.checked = ingredient.price === 0 ? true : false;
        return ingredient;
      });

      setIngredients(list);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchIngredients();
  }, [])

  useEffect(() => {
    setPrice(ingredients.reduce((sum, ingredient) => {
      return ingredient.checked ? sum + ingredient.price : sum;
    }, base));
  }, [base, ingredients, price])

  const getSize = base => setBase(base);

  const getIngredients = ingredients => setIngredients(ingredients);

  const addPizza = () => {
    const pizza = {
      name: 'Kompozycja własna',
      size: findSize(),
      price: price,
      ingredients: []
    }

    ingredients.forEach((el) => { if (el.checked) pizza.ingredients.push(el) });

    addToBasket(pizza);
    toast.success('Dodano do koszyka!');
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