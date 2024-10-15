import React from 'react';
import { Card, Button } from 'react-bootstrap';
import BorrowButton from './BorrowButton';
// import Login from './Login';

const BikeCard = ({ bike, userRole, handleShowLogin }) => {

  const handleBorrowClick = () => {
    if (!userRole) {
      // If user is not logged in, trigger the login modal
      handleShowLogin();
    } else {
      // If logged in, proceed with borrowing the bike
      console.log(`Borrowing bike with ID: ${bike.id}`);
      // Implement actual borrow logic here...
    }
  };

  return (
    
    <Card style={{ marginBottom: '20px' }}>
      <Card.Img variant="top" src={bike.bikepic} alt={bike.name} thumbnail="true" />
      <Card.Body>
        <Card.Title>Bike Model: {bike.model}</Card.Title>
        <Card.Text>
          <strong>Status:</strong> {bike.status === 'available' ? 'Available' : 'Not Available'}
          <br/>
          {/* <Card.Img variant="top" src={bike.bikepic} alt={bike.name} thumbnail /> */}
        </Card.Text>
        {/* <BorrowButton bike={bike} onClick={handleBorrowClick} /> */}

        <Button
            variant={bike.status === 'available' ? 'primary' : 'secondary'}
            disabled={bike.status !== 'available'}
            onClick={handleBorrowClick}
          >
            {bike.status === 'available' ? 'Borrow Bike' : 'Not Available'}
        </Button>

      </Card.Body>
    </Card>
  );
};

export default BikeCard;
