import React from 'react';
import './App.css';
import MakePizza from './components/MakePizza/MakePizza';
import Basket from './components/Basket/Basket';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mamma mia - najlepsza pizza w mieście</h1>
      </header>
      <div className="content">
        <MakePizza />
        <Basket /> 
      </div>
      
      
    </div>
  );
}

export default App;
