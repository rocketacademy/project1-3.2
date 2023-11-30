import React from "react";
import "./Modal.css"

const Modal = ({ showModal, children, closeModal }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
