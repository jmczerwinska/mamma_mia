import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
  return( <div className="modal-wrapper">{children}hi</div>);
}

ReactDOM.createPortal(<Modal />, document.getElementById("modal"));

export default Modal;
