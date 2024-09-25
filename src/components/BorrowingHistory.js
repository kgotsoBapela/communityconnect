import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import API_BASE_URL from '../config';

const BorrowingHistory = ({ userId }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/borrowing-history/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch history');
        }
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };

    fetchHistory();
  }, [userId]);

  return (
    <Container>
      <h2>Borrowing History</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Bike Model</th>
            <th>Borrow Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {history.length > 0 ? (
            history.map((item, index) => (
              <tr key={index}>
                <td>{item.model}</td>
                <td>{new Date(item.borrowDate).toLocaleDateString()}</td>
                <td>{item.returnDate ? new Date(item.returnDate).toLocaleDateString() : 'Not Returned'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No borrowing history available.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default BorrowingHistory;
