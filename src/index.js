import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Order from './components/Order/Order';



function Routing() {
    return (
        <BrowserRouter>
            <header className="App-header">
                <h1>Mamma Mia - najlepsza pizza w mieście</h1>
            </header>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/order" component={Order} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<Routing />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
