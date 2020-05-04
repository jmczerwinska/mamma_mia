import React, { useEffect } from 'react';

import ProgressBar from '../ProgressBar/ProgressBar';

import './Order.scss';

function Order({ children }) {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="container container--order">
            <ProgressBar />
            {children}
        </div>
    )
}

export default Order;