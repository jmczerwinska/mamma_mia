import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import ProgressBar from '../ProgressBar/ProgressBar';

import { BasketContext } from '../../context/BasketContext/BasketContext';

function Order({ children }) {
    const { basket } = useContext(BasketContext);
    useEffect(() => window.scrollTo(0, 0), []);

    return (

        <div className="container container--order">
            {basket.length > 0 &&
                <ProgressBar />}
            {children}
        </div>
    )
}

export default withRouter(Order);