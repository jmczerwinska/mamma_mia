import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import ProgressBar from '../ProgressBar/ProgressBar';
import { ContextConsumer } from '../..';

import './Order.scss';

function Order({ children, history }) {
    useEffect(() => window.scrollTo(0, 0), []);

    return (

        <div className="container container--order">
            <ContextConsumer>
                {
                    context => context.basket.length <= 0
                        ? (<div className="empty-basket redirection">
                            <p className="empty-basket__info">Twój koszyk jest pusty.</p>
                            <button
                                className="redirection__button"
                                onClick={() => history.push('/menu')}>
                                Zamów pizzę!
                            </button>
                        </div>)
                        : (<>
                            <ProgressBar />
                            {children}
                        </>)
                }
            </ContextConsumer>

        </div>
    )
}

export default withRouter(Order);