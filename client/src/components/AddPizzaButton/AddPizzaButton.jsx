import React from 'react';
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './AddPizzaButton.scss';

function Button({ onSubmit }) {

    return (
        <button className="add-btn" onClick={onSubmit}>
            <FontAwesomeIcon icon={faPlus} />
            &nbsp; Dodaj
        </button>
    )

}

export default Button;