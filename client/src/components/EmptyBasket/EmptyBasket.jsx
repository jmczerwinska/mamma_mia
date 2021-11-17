import React from 'react';
import { withRouter } from 'react-router-dom';

import './EmptyBasket.scss';


function EmptyBasket({ history }) {

    return (

        <div className="empty-basket redirection">
            <p className="empty-basket__info">Twój koszyk jest pusty.</p>
            <button
                className="redirection__button"
                onClick={() => history.push('/mamma_mia/menu')}>
                Zamów pizzę!
            </button>
        </div>

    )
}

export default withRouter(EmptyBasket);
