import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

import { UserContext } from "../../context/UserContext/UserContext";
import ValidationMessage from "../ValidationMessage/ValidationMessage";

function LogIn({ history, closeModal, inputClass }) {
  const { saveUser } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const loginUser = async (data) => {
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
      toast.error(err.message);
      console.log(err);
    }
  };

  const remindPassword = () => {
    history.push("/mamma_mia/remindpassword");
    closeModal();
  };

  return (
    <>
      <form
        className="auth-form auth-form--login"
        onSubmit={handleSubmit(loginUser)}
      >
        {errors.email && <ValidationMessage message={errors.email.message} />}
        <label className="auth-form__label" htmlFor="email">E-mail</label>
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          className={inputClass(errors.email)}
          autoFocus
          {...register("email", {
            required: "Podaj email",
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: "Nieprawidłowy adres e-mail",
            },
          })}
        />

        {errors.password && <ValidationMessage message={errors.password.message} />}
        <label className="auth-form__label" htmlFor="password">Hasło</label>
        <input
          type="password"
          placeholder="Hasło"
          name="passwword"
          className={inputClass(errors.password)}
          {...register("password", { required: "Podaj hasło" })}
          />
        
        <input type="submit" value="Zaloguj" className="button" />
      </form>
      <button className="switch switch--muted" onClick={remindPassword}>
        Zapomniałeś hasła?
      </button>
    </>
  );
}

export default withRouter(LogIn);
