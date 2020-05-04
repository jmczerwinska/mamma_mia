import React from 'react'; import { withRouter } from 'react-router-dom';

function EmptyBasket({ history }) {

    return (

        <div className="empty-basket redirection">
            <p className="empty-basket__info">Twój koszyk jest pusty.</p>
            <button
                className="redirection__button"
                onClick={() => history.push('/menu')}>
                    Zamów pizzę!
            </button>
        </div>

    )
}

export default withRouter(EmptyBasket);
