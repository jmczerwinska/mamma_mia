import React, { useState } from 'react';
import './App.css';
import MakePizza from './components/MakePizza/MakePizza';
import Basket from './components/Basket/Basket';
import Header from './components/Header/Header';

function App() {
  const [ pizza, setPizza ] = useState(null);

  const getPizza = pizza => setPizza(pizza);

  return (
    <div className="App">
      
      <div className="content">
        <Header />
        <MakePizza pizzaSender={getPizza} />
        <Basket newPizza={pizza} /> 
      </div>
      
    </div>
  );
}

export default App;
