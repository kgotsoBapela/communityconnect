import React from 'react';
import { Card } from 'react-bootstrap';
import BorrowButton from './BorrowButton';

const BikeCard = ({ bike }) => {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <Card.Img variant="top" src={bike.bikepic} alt={bike.name} thumbnail />
      <Card.Body>
        <Card.Title>Bike Model: {bike.model}</Card.Title>
        <Card.Text>
          <strong>Status:</strong> {bike.status === 'available' ? 'Available' : 'Not Available'}
          <br/>
          {/* <Card.Img variant="top" src={bike.bikepic} alt={bike.name} thumbnail /> */}
        </Card.Text>
        <BorrowButton bike={bike} />
      </Card.Body>
    </Card>
  );
};

export default BikeCard;
