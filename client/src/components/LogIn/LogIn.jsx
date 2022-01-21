import React from "react";
import "./LogIn.scss";

function LogIn() {
  return (
    <>
      <form className="auth-form auth-form--login">
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          className="auth-form__input"
        />
        <input
          type="password"
          placeholder="Hasło"
          name="passwword"
          className="auth-form__input"
        />
        <input type="submit" value="Zaloguj" className="button" />
      </form>
      <button className="switch switch--muted">
        Zapomniałeś hasła?
      </button>
    </>
  );
}

export default LogIn;
