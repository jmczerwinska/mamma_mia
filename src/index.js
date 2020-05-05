import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.scss';

import App from './App';
import LandingPage from './components/LandingPage/LandingPage';
import PizzaMenu from './components/PizzaMenu/PizzaMenu';
import MakePizza from './components/MakePizza/MakePizza';
import Order from './components/Order/Order';
import Basket from './components/Basket/Basket';
import DeliveryForm from './components/Delivery/DeliveryForm';
import Summary from './components/Summary/Summary';

const MyContext = createContext();
export const ContextConsumer = MyContext.Consumer;
const ContextProvider = MyContext.Provider;

function Routing() {
    const [basket, setBasket] = useState([]);
    const refresh = data => setBasket(data);
  
 
    return (
        <BrowserRouter>
            <ContextProvider value={{ basket: basket, refresh: refresh }}>
                <Switch>
                    <Route exact path="/mamma_mia" component={LandingPage} />
                    <Route path='/mamma_mia'>
                        <App>
                            <Route path="/mamma_mia/menu" component={PizzaMenu} />
                            <Route path="/mamma_mia/compose" component={MakePizza} />
                            <Route path="/mamma_mia/order">
                                <Order>
                                    <Route path="/mamma_mia/order/basket" component={Basket} />
                                    <Route path="/mamma_mia/order/delivery" component={DeliveryForm} />
                                    <Route path="/mamma_mia/order/summary" component={Summary} />
                                </Order>
                            </Route>
                        </App>
                    </Route>
                </Switch>
            </ContextProvider>
        </BrowserRouter>
    )
}

ReactDOM.render(<Routing />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
