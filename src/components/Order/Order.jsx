import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

function Order({ children }) {
    useEffect(() => window.scrollTo(0, 0), []);

    return (

        <div>
            <Breadcrumbs />
            {children}
        </div>
    )
}

export default withRouter(Order);