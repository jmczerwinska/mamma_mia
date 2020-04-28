import React from 'react';
import { withRouter } from 'react-router-dom';

import Logo from './logo.png';
import './LandingPage.scss';


function Start({ history }) {

    return (
        <div className="start-page">
            <div className="hero">
                <img className="hero__logo" src={Logo} alt="logo" />
                <h3 className="hero__subtitle">Włoska pizza w Twoim domu</h3>
            </div>
            <div className="btn-group">
                <button className="btn-group__button" onClick={() => history.push('/menu')}>Menu</button>
                <button className="btn-group__button" onClick={() => history.push('/compose')}>Kompozycja własna</button>
            </div>

        </div>
    )
}

export default withRouter(Start);