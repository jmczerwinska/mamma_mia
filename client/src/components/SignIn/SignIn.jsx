import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext/UserContext";
import ValidationMessage from "../ValidationMessage/ValidationMessage";

function SignIn({ closeModal, inputClass }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { saveUser } = useContext(UserContext);

  const password = useRef({});
  password.current = watch("password", "");

  const createUser = async (data) => {
    data.role = "user";

    try {
      const response = await fetch("/api/v1/auth/register/", {
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

      toast.success("Twoje konto zostało pomyślnie utworzone");

      closeModal();
    } catch (err) {
      toast.error(err.message);
    }
  };
  console.log(Object.entries(errors));
  console.log(errors);

  return (
    <form
      className="auth-form auth-form--signin"
      onSubmit={handleSubmit(createUser)}
    >
      {Object.entries(errors).some((err) => err[1].type === "required") && (
        <ValidationMessage message={"Uzupełnij puste pola"} />
      )}
      {/* {errors.email && (
        <p className="error">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            {errors.email.message}
          </p>
        )} */}
      <label className="auth-form__label" htmlFor="firstName">Imię*</label>
      <input
        className="auth-form__input"
        type="text"
        name="first-name"
        placeholder="Imię"
        autoFocus
        {...register("firstName", { required: true })}
      />

      <label className="auth-form__label" htmlFor="lastName">Nazwisko*</label>
      <input
        className="auth-form__input"
        type="text"
        name="last-name"
        placeholder="Nazwisko"
        {...register("lastName", { required: true })}
      />

      <label className="auth-form__label" htmlFor="email">E-mail*</label>
      <input
        className="auth-form__input"
        type="text"
        name="email*"
        placeholder="E-mail"
        {...register("email", {
          required: true,
          pattern: {
            value: /^[\włŁ]+/,
            message: "Nieprawidłowy adres e-mail",
          },
        })}
      />

      {errors.password1?.type === "validation" && (
        <ValidationMessage message={errors.password1.message} />
      )}
      <label className="auth-form__label" htmlFor="password">Hasło*</label>
      <input
        className="auth-form__input"
        type="password"
        name="password"
        placeholder="Hasło"
        {...register("password", { required: true })}
      />

      <label className="auth-form__label" htmlFor="password1">Powtórz hasło*</label>
      <input
        className="auth-form__input"
        type="password"
        name="repead-password"
        placeholder="Powtórz hasło*"
        {...register("password1", {
          required: true,
          validate: (value) =>
            value === password.current || "Podane hasła są różne",
        })}
      />

      <input className="button" type="submit" value="Zarejestruj" />
    </form>
  );
}

export default SignIn;
