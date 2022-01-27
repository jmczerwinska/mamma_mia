import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import LogIn from "../LogIn/LogIn.jsx";
import SignIn from "../SignIn/SignIn.jsx";

import "./AuthBox.scss";

function AuthBox({ closeModal }) {
  const [haveAccount, setHaveAccount] = useState(true);
  const [transform, setTransform] = useState(false);

  const transformForm = () => {
    setTransform(true);

    setTimeout(() => {
      setHaveAccount((prev) => !prev);
    }, 300);

    setTimeout(() => {
      setTransform(false);
    }, 600);
  };

  return (
    <div className="box" onClick={e => e.stopPropagation()}>
      <div className="top">
        <button className="exit-btn" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} className="exit-btn__icon" />
        </button>
        <div
          className={`top__back-drop${
            transform ? " top__back-drop--down" : ""
          }`}
        ></div>
        <div
          className={`top__header-container${
            transform ? " top__header-container--down" : ""
          }`}
        >
          <h3 className="top__header">
            {haveAccount ? "Witaj z powrotem!" : "Dołącz do nas!"}
          </h3>
          <p className="top__info">
            {haveAccount
              ? "Zaloguj się, aby kontynuować"
              : "Stwórz konto i zamawiaj"}
          </p>
        </div>
      </div>
      <div className="inner-box">
        {haveAccount ? <LogIn closeModal={closeModal} /> : <SignIn />}
        <div>
          <p className="question">
            {haveAccount ? "Nie masz konta?" : "Masz już konto?"}
          </p>
          <button onClick={transformForm} className="switch switch--bold">
            {haveAccount ? "Załóż je!" : "Zaloguj się!"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthBox;
