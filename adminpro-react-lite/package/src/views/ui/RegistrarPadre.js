import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

const RegistrarPadre = () => {
  const [formData, setFormData] = useState({
    idDoc: '',
    fotoDocumento: '',
    name: '',
    lastName: '',
    educationLevel: '',
    profession: '',
    address: '',
    jobAddress: '',
    telephone: '',
    jobTelephone: '',
    contactCellphone: '',
    email: '',
  });

  const [validationError, setValidationError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    axios.post('http://localhost:3000/parents', formData)
      .then(response => {
        console.log(response.data);
        alert('Padre registrado con éxito');
      })
      .catch(error => {
        console.error('Error al registrar el padre:', error.response);
        alert('Hubo un error al registrar el padre');
        if (error.response && error.response.data && error.response.data.error) {
          setValidationError(error.response.data.error);
        }
      });
  };

  return (
    <Container>
      <h1 className="mt-4 mb-4">Registrar Padre</h1>
      <Form>
        {validationError && <Alert variant="danger">{validationError}</Alert>}
        <Row>
          <Col md={6}>
            <Form.Group controlId="idDoc">
              <Form.Label>ID Documento:</Form.Label>
              <Form.Control
                type="text"
                name="idDoc"
                value={formData.idDoc}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="fotoDocumento">
              <Form.Label>Foto Documento (URL):</Form.Label>
              <Form.Control
                type="text"
                name="fotoDocumento"
                value={formData.fotoDocumento}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Nombres:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Apellido Paterno:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="educationLevel">
              <Form.Label>Nivel de Educación:</Form.Label>
              <Form.Control
                type="text"
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="profession">
              <Form.Label>Profesión:</Form.Label>
              <Form.Control
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="address">
              <Form.Label>Dirección:</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="jobAddress">
              <Form.Label>Dirección de Trabajo:</Form.Label>
              <Form.Control
                type="text"
                name="jobAddress"
                value={formData.jobAddress}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="telephone">
              <Form.Label>Teléfono Casa:</Form.Label>
              <Form.Control
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="jobTelephone">
              <Form.Label>Teléfono Trabajo:</Form.Label>
              <Form.Control
                type="text"
                name="jobTelephone"
                value={formData.jobTelephone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="contactCellphone">
              <Form.Label>Teléfono Celular de Contacto:</Form.Label>
              <Form.Control
                type="text"
                name="contactCellphone"
                value={formData.contactCellphone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" onClick={handleSubmit}>
          Registrar Padre
        </Button>
      </Form>
    </Container>
  );
};

export default RegistrarPadre;
