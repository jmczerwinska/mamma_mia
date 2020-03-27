import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../UI/Button';
import { ContextConsumer } from '../../index.js';
import Price from '../UI/Price';



function Order (props) {

const backToMenu = () => {
    props.history.push("/");
}

    return (
        <ContextConsumer>
            
            {context => (
                <div>
                    <h1>Zamówienie:</h1>
                   {console.log(context.basket)}
                    <Button title="Wróć do zamówienia" onSubmit={backToMenu} />   
                </div>
                
            )}
            
        </ContextConsumer>
        
    )
}

export default withRouter(Order);