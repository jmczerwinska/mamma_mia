import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

function Modal({ children }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    }
  }, []);

  return ReactDOM.createPortal(
    <div className="modal-wrapper modal-wrapper--active">{children}</div>,
    document.getElementById("modal")
  );
}

export default Modal;
