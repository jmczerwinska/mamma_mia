import React from 'react';
import { withRouter } from 'react-router-dom';

import { ContextConsumer } from '../..';
import EmptyBasket from '../EmptyBasket/EmptyBasket';
import FullBasket from '../FullBasket/FullBasket';

function Basket({ children, history }) {

    return (

        <div className="container container--order">
            <ContextConsumer>
                {
                    context => context.basket.length <= 0
                        ? <EmptyBasket />
                        : <FullBasket />
                }
            </ContextConsumer>

        </div>
    )
}

export default withRouter(Basket);