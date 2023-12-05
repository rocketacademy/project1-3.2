import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalAlert = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"> 
        Alert!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.text}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAlert;
