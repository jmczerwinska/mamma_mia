import React, { useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext/UserContext";
import ValidationMessage from "../ValidationMessage/ValidationMessage";

function ResetPassword() {
  const { token } = useParams();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { saveUser } = useContext(UserContext);

  const password = useRef({});
  password.current = watch("password", "");

  const resetPassword = async (data) => {
    try {
      const response = await fetch(`/api/v1/auth/resetpassword/${token}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const parseResponse = await response.json();

      if (!parseResponse.success) {
        throw Error(`${response.status} - ${parseResponse.message}`);
      }
      saveUser(parseResponse.data);
      toast.success("Hasło zostało zmienione");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <p>Wprowadź nowe hasło</p>
      <form onSubmit={handleSubmit(resetPassword)}>
        <label htmlFor="password">Hasło</label>
        <input
          type="password"
          name="password"
          {...register("password", {
            required: "Podaj hasło",
            minLength: {
              value: 8,
              message: "Hasło musi zawierać przynajmniej 8 znaków",
            },
          })}
        />
        <label htmlFor="password1">Powtórz hasło</label>
        <input
          type="password"
          name="password1"
          {...register("password1", {
            required: "powtórz hasło",
            validate: (value) =>
              value === password.current || "Podane hasła są różne",
          })}
        />
        {errors.password && (
          <ValidationMessage message={errors.password.message} />
        )}
        {errors.password1 && (
          <ValidationMessage message={errors.password1.message} />
        )}
        <input type="submit" value="Zmień hasło" />
      </form>
    </div>
  );
}

export default ResetPassword;
