import React from 'react';
import { withRouter } from 'react-router-dom';
import './Start.css';
import Button from '../UI/Button.jsx';

function Start (props) {
    const goToMenu = () => {
        props.history.push("/menu");
    }

    const startCompose = () => props.history.push('/compose');

    return (
        <div className="container">
            <Button title="Menu" onSubmit={goToMenu} />
            <Button title="Skomponuj" onSubmit={startCompose} />
        </div>
    )
}

export default withRouter(Start);