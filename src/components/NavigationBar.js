import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import cclogo from '../components/images/cclogo-nobg.png';
import '../App.css';

function NavigationBar() {

return (
    <Navbar bg="myColor" expand="lg" sticky="top" >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/"><img src={cclogo} width="50" height="50" alt=" CC Logo" /> <span className="brand-text">Community Connect</span></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>Available Bikes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/history">
              <Nav.Link>Borrowing History</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;