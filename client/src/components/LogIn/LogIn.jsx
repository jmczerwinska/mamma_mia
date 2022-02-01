import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import { UserContext } from "../../context/UserContext/UserContext";

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
    history.push("mamma_mia/remindpassword");
    closeModal();
  };

  return (
    <>
      <form
        className="auth-form auth-form--login"
        onSubmit={handleSubmit(loginUser)}
      >
        {errors.email || errors.password ? (
          <p className="error">
            <FontAwesomeIcon icon={faExclamationTriangle} /> Uzupełnij puste
            pola
          </p>
        ) : null}
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          className={inputClass(errors.email)}
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="Hasło"
          name="passwword"
          className={inputClass(errors.email)}
          {...register("password", { required: true })}
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
