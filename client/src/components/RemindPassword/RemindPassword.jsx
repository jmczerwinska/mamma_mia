import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ValidationMessage from "../ValidationMessage/ValidationMessage";

import "./RemindPassword.scss";

function RemindPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [isSubmitSuccessful, reset]);

  const resetPassword = async (data) => {
    try {
      const response = await fetch("/api/v1/auth/forgotpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(data),
      });

      const parseResponse = await response.json();

      if (!parseResponse.success) {
        throw Error(`${response.status} - ${parseResponse.message}`);
      }

      console.log(parseResponse);
      toast.success("Wiadomość została wysłana na podany adres");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container container--reset-password">
      <h3 className="reset__header">Zresetuj hasło</h3>
      <p className="reset__info">
        Wpisz e-mail podany przy rejestracji, a otrzymasz wiadomość z linkiem do
        wprowadzenia nowego hasła.
      </p>
      <form className="reset-form" onSubmit={handleSubmit(resetPassword)}>
        {errors.email && <ValidationMessage message={errors.email.message} />}
        <label htmlFor="email" className="reset-form__label">
          E-mail:
        </label>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          className="reset-form__input"
          {...register("email", {
            required: "Uzupełnij adres e-mail",
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: "Podany adres e-mail jest nieprawidłowy",
            },
          })}
        />
        <input
          type="submit"
          value="Zresetuj hasło"
          className="button button--reset"
        />
      </form>
    </div>
  );
}

export default RemindPassword;
