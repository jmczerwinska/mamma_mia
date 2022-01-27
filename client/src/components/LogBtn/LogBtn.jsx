import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal/Modal";
import AuthBox from "../AuthBox/AuthBox";

import "./LogBtn.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { toast } from "react-toastify";

function LogButton({ toggleMenu }) {
  const [showModal, setShowModal] = useState(false);
  const { user, resetUser } = useContext(UserContext);

  const showLoginForm = () => {
    setShowModal(true);
    toggleMenu();
  };

  const logOutUser = async () => {
    // console.log(user)
    try {
      await fetch("/api/v1/auth/logout/", {
        method: "GET",
        mode: "cors",
        credentials: "include",
      });

      resetUser();
      toast.success('Wylogowano pomyślnie!')
      console.log(user)
      
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <>
      <button className="log-btn" onClick={user ? logOutUser : showLoginForm}>
        <FontAwesomeIcon
          icon={user ? faSignOutAlt : faSignInAlt}
          className="log-btn__icon"
        />
      </button>
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          <AuthBox closeModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default LogButton;
