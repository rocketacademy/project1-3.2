import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Navbar.css'

function NavBar() {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto justify-content-center"
              style={{ width: "100%" }}
            >
              <Navbar.Brand as={Link} to="/">
                QuoteX
              </Navbar.Brand>
              <Nav.Link as={NavLink} to="/start">
                Get Started
              </Nav.Link>
              <Nav.Link as={NavLink} to="/quote">
                Quote
              </Nav.Link>
              <Nav.Link as={NavLink} to="/create">
                Create
              </Nav.Link>
              <Nav.Link as={NavLink} to="/saved">
                Saved
              </Nav.Link>
              <Nav.Link as={NavLink} to="/change-user">
                Change User
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar