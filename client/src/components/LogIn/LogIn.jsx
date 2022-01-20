import React from "react";
import "./LogIn.scss";

function LogIn() {
  return (
    <div className="inner-box">
      <form className="auth-form">
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
      <a href="#" className="switch-link switch-link--muted">
        Zapomniałeś hasła?
      </a>
      <p>
        Nie masz jeszcze konta?
        <a href="#" className="switch-link switch-link--bold">
          Załóż je!
        </a>
      </p>
    </div>
  );
}

export default LogIn;
