import React from 'react';
import { withRouter } from 'react-router-dom';
import { ContextConsumer } from '../../index.js';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

function Order({ children }) {

    return (

        <div>
            <Breadcrumbs/>
            <ContextConsumer>
                {context => context.basket.length <= 0
                    ? <p>twój koszyk jest pusty</p>
                    : (<>
                        { children }
                        </>
                    )
                }
            </ContextConsumer>
        </div>
    )
}

export default withRouter(Order);