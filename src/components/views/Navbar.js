import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>waiter.app</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
};

export default NavBar;