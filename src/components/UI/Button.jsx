import React from 'react';

function Button (props) {
    return <button onClick={props.onSubmit}>{props.title}</button>
}

export default Button;