import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { professions } from './data/professions'; // replace with the correct path

function HomePage() {
  return (
    <div>
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1>Welcome to the Job Skills Analyzer!</h1>
        <p>
          Select a profession to get started.
        </p>
      </Container>
      <Form>
        <Form.Group controlId="professionSelect">
          <Form.Label>Select Profession</Form.Label>
          <Form.Control as="select">
            {professions.map(profession => (
              <option key={profession} value={profession}>{profession}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Analyze
        </Button>
      </Form>
    </div>
  );
}

export default HomePage;
