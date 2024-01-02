import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import img3 from './Img/img3.png';



import ConfiguracionPadre from './ConfiguracionPadre';
import RegistrarPadre from './RegistrarPadre';
import EliminarPadre from './EliminarPadre';
import VerTodosPadres from './VerTodosPadres';

const Admin = () => {
  
  const [currentPage, setCurrentPage] = useState(null);

  const renderPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3} lg={2} style={{ backgroundColor: '#0b4c7b' }} className="sidebar">
          <Nav className="flex-column">
            <div className="d-flex align-items-center justify-content-center sidebar-header">
              <img src={img3} alt="Logo" className="img-fluid" />
            </div>
            <Button onClick={() => renderPage('Inicio')}>Inicio</Button>
            

           
            <Button onClick={() => renderPage('RegistrarPadre')}>Registrar un Padre</Button>
            <Button onClick={() => renderPage('ModificarPadre')}>Modificar un Padre</Button>
            <Button onClick={() => renderPage('EliminarPadre')}>Eliminar un Padre</Button>
            <Button onClick={() => renderPage('VerTodosPadres')}>Ver todos los Padres</Button>
            
          </Nav>
        </Col>
        <Col md={9} lg={10} className="main-content">
         
          {currentPage === 'Inicio' && <p>Contenido de Inicio</p>}
          {currentPage === 'RegistrarPadre' && <RegistrarPadre />}
          {currentPage === 'ModificarPadre' && <ConfiguracionPadre />}
          {currentPage === 'EliminarPadre' && <EliminarPadre />}
          {currentPage === 'VerTodosPadres' && <VerTodosPadres />}
         
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
