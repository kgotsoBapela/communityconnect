import React from 'react';
import { Form, Button } from 'react-bootstrap';


const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);  // Pass search term to the parent component
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="formSearch">
        <Form.Control
          type="text"
          placeholder="Search for bikes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>
      <br/>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
