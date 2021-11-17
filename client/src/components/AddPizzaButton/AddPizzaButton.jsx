import React from 'react';

import './AddPizzaButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Button({ onSubmit }) {
    
    return (

        <button className="add-btn" onClick={onSubmit}>
            <FontAwesomeIcon icon={faPlus} />
            &nbsp; Dodaj
        </button>

    )

}

export default Button;