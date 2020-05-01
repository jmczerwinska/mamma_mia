import React from 'react';

import Timer from '../Timer/Timer';
import './Summary.scss';

function Summary() {
    return (
        <div className="summary">
            <p className="summary__info">Dziękujemy za złożenie zamówienia!</p>
            <Timer deliveryTime={124} />
        </div>
    )

}

export default Summary;