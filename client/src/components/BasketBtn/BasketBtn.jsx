import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { BasketContext } from '../../context/BasketContext/BasketContext';

import './BasketBtn.scss';

function BasketBtn({ history, toggleMenu }) {
    const { basket } = useContext(BasketContext);

    const onClick = () => {
        history.push('/mamma_mia/order/basket');
        toggleMenu();
    }

    return (
        <button className="basket-btn" onClick={onClick}>
            <FontAwesomeIcon icon={faShoppingBasket} className="basket-btn__icon" />

            {basket.length > 0
                ? <p className="basket-btn__counter">{basket.length}</p>
                : null
            }
        </button>
    )
}

export default withRouter(BasketBtn);