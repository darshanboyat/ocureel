import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./style.css"

function App() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="light" expand="md" fixed="top" className="navbar-custom hide-border">
      <Container>
        <Navbar.Toggle onClick={handleToggle} aria-controls="responsive-navbar-nav" className='nav-hamburger' />
        <Navbar.Collapse id="responsive-navbar-nav" className={expanded ? 'show' : ''}>
          <Nav className="me-auto w-100 d-flex justify-content-center link-container">
            <Link to="/"><Nav.Link href="/" className='navLink'>Home</Nav.Link></Link>
            <Link to="/get-inspired"><Nav.Link href="/get-inspired" className='navLink'>Get Inspired</Nav.Link></Link>
            <Link to="/play"><Nav.Link href="/play" className='navLink'>Play</Nav.Link></Link>
            <Link to="/leaderboard"><Nav.Link href="/leaderboard" className='navLink'>Leaderboard</Nav.Link></Link>
            <Link to="/about"><Nav.Link href="/about" className='navLink'>About</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
