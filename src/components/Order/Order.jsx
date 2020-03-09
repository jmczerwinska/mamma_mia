import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../UI/Button';
import { ContextConsumer } from '../../index.js';
import Price from '../UI/Price';
import Header from '../Header/Header';



function Order (props) {

const backToMenu = () => {
    props.history.push("/");
}

    return (
        <ContextConsumer>
            
            {context => (
                <div>
                    <Header />
                    <h1>Zamówienie:</h1>
                    <Price price={context.basket} />
                    <Button title="Wróć do zamówienia" onSubmit={backToMenu} />   
                </div>
                
            )}
            
        </ContextConsumer>
        
    )
}

export default withRouter(Order);