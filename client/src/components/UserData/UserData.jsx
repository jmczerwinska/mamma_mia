import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext/UserContext";

function UserData() {
  const { user } = useContext(UserContext);
  const { firstName, lastName, email, phone } = user;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName,
      lastName,
      email,
      phone,
    },
  });
  const [isEdited, setIsEdited] = useState(false);

  const updateUserData = async (data) => {
    try {
      const response = await fetch("/api/v1/auth/updatedetails", {
        method: "PUT",
        headers: {
          "Content-Type": "appliction/json",
          Accept: "application/json",
        },
        credential: "include",
      });

      const parseResponse = await response.json();

      if (!parseResponse.success) {
        throw Error(`${response.status} - ${parseResponse.message}`);
      }

      toast.success("Dane zostały zaktualizowane");
      setIsEdited(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h3>Dane użytkownika</h3>
      <button onClick={() => setIsEdited(true)}>Edytuj</button>
      <form onSubmit={handleSubmit(updateUserData)}>
        <input
          type="text"
          value={user.name}
          disabled={!isEdited}
          {...register("firstName", {})}
        />
        <input
          type="text"
          value={user.lastName}
          disabled={!isEdited}
          {...register("lastName", {})}
        />
        <input
          type="text"
          {...register("email", { value: user.email, disabled: !isEdited })}
        />
        <input
          type="text"
          value={user.phone}
          disabled={!isEdited}
          {...register("phone", {})}
        />
        {isEdited && (
          <input type="submit" value="Zapisz zmiany" disabled={!isEdited} />
        )}
      </form>
    </div>
  );
}

export default UserData;
