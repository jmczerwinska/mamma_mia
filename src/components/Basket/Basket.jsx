import React from 'react';
import { withRouter } from 'react-router-dom';

import { ContextConsumer } from '../..';
import EmptyBasket from '../EmptyBasket/EmptyBasket';
import FullBasket from '../FullBasket/FullBasket';

function Basket({ history }) {

    return (
            <ContextConsumer>
                {
                    context => context.basket.length <= 0
                        ? <EmptyBasket />
                        : <FullBasket />
                }
            </ContextConsumer>
    )
}

export default withRouter(Basket);