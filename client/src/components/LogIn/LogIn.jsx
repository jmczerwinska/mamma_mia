import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext/UserContext";

import "./LogIn.scss";

function LogIn({ closeModal }) {
  const { saveUser } = useContext(UserContext);
  const { handleSubmit, register } = useForm();

  const logUser = async (data) => {
    console.log(data);
    try {
      const response = await fetch("/api/v1/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(data),
      });

      const parseResponse = await response.json();

      if (!parseResponse.success) {
        throw new Error(`${response.status} - ${parseResponse.message}`);
      }

      saveUser(parseResponse.data);

      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form
        className="auth-form auth-form--login"
        onSubmit={handleSubmit(logUser)}
      >
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          className="auth-form__input"
          {...register("email")}
        />
        <input
          type="password"
          placeholder="Hasło"
          name="passwword"
          className="auth-form__input"
          {...register("password")}
        />
        <input type="submit" value="Zaloguj" className="button" />
      </form>
      <button className="switch switch--muted">Zapomniałeś hasła?</button>
    </>
  );
}

export default LogIn;
