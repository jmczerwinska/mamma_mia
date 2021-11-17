import React from 'react';
import Timer from '../Timer/Timer';

import './Summary.scss';

function Summary() {
    return (
        <div className="summary">
            <h3 className="summary__info">Dziękujemy za złożenie zamówienia!</h3>
            <Timer deliveryTime={124} />
        </div>
    )

}

export default Summary;