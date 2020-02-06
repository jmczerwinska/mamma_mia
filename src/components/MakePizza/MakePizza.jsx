import React, { useState, useEffect } from 'react';
import Ingredients from '../../data.json';

function MakePizza() {

  const [ ingredients, setIngredients ] = useState([]);
  const [ price, setPrice ] = useState(0);
  useEffect( () => {
	  Ingredients.map((ingredient) => {
		  ingredient.checked = ingredient.price === 0 ? true : false;
		  return ingredient;
	  })
	  setIngredients(Ingredients);
  }, [])

  const ingredientChange = (ingredient) => {
    setIngredients(ingredients.map(el => {
      if (el.name === ingredient.name) el.checked = !el.checked;
      return el;
    }));

    
    setPrice(ingredients.reduce((sum, ingredient) => {
      return ingredient.checked ? sum +ingredient.price : sum;
    }, 0))
  }

	return (
		<div className="pizzaMaker">
			<h1>Skomponuj własną pizzę</h1>
			<h4>Cena: {(price / 100).toFixed(2)} zł</h4>
			<div>
				<img className="pizza small" src={`${process.env.PUBLIC_URL}assets/size.png`} alt="mała pizza" />
				<img className="pizza medium" src={`${process.env.PUBLIC_URL}assets/size.png`} alt="średnia pizza" />
				<img className="pizza large" src={`${process.env.PUBLIC_URL}assets/size.png`} alt="duża pizza" />
			</div>
			<div>
				<button>Dodaj</button>	
			</div>
			
    	<div className="ingredients">
      	{ ingredients.map((ingredient, i) => {
      	  return (
          	<div className="ingredient" key={i}>
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