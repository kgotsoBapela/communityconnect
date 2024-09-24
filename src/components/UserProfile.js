import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      // Placeholder API call to fetch user profile details
      const response = await fetch('/api/user-profile');
      const data = await response.json();
      setUser(data);
    };

    fetchUserProfile();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                <strong>Email:</strong> {user.email}
              </Card.Text>
              <Card.Text>
                <strong>Member since:</strong> {user.memberSince}
              </Card.Text>
              <Link to="/history">
                <Button variant="primary">View Borrowing History</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
