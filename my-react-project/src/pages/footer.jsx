import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="text-center text-md-left">
          <Col md={6}>
            <h5>Información de Contacto</h5>
            <p>Dirección:  Dirección, Ciudad, País</p>
            <p>Email: info@dominio.com</p>
            <p>Teléfono: +123 456 789</p>
          </Col>
          <Col md={6}>
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="/">Inicio</a></li>
              <li><a href="/acerca-de">Acerca de Nosotros</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
