import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { ContextConsumer } from '../..';

import './BasketBtn.scss';

function BasketBtn({ history }) {

    return (
        <button className="basket-btn" onClick={()=> history.push('/order/basket')}>
            <FontAwesomeIcon icon={faShoppingBasket} className="basket-btn__icon"/>
            <ContextConsumer>
                {context => context.basket.length > 0
                    ? <p className="basket-btn__counter">{context.basket.length}</p>
                    : null
                }
            </ContextConsumer>
        </button>
    )
}

export default withRouter(BasketBtn);