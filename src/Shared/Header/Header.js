import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <>
           <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About Me</Nav.Link>
      <Nav.Link href="#pricing">Contact Me</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </>
    );
};

export default Header;