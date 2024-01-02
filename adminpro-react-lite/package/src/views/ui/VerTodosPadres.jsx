import React, { useEffect, useState } from 'react';
import { Container, Card, CardBody, CardTitle, CardSubtitle, Table } from 'reactstrap';

const VerTodosPadres = () => {
  const [padres, setPadres] = useState([]);

  useEffect(() => {
   
    fetch('http://localhost:3000/user?type=Parents')
      .then((response) => response.json())
      .then((data) => setPadres(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <h2 className="mt-4 mb-4">Ver Todos los Padres</h2>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Listado de Padres</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Información detallada de los padres
          </CardSubtitle>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo Electrónico</th>
              </tr>
            </thead>
            <tbody>
              {padres.map((padre) => (
                <tr key={padre.id}>
                  <td>{padre.id}</td>
                  <td>{`${padre.nombre} ${padre.apellidoPaterno} ${padre.apellidoMaterno}`}</td>
                  <td>{padre.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Container>
  );
};

export default VerTodosPadres;
