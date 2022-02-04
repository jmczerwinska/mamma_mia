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

      {errors.firstName && errors.firstName.type !== "required" && (
        <ValidationMessage message={errors.firstName.message} />
      )}
      <label className="auth-form__label" htmlFor="firstName">
        Imię*
      </label>
      <input
        className={inputClass(errors.firstName)}
        type="text"
        name="first-name"
        placeholder="Imię"
        autoFocus
        {...register("firstName", {
          required: true,
          pattern: {
            value: /^[A-ząęóćĆłŁńŃśŚżŻźŹ]{2,}$/,
            message: "Podane imię zawiera niedozwolone znaki",
          },
        })}
      />

      {errors.lastName && errors.lastName.type !== "required" && (
        <ValidationMessage message={errors.lastName.message} />
      )}
      <label className="auth-form__label" htmlFor="lastName">
        Nazwisko*
      </label>
      <input
        className={inputClass(errors.lastName)}
        type="text"
        name="last-name"
        placeholder="Nazwisko"
        {...register("lastName", {
          required: true,
          pattern: {
            value: /^[A-ząęóćĆłŁńŃśŚżŻźŹ\-']{2,}$/,
            message: "Podane nazwisko zawiera niedozwolone znaki",
          },
        })}
      />

      {errors.email && errors.email.type !== "required" && (
        <ValidationMessage message={errors.email.message} />
      )}
      <label className="auth-form__label" htmlFor="email">
        E-mail*
      </label>
      <input
        className={inputClass(errors.email)}
        type="text"
        name="email*"
        placeholder="E-mail"
        {...register("email", {
          required: true,
          pattern: {
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            message: "Nieprawidłowy adres e-mail",
          },
        })}
      />

      {errors.password && errors.password.type !== "required" && (
        <ValidationMessage message={errors.password.message} />
      )}
      {errors.password1?.type === "validate" && (
        <ValidationMessage message={errors.password1.message} />
      )}
      <label className="auth-form__label" htmlFor="password">
        Hasło*
      </label>
      <input
        className={inputClass(errors.password || errors.password1)}
        type="password"
        name="password"
        placeholder="Hasło"
        {...register("password", {
          required: true,
          minLength: {
            value: 8,
            message: "Hasło musi zawierać przynajmniej 8 znaków",
          },
        })}
      />

      <label className="auth-form__label" htmlFor="password1">
        Powtórz hasło*
      </label>
      <input
        className={inputClass(errors.password1)}
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
