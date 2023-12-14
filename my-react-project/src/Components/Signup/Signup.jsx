//import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function SignUp() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Form className="p-4 border rounded">
        <h3 className="text-center mb-4">Sign Up</h3>

        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="First name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Last name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </div>

        <p className="forgot-password text-right mt-3">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </Form>
    </Container>
  );
}

export default SignUp;
