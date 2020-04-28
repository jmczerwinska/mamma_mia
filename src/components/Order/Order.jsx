import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

function Order({ children }) {
    useEffect(() => window.scrollTo(0, 0), []);

    return (

        <div className="container container--order">
            <Breadcrumbs />
            {children}
        </div>
    )
}

export default withRouter(Order);