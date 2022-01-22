import React, { useState }from "react";
import ReactDOM from 'react-dom';

import LogIn from "../LogIn/LogIn.jsx";
import SignIn from "../SignIn/SignIn.jsx";

import "./AuthBox.scss";

function AuthBox() {
  const [haveAccount, setHaveAccount] = useState(false);
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

  return ReactDOM.createPortal (
    <div className="box">
      <div className="top">
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
              : "Stwórz konto i zamawiaj swoją ulubioną pizzę"}
          </p>
        </div>
      </div>
      <div className="inner-box">
        {haveAccount ? <LogIn /> : <SignIn />}
        <div>
          <p className="question">
            {haveAccount ? "Nie masz konta?" : "Masz już konto?"}
          </p>
          <button onClick={transformForm} className="switch switch--bold">
            {haveAccount ? "Załóż je!" : "Zaloguj się!"}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default AuthBox;
