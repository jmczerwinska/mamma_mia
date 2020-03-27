import React, { useState } from 'react';
import './App.css';
import MakePizza from './components/MakePizza/MakePizza';
import Basket from './components/Basket/Basket';
import Header from './components/Header/Header';

function App({children, pizza}) {

  return (
    <div className="App">
      <Header />
      <Basket newPizza={pizza} />
      {children}

    </div>
  );
}

export default App;
