import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Order from './components/Order/Order';
import Menu from './components/Menu/Menu'
import LandingPage from './components/LandingPage/LandingPage';

const MyContext = createContext();
export const ContextConsumer = MyContext.Consumer;
const ContextProvider = MyContext.Provider;

function Routing() {
    const [ basket, setBasket ] = useState(0);
    const refresh = dane => setBasket(dane);

    return (
        <BrowserRouter>

            <ContextProvider value={{basket: basket, refresh: refresh}}>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/compose" component={App} />
                <Route exact path="/order" component={Order} />
            </ContextProvider>
            
        </BrowserRouter>
    )
}

ReactDOM.render(<Routing />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
