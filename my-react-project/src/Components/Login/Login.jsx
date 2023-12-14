//import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function Login() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Form className="p-4 border rounded">
        <h3 className="text-center mb-4">Sign In</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>

        <p className="forgot-password text-right mt-3">
          Forgot <a href="#">password?</a>
        </p>
        <p className="forgot-password text-right mt-3">No está registrado?</p>
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
