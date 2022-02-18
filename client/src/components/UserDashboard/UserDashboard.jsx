import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import UserData from "../UserData/UserData";

function UserDashboard() {
  const { user } = useContext(UserContext);
  return (
    <div className="container">
      {user ? (
        <>
          <h1>Witaj!</h1>
          <ul>
            <li>
              <a>Dane</a>
            </li>
            <li>
              <a>Zmień hasło</a>
            </li>
            <li>
              <a>Recenzje</a>
            </li>
            <li>
              <a>Historia zamówień</a>
            </li>
          </ul>
          <UserData />
        </>
      ) : (
        <div>Zaloguj się, aby kontynuować</div>
      )}
    </div>
  );
}

export default UserDashboard;
