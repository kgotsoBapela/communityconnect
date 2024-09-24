import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

const Profile = ({ user }) => {
  if (!user) {
    return <div>Please log in to see your profile.</div>;
  }

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <h2>Profile</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <Button variant="danger" onClick={() => alert('Logout functionality goes here.')}>
            Logout
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
