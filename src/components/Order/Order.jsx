import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import ProgressBar from '../ProgressBar/ProgressBar';
import { ContextConsumer } from '../..';

function Order({ children }) {
    useEffect(() => window.scrollTo(0, 0), []);

    return (

        <div className="container container--order">
            <ContextConsumer>
                {context => context.basket.length > 0 &&
                    <ProgressBar />}
            </ContextConsumer>
            {children}
        </div>
    )
}

export default withRouter(Order);