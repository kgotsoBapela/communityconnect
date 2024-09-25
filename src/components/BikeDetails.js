import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import API_BASE_URL from '../config';  // Use your API base URL

const BikeDetails = () => {
  const { id } = useParams();  // Get bike ID from URL
  const [bike, setBike] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBikeDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/bikes/${id}`);
        if (!response.ok) throw new Error('Error fetching bike details');
        const data = await response.json();
        setBike(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bike details:', error);
        setLoading(false);
      }
    };

    fetchBikeDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!bike) return <p>Bike not found.</p>;

  return (
    <div className="bike-details">
      <Card>
        <Card.Header>{bike.model}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Status:</strong> {bike.status}</ListGroup.Item>
          <ListGroup.Item><strong>Borrow Date:</strong> {bike.borrowDate ? new Date(bike.borrowDate).toLocaleDateString() : 'N/A'}</ListGroup.Item>
          <ListGroup.Item><strong>Return Date:</strong> {bike.returnDate ? new Date(bike.returnDate).toLocaleDateString() : 'N/A'}</ListGroup.Item>
          <ListGroup.Item><strong>Location:</strong> {bike.location}</ListGroup.Item>
          <ListGroup.Item><strong>Condition:</strong> {bike.condition}</ListGroup.Item>
        </ListGroup>
      </Card>

      {/* Additional Details: Borrowing History */}
      <h3>Borrowing History</h3>
      <ul>
        {bike.borrowingHistory && bike.borrowingHistory.length > 0 ? (
          bike.borrowingHistory.map((history, index) => (
            <li key={index}>
              Borrowed by: {history.borrowerName} on {new Date(history.borrowDate).toLocaleDateString()} - 
              Returned on {history.returnDate ? new Date(history.returnDate).toLocaleDateString() : 'Not returned'}
            </li>
          ))
        ) : (
          <p>No borrowing history available.</p>
        )}
      </ul>
    </div>
  );
};

export default BikeDetails;
