import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BikeCard from './BikeCard';
import SearchBar from './SearchBar.js';
import API_BASE_URL from '../config';

const BikeList = ({ userRole, handleShowLogin }) => {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  // const history = useHistory();

  // Fetch available bikes from the backend API
  useEffect(() => {
    const fetchBikes = async () => {
      
      try {
        const response = await fetch(`${API_BASE_URL}/bikes`); // Fetch from backend
        if (!response.ok) {
          throw new Error('Failed to fetch bikes');
        }
        const data = await response.json();
        setBikes(data);
        setFilteredBikes(data);
      } catch (error) {
        console.error('Error fetching bikes:', error);
      }
    };

    fetchBikes();
  }, []);

  const handleSearch = (searchTerm) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filtered = bikes.filter(
      (bike) => 
        bike.model.toLowerCase().includes(lowerCaseTerm) ||
        bike.status.toLowerCase().includes(lowerCaseTerm)
    );
    setFilteredBikes(filtered);
  };


  return (
    <Container>
      <Row>
        <h2>Available Bikes</h2>
      </Row>
      <Row>
        <SearchBar handleSearch={handleSearch} />
      </Row>
      <Row>
        {filteredBikes.length > 0 ? (
          filteredBikes.map((bike) => (
            <Col key={bike.id} md={4}>
              <BikeCard bike={bike} 
                      userRole={userRole}       // Pass userRole to BikeCard
                      handleShowLogin={handleShowLogin}  // Pass handleShowLogin to BikeCard  
              />     
            </Col>
          ))
        ) : (
          <p>No bikes available matching your search.</p>
        )}
      </Row>
    </Container>
  );
};

export default BikeList;


