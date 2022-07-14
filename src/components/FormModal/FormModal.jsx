import "./FormModal.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Modal } from "react-bootstrap";

const FormModal = ({ isOpen }) => {
  return (
    <Modal
      show={isOpen}
      onHide={isOpen}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>{/* Need to place a form in here */}</Modal.Body>
    </Modal>
  );
};

export default FormModal;
