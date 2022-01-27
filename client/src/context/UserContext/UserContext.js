import React, { createContext, useReducer } from "react";
import UserReducer from "./UserReucer";

const logedUser = null;

export const UserContext = createContext(logedUser);

export function UserContextProvider({ children }) {
  const [user, dispatch] = useReducer(UserReducer, logedUser);

  const saveUser = (user) => {
    dispatch({
      type: "SAVE_USER",
      payload: user,
    });
  };

  const updateUser = (data) =>
    dispatch({
      type: "UPDATE_USER",
      payload: data,
    });

  const resetUser = () =>
    dispatch({
      type: "RESET_USER",
    });

  return (
    <UserContext.Provider value={{ user, saveUser, updateUser, resetUser }}>
      {children}
    </UserContext.Provider>
  );
}
