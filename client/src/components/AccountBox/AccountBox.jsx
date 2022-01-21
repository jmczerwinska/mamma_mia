import React from "react";
import { useState } from "react";
import LogIn from "../LogIn/LogIn.jsx";
import SignIn from "../SignIn/SignIn.jsx";
import "./AccountBox.scss";

function AccountBox() {
  const [haveAccount, setHaveAccount] = useState(false);
  const [transform, setTransform] = useState(false);

  const transformForm = () => {
    setTransform(true);
    setTimeout(() => {
      setTransform(false);
    }, 600);
    setHaveAccount((prev) => !prev);
  };

  return (
    <div className="box">
      <div className="top">
        <div className={`top__back-drop${transform ? ' top__back-drop--down' : ''}`}></div>
        <div className="top__header-container">
          <h3 className="top__header">Witaj z powrotem!</h3>
          <p className="top__info">Zaloguj się, aby kontynuować</p>
        </div>
      </div>
      <div className="inner-box">
        {haveAccount ? <LogIn /> : <SignIn />}
        <div>
          <p className="question">
          {haveAccount ? "Nie masz konta?" : "Masz już konto?"}
        </p>
        <button
            onClick={transformForm}
            className="switch switch--bold" >
            {haveAccount ? "Załóż je!" : "Zaloguj się!"}
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default AccountBox;
