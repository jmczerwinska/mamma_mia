import React from 'react';
import { withRouter } from 'react-router-dom';

import Logo from './logo-2.png';
import './LandingPage.scss';


function Start(props) {
    const goToMenu = () => {
        props.history.push("/menu");
    }

    const startCompose = () => props.history.push('/compose');

    return (
        <div className="start-page">
            <div className="title">
                <img className="title__logo" src={Logo} alt="logo" />
                <h3 className="title__subtitle">Włoska pizza w Twoim domu</h3>
            </div>
            <div className="btn-group">
                <button className="btn-group__button" onClick={goToMenu}>Menu</button>
                <button className="btn-group__button" onClick={startCompose}>Kompozycja własna</button>
            </div>

        </div>
    )
}

export default withRouter(Start);