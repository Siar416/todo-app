import "./FormModal.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Modal } from "react-bootstrap";

import { useState } from "react";

const FormModal = ({ isOpen, setUpdated }) => {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, summary } = formData;

    let response = await fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, summary }),
    });
    const data = await response.json();

    if (response.ok) {
      toast.success("Task added");
      setUpdated(true);
      console.log("task was added", data);
    } else {
      setUpdated(false);
      console.log("task was not added");
    }

    setFormData({
      title: "",
      summary: "",
    });
    isOpen(false);
  };

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
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Task Title"
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Summary</Form.Label>
              <Form.Control
                type="text"
                name="summary"
                placeholder="Task Summary"
                value={formData.summary}
                onChange={handleChange}
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
