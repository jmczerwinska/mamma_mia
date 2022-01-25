import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal/Modal";
import AuthBox from "../AuthBox/AuthBox";

import "./LogBtn.scss";

function LogButton({ toggleMenu }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="log-btn"
        onClick={() => {
          setShowModal(true);
          toggleMenu();
        }}
      >
        <FontAwesomeIcon
          icon={faSignInAlt}
          className="log-btn__icon"
        ></FontAwesomeIcon>
      </button>
      {showModal && (
        <Modal>
          <AuthBox closeModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default LogButton;
