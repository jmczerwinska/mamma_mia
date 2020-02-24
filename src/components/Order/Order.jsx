import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../UI/Button';
import { ContextConsumer } from '../../index.js';


function Order (props) {

const backToMenu = () => {
    props.history.push("/");
}

    return (
        <ContextConsumer>
            
            {context => (
                <div>
                    <h1>Zamówienie:</h1>
                    <h2>{(context.basket /100).toFixed(2)} zł</h2>  
                    <Button title="Wróć do zamówienia" onSubmit={backToMenu} />   
                </div>
                
            )}
            
        </ContextConsumer>
        
    )
}

export default withRouter(Order);