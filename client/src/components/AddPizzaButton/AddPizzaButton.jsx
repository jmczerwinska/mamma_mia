import React from 'react';
import {ContextConsumer} from '../..';
import './AddPizzaButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Button({ onSubmit }) {
    return (
        <ContextConsumer>
            {
                context => <button className="add-btn" onClick={() => onSubmit(context)}>
                    <FontAwesomeIcon icon={faPlus} />
                    &nbsp; Dodaj
                    </button>
            }
        </ContextConsumer>
    )

}

export default Button;