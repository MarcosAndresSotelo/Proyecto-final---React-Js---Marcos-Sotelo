import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./contacto.scss"

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <Container className="my-5">
      <h1 className="text-center">Contacto</h1>
      <hr />
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Form className="text-center" onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                className="form-control"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Mensaje:</Form.Label>
              <Form.Control
                className="form-control"
                as="textarea"
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button className="btn mt-2" variant="secondary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default Contacto;