import React from 'react';
import { withRouter } from 'react-router-dom';
import './LandingPage.css';
import Button from '../UI/Button.jsx';

function Start (props) {
    const goToMenu = () => {
        props.history.push("/menu");
    }

    const startCompose = () => props.history.push('/compose');

    return (
        <div className="start-page">
            <img className="start-page__logo" src="" alt="logo" />
            <Button className="start-page__button" title="Menu" onSubmit={goToMenu} />
            <Button className="start-page__button" title="Skomponuj" onSubmit={startCompose} />
        </div>
    )
}

export default withRouter(Start);