import React, { useState, useEffect } from 'react';
import Ingredients from '../../data.json';

function MakePizza(props) {

  const [ ingredients, setIngredients ] = useState([]);
  const [ price, setPrice ] = useState(0);
  const [ base, setBase ] = useState(800)

  useEffect(() => {
	  Ingredients.map((ingredient) => {
		  ingredient.checked = ingredient.price === 0 ? true : false;
		  return ingredient;
	  })
	  setIngredients(Ingredients);
  }, [])

  useEffect(() => {
    setPrice(ingredients.reduce((sum, ingredient) => {
      return ingredient.checked ? sum + ingredient.price : sum;
    }, base))
  }, [base, ingredients])

  const ingredientChange = (ingredient) => {
    setIngredients(ingredients.map(el => {
      if (el.name === ingredient.name) el.checked = !el.checked;
      return el;
    }));    
  }

  const changeSize = size => setBase(size);
  const addPizza = () => {
    let size;
    switch (base) {
      case 600:
        size = "Mała"
        break;
      case 1000:
        size = "Duża"
        break;
      default:
        size ="Średnia"
        break;
    }

    const pizza = {
      size: size,
      price: price,
      ingredients: []
    }

    ingredients.forEach((el) => {if (el.checked) pizza.ingredients.push(el);})
    props.pizzaSender(pizza);
    resetPizza();
  }


  const resetPizza = () => {
    ingredients.forEach(el => el.price === 0 ? el.checked = true : el.checked = false);
    setBase(800);
  }

	return (
		<div className="pizza-maker">
			<h2>Skomponuj własną pizzę</h2>
			<h4>Cena: {(price / 100).toFixed(2)} zł</h4>
			
      <div className="selectSize">
        <img 
          className={"size small " + (base === 600 ? "selected" : "")} 
          onClick={ () => changeSize(600) } 
          src={`${process.env.PUBLIC_URL}assets/size.png`} 
          alt="mała pizza" />
        <img 
          className={"size medium " + (base === 800 ? "selected" : "")} 
          onClick={ () => changeSize(800) } 
          src={`${process.env.PUBLIC_URL}assets/size.png`} 
          alt="średnia pizza" />
        <img 
          className={"size large "+ (base === 1000 ? "selected" : "")} 
          onClick={ () => changeSize(1000) } 
          src={`${process.env.PUBLIC_URL}assets/size.png`} 
          alt="duża pizza" />
			</div>
		
    	<div>
				<button onClick={()=> addPizza()}>Dodaj</button>	
			</div>
			
    	<div className="ingredients">
      	{ ingredients.map((ingredient, i) => {
      	  return (
          	<div className="ingredient-row" key={i}>
            	<input type="checkbox" checked={ingredient.checked} onChange={() => ingredientChange(ingredient)} />
            	<p>{ingredient.name}</p>
							{ ingredient.price ===  0 ? <p>FREE</p> : <p>{(ingredient.price / 100).toFixed(2)} zł</p> }
          	</div>
        	)
      	}) }
			</div>

		</div>
    );
}

export default MakePizza;