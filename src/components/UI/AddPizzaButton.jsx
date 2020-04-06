import React from 'react';
import {ContextConsumer} from '../..';

function Button({ onSubmit }) {
    return (
        <ContextConsumer>
            {
                context => <button onClick={() => onSubmit(context)}>Dodaj pizzę</button>
            }
        </ContextConsumer>
    )

}

export default Button;