import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.scss';

import App from './App';
import LandingPage from './components/LandingPage/LandingPage';

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
                    <Route exact path="/" component={LandingPage} />
                    <Route path='/' component={App} />
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
