import React from 'react';

function Price(props) {
return <span className="price">{(props.price / 100).toFixed(2)} zł</span>
}

export default Price;