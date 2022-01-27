import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { BasketContext } from '../../context/BasketContext/BasketContext';
import EmptyBasket from '../EmptyBasket/EmptyBasket';
import FullBasket from '../FullBasket/FullBasket';

function Basket({ history }) {
    const { basket } = useContext(BasketContext);

    return (
        basket.length <= 0
            ? <EmptyBasket />
            : <FullBasket />
    )
}

export default withRouter(Basket);