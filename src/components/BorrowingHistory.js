import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';

const BorrowingHistory = () => {
  const [history, setHistory] = useState([]);

  // Fetch the user's borrowing history
  useEffect(() => {
    const fetchHistory = async () => {
      const response = await fetch('/api/borrowing-history');
      const data = await response.json();
      setHistory(data);
    };

    fetchHistory();
  }, []);

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
            history.map((item) => (
              <tr key={item.id}>
                <td>{item.bikeModel}</td>
                <td>{item.borrowDate}</td>
                <td>{item.returnDate || 'Not Returned'}</td>
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
