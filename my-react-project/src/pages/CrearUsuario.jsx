import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CrearUsuario = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    type: 'Parents',
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    numDocumentoAlumno: '',
    apellidoPaternoPadre: '',
    nombrePaternoPadre: '',
    numDocumentoPadre: '',
    numDocumentoMadre: '',
    direccion: '',
    telefono: '',
    localidad: '',
    ciudad: '',
    complete: false,
    validate: false,
    state: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Puedes manejar la lógica de envío o validación aquí
    console.log('Formulario enviado:', formData);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Form onSubmit={handleSubmit} className="p-4 border rounded">
        <h3 className="mb-4">Registro de Usuario</h3>

        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              placeholder="Nombre de usuario"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="email"
              placeholder="Correo electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              placeholder="Nombre del Alumno"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Apellido del Alumno"
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="DNI del alumno"
              name="numDocumentoAlumno"
              value={formData.numDocumentoAlumno}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              placeholder="Apellido Paterno"
              name="apellidoPaternoPadre"
              value={formData.apellidoPaternoPadre}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Nombre Paterno"
              name="nombrePaternoPadre"
              value={formData.nombrePaternoPadre}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="DNI del padre"
              name="numDocumentoPadre"
              value={formData.numDocumentoPadre}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              placeholder="DNI de la madre"
              name="numDocumentoMadre"
              value={formData.numDocumentoMadre}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              placeholder="Dirección"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              placeholder="Localidad"
              name="localidad"
              value={formData.localidad}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-3">
          Registrar
        </Button>
      </Form>
    </Container>
  );
};

export default CrearUsuario;
