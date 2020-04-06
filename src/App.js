import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Order from './components/Order/Order';
import Menu from './components/Menu/Menu';
import MakePizza from './components/MakePizza/MakePizza';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/compose" component={MakePizza}/>
        <Route path="/order" component={Order} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
