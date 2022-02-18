import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ValidationMessage from "../ValidationMessage/ValidationMessage";

function ChangePassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const newPassword = useRef({});
  newPassword.current = watch("newPassword", "");

  const updatePassword = async (data) => {
    try {
      const response = await fetch("/api/v1/auth/updatepassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "apliction-json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const parseResponse = response.json();

      if (!parseResponse.success) {
        throw Error(`${response.status} - ${parseResponse.message}`);
      }

      toast.success("Hasło zostało zmienione");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Zmiana hasła</h3>
      <form onSubmit={handleSubmit(updatePassword)}>
        <label>Hasło</label>
        <input
          type="password"
          {...register("currentPassword", { required: "Podaj aktualne hasło" })}
        />
        {errors.currentPassword && (
          <ValidationMessage message={errors.currentPassword.message} />
        )}

        <label>Nowe hasło</label>
        <input
          type="password"
          name="newPassword"
          {...register("newPassword", {
            required: "Podaj nowe hasło",
            minLength: {
              value: 8,
              message: "Hasło musi zawierać przynajmniej 8 znaków",
            },
          })}
          />
        {errors.newPassword && (
          <ValidationMessage message={errors.newPassword.message} />
        )}

        <label>Powtórz nowe hasło</label>
        <input
          type="password"
          name="newPassword1"
          {...register("newPassword1", {
            required: "Powtórz nowe hasło",
            validate: (value) =>
            value === newPassword.current || "Podane hasła są różne",
          })}
          />
          {errors.newPassword1 && (
            <ValidationMessage message={errors.newPassword1.message} />
            )}

        <input type="submit" value="Zmień hasło" />
      </form>
    </div>
  );
}

export default ChangePassword;
