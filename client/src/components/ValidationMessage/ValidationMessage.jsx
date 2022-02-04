import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import './ValidationMessage.scss';

function ValidationMessage({ message }) {
  return (
    <p className="error">
      <FontAwesomeIcon icon={faExclamationTriangle} />
      {` ${message}`}
    </p>
  );
}

export default ValidationMessage;
