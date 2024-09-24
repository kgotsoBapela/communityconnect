// import React, { useEffect, useState } from 'react';

// const bikeData = [
//   { id: 1, name: 'Erdgeschoss Pang! Pink', available: true },
//   { id: 2, name: 'Erdgeschoss Yeah! Yellow', available: false },
//   { id: 3, name: 'Kettensäge | Team', available: true },
//   { id: 4, name: 'Kettensäge | Give em Hell Caramel', available: true },
//   { id: 5, name: 'Kettensäge | Yolo Barolo', available: true },
// ];



import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BikeCard from './BikeCard';
import SearchBar from './SearchBar';

const BikeList = () => {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);

  // Fetch available bikes from the API
  useEffect(() => {
    const fetchBikes = async () => {
      const response = await fetch('/api/bikes');
      const data = await response.json();
      setBikes(data);
      setFilteredBikes(data);  // Set both bikes and filteredBikes initially
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
              <BikeCard bike={bike} />
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


