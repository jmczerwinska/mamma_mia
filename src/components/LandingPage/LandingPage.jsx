import React from 'react';
import { withRouter } from 'react-router-dom';
import './LandingPage.css';


function Start (props) {
    const goToMenu = () => {
        props.history.push("/menu");
    }

    const startCompose = () => props.history.push('/compose');

    return (
        <div className="start-page">
            <img className="start-page__logo" src="" alt="logo" />
            <button className="start-page__button" onClick={goToMenu}>Menu</button>
            <button className="start-page__button" onClick={startCompose}>Skomponuj własną</button>
        </div>
    )
}

export default withRouter(Start);