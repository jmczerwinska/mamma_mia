import React, { useState } from 'react';
import './App.css';
import MakePizza from './components/MakePizza/MakePizza';
import Basket from './components/Basket/Basket';


function App() {
  const [ pizza, setPizza ] = useState(null);

  const getPizza = pizza => setPizza(pizza);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mamma mia - najlepsza pizza w mieście</h1>
      </header>
      <div className="content">
        <MakePizza pizzaSender={getPizza} />
        <Basket newPizza={pizza} /> 
      </div>
      
      
    </div>
  );
}

export default App;
