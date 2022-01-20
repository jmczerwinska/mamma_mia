import React from "react";
import LogIn from "../LogIn/LogIn.jsx";
import './AccountBox.scss';

function AccountBox() {
  return(
    <div className="box">
      <div className="top">
        <div className="top__back-drop"></div>
        <div className="top__header-container">
          <h3 className="top__header">
            Witaj z powrotem!
          </h3>
          <p className="top__info">Zaloguj się, aby kontynuować</p>

        </div>
      </div>
        <LogIn></LogIn>

    </div>
  )
}

export default AccountBox;