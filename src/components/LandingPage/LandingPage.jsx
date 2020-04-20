import React from 'react';
import { withRouter } from 'react-router-dom';

import Logo from './logo-2.png';
import './LandingPage.scss';


function Start({ history }) {

    return (
        <div className="start-page">
            <div className="title">
                <img className="title__logo" src={Logo} alt="logo" />
                <h3 className="title__subtitle">Włoska pizza w Twoim domu</h3>
            </div>
            <div className="btn-group">
                <button className="btn-group__button" onClick={() => history.push('/menu')}>Menu</button>
                <button className="btn-group__button" onClick={() => history.push('/compose')}>Kompozycja własna</button>
            </div>

        </div>
    )
}

export default withRouter(Start);