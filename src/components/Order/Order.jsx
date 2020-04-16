import React from 'react';
import { withRouter } from 'react-router-dom';
import { ContextConsumer } from '../../index.js';

function Order({ children }) {

    return (

        <div>
            <p>Koszyk > dostawa > posdumowanie</p>
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