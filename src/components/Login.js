import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import API_BASE_URL from '../config';

const Login = ({ show, handleClose, handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await fetch('http://localhost:5000/api/login', {
      // `${API_BASE_URL}/bikes`
      const response = await fetch(`${API_BASE_URL}/user`);

      if (response.ok) {
        const data = await response.json();
        handleLogin(data.userID, data.role);  // Pass userID and role to App.js
        handleClose();  // Close modal on successful login
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      setErrorMessage(error.message); // Display error message
    }
    setUsername('');
    setPassword('');
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login to CCxStandert</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4">
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
