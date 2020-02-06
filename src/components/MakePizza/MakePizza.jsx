import React, { useState, useEffect } from 'react';
import Ingredients from '../../data.json';

function MakePizza() {

  const [ ingredients, setIngredients ] = useState([]);

  useEffect( () => {

  }, [])

	return (
		<div>
			<h1>Skomponuj własną pizzę</h1>
			<h4>Cenna: 0 zł</h4>
			<div>
				<img className="pizza small" src={`${process.env.PUBLIC_URL}assets/size.png`} alt="mała pizza" />
				<img className="pizza medium" src={`${process.env.PUBLIC_URL}assets/size.png`} alt="średnia pizza" />
				<img className="pizza large" src={`${process.env.PUBLIC_URL}assets/size.png`} alt="duża pizza" />
			</div>
    	<div className="ingredients">
      	{ Ingredients.map((ingredient, i) => {
      	  return (
          	<div className="ingredient" key={i}>
            	<input type="checkbox"/>
            	<p>{ingredient.name}</p>
							{ ingredient.price ===  0 ? <p>FREE</p> : <p>{(ingredient.price /100).toFixed(2)} zł</p> }
          	</div>
        	)
      	}) }
			</div>
		</div>
    );
}

export default MakePizza;