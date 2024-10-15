import React from 'react';
import { Button } from 'react-bootstrap';
import API_BASE_URL from '../config';

const BorrowButton = ({ bike, userId }) => {
    const handleBorrow = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/borrow/${bike.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),  // Send userId with the request
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        // Optionally refresh the bike list
      } else {
        alert('Error borrowing the bike.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Button
      variant={bike.status === 'available' ? 'primary' : 'secondary'}
      disabled={bike.status !== 'available'}
      onClick={handleBorrow}
    >
      {bike.status === 'available' ? 'Borrow Bike' : 'Not Available'}
    </Button>
  );
};

export default BorrowButton;

