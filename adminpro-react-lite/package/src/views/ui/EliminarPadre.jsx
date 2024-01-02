import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

const EliminarPadre = () => {
  const [formData, setFormData] = useState({
    searchName: '', 
    idDoc: '',
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

  const handleSearch = () => {
    axios.get(`http://localhost:3000/parents?name=${formData.searchName}`)
      .then(response => {
        if (response.data && response.data.length > 0) {
          const foundPadre = response.data[0];
          setFormData(foundPadre);
        } else {
          setValidationError('No se encontró ningún padre con ese nombre.');
        }
      })
      .catch(error => {
        console.error('Error al buscar el padre:', error);
        setValidationError('Hubo un error al buscar el padre.');
      });
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/parents/${formData.id}`)
      .then(response => {
        console.log(response.data);
        alert('Padre eliminado con éxito');
        
        setFormData({
          searchName: '',
          idDoc: '',
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
      })
      .catch(error => {
        console.error('Error al eliminar el padre:', error.response);
        alert('Hubo un error al eliminar el padre');
        if (error.response && error.response.data && error.response.data.error) {
          setValidationError(error.response.data.error);
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container>
      <h1 className="mt-4 mb-4">Eliminar Padre</h1>
      <Form>
        {validationError && <Alert variant="danger">{validationError}</Alert>}
        <Row>
          <Col md={6}>
            <Form.Group controlId="searchName">
              <Form.Label>Buscar por Nombre:</Form.Label>
              <Form.Control
                type="text"
                name="searchName"
                value={formData.searchName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSearch}>
              Buscar Padre
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
          
            <Form.Group controlId="idDoc">
              <Form.Label>ID Documento:</Form.Label>
              <Form.Control
                type="text"
                name="idDoc"
                value={formData.idDoc}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Nombres:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Apellido Paterno:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                readOnly
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="danger" onClick={handleDelete}>
          Eliminar Padre
        </Button>
      </Form>
    </Container>
  );
};

export default EliminarPadre;
