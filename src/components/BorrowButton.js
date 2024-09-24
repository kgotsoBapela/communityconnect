import React from 'react';
import { Button } from 'react-bootstrap';

const BorrowButton = ({ bike }) => {
  const handleBorrow = async () => {
    // Placeholder for API call to borrow the bike
    try {
      const response = await fetch(`/api/borrow/${bike.id}`, { method: 'POST' });
      if (response.ok) {
        alert('Bike borrowed successfully!');
        // Update UI or reload available bikes
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
