import "./FormModal.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Modal } from "react-bootstrap";

import { useState } from "react";

const FormModal = ({ isOpen, title, summary, setTitle, setSummary }) => {
  //   const [title, setTitle] = useState("");
  //   const [summary, setSummary] = useState("");

  return (
    <Modal
      show={isOpen}
      onHide={isOpen}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal__wrapper">
        <Modal.Title className="modal__title">New Task</Modal.Title>
        <Modal.Body className="modal__body">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Summary</Form.Label>
              <Form.Control
                type="password"
                placeholder="Task Summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create New Task
            </Button>
          </Form>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default FormModal;
